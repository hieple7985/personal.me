<template>
  <header class="border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-50 backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90">
    <nav class="container mx-auto max-w-5xl flex items-center justify-between p-4">
      <NuxtLink to="/" class="font-semibold text-xl hover:opacity-80 transition-opacity">
        Hiep Le
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-6">
        <ul class="flex gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <NuxtLink 
              to="/blog" 
              class="hover:text-black dark:hover:text-white transition-colors font-medium"
              active-class="text-blue-600 dark:text-blue-400"
            >
              Blog
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/guides" 
              class="hover:text-black dark:hover:text-white transition-colors font-medium"
              active-class="text-blue-600 dark:text-blue-400"
            >
              Guides
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/books" 
              class="hover:text-black dark:hover:text-white transition-colors font-medium"
              active-class="text-blue-600 dark:text-blue-400"
            >
              Books
            </NuxtLink>
          </li>
          <li>
            <NuxtLink 
              to="/tools" 
              class="hover:text-black dark:hover:text-white transition-colors font-medium"
              active-class="text-blue-600 dark:text-blue-400"
            >
              ML Tools
            </NuxtLink>
          </li>
        </ul>
        
        <!-- Search Box -->
        <div class="relative">
          <SearchBox />
        </div>
        
        <button 
          class="text-xl hover:scale-110 transition-transform" 
          @click="toggle" 
          aria-label="Toggle dark mode"
        >
          {{ colorMode.value === 'dark' ? '☀️' : '🌙' }}
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="flex items-center md:hidden">
        <button 
          class="text-xl mr-3 hover:scale-110 transition-transform" 
          @click="toggle" 
          aria-label="Toggle dark mode"
        >
          {{ colorMode.value === 'dark' ? '☀️' : '🌙' }}
        </button>
        <button 
          @click="toggleMobileMenu" 
          class="text-2xl hover:scale-110 transition-transform"
          aria-label="Toggle mobile menu"
        >
          {{ isMobileMenuOpen ? '✕' : '☰' }}
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
      >
        <div class="container mx-auto max-w-5xl p-4">
          <!-- Mobile Search -->
          <div class="mb-4">
            <SearchBox class="w-full" />
          </div>
          
          <ul class="flex flex-col gap-4 text-sm">
            <li>
              <NuxtLink 
                to="/blog" 
                class="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                active-class="text-blue-600 dark:text-blue-400"
                @click="closeMobileMenu"
              >
                📝 Blog
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/guides" 
                class="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                active-class="text-blue-600 dark:text-blue-400"
                @click="closeMobileMenu"
              >
                📚 Guides
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/books" 
                class="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                active-class="text-blue-600 dark:text-blue-400"
                @click="closeMobileMenu"
              >
                📖 Books
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/tools" 
                class="block py-2 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors font-medium"
                active-class="text-blue-600 dark:text-blue-400"
                @click="closeMobileMenu"
              >
                🤖 ML Tools
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'

const colorMode = useState<'light' | 'dark'>('color-mode', () => {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('color-mode')
  if (saved === 'light' || saved === 'dark') return saved as 'light' | 'dark'
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
})

const isMobileMenuOpen = ref(false)

const apply = (v: 'light' | 'dark') => {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', v === 'dark')
    try { localStorage.setItem('color-mode', v) } catch {}
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(colorMode, apply, { immediate: true })
onMounted(() => apply(colorMode.value))

const toggle = () => { 
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark' 
}

// Close mobile menu when clicking outside
onMounted(() => {
  const handleClickOutside = (event: Event) => {
    if (isMobileMenuOpen.value) {
      const target = event.target as Element
      if (!target.closest('header')) {
        closeMobileMenu()
      }
    }
  }
  
  document.addEventListener('click', handleClickOutside)
  
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
  })
})
</script>
