<script setup lang="ts">
import { HLButton, HLText } from '@platform-ui/highrise'
useHead({ title: 'Starter' })
const config = useRuntimeConfig()
const { status, error, requestContext } = useGhlContext()
async function initialize() { try { await requestContext() } catch { /* state exposed by composable */ } }
</script>

<template>
  <main class="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-12">
    <section class="w-full space-y-6 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <div class="space-y-2">
        <HLText variant="heading-lg">{{ config.public.appName }}</HLText>
        <HLText variant="body-md" class="text-gray-600">Production-oriented Nuxt SSR foundation for HighLevel Custom Pages and standalone HighRise apps.</HLText>
      </div>
      <div class="flex flex-wrap gap-3">
        <HLButton id="initialize-ghl-context" :loading="status === 'loading'" @click="initialize">Initialize HighLevel context</HLButton>
        <NuxtLink to="/system-status" class="inline-flex items-center rounded-md border px-4 py-2">System status</NuxtLink>
      </div>
      <p v-if="status === 'ready'" role="status" class="text-sm">Context initialized.</p>
      <p v-if="error" role="alert" class="text-sm text-red-700">{{ error }}</p>
    </section>
  </main>
</template>
