<script setup lang="ts">
useHead({
  title: 'Mentions légales – DOGGYWASH',
  meta: [
    { 
      name: 'description', 
      content: 'Mentions légales du site DOGGYWASH - Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.' 
    }
  ]
})
</script>

<template>
  <div>
    <HeaderNav />
    
    <main class="pt-24 sm:pt-32 pb-16 sm:pb-24">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="mb-12">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-medium mb-6 group"
          >
            <svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span>Retour à l'accueil</span>
          </NuxtLink>
          
          <h1 class="font-display text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Mentions légales
          </h1>
          <p class="text-navy-500">
            Dernière mise à jour : Novembre 2025
          </p>
        </div>

        <!-- Content -->
        <div class="prose prose-navy max-w-none">
          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              1. Éditeur du site
            </h2>
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p class="text-navy-700 mb-2">
                <strong>Dénomination sociale :</strong> DOGGYWASH – [Forme juridique à préciser] au capital de [montant] €
              </p>
              <p class="text-navy-700 mb-2">
                <strong>Siège social :</strong> [Adresse complète], 69400 Villefranche-sur-Saône, France
              </p>
              <p class="text-navy-700 mb-2">
                <strong>Numéro SIRET :</strong> [Numéro SIRET]
              </p>
              <p class="text-navy-700 mb-2">
                <strong>Numéro de TVA intracommunautaire :</strong> [Numéro TVA]
              </p>
              <p class="text-navy-700 mb-2">
                <strong>Directeur de la publication :</strong> [Nom du responsable]
              </p>
              <p class="text-navy-700">
                <strong>Contact :</strong> 
                <a href="mailto:contact@doggywash.fr" class="text-coral-500 hover:text-coral-600">contact@doggywash.fr</a>
              </p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              2. Hébergeur du site
            </h2>
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p class="text-navy-700 mb-2">
                <strong>Raison sociale :</strong> [Nom de l'hébergeur]
              </p>
              <p class="text-navy-700 mb-2">
                <strong>Adresse :</strong> [Adresse de l'hébergeur]
              </p>
              <p class="text-navy-700">
                <strong>Site web :</strong> [URL de l'hébergeur]
              </p>
            </div>
          </section>

          <!-- Note temporaire -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p class="text-blue-800 text-sm font-medium">
              ⚠️ Les autres sections des mentions légales seront complétées prochainement. Cette page est en cours de finalisation.
            </p>
          </div>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

