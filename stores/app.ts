export const useAppStore = defineStore('app', () => {
  const locationId = ref<string | null>(null)
  const initialized = ref(false)
  function initialize(payload: { locationId?: string }) {
    locationId.value = payload.locationId || null
    initialized.value = true
  }
  return { locationId, initialized, initialize }
})
