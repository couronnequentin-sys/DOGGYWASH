<script setup lang="ts">
const testimonials = [
  {
    name: 'Julie M.',
    dog: 'Golden Retriever',
    text: 'Mon Golden adore l\'eau, mais laver 35 kg de poils dans ma baignoire, c\'était l\'enfer. Avec DOGGYWASH, 10 minutes et c\'est fait !',
  },
  {
    name: 'Thomas P.',
    dog: 'Berger Australien',
    text: 'Avant, je payais 50 € chez le toiletteur. Là, 10 balles, je passe quand je veux. Le rapport qualité-prix est imbattable.',
  },
  {
    name: 'Sophie L.',
    dog: 'Cavalier King Charles',
    text: 'J\'avais peur que ma petite chienne soit stressée, mais elle était super calme. L\'eau est tiède, le bruit est modéré. Top !',
  },
  {
    name: 'Marc D.',
    dog: 'Labrador croisé',
    text: 'Mon Lab se roule dans la boue un jour sur deux. DOGGYWASH me sauve la vie. Plus de bain dans ma salle de bain !',
  }
]
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="text-coral-500 font-semibold text-sm uppercase tracking-wider mb-3 block">
          Témoignages
        </span>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
          Ils ont testé DOGGYWASH
        </h2>
        <p class="text-lg text-navy-600">
          Des propriétaires de chiens comme toi partagent leur expérience.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-slate-50 rounded-2xl p-6"
        >
          <!-- Stars -->
          <div class="flex gap-1 mb-4">
            <span v-for="i in 5" :key="i" class="text-amber-400">★</span>
          </div>
          
          <p class="text-navy-700 mb-6">
            "{{ testimonial.text }}"
          </p>
          
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-coral-200 rounded-full flex items-center justify-center text-lg">
              👤
            </div>
            <div>
              <p class="font-bold text-navy-900">{{ testimonial.name }}</p>
              <p class="text-sm text-navy-500">{{ testimonial.dog }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
