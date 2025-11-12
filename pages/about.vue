<template>
  <div class="space-y-8">
    <!-- Header -->
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">About Me</h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-400">
        Software Engineer | ML Enthusiast | 18+ Years Experience
      </p>
    </div>

    <!-- Profile Summary -->
    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
      <h2 class="text-2xl font-bold mb-4">👋 Hi, I'm Hiep Le</h2>
      <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
        A passionate software engineer with over 18 years of experience in full-stack development, 
        machine learning, and system architecture. I specialize in building scalable applications 
        and exploring cutting-edge AI technologies.
      </p>
    </div>

    <!-- Contact Info -->
    <div class="grid md:grid-cols-2 gap-4">
      <a 
        href="mailto:letronghiep1985@gmail.com"
        class="flex items-center gap-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
      >
        <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
        </svg>
        <span>letronghiep1985@gmail.com</span>
      </a>
      
      <a 
        href="https://github.com/hieple7985"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-3 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
      >
        <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
        </svg>
        <span>github.com/hieple7985</span>
      </a>
    </div>

    <!-- Experience Timeline -->
    <div>
      <h2 class="text-3xl font-bold mb-6">💼 Career Timeline</h2>
      
      <div class="space-y-6">
        <!-- Timeline Item Template - Add your actual experience here -->
        <div class="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400">
          <div class="absolute left-0 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -ml-[9px]"></div>
          <div class="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Senior Software Engineer</h3>
              <span class="text-sm text-neutral-500 dark:text-neutral-400">2020 - Present</span>
            </div>
            <p class="text-blue-600 dark:text-blue-400 font-medium mb-3">Company Name</p>
            <ul class="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300">
              <li>Led development of scalable microservices architecture</li>
              <li>Implemented ML models for predictive analytics</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
        </div>

        <!-- Add more timeline items -->
        <div class="relative pl-8 pb-8 border-l-2 border-blue-600 dark:border-blue-400">
          <div class="absolute left-0 top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full -ml-[9px]"></div>
          <div class="bg-white dark:bg-neutral-800 rounded-lg p-6 shadow-md">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold">Full Stack Developer</h3>
              <span class="text-sm text-neutral-500 dark:text-neutral-400">2015 - 2020</span>
            </div>
            <p class="text-blue-600 dark:text-blue-400 font-medium mb-3">Previous Company</p>
            <ul class="list-disc list-inside space-y-1 text-neutral-600 dark:text-neutral-300">
              <li>Built responsive web applications using Vue.js and React</li>
              <li>Designed and implemented RESTful APIs</li>
              <li>Optimized database performance and queries</li>
            </ul>
          </div>
        </div>

        <!-- Placeholder for more experience -->
        <div class="relative pl-8 border-l-2 border-neutral-300 dark:border-neutral-700">
          <div class="absolute left-0 top-0 w-4 h-4 bg-neutral-300 dark:bg-neutral-700 rounded-full -ml-[9px]"></div>
          <div class="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg p-6 border-2 border-dashed border-neutral-300 dark:border-neutral-700">
            <p class="text-neutral-500 dark:text-neutral-400 italic">
              📝 More experience details coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills -->
    <div>
      <h2 class="text-3xl font-bold mb-6">🛠 Skills & Technologies</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
          <div class="text-2xl mb-2">⚡</div>
          <div class="font-semibold">Vue.js / Nuxt</div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
          <div class="text-2xl mb-2">🚀</div>
          <div class="font-semibold">Node.js</div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
          <div class="text-2xl mb-2">🤖</div>
          <div class="font-semibold">Machine Learning</div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800">
          <div class="text-2xl mb-2">🐍</div>
          <div class="font-semibold">Python</div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
      <h2 class="text-2xl font-bold mb-4">Let's Work Together!</h2>
      <p class="mb-6">Interested in collaborating or have a project in mind?</p>
      <a 
        href="mailto:letronghiep1985@gmail.com"
        class="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
      >
        Get in Touch
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Me - Hiep Le',
  meta: [
    { name: 'description', content: 'Learn about Hiep Le - Software Engineer with 18+ years of experience in full-stack development and machine learning.' }
  ]
})
</script>
