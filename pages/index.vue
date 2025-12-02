<script setup lang="ts">
useHead({
  title: 'DOGGYWASH – Lave ton chien en 10 minutes | -50% sur ton premier lavage',
  meta: [
    { 
      name: 'description', 
      content: 'DOGGYWASH arrive à Villefranche-sur-Saône ! Lave ton chien en libre-service, sans rendez-vous. Profite de -50% sur ton premier lavage.' 
    }
  ]
})
</script>

<template>
  <div>
    <HeaderNav />
    <main>
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <!-- TestimonialsSection masqué temporairement -->
      <!-- <TestimonialsSection /> -->
      <CouponFormSection />
    </main>
    <FooterSection />
  </div>
</template>
