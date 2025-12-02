<script setup lang="ts">
const benefits = [
  {
    icon: '🏠',
    title: 'Plus de bazar à la maison',
    description: 'Fini les poils collés partout, l\'eau qui déborde et la salle de bain à nettoyer pendant une heure.',
  },
  {
    icon: '⚡',
    title: 'Gagne du temps',
    description: 'Lavage propre et rapide, sans rendez-vous, sans attendre. Tu passes quand ça t\'arrange.',
  },
  {
    icon: '💰',
    title: 'Moins cher qu\'un toilettage',
    description: 'Un résultat impeccable pour seulement 10 €. Pas de stress pour toi, pas de stress pour ton chien.',
  }
]
</script>

<template>
  <section id="avantages" class="py-12 sm:py-16 lg:py-20 bg-white scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-12 lg:mb-16">
        <span class="font-semibold text-xs sm:text-sm uppercase tracking-wider mb-3 block" style="color: #3a82ba;">
          Les avantages
        </span>
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-navy-900 mb-3 sm:mb-4 leading-tight px-2">
          Pourquoi DOGGYWASH va te simplifier la vie ?
        </h2>
        <p class="text-base sm:text-lg text-navy-600 max-w-2xl mx-auto px-4">
          On a pensé à tout pour que laver ton chien devienne simple et rapide.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index"
          class="group bg-gradient-to-br from-slate-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
        >
          <!-- Icon Container -->
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl mb-4 sm:mb-5 shadow-md group-hover:shadow-lg transition-shadow duration-300 group-hover:scale-110 flex items-center justify-center relative">
            <span class="text-2xl sm:text-3xl leading-[0] block" style="transform: translate(0, 0);">{{ benefit.icon }}</span>
          </div>
          
          <!-- Title -->
          <h3 class="font-display text-lg sm:text-xl font-bold text-navy-900 mb-2 sm:mb-3 leading-tight">
            {{ benefit.title }}
          </h3>
          
          <!-- Description -->
          <p class="text-sm sm:text-base text-navy-600 leading-relaxed">
            {{ benefit.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-10 sm:mt-12 lg:mt-16 text-center px-4">
        <a 
          href="#coupon" 
          class="group inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl relative overflow-hidden w-full sm:w-auto"
          style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%);"
        >
          <!-- Background animation on hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <!-- Discount badge -->
          <span class="relative z-10 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs sm:text-sm font-bold border border-white/30 whitespace-nowrap">
            -50%
          </span>
          
          <!-- Text -->
          <span class="relative z-10 whitespace-nowrap">Récupérer mon coupon</span>
          
          <!-- Arrow icon -->
          <svg class="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        <!-- Trust indicator -->
        <p class="mt-3 sm:mt-4 text-xs sm:text-sm" style="color: #486581;">
          <span class="inline-flex items-center gap-1">
            <svg class="w-3 h-3 sm:w-4 sm:h-4" style="color: #3a82ba;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="hidden sm:inline">Sans engagement • Zéro spam</span>
            <span class="sm:hidden">Sans engagement</span>
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
