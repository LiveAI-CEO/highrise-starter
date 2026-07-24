import { describe, expect, it } from 'vitest'
import { assertEncryptedPayload } from '../../server/utils/security'

describe('assertEncryptedPayload', () => {
  it('accepts a bounded encrypted payload', () => {
    expect(() => assertEncryptedPayload('x'.repeat(40))).not.toThrow()
  })
  it('rejects short input', () => {
    expect(() => assertEncryptedPayload('short')).toThrow()
  })
})
