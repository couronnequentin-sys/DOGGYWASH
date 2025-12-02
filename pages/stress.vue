<script setup lang="ts">
// Landing Page - Angle SANS STRESS
useHead({
  title: 'DOGGYWASH – Fini la galère du bain de chien | -50%',
  meta: [
    { 
      name: 'description', 
      content: 'DOGGYWASH : fini le bazar dans la salle de bain ! Un espace calme et adapté pour laver ton chien sans stress. -50% sur ton premier lavage à Villefranche-sur-Saône.' 
    }
  ]
})
</script>

<template>
  <div>
    <HeaderNav />
    <main>
      <HeroSectionStress />
      <BenefitsSection />
      <HowItWorksSection />
      <!-- TestimonialsSection masqué temporairement -->
      <!-- <TestimonialsSection /> -->
      <CouponFormSection />
    </main>
    <FooterSection />
  </div>
</template>

