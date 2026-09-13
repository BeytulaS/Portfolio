<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <div>
    <SectionHeading
      path="experience"
      :title="page.experience.title"
      :description="page.experience.description"
    />

    <ol class="mt-8 border-l border-default">
      <li
        v-for="(job, index) in page.experience.items"
        :key="job.company.name"
        class="relative pb-10 pl-6 last:pb-0"
      >
        <span class="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-primary ring-4 ring-[var(--ui-bg)]" />

        <Motion
          :initial="{ opacity: 0, transform: 'translateY(16px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.1 + 0.12 * index }"
          :in-view-options="{ once: true }"
        >
          <div class="font-mono text-xs text-muted">
            {{ job.date }}
          </div>
          <h3 class="mt-1 font-heading text-lg font-medium text-highlighted">
            {{ job.position }}
          </h3>
          <ULink
            v-if="job.company.url"
            :to="job.company.url"
            target="_blank"
            class="mt-0.5 inline-flex items-center gap-1.5 text-sm text-toned transition-colors hover:text-highlighted"
          >
            <UIcon
              :name="job.company.logo"
              class="size-3.5 shrink-0"
              :style="{ color: job.company.color }"
            />
            {{ job.company.name }}
          </ULink>
          <span
            v-else
            class="mt-0.5 inline-flex items-center gap-1.5 text-sm text-toned"
          >
            <UIcon
              :name="job.company.logo"
              class="size-3.5 shrink-0"
              :style="{ color: job.company.color }"
            />
            {{ job.company.name }}
          </span>

          <p
            v-if="job.summary"
            class="mt-3 text-sm text-muted"
          >
            {{ job.summary }}
          </p>

          <ul
            v-if="job.highlights?.length"
            class="mt-3 space-y-1.5"
          >
            <li
              v-for="highlight in job.highlights"
              :key="highlight"
              class="flex gap-2.5 text-sm leading-relaxed text-muted"
            >
              <span class="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </Motion>
      </li>
    </ol>
  </div>
</template>
