<template>
  <div>
    <ComingSoon 
      title="Books"
      message="Book reviews, summaries, and reading recommendations. Coming soon!"
    />
  </div>
</template>

<script setup lang="ts">
import ComingSoon from '@/components/ComingSoon.vue'

useHead({
  title: 'Books',
  meta: [
    { name: 'description', content: 'Book reviews and recommendations' }
  ]
})
</script>

