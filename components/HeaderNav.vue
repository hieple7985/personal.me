<template>
  <header class="border-b border-zinc-200 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50 transition-colors duration-300">
    <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
      <NuxtLink to="/" class="font-semibold text-lg text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
        Hiep Le
      </NuxtLink>

      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors relative group py-2"
          active-class="!text-zinc-900 dark:!text-white is-active"
        >
          {{ item.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-500 group-hover:w-full transition-all duration-200" :class="{ 'w-full': $route.path.startsWith(item.path) }" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-2">
        <button
          class="w-11 h-11 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
          @click="toggle"
          aria-label="Toggle dark mode"
        >
          <svg v-if="colorMode === 'dark'" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <button
          class="md:hidden w-11 h-11 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg v-if="isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden border-t border-zinc-200 dark:border-zinc-800/50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl"
      >
        <div class="max-w-5xl mx-auto px-6 py-4">
          <nav class="flex flex-col gap-2">
            <NuxtLink
              v-for="item in navItems"
              :key="item.path"
              :to="item.path"
              class="text-base font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
              active-class="!text-zinc-900 dark:!text-white bg-zinc-50 dark:bg-zinc-900"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const colorMode = useState<'light' | 'dark'>('color-mode', () => 'dark')
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'Blog', path: '/blog' },
  { label: 'Guides', path: '/guides' },
  { label: 'Books', path: '/books' },
  { label: 'Tools', path: '/tools' }
]

const apply = (v: 'light' | 'dark') => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', v === 'dark')
  }
}

const toggle = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('color-mode', colorMode.value)
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

watch(colorMode, apply, { immediate: true })
</script>