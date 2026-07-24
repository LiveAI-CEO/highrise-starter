<script setup lang="ts">
import { HLText } from '@platform-ui/highrise'
const { data, error } = await useFetch('/api/health')
useHead({ title: 'System Status' })
</script>
<template>
  <main class="mx-auto max-w-3xl space-y-6 px-6 py-12">
    <HLText variant="heading-lg">System status</HLText>
    <pre v-if="data" class="overflow-auto rounded-lg bg-gray-950 p-5 text-white">{{ data }}</pre>
    <p v-else role="alert">{{ error?.message || 'Health service unavailable.' }}</p>
  </main>
</template>
