import type { GhlContext, GhlEncryptedContextResponse } from '~/types/ghl'

export function useGhlContext() {
  const config = useRuntimeConfig()
  const context = useState<GhlContext | null>('ghl-context', () => null)
  const status = useState<'idle' | 'loading' | 'ready' | 'error'>('ghl-context-status', () => 'idle')
  const error = useState<string | null>('ghl-context-error', () => null)

  async function requestContext(timeoutMs = 8000): Promise<GhlContext> {
    if (!import.meta.client) throw new Error('GHL context is available only in the browser.')
    if (window.parent === window) throw new Error('Application is not embedded in HighLevel.')
    status.value = 'loading'
    error.value = null
    const allowedOrigins = new Set(String(config.public.allowedParentOrigins).split(',').map(value => value.trim()).filter(Boolean))

    try {
      const encryptedData = await new Promise<string>((resolve, reject) => {
        const timer = window.setTimeout(() => { cleanup(); reject(new Error('Timed out waiting for HighLevel context.')) }, timeoutMs)
        const cleanup = () => { window.clearTimeout(timer); window.removeEventListener('message', onMessage) }
        const onMessage = (event: MessageEvent<GhlEncryptedContextResponse>) => {
          if (!allowedOrigins.has(event.origin) || event.source !== window.parent) return
          if (event.data?.message !== 'REQUEST_USER_DATA_RESPONSE' || typeof event.data.payload !== 'string') return
          cleanup(); resolve(event.data.payload)
        }
        window.addEventListener('message', onMessage)
        window.parent.postMessage({ message: 'REQUEST_USER_DATA' }, '*')
      })
      const result = await $fetch<GhlContext>('/api/context/decrypt', { method: 'POST', body: { encryptedData } })
      context.value = result
      status.value = 'ready'
      return result
    } catch (caught) {
      error.value = caught instanceof Error ? caught.message : 'Unable to initialize HighLevel context.'
      status.value = 'error'
      throw caught
    }
  }
  return { context, status, error, requestContext }
}
