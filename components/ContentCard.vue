<template>
  <NuxtLink :to="item._path" class="block group">
    <div class="flex items-start justify-between gap-4 py-4 border-b border-zinc-800/50 last:border-0">
      <div>
        <h3 class="text-lg font-medium text-white group-hover:text-indigo-400 transition-colors mb-1">
          {{ item.title || getTitle(item._path) }}
        </h3>
        <p v-if="item.description" class="text-zinc-500 text-sm mb-2">{{ item.description }}</p>
        <div class="flex items-center gap-3 text-xs text-zinc-600">
          <span v-if="item.date">{{ formatDate(item.date) }}</span>
          <span v-if="item.tags && item.tags.length">
            {{ item.tags.slice(0, 2).map(t => '#' + t).join(' ') }}
          </span>
        </div>
      </div>
      <svg class="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface ContentItem {
  _path: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

defineProps<{ item: ContentItem }>()

function getTitle(path: string) {
  return path.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || ''
}

function formatDate(d?: string) {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return d
  }
}
</script>