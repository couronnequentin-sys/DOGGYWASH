<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="text-white py-12" style="background: #0A2540;">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5 mb-4">
            <img src="/favicon.svg" alt="DOGGYWASH" class="w-11 h-11 brightness-0 invert" />
            <div class="flex flex-col">
              <span class="font-display font-bold text-xl tracking-wide">
                DOGGYWASH
              </span>
              <span class="text-[10px] tracking-wider -mt-0.5" style="color: #8dbdde;">
                Propre. Rapide. Sans stress.
              </span>
            </div>
          </div>
          <p class="mb-4 max-w-sm" style="color: #8dbdde;">
            La solution simple et pas chère pour laver ton chien. 
            Bientôt à Villefranche-sur-Saône.
          </p>
          <a 
            href="#coupon" 
            class="inline-block text-white font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg"
            style="background: #3a82ba;"
          >
            Obtenir -50%
          </a>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold mb-4">Liens</h4>
          <ul class="space-y-2" style="color: #8dbdde;">
            <li><a href="/#avantages" class="hover:text-white transition-colors">Avantages</a></li>
            <li><a href="/#comment-ca-marche" class="hover:text-white transition-colors">Comment ça marche</a></li>
            <li><NuxtLink to="/faq" class="hover:text-white transition-colors">FAQ</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-4">Contact</h4>
          <ul class="space-y-2" style="color: #8dbdde;">
            <li>📍 Villefranche-sur-Saône (69)</li>
            <li>
              <a href="mailto:contact@doggywash.fr" class="hover:text-white transition-colors">
                ✉️ contact@doggywash.fr
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style="border-top: 1px solid rgba(255,255,255,0.1);">
        <p class="text-sm" style="color: #8dbdde;">
          DOGGYWASH © {{ currentYear }} – Villefranche-sur-Saône
        </p>
        <div class="flex gap-6 text-sm" style="color: #8dbdde;">
          <NuxtLink to="/mentions-legales" class="hover:text-white transition-colors">Mentions légales</NuxtLink>
          <NuxtLink to="/politique-confidentialite" class="hover:text-white transition-colors">Confidentialité</NuxtLink>
          <NuxtLink to="/faq" class="hover:text-white transition-colors">FAQ</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
