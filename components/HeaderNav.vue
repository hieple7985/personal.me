<template>
  <header class="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
    <nav class="container mx-auto max-w-5xl flex items-center justify-between p-4">
      <NuxtLink to="/" class="font-semibold hover:opacity-80">Hiep Le</NuxtLink>
      <div class="flex items-center">
        <ul class="flex gap-4 text-sm text-neutral-700 dark:text-neutral-300">
          <li><NuxtLink to="/blog" class="hover:text-black dark:hover:text-white">Blog</NuxtLink></li>
          <li><NuxtLink to="/guides" class="hover:text-black dark:hover:text-white">Guides</NuxtLink></li>
          <li><NuxtLink to="/books" class="hover:text-black dark:hover:text-white">Books</NuxtLink></li>
          <li><NuxtLink to="/tools" class="hover:text-black dark:hover:text-white">ML Tools</NuxtLink></li>
        </ul>
        <button class="ml-4 text-sm" @click="toggle" aria-label="Toggle dark mode">
          {{ colorMode.value === 'dark' ? '☀️' : '🌙' }}
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const colorMode = useState<'light' | 'dark'>('color-mode', () => {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('color-mode')
  if (saved === 'light' || saved === 'dark') return saved as 'light' | 'dark'
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
})
const apply = (v: 'light' | 'dark') => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', v === 'dark')
    try { localStorage.setItem('color-mode', v) } catch {}
  }
}
watch(colorMode, apply, { immediate: true })
onMounted(() => apply(colorMode.value))
const toggle = () => { colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark' }
</script>
