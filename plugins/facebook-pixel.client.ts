export default defineNuxtPlugin(() => {
  const pixelId = useRuntimeConfig().public.facebookPixelId || '724474856914827'

  if (!pixelId) {
    console.warn('Facebook Pixel ID not configured')
    return
  }

  // Meta Pixel Code - Code exact fourni par Meta
  ;(function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  )

  // Initialiser le Pixel avec l'ID
  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')

  // Exposer fbq globalement pour pouvoir l'utiliser dans les composants
  if (!window.fbq) {
    window.fbq = function() {
      (window.fbq.q = window.fbq.q || []).push(arguments)
    }
  }
})

// Déclarer le type pour TypeScript
declare global {
  interface Window {
    fbq: (...args: any[]) => void
  }
}

