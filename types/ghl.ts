export interface GhlEncryptedContextResponse {
  message: 'REQUEST_USER_DATA_RESPONSE'
  payload: string
}

export interface GhlContext {
  userId: string
  companyId?: string
  locationId?: string
  activeLocation?: string
  role?: string
  type?: string
}
