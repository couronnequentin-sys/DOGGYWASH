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
          <!-- Note temporaire -->
          <div class="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
            <p class="text-blue-800 text-sm font-medium">
              ⚠️ Les sections 1 et 2 (Éditeur et Hébergeur) seront complétées prochainement. Cette page est en cours de finalisation.
            </p>
          </div>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, photographies, vidéos, sons, etc.) est la propriété exclusive de DOGGYWASH ou de ses partenaires, et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p class="text-navy-600 leading-relaxed mb-4">
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de DOGGYWASH.
            </p>
            <p class="text-navy-600 leading-relaxed">
              Toute exploitation non autorisée du site ou de son contenu sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              4. Limitation de responsabilité
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              DOGGYWASH s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, DOGGYWASH ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p class="text-navy-600 leading-relaxed mb-4">
              En conséquence, DOGGYWASH décline toute responsabilité :
            </p>
            <ul class="list-disc list-inside text-navy-600 space-y-2 mb-4 ml-4">
              <li>pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site ;</li>
              <li>pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification des informations mises à disposition sur le site ;</li>
              <li>et plus généralement, pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, natures ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder.</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              5. Liens hypertextes
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Le site DOGGYWASH peut contenir des liens hypertextes vers d'autres sites internet. DOGGYWASH n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou aux pratiques de leurs éditeurs en matière de protection des données personnelles.
            </p>
            <p class="text-navy-600 leading-relaxed">
              La création de liens hypertextes vers le site DOGGYWASH nécessite l'autorisation préalable et écrite de DOGGYWASH. Pour toute demande, merci de nous contacter à l'adresse : 
              <a href="mailto:contact@doggywash.fr" class="text-coral-500 hover:text-coral-600">contact@doggywash.fr</a>
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              6. Droit applicable
            </h2>
            <p class="text-navy-600 leading-relaxed">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et après l'échec de toute tentative de recherche d'une solution amiable, les tribunaux français seront seuls compétents pour connaître de ce litige.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              7. Contact
            </h2>
            <p class="text-navy-600 leading-relaxed">
              Pour toute question relative aux présentes mentions légales, tu peux nous contacter à l'adresse suivante : 
              <a href="mailto:contact@doggywash.fr" class="text-coral-500 hover:text-coral-600">contact@doggywash.fr</a>
            </p>
          </section>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

