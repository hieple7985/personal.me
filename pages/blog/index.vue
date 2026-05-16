<template>
  <div>
    <section class="py-12 border-b border-zinc-800/50">
      <h1 class="text-4xl font-bold text-white mb-4">Blog</h1>
      <p class="text-zinc-400">Technical articles and tutorials</p>
    </section>

    <section class="py-8">
      <div v-if="posts && posts.length" class="space-y-6">
        <NuxtLink
          v-for="post in posts"
          :key="post._path"
          :to="post._path"
          class="block group py-6 border-b border-zinc-800/50 last:border-0"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-xl font-medium text-white group-hover:text-indigo-400 transition-colors mb-2">
                {{ post.title }}
              </h3>
              <p v-if="post.description" class="text-zinc-500 mb-3">{{ post.description }}</p>
              <div class="flex items-center gap-4 text-sm text-zinc-600">
                <span>{{ formatDate(post.date) }}</span>
                <span v-if="post.tags && post.tags.length">
                  {{ post.tags.slice(0, 3).map(t => '#' + t).join(' ') }}
                </span>
              </div>
            </div>
            <svg class="w-5 h-5 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </NuxtLink>
      </div>
      <p v-else class="py-12 text-center text-zinc-500">No posts yet.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog',
  meta: [{ name: 'description', content: 'Technical blog posts' }]
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').sort({ date: -1 }).find()
)

function formatDate(d?: string) {
  if (!d) return ''
  try {
    return new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  } catch {
    return d
  }
}
</script>