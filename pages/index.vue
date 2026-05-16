<template>
  <div class="max-w-4xl mx-auto">
    <section class="text-center py-20">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-400 mb-8">
        <span class="w-2 h-2 rounded-full bg-indigo-400 animate-ping-slow" />
        Available for projects
      </div>

      <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
        Software Engineer
      </h1>

      <p class="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Building web applications and exploring machine learning. Focused on clean code and practical solutions.
      </p>

      <div class="flex items-center justify-center gap-4">
        <NuxtLink
          to="/blog"
          class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors"
        >
          Read Blog
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="px-6 py-3 border border-zinc-700 hover:border-zinc-600 text-zinc-300 rounded-lg font-medium transition-colors"
        >
          About Me
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 border-t border-zinc-800/50">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Explore</h2>

      <div class="grid md:grid-cols-2 gap-4">
        <NuxtLink
          v-for="item in sections"
          :key="item.path"
          :to="item.path"
          class="group p-6 rounded-xl border border-zinc-800/50 hover:border-zinc-700/50 bg-zinc-900/30 transition-all"
        >
          <div class="flex items-center justify-between mb-3">
            <span class="text-zinc-400 group-hover:text-white transition-colors">{{ item.label }}</span>
            <svg class="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <p class="text-zinc-500 text-sm">{{ item.description }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 border-t border-zinc-800/50">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-8">Recent</h2>

      <div v-if="recentPosts.length" class="space-y-4">
        <NuxtLink
          v-for="post in recentPosts"
          :key="post._path"
          :to="post._path"
          class="block group py-4 border-b border-zinc-800/50 last:border-0"
        >
          <div class="flex items-start justify-between gap-4">
            <div>
              <h3 class="text-white group-hover:text-indigo-400 transition-colors mb-1">{{ post.title }}</h3>
              <p class="text-sm text-zinc-500">{{ formatDate(post.date) }}</p>
            </div>
            <svg class="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </NuxtLink>
      </div>
      <p v-else class="text-zinc-500">No posts yet.</p>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home'
})

const sections = [
  { label: 'Blog', path: '/blog', description: 'Technical articles and tutorials' },
  { label: 'Guides', path: '/guides', description: 'Step-by-step tutorials' },
  { label: 'Books', path: '/books', description: 'Reading recommendations' },
  { label: 'Tools', path: '/tools', description: 'ML experiments and demos' }
]

const { data: recentPosts } = await useAsyncData('recent-posts', () =>
  queryContent('/blog').where({ _path: { $contains: '/blog' } }).sort({ date: -1 }).limit(3).find()
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