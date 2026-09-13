<script setup lang="ts">
const { data: page } = await useAsyncData('projects-page', () => {
  return queryCollection('pages').path('/projects').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { data } = await useAsyncData('projects', () => {
  return queryCollection('projects').order('date', 'DESC').all()
})

const projects = computed(() => data.value ?? [])

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})

function isRepo(url?: string) {
  return !!url?.includes('github.com')
}
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      :ui="{
        title: 'mx-0! text-left font-heading',
        description: 'mx-0! text-left',
        links: 'justify-start'
      }"
    >
      <template #links>
        <div
          v-if="page.links"
          class="flex flex-wrap items-center gap-2"
        >
          <UButton
            v-for="link in page.links"
            :key="link.label"
            v-bind="link"
          />
        </div>
      </template>
    </UPageHero>

    <section class="space-y-16 border-t border-default py-16 sm:space-y-24">
      <Motion
        v-for="(project, index) in projects"
        :key="project.title"
        :initial="{ opacity: 0, transform: 'translateY(20px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.1 }"
        :in-view-options="{ once: true }"
        class="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
      >
        <div :class="index % 2 === 1 ? 'lg:order-last' : ''">
          <div class="overflow-hidden rounded-xl border border-default bg-elevated/40">
            <img
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              decoding="async"
              class="aspect-[16/10] w-full object-cover"
            >
          </div>
        </div>

        <div>
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="font-mono text-xs text-muted">
              {{ new Date(project.date).getFullYear() }}
            </span>
            <span
              v-if="project.status"
              class="rounded-full border border-default px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted uppercase"
            >
              {{ project.status }}
            </span>
          </div>

          <h2 class="mt-3 font-heading text-2xl font-medium tracking-tight text-highlighted sm:text-3xl">
            {{ project.title }}
          </h2>
          <p class="mt-1 font-mono text-xs text-primary">
            {{ project.role }}
          </p>
          <p class="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {{ project.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-1.5">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-toned"
            >
              {{ tag }}
            </span>
          </div>

          <div
            v-if="project.url || project.repo"
            class="mt-7 flex flex-wrap gap-3"
          >
            <UButton
              v-if="project.url"
              :to="project.url"
              target="_blank"
              :icon="isRepo(project.url) ? 'i-simple-icons-github' : 'i-lucide-external-link'"
              :label="isRepo(project.url) ? 'View on GitHub' : 'Visit site'"
            />
            <UButton
              v-if="project.repo && project.repo !== project.url"
              :to="project.repo"
              target="_blank"
              color="neutral"
              variant="outline"
              icon="i-simple-icons-github"
              label="Source"
            />
          </div>
        </div>
      </Motion>
    </section>
  </UPage>
</template>
