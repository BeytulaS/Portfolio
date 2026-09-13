<script setup lang="ts">
defineProps<{
  path: string
  title: string
  description?: string
}>()
</script>

<template>
  <div>
    <span class="eyebrow flex items-center gap-1.5">
      <span class="text-primary/70">~/</span>{{ path }}
    </span>
    <h2 class="mt-3 font-heading text-2xl font-medium tracking-tight text-highlighted sm:text-3xl">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mt-3 max-w-xl text-sm text-muted sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>
