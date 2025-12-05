<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Installe ton chien',
    description: 'La cabine accueille tous les gabarits en toute sécurité.',
    icon: '🐕'
  },
  {
    number: '02',
    title: 'Tu laves ton chien',
    description: 'C\'est toi qui laves ton chien avec la lance. Simple et rapide !',
    icon: '🚿',
    highlighted: true,
    details: [
      'Prends la lance dans la cabine',
      'Lave ton chien toi-même',
      'Eau chaude + shampoing inclus'
    ]
  },
  {
    number: '03',
    title: 'Séchage intégré',
    description: 'Ton chien ressort propre ET sec.',
    icon: '💨'
  },
  {
    number: '04',
    title: 'Paiement simple',
    description: 'CB, mobile ou QR code. Pas de contrainte.',
    icon: '💳'
  }
]
</script>

<template>
  <section id="comment-ca-marche" class="py-20 bg-slate-50 scroll-mt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="font-semibold text-sm uppercase tracking-wider mb-3 block" style="color: #3a82ba;">
          Simple comme bonjour
        </span>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
          Comment fonctionne DOGGYWASH ?
        </h2>
        <p class="text-lg text-navy-600">
          4 étapes, 10 minutes, un chien propre.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <div 
          v-for="(step, index) in steps" 
          :key="index"
          :class="[
            'rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300',
            step.highlighted 
              ? 'bg-gradient-to-br from-blue-50 to-sky-50 border-2 border-blue-200 ring-2 ring-blue-100' 
              : 'bg-white'
          ]"
        >
          <div 
            :class="[
              'text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4',
              step.highlighted ? 'shadow-md' : ''
            ]"
            :style="step.highlighted ? 'background: linear-gradient(135deg, #3a82ba 0%, #0A2540 100%);' : 'background: #0A2540;'"
          >
            Étape {{ step.number }}
          </div>
          <div 
            :class="[
              'w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform',
              step.highlighted ? 'bg-gradient-to-br from-blue-100 to-sky-100 shadow-md scale-110' : 'bg-slate-100'
            ]"
          >
            {{ step.icon }}
          </div>
          <h3 
            :class="[
              'font-display font-bold mb-3',
              step.highlighted ? 'text-xl text-navy-900' : 'text-lg text-navy-900'
            ]"
          >
            {{ step.title }}
          </h3>
          <p 
            :class="[
              'mb-3',
              step.highlighted ? 'text-navy-700 text-base font-medium leading-relaxed' : 'text-navy-600 text-sm'
            ]"
          >
            {{ step.description }}
          </p>
          
          <!-- Details pour l'étape 2 (highlighted) -->
          <div v-if="step.highlighted && step.details" class="mt-4 pt-4 border-t border-blue-200">
            <ul class="space-y-2">
              <li 
                v-for="(detail, idx) in step.details" 
                :key="idx"
                class="flex items-start gap-2 text-sm text-navy-700"
              >
                <span class="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                  {{ idx + 1 }}
                </span>
                <span class="flex-1 leading-relaxed">{{ detail }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Before/After Section -->
      <div class="relative">
        <!-- Background decoration -->
        <div class="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-green-50 rounded-3xl -z-10"></div>
        
        <div class="py-12 px-6 lg:px-12">
          <!-- Section title -->
          <div class="text-center mb-10">
            <h3 class="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-2">
              La différence est claire
            </h3>
            <p class="text-navy-600">
              Fini la galère à la maison, place à la simplicité.
            </p>
          </div>

          <!-- Comparison Cards -->
          <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <!-- AVANT -->
            <div class="group">
              <div class="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <!-- Image -->
                <div class="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/img/chien-apres.png" 
                    alt="Lavage de chien à la maison - galère et désordre" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <!-- Badge -->
                <div class="absolute top-4 left-4">
                  <span class="bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    AVANT
                  </span>
                </div>
                
                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 class="font-display text-xl font-bold mb-2">À la maison</h4>
                  <ul class="text-sm opacity-90 space-y-1">
                    <li>😫 Boue et eau partout dans la salle de bain</li>
                    <li>😤 Poils collés sur tous les murs</li>
                    <li>⏰ 1 heure de nettoyage après</li>
                    <li>😰 Stress et frustration garantis</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- APRÈS -->
            <div class="group">
              <div class="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ring-4 ring-green-400/50">
                <!-- Image -->
                <div class="aspect-[4/3] overflow-hidden bg-sky-100">
                  <img 
                    src="/img/chien-avant.png" 
                    alt="Machine DOGGYWASH moderne - lavage facile et propre" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <!-- Overlay gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <!-- Badge -->
                <div class="absolute top-4 left-4">
                  <span class="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    APRÈS
                  </span>
                </div>

                <!-- Recommended badge -->
                <div class="absolute top-4 right-4">
                  <span class="text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg" style="background: #0A2540;">
                    ⭐ Recommandé
                  </span>
                </div>
                
                <!-- Content -->
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 class="font-display text-xl font-bold mb-2">Avec DOGGYWASH</h4>
                  <ul class="text-sm opacity-90 space-y-1">
                    <li>✨ Machine moderne et professionnelle</li>
                    <li>😌 Chien calme et détendu</li>
                    <li>🏠 Ta maison reste intacte</li>
                    <li>💰 Seulement 10 € le lavage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- CTA under comparison -->
          <div class="text-center mt-10">
            <a 
              href="#coupon" 
              class="inline-flex items-center gap-2 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              style="background: #0A2540;"
            >
              <span>Je veux essayer DOGGYWASH</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
