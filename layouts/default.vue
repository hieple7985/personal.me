<template>
  <div class="min-h-screen flex flex-col">
    <header class="p-4 border-b">
      <nav class="container mx-auto flex items-center justify-between">
        <a href="/" class="font-semibold">Personal Me</a>
        <ul class="flex gap-4 text-sm">
          <li><a href="/blog">Blog</a></li>
          <li><a href="/guides">Guides</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/tools">ML Tools</a></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto flex-1 p-4">
      <slot />
    </main>

    <footer class="p-4 border-t text-sm text-center">
      © {{ new Date().getFullYear() }} Personal Me
    </footer>
  </div>
</template>

<script setup lang="ts">
// Default layout shell for the new site structure.
// NOTE: Tailwind classes are present but optional; styling can be refined later.
</script>

