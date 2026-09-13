<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div>
    <SectionHeading
      path="about"
      :title="page.about.title"
    />
    <div class="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
      <MDC :value="page.about.description" />
    </div>

    <dl
      v-if="page.about.stats"
      class="mt-8 grid grid-cols-2 gap-6 border-t border-default pt-8"
    >
      <div
        v-for="stat in page.about.stats"
        :key="stat.label"
      >
        <dt class="font-heading text-3xl font-medium text-highlighted">
          {{ stat.value }}
        </dt>
        <dd class="mt-1 text-xs text-muted">
          {{ stat.label }}
        </dd>
      </div>
    </dl>
  </div>
</template>
