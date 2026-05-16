<template>
  <div class="relative">
    <input
      v-model="searchQuery"
      @focus="showResults = true"
      @input="performSearch"
      type="text"
      placeholder="Search..."
      class="w-full md:w-64 px-4 py-2 pl-10 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-colors text-sm"
    />
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>

    <div
      v-if="showResults && searchResults.length"
      class="absolute top-full left-0 right-0 mt-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto"
    >
      <NuxtLink
        v-for="result in searchResults"
        :key="result._path"
        :to="result._path"
        class="block px-4 py-3 hover:bg-zinc-800 transition-colors border-b border-zinc-800/50 last:border-0"
        @click="clearSearch"
      >
        <div class="text-sm text-white">{{ result.title || result._path }}</div>
        <div v-if="result.description" class="text-xs text-zinc-500 mt-0.5 truncate">{{ result.description }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const searchQuery = ref('')
const searchResults = ref<any[]>([])
const showResults = ref(false)
let searchTimeout: NodeJS.Timeout | null = null

const performSearch = async () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    showResults.value = false
    return
  }

  if (searchTimeout) clearTimeout(searchTimeout)

  searchTimeout = setTimeout(async () => {
    try {
      const [blog, guides, books, tools] = await Promise.all([
        queryContent('/blog').find(),
        queryContent('/guides').find(),
        queryContent('/books').find(),
        queryContent('/tools').find()
      ])

      const all = [...blog, ...guides, ...books, ...tools]
      searchResults.value = all
        .filter(item => {
          const q = searchQuery.value.toLowerCase()
          return item.title?.toLowerCase().includes(q) || item.description?.toLowerCase().includes(q)
        })
        .slice(0, 8)
    } catch (e) {
      console.error(e)
    }
  }, 200)
}

const clearSearch = () => {
  searchQuery.value = ''
  searchResults.value = []
  showResults.value = false
}

onMounted(() => {
  const handleClick = (e: Event) => {
    if (!(e.target as Element).closest('.relative')) {
      showResults.value = false
    }
  }
  document.addEventListener('click', handleClick)
  onUnmounted(() => document.removeEventListener('click', handleClick))
})
</script>