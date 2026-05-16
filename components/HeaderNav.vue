<template>
  <header class="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50">
    <nav class="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
      <NuxtLink to="/" class="font-semibold text-lg text-white hover:text-indigo-400 transition-colors">
        Hiep Le
      </NuxtLink>

      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="text-sm text-zinc-400 hover:text-white transition-colors relative group"
          active-class="text-white"
        >
          {{ item.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-200" />
        </NuxtLink>
      </div>

      <div class="flex items-center gap-4">
        <button
          class="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          @click="toggle"
          aria-label="Toggle dark mode"
        >
          <svg v-if="colorMode === 'dark'" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <button
          class="md:hidden w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <svg v-if="isMobileMenuOpen" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-zinc-800/50 bg-zinc-950/95 backdrop-blur-xl"
    >
      <div class="max-w-5xl mx-auto px-6 py-4">
        <nav class="flex flex-col gap-4">
          <NuxtLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-sm text-zinc-400 hover:text-white transition-colors py-2"
            active-class="text-white"
            @click="closeMobileMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const colorMode = useState<'light' | 'dark'>('color-mode', () => 'dark')
const isMobileMenuOpen = ref(false)

const navItems = [
  { label: 'About', path: '/about' },
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