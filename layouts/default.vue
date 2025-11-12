<template>
  <div class="min-h-screen flex flex-col">
    <HeaderNav />

    <main class="container mx-auto max-w-5xl flex-1 p-4">
      <div class="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 rounded-lg shadow-xl p-6 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
        <slot />
      </div>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Default layout shell for the new site structure.
// NOTE: Tailwind classes are present but optional; styling can be refined later.
</script>

