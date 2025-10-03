<template>
  <section>
    <h1>ML Tools Landscape</h1>
    <ContentList path="/tools" v-slot="{ list }">
      <ul>
        <li v-for="doc in list" :key="doc._path">
          <NuxtLink :to="doc._path">{{ doc.title || doc._path }}</NuxtLink>
        </li>
      </ul>
    </ContentList>
  </section>
</template>

