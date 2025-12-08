<script setup lang="ts">
useHead({
  title: 'FAQ – DOGGYWASH | Questions fréquentes',
  meta: [
    { 
      name: 'description', 
      content: 'Toutes les réponses à tes questions sur DOGGYWASH : durée du lavage, types de chiens, paiement, shampoing utilisé...' 
    }
  ]
})

const faqs = [
  {
    question: 'Est-ce que mon chien va avoir peur de la machine ?',
    answer: 'La grande majorité des chiens s\'adaptent très bien ! La cabine DOGGYWASH est conçue pour être rassurante : pas de bruit assourdissant, eau à bonne température, et surtout tu restes juste à côté de ton chien pendant tout le processus. Tu peux lui parler, le rassurer, lui donner une friandise. Si c\'est sa première fois, on te conseille de le familiariser doucement : le faire entrer, lui donner une récompense, puis commencer le lavage. En général, dès la deuxième ou troisième fois, les chiens sont parfaitement à l\'aise.'
  },
  {
    question: 'Est-ce que je peux laver un grand chien ou un chiot ?',
    answer: 'Oui ! Notre cabine est conçue pour accueillir toutes les tailles de chiens, du petit Chihuahua au grand Dogue Allemand. Pour les chiots, on recommande d\'attendre qu\'ils aient au moins 3 mois et qu\'ils soient à jour de leurs vaccins. Le plus important, c\'est que ton chien soit à l\'aise avec l\'eau – si c\'est le cas, peu importe sa taille, DOGGYWASH s\'adapte.'
  },
  {
    question: 'Combien de temps dure un lavage complet ?',
    answer: 'Compte environ 10 minutes pour un lavage complet (shampoing + rinçage + séchage). Ça peut être un peu plus rapide pour un petit chien à poil court, ou légèrement plus long pour un gros toutou bien touffu. Dans tous les cas, c\'est beaucoup plus rapide qu\'un bain à la maison où tu dois en plus tout nettoyer après !'
  },
  {
    question: 'Faut-il prendre rendez-vous ?',
    answer: 'Non, c\'est justement l\'un des gros avantages de DOGGYWASH ! Tu viens quand tu veux, sans réservation. La station est accessible 7j/7, y compris le week-end. Tu arrives, tu laves, tu repars. Simple comme bonjour.'
  },
  {
    question: 'Quel type de shampoing est utilisé ?',
    answer: 'On utilise un shampoing doux, spécialement formulé pour les chiens, qui respecte le pH de leur peau. Il nettoie en profondeur tout en préservant les huiles naturelles du pelage. Le shampoing est efficace contre les odeurs et laisse un poil brillant et soyeux. Si ton chien a des problèmes de peau particuliers, on te conseille de consulter ton vétérinaire avant utilisation.'
  },
  {
    question: 'Est-ce que l\'eau est chaude ?',
    answer: 'Oui, l\'eau est tiède, à une température agréable pour ton chien (environ 35-38°C). Pas de risque de le geler en hiver ni de le brûler. La température est régulée automatiquement pour garantir un confort optimal pendant tout le lavage.'
  },
  {
    question: 'Comment je paie ?',
    answer: 'Tu as plusieurs options : carte bancaire (sans contact), paiement mobile (Apple Pay, Google Pay), ou via un QR code. Pas besoin de monnaie ni de jetons. Le paiement se fait directement sur la borne avant de lancer le lavage. C\'est rapide et sécurisé.'
  },
  {
    question: 'Où se trouve DOGGYWASH à Villefranche-sur-Saône ?',
    answer: 'L\'adresse exacte de notre station sera communiquée par email avant l\'ouverture officielle. En t\'inscrivant pour le coupon -50%, tu seras parmi les premiers informés du lieu précis et de la date d\'ouverture. On sera situé dans un endroit facilement accessible, avec du parking à proximité.'
  },
  {
    question: 'Est-ce que je dois apporter quelque chose ?',
    answer: 'Non, tout est fourni sur place : shampoing, eau chaude, séchage. Tu n\'as besoin de rien à part ton chien ! Si tu veux, tu peux apporter une serviette pour un séchage complémentaire ou des friandises pour récompenser ton toutou après le lavage, mais ce n\'est pas obligatoire.'
  },
  {
    question: 'Combien coûte un lavage ?',
    answer: 'Un lavage complet coûte seulement 10 €. C\'est bien moins cher qu\'un toilettage classique (souvent entre 30 et 60 €) et tu évites tout le bazar à la maison. Et avec le coupon -50%, ton premier lavage ne te coûtera que 5 € !'
  }
]

const openIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen">
    <HeaderNav />
    
    <main class="pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
      <div class="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-10 sm:mb-12 lg:mb-16">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-medium mb-5 sm:mb-6 group touch-manipulation"
          >
            <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour à l'accueil</span>
          </NuxtLink>
          
          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4 sm:mb-5">
            FAQ – DOGGYWASH
          </h1>
          <p class="text-base sm:text-lg text-navy-600 max-w-xl mx-auto leading-relaxed">
            Tu te poses des questions sur DOGGYWASH ? On a rassemblé ici les réponses aux questions les plus fréquentes.
          </p>
        </div>

        <!-- FAQ List -->
        <div class="space-y-3 sm:space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-white rounded-xl sm:rounded-2xl border overflow-hidden transition-all duration-300"
            :class="openIndex === index 
              ? 'shadow-lg shadow-navy-900/5 border-coral-200' 
              : 'border-slate-200 hover:border-slate-300'"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-start sm:items-center justify-between gap-4 touch-manipulation"
            >
              <span class="font-semibold text-navy-900 text-sm sm:text-base leading-snug pr-2">
                {{ faq.question }}
              </span>
              <div 
                class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                :class="openIndex === index 
                  ? 'bg-coral-100 text-coral-600 rotate-180' 
                  : 'bg-slate-100 text-navy-500'"
              >
                <svg 
                  class="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="openIndex === index" class="overflow-hidden">
                <div class="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p class="text-navy-600 text-sm sm:text-base leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="mt-12 sm:mt-16 lg:mt-20 text-center bg-gradient-to-br from-navy-50 to-coral-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
          <h2 class="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-900 mb-3 sm:mb-4">
            Convaincu·e ?
          </h2>
          <p class="text-navy-600 text-sm sm:text-base mb-6 max-w-md mx-auto leading-relaxed">
            Profite de l'offre de lancement : -50% sur ton premier lavage, réservé aux 100 premiers inscrits.
          </p>
          <NuxtLink 
            to="/#coupon" 
            class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-coral-500 to-coral-600 hover:from-coral-600 hover:to-coral-700 text-white font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-coral-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 touch-manipulation text-sm sm:text-base"
          >
            <span>Je veux mon coupon -50%</span>
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Contact -->
        <div class="mt-10 sm:mt-12 text-center">
          <p class="text-navy-500 text-sm sm:text-base">
            Tu as une autre question ? Écris-nous à 
            <a href="mailto:contact.doggywash@gmail.com" class="text-coral-500 hover:text-coral-600 font-medium underline underline-offset-2">
              contact.doggywash@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>
