<template>
  <NuxtLink :to="item._path" class="block rounded-xl border border-neutral-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 group">
    <div class="flex items-start justify-between mb-3">
      <span class="text-2xl">{{ getContentType(item._path) }}</span>
      <span v-if="readingTime" class="text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-gray-800 px-2 py-1 rounded-full">
        ⏱ {{ readingTime }}
      </span>
    </div>
    
    <h3 class="font-semibold text-xl text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {{ item.title || item._path.replace(/^\/[^\/]+\//, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) }}
    </h3>
    
    <p v-if="item.description" class="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
      {{ item.description }}
    </p>
    
    <div class="flex items-center justify-between mt-4 pt-3 border-t border-neutral-100 dark:border-gray-700">
      <div class="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400">
        <span v-if="item.date" class="flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          {{ formatDate(item.date) }}
        </span>
        <span class="flex items-center gap-1">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          {{ getPathLabel(item._path) }}
        </span>
      </div>
      <ArrowRightIcon class="w-4 h-4 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors transform group-hover:translate-x-1" />
    </div>
    
    <TagPills v-if="item.tags && item.tags.length > 0" :tags="item.tags" class="mt-3" />
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
  body?: any
  content?: string
}

const props = defineProps<{ item: ContentItem }>()

// Calculate reading time (average: 200 words per minute)
const readingTime = computed(() => {
  const text = props.item.content || JSON.stringify(props.item.body || {}).replace(/[^a-zA-Z0-9\s]/g, ' ')
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length
  const minutes = Math.ceil(wordCount / 200)
  
  if (minutes < 1) return '1 min read'
  if (minutes === 1) return '1 min read'
  if (minutes < 60) return `${minutes} min read`
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m read` : `${hours}h read`
})

function formatDate(d?: string) {
  if (!d) return ''
  try { 
    return new Date(d).toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    }) 
  } catch { 
    return d 
  }
}

function getContentType(path: string): string {
  if (path.includes('/blog')) return '📝'
  if (path.includes('/guides')) return '📚'
  if (path.includes('/books')) return '📖'
  if (path.includes('/tools')) return '🤖'
  return '📄'
}

function getPathLabel(path: string): string {
  if (path.includes('/blog')) return 'Blog'
  if (path.includes('/guides')) return 'Guide'
  if (path.includes('/books')) return 'Book'
  if (path.includes('/tools')) return 'Tool'
  return 'Content'
}

// ArrowRightIcon component
const ArrowRightIcon = defineComponent({
  render() {
    return h('svg', {
      class: 'inline-block',
      fill: 'none',
      stroke: 'currentColor',
      viewBox: '0 0 24 24',
    }, [
      h('path', {
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        'stroke-width': '2',
        d: 'M13 7l5 5m0 0l-5 5m5-5H6',
      })
    ])
  }
})
</script>

<style scoped>
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

