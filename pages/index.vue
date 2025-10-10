<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div class="container mx-auto max-w-5xl px-4 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-on-scroll">
          Hi, I'm Hiep Le
        </h1>
        <p class="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-on-scroll" style="animation-delay: 0.2s">
          Full-stack developer passionate about web technologies, machine learning, and building useful digital products.
        </p>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-12 max-w-2xl mx-auto animate-on-scroll" style="animation-delay: 0.4s">
          Welcome to my personal space where I share technical insights, book recommendations, and ML tools.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll" style="animation-delay: 0.6s">
          <NuxtLink 
            to="/blog" 
            class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Read My Blog
          </NuxtLink>
          <NuxtLink 
            to="/tools" 
            class="px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 font-medium text-lg transform hover:scale-105"
          >
            Explore ML Tools
          </NuxtLink>
        </div>
      </div>
      
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
      </div>
    </section>

    <!-- Quick Access Grid -->
    <section class="container mx-auto max-w-5xl px-4 py-16">
      <h2 class="text-3xl font-bold text-center mb-12 text-neutral-800 dark:text-neutral-200">
        Explore & Learn
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-gray-700 animate-on-scroll" style="animation-delay: 0.1s">
          <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">📝</span>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-neutral-800 dark:text-neutral-200">Blog</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Technical articles, tutorials, and thoughts on web development</p>
          <NuxtLink to="/blog" class="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
            Read Posts →
          </NuxtLink>
        </div>

        <div class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-gray-700 animate-on-scroll" style="animation-delay: 0.2s">
          <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">📚</span>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-neutral-800 dark:text-neutral-200">Guides</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Step-by-step technical guides and best practices</p>
          <NuxtLink to="/guides" class="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
            View Guides →
          </NuxtLink>
        </div>

        <div class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-gray-700 animate-on-scroll" style="animation-delay: 0.3s">
          <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">📖</span>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-neutral-800 dark:text-neutral-200">Books</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Curated book recommendations for developers</p>
          <NuxtLink to="/books" class="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
            Browse Books →
          </NuxtLink>
        </div>

        <div class="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-200 dark:border-gray-700 animate-on-scroll" style="animation-delay: 0.4s">
          <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <span class="text-2xl">🤖</span>
          </div>
          <h3 class="font-semibold text-lg mb-2 text-neutral-800 dark:text-neutral-200">ML Tools</h3>
          <p class="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Machine learning tools and experiments</p>
          <NuxtLink to="/tools" class="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline">
            Try Tools →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-neutral-50 dark:bg-gray-800/50 py-16">
      <div class="container mx-auto max-w-5xl px-4 text-center">
        <h2 class="text-3xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
          Let's Connect
        </h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
          Have questions or want to collaborate? I'm always interested in discussing new ideas and opportunities.
        </p>
        <div class="flex justify-center gap-4">
          <a href="mailto:hiep.le@example.com" class="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium">
            Get in Touch
          </a>
          <a href="https://github.com/hieple" target="_blank" rel="noopener" class="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors font-medium">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Home page placeholder for the new framework structure.
</script>
