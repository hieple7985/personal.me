<template>
  <div class="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
    <HeaderNav />

    <main class="container mx-auto max-w-5xl flex-1 p-4">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Default layout shell for the new site structure.
// NOTE: Tailwind classes are present but optional; styling can be refined later.
</script>

