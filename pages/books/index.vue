<template>
  <div>
    <section class="py-12 border-b border-zinc-800/50">
      <h1 class="text-4xl font-bold text-white mb-4">Books</h1>
      <p class="text-zinc-400">Reading recommendations and reviews</p>
    </section>

    <section class="py-8">
      <div v-if="books && books.length" class="space-y-6">
        <NuxtLink
          v-for="book in books"
          :key="book._path"
          :to="book._path"
          class="block group py-6 border-b border-zinc-800/50 last:border-0"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-xl font-medium text-white group-hover:text-indigo-400 transition-colors mb-2">
                {{ book.title }}
              </h3>
              <p v-if="book.description" class="text-zinc-500 mb-3">{{ book.description }}</p>
            </div>
            <svg class="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </NuxtLink>
      </div>
      <p v-else class="py-12 text-center text-zinc-500">No books yet.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Books',
  meta: [{ name: 'description', content: 'Book recommendations' }]
})

const { data: books } = await useAsyncData('books', () =>
  queryContent('/books').find()
)
</script>