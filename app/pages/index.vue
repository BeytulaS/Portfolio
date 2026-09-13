<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const title = page.value?.seo?.title || page.value?.title
const description = page.value?.seo?.description || page.value?.description

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div v-if="page">
    <LandingHero :page />

    <section class="border-t border-default py-16 sm:py-24">
      <div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="space-y-12">
          <LandingAbout :page />
          <LandingEducation :page />
        </div>
        <LandingWorkExperience :page />
      </div>
    </section>

    <LandingSkills :page />
    <LandingSelectedWork :page />
    <LandingContact :page />
  </div>
</template>
