<script setup lang="ts">
// Angle RAPIDE - Focus sur la vitesse et l'efficacité
</script>

<template>
  <section class="pt-24 lg:pt-32 pb-16 lg:pb-24" style="background: linear-gradient(180deg, #EFF6FB 0%, #ffffff 100%);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left mb-10 lg:mb-0">
          <!-- Pre-header -->
          <div class="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full animate-pulse" style="background: #0A2540;"></span>
            <span class="text-sm font-medium" style="color: #0A2540;">
              ⚡ Ouverture imminente à Villefranche
            </span>
          </div>

          <!-- Headline -->
          <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="color: #0A2540;">
            Lave ton chien en 
            <span style="color: #3a82ba;">10 minutes chrono</span>
          </h1>

          <!-- Subheadline -->
          <p class="text-lg mb-8 max-w-lg mx-auto lg:mx-0" style="color: #486581;">
            Tu passes, tu laves, c'est fait. <strong style="color: #0A2540;">Sans rendez-vous, sans attente.</strong> 
            Ton chien ressort propre et sec pendant que ta salle de bain reste intacte.
          </p>

          <!-- Offer Box -->
          <div class="relative rounded-2xl p-6 mb-8 max-w-lg mx-auto lg:mx-0 overflow-hidden shadow-xl" style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%);">
            <div class="absolute top-0 right-0 w-40 h-40 rounded-full opacity-30 -translate-y-1/2 translate-x-1/2" style="background: radial-gradient(circle, #EFF6FB 0%, transparent 70%);"></div>
            
            <div class="relative flex flex-col sm:flex-row items-center gap-5">
              <div class="flex-shrink-0 rounded-2xl px-6 py-4 shadow-lg" style="background: #EFF6FB;">
                <span class="text-4xl font-display font-bold" style="color: #0A2540;">-50%</span>
              </div>
              
              <div class="text-center sm:text-left">
                <p class="text-white font-bold text-xl mb-1">
                  Sur ton premier lavage express
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
            <span>Je réserve mon créneau -50%</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <!-- Trust indicators -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm" style="color: #486581;">
            <div class="flex items-center gap-2">
              <span style="color: #0A2540;">⚡</span>
              <span>10 min top chrono</span>
            </div>
            <div class="flex items-center gap-2">
              <span style="color: #0A2540;">📅</span>
              <span>Sans rendez-vous</span>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/img/chien-propre-hero-fast.png" 
              alt="Chien propre rapidement avec DOGGYWASH" 
              class="w-full h-auto object-cover"
            />
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(10,37,64,0.2) 0%, transparent 100%);"></div>
          </div>
          
          <!-- Floating badge -->
          <div class="absolute -bottom-4 left-4 bg-white rounded-xl shadow-xl p-4 border border-slate-100">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: #0A2540;">
                <span class="text-2xl">⚡</span>
              </div>
              <div>
                <p class="font-bold" style="color: #0A2540;">Express</p>
                <p class="text-sm" style="color: #486581;">10 min montre en main</p>
              </div>
            </div>
          </div>

          <!-- Second floating badge -->
          <div class="absolute -top-2 -right-2 lg:top-4 lg:right-4 text-white rounded-full px-4 py-2 shadow-lg" style="background: #0A2540;">
            <span class="font-bold text-sm">Seulement 10€</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

