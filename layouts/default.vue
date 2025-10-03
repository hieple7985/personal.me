<template>
  <div class="min-h-screen flex flex-col">
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

