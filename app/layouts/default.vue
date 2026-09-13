<template>
  <div class="relative">
    <div class="pointer-events-none fixed inset-0 z-0 bg-bloom" />
    <div class="pointer-events-none fixed inset-0 z-0 bg-grid opacity-60 dark:opacity-50" />

    <UContainer class="relative z-10 border-default pt-10 sm:border-x">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
