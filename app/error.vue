<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useSeoMeta({
  title: 'Page not found',
  description: 'This page could not be found.'
})
</script>

<template>
  <UApp>
    <div class="relative min-h-screen">
      <div class="pointer-events-none fixed inset-0 z-0 bg-bloom" />
      <div class="pointer-events-none fixed inset-0 z-0 bg-grid opacity-60 dark:opacity-50" />

      <UContainer class="relative z-10 border-default pt-10 sm:border-x">
        <AppHeader :links="navLinks" />
        <UMain class="py-24">
          <UPage>
            <UError :error="error" />
          </UPage>
        </UMain>
        <AppFooter />
      </UContainer>
    </div>
  </UApp>
</template>
