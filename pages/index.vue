<template>
  <section class="container mx-auto max-w-5xl p-4">
    <h1 class="text-3xl font-semibold">Personal Me v2</h1>
    <p class="text-neutral-700 mt-2">A minimal Nuxt 3 SPA deployed on Firebase Hosting.</p>
    <ul class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
      <li><NuxtLink to="/blog" class="underline hover:no-underline">Blog</NuxtLink></li>
      <li><NuxtLink to="/guides" class="underline hover:no-underline">Technical Guides</NuxtLink></li>
      <li><NuxtLink to="/books" class="underline hover:no-underline">Books</NuxtLink></li>
      <li><NuxtLink to="/tools" class="underline hover:no-underline">ML Tools</NuxtLink></li>
    </ul>
  </section>
</template>

<script setup lang="ts">
// Home page placeholder for the new framework structure.
</script>
