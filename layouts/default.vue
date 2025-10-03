<template>
  <div class="min-h-screen flex flex-col">
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

    <main class="container mx-auto max-w-5xl flex-1 p-4">
      <slot />
    </main>

    <footer class="p-4 border-t text-sm text-center">
      © {{ new Date().getFullYear() }} Hiep Le
    </footer>
  </div>
</template>

<script setup lang="ts">
// Default layout shell for the new site structure.
// NOTE: Tailwind classes are present but optional; styling can be refined later.
</script>

