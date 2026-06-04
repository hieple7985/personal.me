<template>
  <div class="max-w-3xl mx-auto">
    <section class="flex flex-col md:flex-row items-center md:items-start gap-8 pb-16 animate-fade-in">
      <div class="relative group">
        <div class="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img src="/avatar.png" alt="Hiep Le" class="relative w-24 h-24 rounded-full border-2 border-white dark:border-zinc-800 object-cover shadow-xl" />
      </div>
      <div class="text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-3 tracking-tight">Hiep Le</h1>
        <p class="text-lg text-zinc-600 dark:text-zinc-400 font-medium">Sr. Technical Manager &amp; Solution Architect</p>
        <div class="flex items-center justify-center md:justify-start gap-2 mt-2 text-zinc-500 dark:text-zinc-500">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="text-sm">Vietnam</span>
        </div>
      </div>
    </section>

    <section class="pb-16 animate-slide-up" style="animation-delay: 100ms">
      <div class="prose prose-zinc dark:prose-invert max-w-none">
        <p class="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I'm a Senior IT Manager with 10+ years of leadership experience and 18 years as an engineer, including 8+ years focused on digital transformation, building teams, and delivering large-scale programs end-to-end.
        </p>
        <p class="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I have a strong background in <span class="text-indigo-600 dark:text-indigo-400 font-medium">fintech/trading platforms</span> and <span class="text-indigo-600 dark:text-indigo-400 font-medium">mobile (Android &amp; iOS)</span>, alongside hands-on QA automation. I've worked across ERP implementation, CRM/CMS systems, and legacy refactoring in fintech, telecom, retail, supply chain, and services.
        </p>
        <p class="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          I also run some learning projects on <a href="https://www.kaggle.com/solokop" class="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors font-medium">Kaggle</a> focusing on AI and machine learning. This site is where I share technical writing, book notes, and tools I build along the way.
        </p>
      </div>
    </section>

    <section class="pb-16 border-t border-zinc-200 dark:border-zinc-800/50 pt-12 animate-slide-up" style="animation-delay: 200ms">
      <h2 class="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-8">Selected Experience</h2>

      <div class="space-y-12">
        <div v-for="(job, i) in experience" :key="i" class="group relative">
          <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
            <h3 class="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{{ job.role }}</h3>
            <span class="text-zinc-400 dark:text-zinc-600 text-sm font-medium">{{ job.period }}</span>
          </div>
          <p class="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">{{ job.company }}</p>
          <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{ job.description }}</p>
        </div>
      </div>
    </section>

    <section class="pb-16 border-t border-zinc-200 dark:border-zinc-800/50 pt-12 animate-slide-up" style="animation-delay: 300ms">
      <h2 class="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-8">Projects & Initiatives</h2>

      <div class="grid grid-cols-1 gap-6">
        <div v-for="(project, i) in projects" :key="i" class="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-indigo-500/50 transition-all group">
          <h3 class="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{{ project.name }}</h3>
          <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-16 border-t border-zinc-200 dark:border-zinc-800/50 pt-12 animate-slide-up" style="animation-delay: 400ms">
      <h2 class="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-8">Expertise</h2>
      <div class="flex flex-wrap gap-3">
        <span v-for="skill in skills" :key="skill" class="px-4 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 hover:border-indigo-500/30 transition-all cursor-default">
          {{ skill }}
        </span>
      </div>
    </section>

    <section class="pb-16 border-t border-zinc-200 dark:border-zinc-800/50 pt-12 animate-slide-up" style="animation-delay: 500ms">
      <h2 class="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] mb-8">Connect</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a href="mailto:letronghiep1985@gmail.com" class="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all group">
          <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span class="font-medium">Email</span>
        </a>
        <a href="https://github.com/hieple7985" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 transition-all group">
          <div class="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </div>
          <span class="font-medium">GitHub</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home',
  meta: [
    { name: 'description', content: 'Hiep Le - Senior IT Manager & Solution Architect' }
  ]
})

