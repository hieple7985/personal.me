<template>
  <div :class="['relative', className]">
    <div class="relative">
      <input
        v-model="searchQuery"
        @focus="showResults = true"
        @input="performSearch"
        type="text"
        placeholder="Search articles, guides, books..."
        :class="className === 'w-full' ? 'w-full' : 'w-64 md:w-80'" 
        class="px-4 py-2 pl-10 border border-neutral-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <div class="absolute left-3 top-1/2 transform -translate-y-1/2">
        <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
      >
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Search Results Dropdown -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="showResults && (isLoading || searchResults.length > 0)"
        class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-neutral-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
      >
        <!-- Loading State -->
        <div v-if="isLoading" class="p-4 text-center">
          <div class="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <p class="text-sm text-neutral-600 dark:text-neutral-400 mt-2">Searching...</p>
        </div>

        <!-- Search Results -->
        <div v-else-if="searchResults.length > 0">
          <div class="p-2">
            <p class="text-xs text-neutral-500 dark:text-neutral-400 px-3 py-2">
              {{ searchResults.length }} result{{ searchResults.length > 1 ? 's' : '' }}
            </p>
            <NuxtLink
              v-for="result in searchResults"
              :key="result._path"
              :to="result._path"
              @click="clearSearch"
              class="block px-3 py-2 hover:bg-neutral-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div class="flex items-start gap-3">
                <div class="flex-shrink-0 mt-1">
                  <span class="text-lg">{{ getContentType(result._path) }}</span>
                </div>
                <div class="flex-1 min-w-0">
                  <h4 class="font-medium text-sm text-neutral-900 dark:text-neutral-100 truncate">
                    {{ result.title || result._path }}
                  </h4>
                  <p v-if="result.description" class="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                    {{ result.description }}
                  </p>
                  <div class="flex items-center gap-3 mt-1">
                    <span class="text-xs text-neutral-500">{{ getPathLabel(result._path) }}</span>
                    <span v-if="result.date" class="text-xs text-neutral-500">
                      {{ formatDate(result.date) }}
                    </span>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- No Results -->
        <div v-else-if="searchQuery && !isLoading" class="p-4 text-center">
          <svg class="w-8 h-8 text-neutral-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-sm text-neutral-600 dark:text-neutral-400">No results found</p>
          <p class="text-xs text-neutral-500 dark:text-neutral-500 mt-1">Try different keywords</p>
        </div>
      </div>
    </transition>

    <!-- Overlay for mobile -->
    <div
      v-if="showResults"
      @click="showResults = false"
      class="fixed inset-0 z-40"
      style="margin-top: 60px;"
    ></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
})

interface SearchResult {
  _path: string
  title?: string
  description?: string
  date?: string
  tags?: string[]
}

const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])
const isLoading = ref(false)
const showResults = ref(false)

// Debounce search
let searchTimeout: NodeJS.Timeout | null = null

const performSearch = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    showResults.value = false
    return
  }

  if (searchTimeout) {
    clearTimeout(searchTimeout)
  }

  searchTimeout = setTimeout(async () => {
    isLoading.value = true
    
    try {
      // Search across all content collections
      const { data: blogData } = await queryContent('/blog').where({
        $or: [
          { title: { $contains: searchQuery.value } },
          { description: { $contains: searchQuery.value } },
          { tags: { $contains: searchQuery.value } }
        ]
      }).find()

      const { data: guidesData } = await queryContent('/guides').where({
        $or: [
          { title: { $contains: searchQuery.value } },
          { description: { $contains: searchQuery.value } },
          { tags: { $contains: searchQuery.value } }
        ]
      }).find()

      const { data: booksData } = await queryContent('/books').where({
        $or: [
          { title: { $contains: searchQuery.value } },
          { description: { $contains: searchQuery.value } },
          { tags: { $contains: searchQuery.value } }
        ]
      }).find()

      const { data: toolsData } = await queryContent('/tools').where({
        $or: [
          { title: { $contains: searchQuery.value } },
          { description: { $contains: searchQuery.value } },
          { tags: { $contains: searchQuery.value } }
        ]
      }).find()

      searchResults.value = [...(blogData || []), ...(guidesData || []), ...(booksData || []), ...(toolsData || [])]
        .sort((a, b) => {
          // Prioritize title matches, then matches in order of relevance
          const aTitleMatch = a.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ? 2 : 1
          const bTitleMatch = b.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ? 2 : 1
          return bTitleMatch - aTitleMatch
        })
        .slice(0, 10) // Limit to 10 results
    } catch (error) {
      console.error('Search error:', error)
      searchResults.value = []
    } finally {
      isLoading.value = false
    }
  }, 300) // 300ms debounce
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  showResults.value = false
}

const getContentType = (path: string): string => {
  if (path.includes('/blog')) return '📝'
  if (path.includes('/guides')) return '📚'
  if (path.includes('/books')) return '📖'
  if (path.includes('/tools')) return '🤖'
  return '📄'
}

const getPathLabel = (path: string): string => {
  if (path.includes('/blog')) return 'Blog'
  if (path.includes('/guides')) return 'Guide'
  if (path.includes('/books')) return 'Book'
  if (path.includes('/tools')) return 'Tool'
  return 'Content'
}

const formatDate = (date?: string) => {
  if (!date) return ''
  try {
    return new Date(date).toLocaleDateString(undefined, { 
      year: 'numeric', 
      month: 'short', 
      day: '2-digit' 
    })
  } catch {
    return date
  }
}

// Close results when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    const target = event.target as Element
    if (!target.closest('.relative')) {
      showResults.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
  })
})
</script>

<style scoped>
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
