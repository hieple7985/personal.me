<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-zinc-950 transition-colors duration-300">
    <HeaderNav />

    <main class="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
</script>