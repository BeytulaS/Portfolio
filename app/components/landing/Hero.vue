<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { footer, global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()

const appear = (delay: number) => ({
  initial: { scale: 1.04, opacity: 0, filter: 'blur(14px)' },
  animate: { scale: 1, opacity: 1, filter: 'blur(0px)' },
  transition: { duration: 0.6, delay }
})
</script>

<template>
  <UPageHero
    :ui="{
      headline: 'flex items-center justify-center',
      title: 'font-heading text-shadow-md max-w-3xl mx-auto',
      links: 'mt-6 flex-col justify-center items-center'
    }"
  >
    <template #headline>
      <Motion v-bind="appear(0.1)">
        <div class="flex items-center gap-3">
          <UColorModeAvatar
            class="size-11 ring-2 ring-default ring-offset-2 ring-offset-bg"
            :light="global.picture?.light!"
            :dark="global.picture?.dark!"
            :alt="global.picture?.alt!"
          />
          <span class="eyebrow text-highlighted/80">{{ page.hero.eyebrow }}<span class="ml-0.5 text-primary motion-safe:animate-pulse">▍</span></span>
        </div>
      </Motion>
    </template>

    <template #title>
      <Motion v-bind="appear(0.2)">
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion v-bind="appear(0.3)">
        {{ page.description }}
      </Motion>
    </template>

    <template #links>
      <Motion v-bind="appear(0.4)">
        <div
          v-if="page.hero.links"
          class="flex flex-col items-center gap-3 sm:flex-row"
        >
          <UButton
            v-bind="page.hero.links[0]"
            size="lg"
          />
          <UButton
            :color="global.available ? 'success' : 'error'"
            variant="ghost"
            size="lg"
            class="gap-2"
            :to="global.available ? global.meetingLink : ''"
            :label="global.available ? 'Available for new work' : 'Not available right now'"
          >
            <template #leading>
              <span class="relative flex size-2">
                <span
                  class="absolute inline-flex size-full rounded-full opacity-75"
                  :class="global.available ? 'bg-success motion-safe:animate-ping' : 'bg-error'"
                />
                <span
                  class="relative inline-flex size-2 scale-90 rounded-full"
                  :class="global.available ? 'bg-success' : 'bg-error'"
                />
              </span>
            </template>
          </UButton>
        </div>
      </Motion>

      <div class="mt-5 inline-flex gap-x-2">
        <Motion
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="appear(0.5 + index * 0.08)"
        >
          <UButton
            v-bind="{ size: 'md', color: 'neutral', variant: 'ghost', ...link }"
          />
        </Motion>
      </div>
    </template>

    <UMarquee
      pause-on-hover
      class="-mx-8 py-2 sm:-mx-12 lg:-mx-16 [--duration:48s]"
    >
      <Motion
        v-for="(img, index) in page.hero.images"
        :key="index"
        v-bind="appear(index * 0.08)"
      >
        <NuxtImg
          width="234"
          height="234"
          class="aspect-square rounded-lg object-cover ring-1 ring-default"
          :class="index % 2 === 0 ? '-rotate-2' : 'rotate-2'"
          v-bind="img"
        />
      </Motion>
    </UMarquee>
  </UPageHero>
</template>