const experience = [
  {
    role: 'Advisor & Solution Architect',
    company: 'TDT, Hanoi (Client: Singapore)',
    period: 'Apr 2025 - Present',
    description: 'Advising delivery leadership and engineering teams on a large mobile trading platform (multi-market). Driving AI agent adoption for engineering productivity, leading QA automation workstream, and troubleshooting critical production stability issues.'
  },
  {
    role: 'CIO, Digital Transformation',
    company: 'BBS, Vietnam',
    period: '2022 - Present',
    description: 'Spearheaded centralized ERP system development integrating retail and supply chain management. Led end-to-end project lifecycle, optimized SQL performance by 30%, managed cross-functional team across 50+ offices.'
  },
  {
    role: 'Sr. Consultant',
    company: 'Laboon.org, Vietnam & Singapore',
    period: '2020 - 2022',
    description: 'Covered strategy, project management, technical leadership, and solution architecture for blockchain projects and digital transformation initiatives. Led development of products with 100K+ downloads.'
  },
  {
    role: 'Sr. Developer & Data Engineer',
    company: 'First Telecom GmbH, Germany',
    period: '2017 - 2022',
    description: 'Designed and maintained complex applications including Bitcoin Payment App, billing systems, and integrated management platforms (CPF, Voice App, CCQ). Full-stack with Java, PHP, JavaScript, PostgreSQL.'
  }
]

const projects = [
  {
    name: 'BBS ERP & Retail Management',
    description: 'Centralized ERP system integrating retail, supply chain, and warehouse management across 50+ offices. Optimized SQL performance by 30%, unified CRM, POS, and inventory modules.',
    tags: ['ERP', 'Java', 'PostgreSQL', 'CRM', 'POS']
  },
  {
    name: 'BBQ FoodTech Platform',
    description: 'Full-suite F&B management platform including POS, CRM, shipment & delivery, and inventory tracking for food retail chains.',
    tags: ['FoodTech', 'POS', 'CRM', 'Logistics']
  },
  {
    name: 'Multi-Market Mobile Trading Platform',
    description: 'Large-scale mobile trading platform serving multiple markets (SG, HK, JB, AU). Led QA automation workstream and drove AI agent adoption for engineering productivity.',
    tags: ['Fintech', 'Mobile', 'QA Automation', 'AI Agents']
  },
  {
    name: 'Blockchain & Web3 Products',
    description: 'Built and contributed to blockchain products including decentralized exchanges, NFT platforms, DAO curation tools, and smart contract auditing (Immunefi). Products reached 100K+ downloads.',
    tags: ['Blockchain', 'Web3', 'DeFi', 'Smart Contracts']
  },
  {
    name: 'Forex Broker & CMS Platform',
    description: 'Built forex broker systems and CMS platforms for Japanese financial clients, including trading chart engines, reporting tools, and automation systems.',
    tags: ['Forex', 'Finance', 'Java', 'TradingView']
  },
  {
    name: 'Bitcoin Payment & Billing Systems',
    description: 'Designed Bitcoin Payment App, CPF billing engine, voice application platform, and call center queue management for European telecom clients.',
    tags: ['Bitcoin', 'Telecom', 'Java', 'PHP', 'Billing']
  },
  {
    name: 'Kaggle ML & AI Projects',
    description: 'Experimenting with lottery prediction systems, AI agents, computer vision, and automated video generation. Active Kaggle contributor exploring ML applications.',
    tags: ['Machine Learning', 'Python', 'Kaggle', 'AI']
  },
  {
    name: 'Manga Mobile Reader',
    description: 'Cross-platform manga/comic reader mobile application for the Japanese market.',
    tags: ['Mobile', 'Android', 'iOS', 'Manga']
  }
]

const education = [
  {
    degree: 'BSc in Information Technology',
    school: 'University of Greenwich (UK)',
    period: '2009 - 2010'
  }
]

const skills = [
  'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL',
  'React', 'Vue.js', 'React Native', 'Node.js', 'Django',
  'Selenium', 'Appium', 'Robot Framework', 'Postman',
  'AWS', 'GCP', 'PostgreSQL', 'MySQL', 'Firebase',
  'Agile', 'Scrum', 'Project Management', 'Solution Architecture',
  'Digital Transformation', 'Team Building'
]
</script>