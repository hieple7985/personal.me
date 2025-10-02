<template>
  <section>
    <h1>Blog</h1>
    <ContentList path="/blog" v-slot="{ list }">
      <ul>
        <li v-for="post in list" :key="post._path">
          <NuxtLink :to="post._path">{{ post.title || post._path }}</NuxtLink>
        </li>
      </ul>
    </ContentList>
  </section>
</template>

<script setup lang="ts">
// Blog list powered by @nuxt/content
</script>

