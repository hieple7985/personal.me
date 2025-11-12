<template>
  <div class="flex flex-col items-center justify-center py-20 text-center">
    <div class="text-6xl mb-6">🚧</div>
    <h1 class="text-4xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
      {{ title || 'Coming Soon' }}
    </h1>
    <p class="text-lg text-neutral-600 dark:text-neutral-400 max-w-md">
      {{ message || 'This section is under construction. Check back soon for updates!' }}
    </p>
    <div class="mt-8">
      <NuxtLink 
        to="/" 
        class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors inline-flex items-center gap-2"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
        Back to Home
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
  message?: string
}>()
</script>
