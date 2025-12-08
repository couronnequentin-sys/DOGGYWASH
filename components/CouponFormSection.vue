<script setup lang="ts">
const form = reactive({
  nom: '',
  email: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const errorMessage = ref('')

const { trackLead, trackCompleteRegistration } = useFacebookPixel()

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/coupon', {
      method: 'POST',
      body: {
        nom: form.nom,
        email: form.email
      }
    })

    if (response.success) {
      isSubmitted.value = true
      
      // Tracker l'événement Facebook Pixel
      trackLead({
        content_name: 'Coupon -50% DOGGYWASH',
        content_category: 'Coupon',
        value: 5, // Valeur estimée du coupon (50% de 10€ = 5€)
        currency: 'EUR'
      })
      
      trackCompleteRegistration({
        content_name: 'Inscription coupon',
        status: true
      })
    } else {
      errorMessage.value = response.message || 'Une erreur est survenue'
    }
  } catch (error: any) {
    console.error('Erreur soumission:', error)
    errorMessage.value = error.data?.message || error.message || 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="coupon" class="py-20 scroll-mt-16" style="background: #EFF6FB;">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div class="lg:grid lg:grid-cols-5">
          <!-- Left - Info -->
          <div class="lg:col-span-2 text-white p-8 lg:p-10" style="background: #0A2540;">
            <div class="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style="background: rgba(239, 246, 251, 0.2);">
              <span class="w-2 h-2 rounded-full animate-pulse" style="background: #EFF6FB;"></span>
              <span class="text-sm font-medium" style="color: #EFF6FB;">Offre limitée</span>
            </div>

            <h2 class="font-display text-3xl font-bold mb-4">
              Reçois ton coupon <span style="color: #8dbdde;">-50%</span>
            </h2>

            <p class="mb-8" style="color: #b9d5eb;">
              Inscris-toi et reçois ton coupon par email, valable dès l'ouverture de DOGGYWASH.
            </p>

            <div class="rounded-xl p-4 mb-6" style="background: rgba(0,0,0,0.2);">
              <p class="font-semibold">⏱ 100 places seulement</p>
              <p class="text-sm" style="color: #8dbdde;">Ne rate pas cette offre</p>
            </div>

            <ul class="space-y-3 text-sm" style="color: #b9d5eb;">
              <li class="flex items-center gap-2">
                <span style="color: #8dbdde;">✓</span> Coupon envoyé par email
              </li>
              <li class="flex items-center gap-2">
                <span style="color: #8dbdde;">✓</span> Valable dès l'ouverture
              </li>
              <li class="flex items-center gap-2">
                <span style="color: #8dbdde;">✓</span> Sans engagement
              </li>
            </ul>
          </div>

          <!-- Right - Form -->
          <div class="lg:col-span-3 p-8 lg:p-10">
            <!-- Success -->
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">✓</span>
              </div>
              <h3 class="font-display text-2xl font-bold mb-2" style="color: #0A2540;">
                C'est noté ! 🎉
              </h3>
              <p style="color: #486581;" class="mb-3">
                Tu vas recevoir ton coupon par email d'ici quelques minutes.
              </p>
              <p class="text-sm font-medium" style="color: #3a82ba;">
                📧 Pense à vérifier tes spams si tu ne le vois pas !
              </p>
            </div>

            <!-- Form -->
            <div v-else>
              <h3 class="font-display text-xl font-bold mb-2" style="color: #0A2540;">
                Inscris-toi maintenant
              </h3>
              <p class="mb-6" style="color: #486581;">
                30 secondes pour recevoir ton coupon.
              </p>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <div>
                  <label for="nom" class="block text-sm font-medium mb-1" style="color: #0A2540;">
                    Ton prénom
                  </label>
                  <input
                    id="nom"
                    v-model="form.nom"
                    type="text"
                    required
                    placeholder="Ex: Marie"
                    class="w-full px-4 py-3 border rounded-xl transition-all"
                    style="background: #EFF6FB; border-color: #b9d5eb;"
                  >
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium mb-1" style="color: #0A2540;">
                    Ton email
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="Ex: marie@email.com"
                    class="w-full px-4 py-3 border rounded-xl transition-all"
                    style="background: #EFF6FB; border-color: #b9d5eb;"
                  >
                </div>

                <!-- Error message -->
                <div v-if="errorMessage" class="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                  <p class="text-red-600 text-sm">{{ errorMessage }}</p>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  style="background: #0A2540;"
                >
                  <span v-if="isSubmitting">Envoi en cours...</span>
                  <span v-else>Recevoir mon coupon -50%</span>
                </button>

                <p class="text-center text-xs" style="color: #486581;">
                  🔒 Zéro spam. Désinscription en un clic.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
