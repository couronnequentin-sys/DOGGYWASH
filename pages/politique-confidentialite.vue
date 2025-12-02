<script setup lang="ts">
useHead({
  title: 'Politique de confidentialité – DOGGYWASH',
  meta: [
    { 
      name: 'description', 
      content: 'Politique de confidentialité de DOGGYWASH - Comment nous collectons, utilisons et protégeons tes données personnelles.' 
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
            Politique de confidentialité
          </h1>
          <p class="text-navy-500">
            Dernière mise à jour : Novembre 2025
          </p>
        </div>

        <!-- Content -->
        <div class="prose prose-navy max-w-none">
          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              1. Introduction
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Chez DOGGYWASH, la protection de tes données personnelles est une priorité. Cette politique de confidentialité t'explique comment nous collectons, utilisons, stockons et protégeons tes informations lorsque tu utilises notre site web.
            </p>
            <p class="text-navy-600 leading-relaxed">
              Cette politique est conforme au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              2. Responsable du traitement
            </h2>
            <div class="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <p class="text-navy-700 mb-2">
                <strong>Responsable :</strong> DOGGYWASH
              </p>
              <p class="text-navy-700 mb-2">
                <strong>Adresse :</strong> [Adresse complète], 69400 Villefranche-sur-Saône, France
              </p>
              <p class="text-navy-700">
                <strong>Contact :</strong> 
                <a href="mailto:contact@doggywash.fr" class="text-coral-500 hover:text-coral-600">contact@doggywash.fr</a>
              </p>
            </div>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              3. Données collectées
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Lorsque tu t'inscris pour recevoir ton coupon de réduction, nous collectons les informations suivantes :
            </p>
            <ul class="list-disc list-inside text-navy-600 space-y-2 mb-4 ml-4">
              <li><strong>Ton prénom :</strong> pour personnaliser nos communications</li>
              <li><strong>Ton adresse email :</strong> pour t'envoyer le coupon et les informations sur l'ouverture</li>
              <li><strong>Ton numéro de téléphone :</strong> pour éventuellement te contacter concernant l'ouverture de la station</li>
            </ul>
            <p class="text-navy-600 leading-relaxed">
              Nous ne collectons aucune donnée sensible (origine raciale ou ethnique, opinions politiques, croyances religieuses, données de santé, etc.).
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              4. Finalités du traitement
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Tes données personnelles sont utilisées uniquement pour :
            </p>
            <ul class="list-disc list-inside text-navy-600 space-y-2 ml-4">
              <li>T'envoyer ton coupon de réduction -50%</li>
              <li>T'informer de l'ouverture de la station DOGGYWASH à Villefranche-sur-Saône</li>
              <li>T'envoyer des informations commerciales liées à DOGGYWASH (promotions, nouveautés) – uniquement si tu y as consenti</li>
              <li>Répondre à tes éventuelles questions</li>
            </ul>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              5. Base légale du traitement
            </h2>
            <p class="text-navy-600 leading-relaxed">
              Le traitement de tes données repose sur ton <strong>consentement</strong>, que tu donnes en remplissant le formulaire d'inscription. Tu peux retirer ce consentement à tout moment en te désinscrivant via le lien présent dans chaque email ou en nous contactant.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              6. Durée de conservation
            </h2>
            <p class="text-navy-600 leading-relaxed">
              Tes données sont conservées pendant une durée de <strong>3 ans</strong> à compter de ta dernière interaction avec nous (ouverture d'un email, utilisation d'un coupon, etc.). Au-delà de cette période, tes données seront supprimées ou anonymisées.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              7. Destinataires des données
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Tes données personnelles sont destinées uniquement à l'équipe DOGGYWASH. Elles peuvent également être transmises à nos prestataires techniques (hébergeur, service d'envoi d'emails) dans le strict cadre de l'exécution de leurs services.
            </p>
            <p class="text-navy-600 leading-relaxed">
              <strong>Nous ne vendons jamais tes données à des tiers.</strong>
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              8. Tes droits
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Conformément au RGPD, tu disposes des droits suivants sur tes données personnelles :
            </p>
            <ul class="list-disc list-inside text-navy-600 space-y-2 mb-4 ml-4">
              <li><strong>Droit d'accès :</strong> tu peux demander à connaître les données que nous détenons sur toi</li>
              <li><strong>Droit de rectification :</strong> tu peux demander la correction de données inexactes</li>
              <li><strong>Droit à l'effacement :</strong> tu peux demander la suppression de tes données</li>
              <li><strong>Droit d'opposition :</strong> tu peux t'opposer au traitement de tes données à des fins de prospection</li>
              <li><strong>Droit à la portabilité :</strong> tu peux demander à recevoir tes données dans un format structuré</li>
              <li><strong>Droit de retirer ton consentement :</strong> tu peux retirer ton consentement à tout moment</li>
            </ul>
            <p class="text-navy-600 leading-relaxed mb-4">
              Pour exercer ces droits, contacte-nous à : 
              <a href="mailto:contact@doggywash.fr" class="text-coral-500 hover:text-coral-600">contact@doggywash.fr</a>
            </p>
            <p class="text-navy-600 leading-relaxed">
              Tu as également le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) si tu estimes que le traitement de tes données ne respecte pas la réglementation.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              9. Sécurité des données
            </h2>
            <p class="text-navy-600 leading-relaxed">
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger tes données contre tout accès non autorisé, modification, divulgation ou destruction. Nos systèmes sont sécurisés et nos prestataires sont sélectionnés pour leur conformité aux standards de sécurité.
            </p>
          </section>

          <section class="mb-10">
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              10. Cookies
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Notre site peut utiliser des cookies pour améliorer ton expérience de navigation. Les cookies sont de petits fichiers stockés sur ton appareil qui nous permettent de :
            </p>
            <ul class="list-disc list-inside text-navy-600 space-y-2 mb-4 ml-4">
              <li>Mémoriser tes préférences</li>
              <li>Analyser le trafic du site (de manière anonyme)</li>
              <li>Améliorer les performances du site</li>
            </ul>
            <p class="text-navy-600 leading-relaxed">
              Tu peux configurer ton navigateur pour refuser les cookies. Cependant, certaines fonctionnalités du site pourraient ne plus être disponibles.
            </p>
          </section>

          <section>
            <h2 class="font-display text-2xl font-bold text-navy-900 mb-4">
              11. Modifications de cette politique
            </h2>
            <p class="text-navy-600 leading-relaxed mb-4">
              Nous pouvons mettre à jour cette politique de confidentialité à tout moment. La date de la dernière mise à jour est indiquée en haut de cette page. Nous t'encourageons à consulter régulièrement cette page pour rester informé·e.
            </p>
            <p class="text-navy-600 leading-relaxed">
              Pour toute question concernant cette politique, contacte-nous à : 
              <a href="mailto:contact@doggywash.fr" class="text-coral-500 hover:text-coral-600">contact@doggywash.fr</a>
            </p>
          </section>
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

