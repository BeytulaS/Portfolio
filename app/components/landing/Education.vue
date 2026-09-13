<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div>
    <SectionHeading
      path="education"
      :title="page.education.title"
    />
    <ul class="mt-6 space-y-4">
      <li
        v-for="item in page.education.items"
        :key="item.degree"
        class="flex flex-col gap-0.5"
      >
        <span class="font-mono text-xs text-muted">{{ item.date }}</span>
        <span class="text-sm font-medium text-highlighted">{{ item.degree }}</span>
        <span class="text-sm text-muted">{{ item.school }}</span>
      </li>
    </ul>
  </div>
</template>
