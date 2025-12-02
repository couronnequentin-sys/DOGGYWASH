<script setup lang="ts">
// Landing Page - Angle ÉCONOMIE
useHead({
  title: 'DOGGYWASH – Ton chien propre pour 10€ | Économise 5€',
  meta: [
    { 
      name: 'description', 
      content: 'DOGGYWASH : lave ton chien pour 10€ au lieu de 50€ chez un toiletteur. Shampoing inclus, tout compris. Économise 5€ sur ton premier lavage à Villefranche-sur-Saône.' 
    }
  ]
})
</script>

<template>
  <div>
    <HeaderNav />
    <main>
      <HeroSectionEconomic />
      <BenefitsSection />
      <HowItWorksSection />
      <!-- TestimonialsSection masqué temporairement -->
      <!-- <TestimonialsSection /> -->
      <CouponFormSection />
    </main>
    <FooterSection />
  </div>
</template>

