<template>
  <ul v-if="tags?.length" class="flex flex-wrap gap-1 text-xs text-neutral-600">
    <li v-for="t in tags" :key="t" class="px-2 py-0.5 rounded-full bg-neutral-100">#{{ t }}</li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{ tags?: string[] }>()
</script>

