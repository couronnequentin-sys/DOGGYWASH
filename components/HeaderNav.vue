<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <img src="/favicon.svg" alt="DOGGYWASH" class="w-10 h-10 lg:w-11 lg:h-11" />
          <div class="flex flex-col">
            <span class="font-display font-bold text-xl tracking-wide text-navy-900">
              DOGGYWASH
            </span>
            <span class="hidden lg:block text-[10px] text-navy-500 tracking-wider -mt-0.5">
              Propre. Rapide. Sans stress.
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink to="/#avantages" class="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            Avantages
          </NuxtLink>
          <NuxtLink to="/#comment-ca-marche" class="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            Comment ça marche
          </NuxtLink>
          <NuxtLink to="/faq" class="text-navy-600 hover:text-navy-900 font-medium transition-colors">
            FAQ
          </NuxtLink>
          <a 
            href="#coupon" 
            class="text-white font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg"
            style="background: #0A2540;"
          >
            Mon coupon -50%
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu" 
          class="md:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-navy-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-slate-100">
        <div class="flex flex-col gap-2">
          <NuxtLink 
            to="/#avantages" 
            @click="closeMenu"
            class="px-4 py-3 text-navy-700 hover:bg-slate-50 rounded-lg font-medium"
          >
            Avantages
          </NuxtLink>
          <NuxtLink 
            to="/#comment-ca-marche" 
            @click="closeMenu"
            class="px-4 py-3 text-navy-700 hover:bg-slate-50 rounded-lg font-medium"
          >
            Comment ça marche
          </NuxtLink>
          <NuxtLink 
            to="/faq" 
            @click="closeMenu"
            class="px-4 py-3 text-navy-700 hover:bg-slate-50 rounded-lg font-medium"
          >
            FAQ
          </NuxtLink>
          <a 
            href="#coupon" 
            @click="closeMenu"
            class="mt-2 text-white font-semibold px-5 py-3 rounded-full text-center"
            style="background: #0A2540;"
          >
            Je veux mon coupon -50%
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
