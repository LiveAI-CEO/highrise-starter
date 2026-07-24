<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps<{ error: NuxtError }>()
</script>
<template>
  <main class="mx-auto max-w-2xl px-6 py-16">
    <h1 class="text-2xl font-semibold">Application error</h1>
    <p class="mt-3">{{ error.statusMessage || 'An unexpected error occurred.' }}</p>
    <button class="mt-6 rounded-md border px-4 py-2" @click="clearError({ redirect: '/' })">Return home</button>
  </main>
</template>
