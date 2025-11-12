<template>
  <div>
    <ComingSoon 
      title="Blog"
      message="Technical articles, tutorials, and thoughts on software development and machine learning. Stay tuned for exciting content!"
    />
  </div>
</template>

<script setup lang="ts">
import ComingSoon from '@/components/ComingSoon.vue'

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Technical blog posts about software development and machine learning' }
  ]
})
</script>

