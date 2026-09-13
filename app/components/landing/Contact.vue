<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="contact"
    class="border-t border-default py-16 sm:py-24"
  >
    <div class="relative overflow-hidden rounded-2xl border border-default bg-elevated/40 px-6 py-12 sm:px-12 sm:py-16">
      <div class="pointer-events-none absolute inset-0 bg-bloom opacity-70" />
      <div class="relative">
        <span class="eyebrow"><span class="text-primary/70">~/</span>contact</span>
        <h2 class="mt-3 max-w-2xl text-balance font-heading text-3xl font-medium tracking-tight text-highlighted sm:text-4xl lg:text-5xl">
          {{ page.contact.title }}
        </h2>
        <p class="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          {{ page.contact.description }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <UButton
            size="lg"
            icon="i-lucide-mail"
            :to="`mailto:${page.contact.email}`"
            :label="page.contact.email"
          />
          <UButton
            size="lg"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-github"
            to="https://github.com/BeytulaS"
            target="_blank"
            label="GitHub"
          />
          <UButton
            size="lg"
            color="neutral"
            variant="outline"
            icon="i-simple-icons-linkedin"
            to="https://www.linkedin.com/in/beytula-smail-ab8560295/"
            target="_blank"
            label="LinkedIn"
          />
        </div>
      </div>
    </div>
  </section>
</template>
