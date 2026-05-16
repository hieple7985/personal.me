<template>
  <div class="max-w-3xl mx-auto">
    <section class="flex flex-col md:flex-row items-start gap-8 pb-12">
      <img src="/avatar.png" alt="Hiep Le" class="w-20 h-20 rounded-full shrink-0" />
      <div>
        <h1 class="text-4xl font-bold text-white mb-2">Hiep Le</h1>
        <p class="text-zinc-400">Sr. Technical Manager &amp; Solution Architect</p>
        <p class="text-zinc-600 text-sm mt-1">Vietnam</p>
      </div>
    </section>

    <section class="pb-12 border-t border-zinc-800/50 pt-8">
      <p class="text-zinc-300 leading-relaxed mb-4">
        I'm a Senior IT Manager with 10+ years of leadership experience and 18 years as an engineer, including 8+ years focused on digital transformation, building teams, and delivering large-scale programs end-to-end.
      </p>
      <p class="text-zinc-300 leading-relaxed mb-4">
        I have a strong background in fintech/trading platforms and mobile (Android &amp; iOS), alongside hands-on QA automation (Selenium, Appium, Robot Framework, Postman). I've worked across ERP implementation, CRM/CMS systems, and legacy refactoring in fintech, telecom, retail, supply chain, and services.
      </p>
      <p class="text-zinc-300 leading-relaxed">
        I also run some learning projects on <a href="https://www.kaggle.com/solokop" class="text-indigo-400 hover:text-indigo-300 transition-colors">Kaggle</a> focusing on AI and machine learning. This site is where I share technical writing, book notes, and tools I build along the way.
      </p>
    </section>

    <section class="pb-12 border-t border-zinc-800/50 pt-8">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Experience</h2>

      <div v-for="(job, i) in experience" :key="i" class="mb-8 last:mb-0">
        <div class="flex items-start justify-between mb-1">
          <h3 class="text-white font-medium">{{ job.role }}</h3>
          <span class="text-zinc-600 text-sm shrink-0 ml-4">{{ job.period }}</span>
        </div>
        <p class="text-indigo-400 text-sm mb-2">{{ job.company }}</p>
        <p class="text-zinc-500 text-sm leading-relaxed">{{ job.description }}</p>
      </div>
    </section>

    <section class="pb-12 border-t border-zinc-800/50 pt-8">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Projects</h2>

      <div v-for="(project, i) in projects" :key="i" class="mb-6 last:mb-0">
        <h3 class="text-white font-medium mb-1">{{ project.name }}</h3>
        <p class="text-zinc-500 text-sm leading-relaxed mb-2">{{ project.description }}</p>
        <div class="flex flex-wrap gap-1.5">
          <span v-for="tag in project.tags" class="px-2 py-0.5 rounded text-xs bg-zinc-900 text-zinc-500 border border-zinc-800/50">{{ tag }}</span>
        </div>
      </div>
    </section>

    <section class="pb-12 border-t border-zinc-800/50 pt-8">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Education</h2>
      <div v-for="(edu, i) in education" :key="i" class="mb-6 last:mb-0">
        <h3 class="text-white font-medium">{{ edu.degree }}</h3>
        <p class="text-indigo-400 text-sm">{{ edu.school }}</p>
        <p class="text-zinc-600 text-sm">{{ edu.period }}</p>
      </div>
    </section>

    <section class="pb-12 border-t border-zinc-800/50 pt-8">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Skills</h2>
      <div class="flex flex-wrap gap-2">
        <span v-for="skill in skills" :key="skill" class="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400">
          {{ skill }}
        </span>
      </div>
    </section>

    <section class="pb-12 border-t border-zinc-800/50 pt-8">
      <h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-6">Connect</h2>
      <div class="space-y-3">
        <a href="mailto:letronghiep1985@gmail.com" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors group">
          <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          letronghiep1985@gmail.com
        </a>
        <a href="https://github.com/hieple7985" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors">
          <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
          github.com/hieple7985
        </a>
        <a href="https://linkedin.com/in/hieple7985" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors">
          <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          linkedin.com/in/hieple7985
        </a>
        <a href="https://www.kaggle.com/solokop" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-zinc-400 hover:text-indigo-400 transition-colors">
          <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.825 23.859c-.022.092-.117.141-.283.141h-4.139c-.166 0-.389-.064-.496-.149l-5.481-4.968c-.107-.085-.355-.184-.549-.219l-1.363-.256c-.194-.037-.355-.171-.355-.302v-2.389c0-.131.161-.268.355-.305l1.363-.256c.195-.035.442-.134.549-.219l5.481-4.968c.107-.085.33-.149.496-.149h4.139c.165 0 .26.049.283.141.022.091-.088.208-.239.312l-5.457 4.541c-.107.086-.192.252-.192.371v1.998c0 .119.085.285.192.371l5.457 4.541c.149.104.259.221.239.312" />
          </svg>
          kaggle.com/solokop
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