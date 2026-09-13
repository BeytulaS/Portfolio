<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section class="border-t border-default py-16 sm:py-24">
    <SectionHeading
      path="stack"
      :title="page.skills.title"
      :description="page.skills.description"
    />

    <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Motion
        v-for="(group, index) in page.skills.groups"
        :key="group.title"
        :initial="{ opacity: 0, transform: 'translateY(12px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.05 * index }"
        :in-view-options="{ once: true }"
        class="rounded-xl border border-default bg-elevated/40 p-5"
      >
        <div class="flex items-center gap-2">
          <UIcon
            :name="group.icon"
            class="size-4 text-primary"
          />
          <h3 class="font-mono text-[11px] font-medium tracking-wider text-highlighted uppercase">
            {{ group.title }}
          </h3>
        </div>
        <ul class="mt-4 flex flex-wrap gap-1.5">
          <li
            v-for="item in group.items"
            :key="item"
            class="rounded-md border border-default bg-default px-2 py-1 text-xs text-toned"
          >
            {{ item }}
          </li>
        </ul>
      </Motion>
    </div>
  </section>
</template>
