<template>
  <div class="max-w-3xl mx-auto">
    <!-- Hero / Statement -->
    <section class="pt-8 pb-20 animate-fade-in">
      <div class="mb-10">
        <div class="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span class="text-[10px] font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Archive Node: Vietnam</span>
        </div>
        <h1 class="text-4xl md:text-6xl font-bold font-heading text-zinc-900 dark:text-white mb-6 leading-[1.1] tracking-tight">
          20 years of engineering systems and leading teams.
        </h1>
        <p class="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
          Senior Technical Manager & Solution Architect. Focused on digital transformation, system stability, and high-performance engineering cultures.
        </p>
      </div>

      <div class="flex items-center gap-8">
        <img src="/avatar-real.webp" alt="Hiep Le" class="w-32 h-32 rounded-3xl border border-zinc-200 dark:border-zinc-800 object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-sm" />
        <div>
          <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-1">Hiep Le</h2>
          <p class="text-zinc-500 max-w-xs">The record of a journey through the evolution of IT.</p>
        </div>
      </div>
    </section>

    <!-- Principles / Philosophy -->
    <section class="pb-20 animate-slide-up" style="animation-delay: 100ms">
      <h2 class="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-10">Operating Principles</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(p, i) in principles" :key="p.title" class="group">
          <div class="text-indigo-600 dark:text-indigo-400 mb-3 font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">0{{ i + 1 }}</div>
          <h3 class="font-bold font-heading text-zinc-900 dark:text-white mb-2">{{ p.title }}</h3>
          <p class="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ p.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Journey (Timeline) -->
    <section class="pb-20 border-t border-zinc-100 dark:border-zinc-800/50 pt-16 animate-slide-up" style="animation-delay: 200ms">
      <h2 class="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-12">The Journey Archive</h2>

      <div class="space-y-16">
        <div v-for="(job, i) in experience" :key="i" class="relative pl-8 md:pl-0 group">
          <!-- Timeline Line -->
          <div class="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-zinc-100 dark:bg-zinc-800"></div>

          <div class="flex flex-col md:flex-row gap-4 md:gap-20">
            <!-- Year -->
            <div class="md:w-[100px] shrink-0">
              <span class="font-mono text-sm font-bold text-indigo-600 dark:text-indigo-400">{{ job.period.split(' ')[0] }}</span>
            </div>

            <!-- Content -->
            <div class="relative pb-2">
              <!-- Mobile Dot -->
              <div class="md:hidden absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-indigo-500"></div>
              <!-- Desktop Dot -->
              <div class="hidden md:block absolute -left-[104px] top-1.5 w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-indigo-500 transition-colors"></div>

              <h3 class="text-xl font-bold font-heading text-zinc-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {{ job.role }}
              </h3>
              <p class="text-zinc-500 dark:text-zinc-500 font-medium text-sm mb-4">{{ job.company }}</p>
              <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">{{ job.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected Works -->
    <section class="pb-20 border-t border-zinc-100 dark:border-zinc-800/50 pt-16 animate-slide-up" style="animation-delay: 300ms">
      <h2 class="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-12">Selected Works & Projects</h2>

      <div class="grid grid-cols-1 gap-1">
        <div v-for="(project, i) in projects" :key="i" class="group flex items-start justify-between py-6 border-b border-zinc-100 dark:border-zinc-800/50 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 px-4 -mx-4 rounded-xl transition-colors">
          <div class="max-w-xl">
            <h3 class="text-lg font-bold font-heading text-zinc-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{{ project.name }}</h3>
            <p class="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{{ project.description }}</p>
          </div>
          <div class="hidden sm:flex flex-wrap gap-2 justify-end shrink-0">
            <span v-for="tag in project.tags.slice(0, 2)" :key="tag" class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Connect -->
    <section class="pb-20 border-t border-zinc-100 dark:border-zinc-800/50 pt-16 animate-slide-up" style="animation-delay: 400ms">
      <h2 class="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.3em] mb-10">Access Terminal</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="mailto:letronghiep1985@gmail.com" class="flex items-center justify-between p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-indigo-500/30 transition-all group">
          <span class="font-bold font-heading text-zinc-900 dark:text-white">Email</span>
          <svg class="w-5 h-5 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <a href="https://github.com/hieple7985" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 hover:border-indigo-500/30 transition-all group">
          <span class="font-bold font-heading text-zinc-900 dark:text-white">GitHub</span>
          <svg class="w-5 h-5 text-zinc-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Archive',
  meta: [
    { name: 'description', content: 'Hiep Le - 20 Years of Engineering & Leadership' }
  ]
})

interface Principle {
  title: string
  desc: string
}

const principles: Principle[] = [
  { title: 'Simplicity First', desc: 'Solving complex problems with the most minimal, maintainable solutions.' },
  { title: 'System Thinking', desc: 'Designing components as part of a larger, resilient whole.' },
  { title: 'Human Centric', desc: 'Building software and teams that empower and serve people.' }
]

interface Job {
  role: string
  company: string
  period: string
  description: string
}

const experience: Job[] = [
  {
    role: 'Advisor & Solution Architect',
    company: 'TDT, Hanoi (Client: Singapore)',
    period: '2025 - Present',
    description: 'Advising on large-scale mobile trading platforms. Driving AI agent adoption and stability workstreams.'
  },
  {
    role: 'CIO, Digital Transformation',
    company: 'BBS, Vietnam',
    period: '2022 - Present',
    description: 'Spearheading centralized ERP development and supply chain automation across 50+ offices.'
  },
  {
    role: 'Sr. Consultant',
    company: 'Laboon.org, Vietnam & Singapore',
    period: '2020 - 2022',
    description: 'Strategy and technical leadership for blockchain products with 100K+ downloads.'
  },
  {
    role: 'Sr. Developer & Data Engineer',
    company: 'First Telecom GmbH, Germany',
    period: '2017 - 2020',
    description: 'Architecting Bitcoin payment systems and billing engines for European telecom clients.'
  }
]

interface Project {
  name: string
  description: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'BBS ERP & Retail',
    description: 'Centralized management for 50+ locations, unified CRM and supply chain.',
    tags: ['ERP', 'Java', 'SQL']
  },
  {
    name: 'Mobile Trading Engine',
    description: 'Multi-market platform serving SG, HK, and AU markets with high throughput.',
    tags: ['Fintech', 'Mobile']
  },
  {
    name: 'Blockchain DeFi Suite',
    description: 'DEX, NFT platforms, and DAO curation tools reaching significant scale.',
    tags: ['Web3', 'Solidity']
  }
]
</script>
