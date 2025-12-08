export const useFacebookPixel = () => {
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params)
    }
  }

  const trackCustomEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params)
    }
  }

  return {
    trackEvent,
    trackCustomEvent,
    // Événements courants
    trackLead: (params?: Record<string, any>) => trackEvent('Lead', params),
    trackCompleteRegistration: (params?: Record<string, any>) => trackEvent('CompleteRegistration', params),
    trackViewContent: (params?: Record<string, any>) => trackEvent('ViewContent', params),
    trackAddToCart: (params?: Record<string, any>) => trackEvent('AddToCart', params),
    trackInitiateCheckout: (params?: Record<string, any>) => trackEvent('InitiateCheckout', params),
    trackPurchase: (params?: Record<string, any>) => trackEvent('Purchase', params),
  }
}

