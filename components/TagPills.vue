<template>
  <ul v-if="tags?.length" class="flex flex-wrap gap-2">
    <li v-for="t in tags" :key="t" class="px-2 py-0.5 rounded bg-zinc-800 text-xs text-zinc-500">#{{ t }}</li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ tags?: string[] }>()
</script>