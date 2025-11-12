<template>
  <div>
    <ComingSoon 
      title="ML Tools"
      message="Interactive machine learning tools and experiments. Stay tuned for cool demos!"
    />
  </div>
</template>

<script setup lang="ts">
import ComingSoon from '@/components/ComingSoon.vue'

useHead({
  title: 'ML Tools',
  meta: [
    { name: 'description', content: 'Machine learning tools and interactive demos' }
  ]
})
</script>

