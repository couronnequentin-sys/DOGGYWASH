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
  <section id="avantages" class="py-20 bg-white scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="font-semibold text-sm uppercase tracking-wider mb-3 block" style="color: #3a82ba;">
          Les avantages
        </span>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
          Pourquoi DOGGYWASH va te simplifier la vie ?
        </h2>
        <p class="text-lg text-navy-600 max-w-2xl mx-auto">
          On a pensé à tout pour que laver ton chien devienne simple et rapide.
        </p>
      </div>

      <!-- Benefits Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(benefit, index) in benefits" 
          :key="index"
          class="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
        >
          <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl mb-6 shadow-sm">
            {{ benefit.icon }}
          </div>
          <h3 class="font-display text-xl font-bold text-navy-900 mb-3">
            {{ benefit.title }}
          </h3>
          <p class="text-navy-600">
            {{ benefit.description }}
          </p>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <a 
          href="#coupon" 
          class="group inline-flex items-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
          style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%);"
        >
          <!-- Background animation on hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <!-- Discount badge -->
          <span class="relative z-10 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold border border-white/30">
            -50%
          </span>
          
          <!-- Text -->
          <span class="relative z-10">Récupérer mon coupon</span>
          
          <!-- Arrow icon -->
          <svg class="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        
        <!-- Trust indicator -->
        <p class="mt-4 text-sm" style="color: #486581;">
          <span class="inline-flex items-center gap-1">
            <svg class="w-4 h-4" style="color: #3a82ba;" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            Sans engagement • Zéro spam
          </span>
        </p>
      </div>
    </div>
  </section>
</template>
