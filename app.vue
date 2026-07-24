<script setup lang="ts">
import { HLContentWrap } from '@platform-ui/highrise'
import '@platform-ui/highrise/style.css'
const config = useRuntimeConfig()
</script>

<template>
  <HLContentWrap :namespace="config.public.appNamespace" full-screen>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </HLContentWrap>
</template>
