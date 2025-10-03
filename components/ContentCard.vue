<template>
  <NuxtLink :to="item._path" class="block rounded-lg border p-4 hover:shadow-sm transition">
    <h3 class="font-semibold text-lg">{{ item.title || item._path }}</h3>
    <p v-if="item.description" class="text-sm text-neutral-600 mt-1">{{ item.description }}</p>
    <p v-if="item.date" class="text-xs text-neutral-500 mt-2">{{ formatDate(item.date) }}</p>
    <TagPills v-if="item.tags" :tags="item.tags" class="mt-2" />
  </NuxtLink>
</template>

<script setup lang="ts">
import TagPills from '@/components/TagPills.vue'

interface ContentItem {
  _path: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

const props = defineProps<{ item: ContentItem }>()

function formatDate(d?: string) {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' }) } catch { return d }
}
</script>

