<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()

const { data } = await useAsyncData('featured-projects', () =>
  queryCollection('projects').order('date', 'DESC').all()
)

const projects = computed(() => (data.value ?? []).filter(project => project.featured).slice(0, 4))
</script>

<template>
  <section class="border-t border-default py-16 sm:py-24">
    <div class="flex flex-wrap items-end justify-between gap-6">
      <SectionHeading
        path="work"
        :title="page.work.title"
        :description="page.work.description"
      />
      <UButton
        to="/projects"
        color="neutral"
        variant="outline"
        trailing-icon="i-lucide-arrow-right"
        label="All projects"
      />
    </div>

    <div class="mt-10 grid gap-8 sm:grid-cols-2">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(16px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.08 * index }"
        :in-view-options="{ once: true }"
      >
        <a
          :href="project.url || '/projects'"
          :target="project.url ? '_blank' : undefined"
          :rel="project.url ? 'noopener noreferrer' : undefined"
          class="group flex h-full flex-col"
        >
          <div class="overflow-hidden rounded-xl border border-default bg-elevated/40">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              decoding="async"
              class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            >
          </div>

          <div class="mt-4 flex flex-1 flex-col">
            <div class="flex flex-wrap items-center gap-x-2.5 gap-y-1">
              <h3 class="font-heading text-lg font-medium text-highlighted">
                {{ project.title }}
              </h3>
              <span
                v-if="project.status"
                class="rounded-full border border-default px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted uppercase"
              >
                {{ project.status }}
              </span>
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <p class="mt-0.5 font-mono text-xs text-muted">
              {{ project.role }}
            </p>
            <p class="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
              {{ project.description }}
            </p>
            <div class="mt-4 flex flex-wrap gap-1.5 pt-1">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-toned"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </a>
      </Motion>
    </div>
  </section>
</template>
