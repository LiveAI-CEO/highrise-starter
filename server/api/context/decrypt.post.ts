import type { GhlContext } from '~/types/ghl'
import { assertEncryptedPayload, requireServerSecret } from '~/server/utils/security'

export default defineEventHandler(async (event): Promise<GhlContext> => {
  const config = useRuntimeConfig(event)
  const body = await readBody<{ encryptedData?: unknown }>(event)
  assertEncryptedPayload(body.encryptedData)
  const sharedSecret = requireServerSecret(config.ghlSharedSecret, 'GHL_SHARED_SECRET')
  void sharedSecret
  throw createError({
    statusCode: 501,
    statusMessage: 'Wire the official HighLevel context decryption routine before production use.'
  })
})
