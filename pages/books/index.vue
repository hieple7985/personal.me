<template>
  <section class="container mx-auto max-w-5xl p-4">
    <h1 class="text-2xl font-semibold mb-4">Books</h1>
    <ContentList path="/books" v-slot="{ list }">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <ContentCard v-for="doc in list" :key="doc._path" :item="doc" />
      </div>
    </ContentList>
  </section>
</template>

<script setup lang="ts">
import ContentCard from '@/components/ContentCard.vue'
</script>

