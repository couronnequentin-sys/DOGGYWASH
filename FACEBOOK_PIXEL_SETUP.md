# 📊 Configuration Facebook Pixel

## 🎯 Ce que fait le Facebook Pixel

Le Facebook Pixel permet de :
- ✅ Suivre les conversions (inscriptions au coupon)
- ✅ Créer des audiences pour le retargeting
- ✅ Optimiser vos campagnes Facebook Ads
- ✅ Mesurer l'efficacité de vos publicités

---

## 📋 Étape 1 : Obtenir votre ID Facebook Pixel

### 1.1 : Aller dans Facebook Events Manager

1. Allez sur [facebook.com/events_manager2](https://www.facebook.com/events_manager2)
2. Connectez-vous avec votre compte Facebook
3. Si vous n'avez pas encore de Pixel, cliquez sur **"Connecter des données"** → **"Web"** → **"Pixel Facebook"**

### 1.2 : Créer ou trouver votre Pixel

**Si vous créez un nouveau Pixel :**
1. Donnez-lui un nom : `DOGGYWASH Pixel`
2. Entrez l'URL de votre site : `https://doggywash.fr`
3. Cliquez sur **"Créer"**

**Si vous avez déjà un Pixel :**
1. Dans Events Manager, cliquez sur votre Pixel
2. L'ID du Pixel est affiché en haut (ex: `123456789012345`)

### 1.3 : Copier l'ID du Pixel

L'ID ressemble à : `123456789012345` (15 chiffres)

**📝 Notez cet ID !**

---

## 🔧 Étape 2 : Configurer dans Vercel

### 2.1 : Ajouter la variable d'environnement

1. Allez dans **Vercel** → Projet "doggywash" → **Settings** → **Environment Variables**
2. Cliquez sur **"Add New"**
3. Remplissez :
   - **Key :** `FACEBOOK_PIXEL_ID`
   - **Value :** Votre ID Pixel (ex: `123456789012345`)
   - **Environments :** ☑ Production ☑ Preview ☑ Development
4. Cliquez sur **"Save"**

### 2.2 : Redéployer

1. Dans Vercel → **Deployments**
2. Cliquez sur les **"..."** à côté du dernier déploiement
3. Cliquez sur **"Redeploy"**
4. Attendez 2-3 minutes

---

## ✅ Étape 3 : Vérifier que ça fonctionne

### 3.1 : Tester avec Facebook Pixel Helper

1. Installez l'extension Chrome : [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
2. Allez sur votre site : `https://doggywash.fr`
3. Cliquez sur l'icône de l'extension
4. Vous devriez voir : **"1 Pixel Found"** ✅

### 3.2 : Tester une conversion

1. Allez sur votre site
2. Remplissez le formulaire de coupon
3. Dans Facebook Pixel Helper, vous devriez voir :
   - **PageView** (automatique)
   - **Lead** (quand le formulaire est soumis)
   - **CompleteRegistration** (quand le formulaire est soumis)

### 3.3 : Vérifier dans Facebook Events Manager

1. Allez dans [facebook.com/events_manager2](https://www.facebook.com/events_manager2)
2. Cliquez sur votre Pixel
3. Allez dans **"Test Events"**
4. Visitez votre site et soumettez le formulaire
5. Vous devriez voir les événements apparaître en temps réel

---

## 📊 Événements trackés automatiquement

Le code tracke automatiquement :

1. **PageView** : À chaque visite de page
2. **Lead** : Quand quelqu'un soumet le formulaire de coupon
   - Valeur : 5€ (50% de 10€)
   - Devise : EUR
3. **CompleteRegistration** : Quand quelqu'un s'inscrit au coupon

---

## 🎯 Utiliser dans Facebook Ads

### Créer une campagne avec optimisation de conversion

1. Dans Facebook Ads Manager, créez une nouvelle campagne
2. Choisissez l'objectif : **"Conversions"** ou **"Leads"**
3. Dans les paramètres, sélectionnez votre Pixel
4. Choisissez l'événement : **"Lead"** ou **"CompleteRegistration"**
5. Facebook optimisera automatiquement pour ces conversions !

### Créer une audience de retargeting

1. Dans Facebook Ads Manager → **Audiences**
2. Créez une nouvelle audience personnalisée
3. Choisissez : **"Personnes qui ont visité votre site web"**
4. Sélectionnez votre Pixel
5. Créez l'audience pour cibler les visiteurs qui n'ont pas encore soumis le formulaire

---

## ✅ Checklist

- [ ] Pixel créé dans Facebook Events Manager
- [ ] ID du Pixel noté
- [ ] Variable `FACEBOOK_PIXEL_ID` ajoutée dans Vercel
- [ ] Site redéployé
- [ ] Testé avec Facebook Pixel Helper
- [ ] Événements visibles dans Events Manager

---

**Une fois que vous avez votre ID Pixel, dites-le moi et je vous guide pour l'ajouter dans Vercel !**

