<script setup lang="ts">
// Angle ÉCONOMIE - Version GRAPHIQUE (A/B Test)
// Visuel : Comparaison de prix sans photo de chien
</script>

<template>
  <section class="pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden" style="background: linear-gradient(180deg, #EFF6FB 0%, #ffffff 100%);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <!-- Text Content (identique) -->
        <div class="text-center lg:text-left mb-10 lg:mb-0">
          <!-- Pre-header -->
          <div class="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full animate-pulse" style="background: #0A2540;"></span>
            <span class="text-sm font-medium" style="color: #0A2540;">
              💰 Bientôt à Villefranche-sur-Saône
            </span>
          </div>

          <!-- Headline -->
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color: #0A2540;">
            Ton chien propre pour 
            <span style="color: #3a82ba;">10€ au lieu de 50€</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style="color: #486581;">
            <strong style="color: #0A2540;">5x moins cher qu'un toiletteur.</strong> 
            Shampoing pro inclus, séchage inclus. Pas d'équipement à acheter, pas de produits à stocker.
          </p>

          <!-- Offer Box -->
          <div class="relative rounded-2xl p-6 mb-8 max-w-lg mx-auto lg:mx-0 overflow-hidden shadow-xl" style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%);">
            <div class="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2" style="background: radial-gradient(circle, #EFF6FB 0%, transparent 70%);"></div>
            
            <div class="relative flex flex-col sm:flex-row items-center gap-5">
              <div class="flex-shrink-0 rounded-2xl px-6 py-4 shadow-lg" style="background: #EFF6FB;">
                <span class="text-4xl font-display font-bold" style="color: #0A2540;">-5€</span>
              </div>
              
              <div class="text-center sm:text-left">
                <p class="text-white font-bold text-xl mb-1">
                  Économise sur ton 1er lavage
                </p>
                <div class="flex items-center justify-center sm:justify-start gap-2">
                  <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  <span class="text-slate-300 text-sm">
                    100 places seulement
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <a 
            href="#coupon" 
            class="inline-flex items-center gap-2 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            style="background: #0A2540;"
          >
            <span>J'économise 5€ maintenant</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm" style="color: #486581;">
            <div class="flex items-center gap-2">
              <span style="color: #0A2540;">💰</span>
              <span>5x moins cher</span>
            </div>
            <div class="flex items-center gap-2">
              <span style="color: #0A2540;">🧴</span>
              <span>Shampoing inclus</span>
            </div>
          </div>
        </div>

        <!-- ============================================== -->
        <!-- VISUEL GRAPHIQUE : Comparaison de prix        -->
        <!-- ============================================== -->
        <div class="relative mt-8 lg:mt-0">
          <!-- Main visual card avec comparaison de prix -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl p-8 lg:p-12" style="background: linear-gradient(145deg, #0A2540 0%, #1a4a6e 50%, #0A2540 100%);">
            
            <!-- Decorative circles -->
            <div class="absolute top-10 left-10 w-16 h-16 rounded-full opacity-10 animate-pulse" style="background: #EFF6FB;"></div>
            <div class="absolute top-20 right-16 w-8 h-8 rounded-full opacity-15 animate-pulse" style="background: #EFF6FB;"></div>
            <div class="absolute bottom-32 left-8 w-12 h-12 rounded-full opacity-10 animate-pulse" style="background: #EFF6FB;"></div>
            <div class="absolute bottom-16 right-10 w-20 h-20 rounded-full opacity-5 animate-pulse" style="background: #EFF6FB;"></div>

            <!-- Price comparison content -->
            <div class="relative z-10 text-center">
              <!-- Toiletteur price (crossed out) -->
              <div class="mb-6">
                <p class="text-slate-400 text-sm uppercase tracking-widest mb-2">Toiletteur classique</p>
                <div class="relative inline-block">
                  <span class="text-6xl lg:text-7xl font-display font-bold text-slate-500">50€</span>
                  <div class="absolute top-1/2 left-0 right-0 h-1 bg-red-500 -rotate-12 transform"></div>
                </div>
              </div>

              <!-- VS divider -->
              <div class="flex items-center justify-center gap-4 my-6">
                <div class="h-px flex-1 max-w-16" style="background: rgba(239,246,251,0.3);"></div>
                <span class="text-slate-400 font-bold text-lg">VS</span>
                <div class="h-px flex-1 max-w-16" style="background: rgba(239,246,251,0.3);"></div>
              </div>

              <!-- DOGGYWASH price -->
              <div class="mb-6">
                <p class="text-slate-300 text-sm uppercase tracking-widest mb-2">DOGGYWASH</p>
                <span class="text-7xl lg:text-8xl font-display font-bold text-white">10€</span>
              </div>

              <!-- Savings highlight -->
              <div class="inline-flex items-center gap-3 rounded-full px-6 py-3 mt-4" style="background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.3);">
                <svg class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-green-400 font-bold text-lg">Tu économises 40€</span>
              </div>

              <!-- What's included -->
              <div class="grid grid-cols-2 gap-4 mt-8 text-left">
                <div class="flex items-center gap-2 text-slate-300 text-sm">
                  <span class="text-green-400">✓</span>
                  <span>Shampoing pro</span>
                </div>
                <div class="flex items-center gap-2 text-slate-300 text-sm">
                  <span class="text-green-400">✓</span>
                  <span>Séchage inclus</span>
                </div>
                <div class="flex items-center gap-2 text-slate-300 text-sm">
                  <span class="text-green-400">✓</span>
                  <span>Sans rendez-vous</span>
                </div>
                <div class="flex items-center gap-2 text-slate-300 text-sm">
                  <span class="text-green-400">✓</span>
                  <span>10 min chrono</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Floating badge -->
          <div class="absolute -bottom-4 left-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: #10b981;">
                <span class="text-2xl">💸</span>
              </div>
              <div>
                <p class="font-bold" style="color: #0A2540;">-80%</p>
                <p class="text-sm" style="color: #486581;">vs toiletteur</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

