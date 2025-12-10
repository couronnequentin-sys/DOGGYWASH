<script setup lang="ts">
useHead({
  title: 'Merci ! – DOGGYWASH',
  meta: [
    { 
      name: 'description', 
      content: 'Merci de votre inscription ! Votre coupon -50% vous sera envoyé par email.' 
    }
  ]
})

const route = useRoute()
const nom = route.query.nom as string || ''

// Tracker PageView sur la page de remerciement
onMounted(() => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
})
</script>

<template>
  <div>
    <HeaderNav />
    
    <main class="pt-24 lg:pt-32 pb-16 lg:pb-24 min-h-screen flex items-center" style="background: linear-gradient(180deg, #EFF6FB 0%, #ffffff 100%);">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div class="text-center p-8 lg:p-12">
            <!-- Success Icon -->
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-4xl">✓</span>
            </div>

            <!-- Title -->
            <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style="color: #0A2540;">
              Merci{{ nom ? ` ${nom}` : '' }} ! 🎉
            </h1>

            <!-- Subtitle -->
            <p class="text-lg mb-8" style="color: #486581;">
              Ton inscription est confirmée !
            </p>

            <!-- Main Message -->
            <div class="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
              <div class="max-w-2xl mx-auto">
                <h2 class="font-display text-2xl font-bold mb-4" style="color: #0A2540;">
                  Ton coupon -50% est en route ! 📧
                </h2>
                <p class="text-base mb-6" style="color: #486581;">
                  Tu vas recevoir ton coupon par email d'ici quelques minutes. Il sera valable dès l'ouverture de DOGGYWASH à Villefranche-sur-Saône.
                </p>
                
                <!-- Important Note -->
                <div class="bg-white rounded-xl p-4 mb-6 border border-blue-200">
                  <p class="text-sm font-medium" style="color: #3a82ba;">
                    📧 <strong>Important :</strong> Pense à vérifier tes spams si tu ne le vois pas dans ta boîte de réception !
                  </p>
                </div>

                <!-- What's Next -->
                <div class="text-left">
                  <h3 class="font-display text-xl font-bold mb-4" style="color: #0A2540;">
                    Prochaines étapes :
                  </h3>
                  <ul class="space-y-3 text-left" style="color: #486581;">
                    <li class="flex items-start gap-3">
                      <span class="text-2xl flex-shrink-0">1️⃣</span>
                      <span>Vérifie ta boîte email (et tes spams)</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-2xl flex-shrink-0">2️⃣</span>
                      <span>Garde précieusement ton code coupon</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="text-2xl flex-shrink-0">3️⃣</span>
                      <span>On te tiendra au courant dès l'ouverture de DOGGYWASH !</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink 
                to="/" 
                class="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
                style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%);"
              >
                <span>Retour à l'accueil</span>
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </NuxtLink>
              
              <NuxtLink 
                to="/faq" 
                class="inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg border-2"
                style="color: #0A2540; border-color: #0A2540;"
              >
                <span>Questions fréquentes</span>
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </NuxtLink>
            </div>

            <!-- Trust Indicators -->
            <div class="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm" style="color: #486581;">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" style="color: #0A2540;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Email envoyé</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" style="color: #0A2540;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Zéro spam</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5" style="color: #0A2540;" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span>Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

