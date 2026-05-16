<template>
  <div class="max-w-3xl mx-auto">
    <section class="py-12 text-center">
      <h1 class="text-4xl font-bold text-white mb-4">About</h1>
      <p class="text-lg text-zinc-400">Software Engineer based in Vietnam</p>
    </section>

    <section class="py-8 border-t border-zinc-800/50">
      <p class="text-zinc-300 leading-relaxed mb-6">
        I'm a full-stack developer with experience building web applications and working with machine learning systems. 
        I focus on writing clean, maintainable code and creating practical solutions.
      </p>
      <p class="text-zinc-300 leading-relaxed mb-6">
        This site is a place where I share technical writing, book recommendations, and experiments with ML tools.
      </p>
    </section>

    <section class="py-8 border-t border-zinc-800/50">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Skills</h2>
      <div class="flex flex-wrap gap-3">
        <span v-for="skill in skills" :key="skill" class="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
          {{ skill }}
        </span>
      </div>
    </section>

    <section class="py-8 border-t border-zinc-800/50">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Connect</h2>
      <div class="space-y-3">
        <a href="mailto:letronghiep1985@gmail.com" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          letronghiep1985@gmail.com
        </a>
        <a href="https://github.com/hieple7985" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
          github.com/hieple7985
        </a>
        <a href="https://linkedin.com/in/hieple7985" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          linkedin.com/in/hieple7985
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About',
  meta: [
    { name: 'description', content: 'About Hiep Le - Software Engineer' }
  ]
})

const skills = [
  'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt', 'React', 'Node.js',
  'Python', 'Machine Learning', 'PostgreSQL', 'Firebase', 'Git', 'Docker'
]
</script>