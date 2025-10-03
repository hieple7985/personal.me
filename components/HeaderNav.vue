<template>
  <header class="border-b">
    <nav class="container mx-auto max-w-5xl flex items-center justify-between p-4">
      <NuxtLink to="/" class="font-semibold hover:opacity-80">Hiep Le</NuxtLink>
      <ul class="flex gap-4 text-sm text-neutral-700">
        <li><NuxtLink to="/blog" class="hover:text-black">Blog</NuxtLink></li>
        <li><NuxtLink to="/guides" class="hover:text-black">Guides</NuxtLink></li>
        <li><NuxtLink to="/books" class="hover:text-black">Books</NuxtLink></li>
        <li><NuxtLink to="/tools" class="hover:text-black">ML Tools</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
// Header navigation bar component
</script>

