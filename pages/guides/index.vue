<template>
  <div>
    <ComingSoon 
      title="Guides"
      message="Step-by-step guides and tutorials on various tech topics. Coming soon!"
    />
  </div>
</template>

<script setup lang="ts">
import ComingSoon from '@/components/ComingSoon.vue'

useHead({
  title: 'Guides',
  meta: [
    { name: 'description', content: 'Technical guides and tutorials' }
  ]
})
</script>

