<script setup lang="ts">
// Landing Page - Angle RAPIDE
useHead({
  title: 'DOGGYWASH – Lave ton chien en 10 minutes chrono | -50%',
  meta: [
    { 
      name: 'description', 
      content: 'DOGGYWASH : lave ton chien en 10 minutes, sans rendez-vous. Rapide, efficace, sans bazar. Profite de -50% sur ton premier lavage à Villefranche-sur-Saône.' 
    }
  ]
})
</script>

<template>
  <div>
    <HeaderNav />
    <main>
      <HeroSectionFast />
      <BenefitsSection />
      <HowItWorksSection />
      <!-- TestimonialsSection masqué temporairement -->
      <!-- <TestimonialsSection /> -->
      <CouponFormSection />
    </main>
    <FooterSection />
  </div>
</template>

