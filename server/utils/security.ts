import { createError } from 'h3'

export function requireServerSecret(value: string | undefined, name: string): string {
  if (!value) throw createError({ statusCode: 503, statusMessage: `${name} is not configured.` })
  return value
}

export function assertEncryptedPayload(value: unknown): asserts value is string {
  if (typeof value !== 'string' || value.length < 20 || value.length > 20000) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid encrypted context payload.' })
  }
}
