# 🚀 Guide de déploiement DOGGYWASH

Ce guide vous explique comment mettre en ligne votre site DOGGYWASH et configurer l'envoi automatique d'emails.

## 📧 Configuration de l'envoi d'emails (Resend)

### 1. Créer un compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour gratuits)
3. Vérifiez votre domaine ou utilisez le domaine de test fourni

### 2. Obtenir votre clé API

1. Dans le dashboard Resend, allez dans **API Keys**
2. Cliquez sur **Create API Key**
3. Copiez la clé (elle commence par `re_`)

### 3. Configurer les variables d'environnement

Créez un fichier `.env` à la racine du projet (copiez `.env.example`) :

```env
RESEND_API_KEY=re_votre_cle_api_ici
RESEND_FROM_EMAIL=DOGGYWASH <noreply@votredomaine.com>
NODE_ENV=production
```

**Important :** Remplacez `noreply@votredomaine.com` par un email vérifié dans Resend.

---

## 🌐 Hébergement du site

### Option 1 : Vercel (Recommandé) ⭐

Vercel est parfait pour Nuxt.js avec support automatique des API routes.

#### Étapes :

1. **Installer Vercel CLI** (optionnel) :
   ```bash
   npm i -g vercel
   ```

2. **Déployer via le dashboard** :
   - Allez sur [https://vercel.com](https://vercel.com)
   - Connectez votre compte GitHub/GitLab
   - Importez votre repository
   - Vercel détectera automatiquement Nuxt.js

3. **Configurer les variables d'environnement** :
   - Dans le projet Vercel, allez dans **Settings** → **Environment Variables**
   - Ajoutez :
     - `RESEND_API_KEY` = votre clé Resend
     - `RESEND_FROM_EMAIL` = votre email d'expéditeur
     - `NODE_ENV` = `production`

4. **Déployer** :
   - Vercel déploie automatiquement à chaque push sur `main`
   - Ou cliquez sur **Deploy** dans le dashboard

**Avantages :**
- ✅ Gratuit pour les projets personnels
- ✅ Déploiement automatique
- ✅ HTTPS inclus
- ✅ CDN global
- ✅ Support des API routes Nuxt

---

### Option 2 : Netlify

Netlify est aussi excellent pour Nuxt.js.

#### Étapes :

1. **Créer un compte** sur [https://netlify.com](https://netlify.com)

2. **Déployer** :
   - Connectez votre repository GitHub/GitLab
   - Netlify détectera Nuxt.js automatiquement

3. **Configuration de build** :
   - Build command : `npm run build`
   - Publish directory : `.output/public` (pour static) ou `.output` (pour SSR)

4. **Variables d'environnement** :
   - **Site settings** → **Environment variables**
   - Ajoutez les mêmes variables que pour Vercel

**Note :** Pour les API routes, utilisez Netlify Functions ou optez pour le mode SSR.

---

### Option 3 : Cloudflare Pages

1. Allez sur [https://pages.cloudflare.com](https://pages.cloudflare.com)
2. Connectez votre repository
3. Configuration :
   - Build command : `npm run build`
   - Build output : `.output/public`
4. Variables d'environnement dans les paramètres du projet

---

## 🔧 Configuration après déploiement

### Vérifier que tout fonctionne :

1. **Testez le formulaire** sur votre site en ligne
2. **Vérifiez vos emails** (dossier spam au début)
3. **Consultez les logs** dans votre plateforme d'hébergement

### Résolution de problèmes :

**❌ L'email n'arrive pas :**
- Vérifiez que `RESEND_API_KEY` est bien configurée
- Vérifiez que `RESEND_FROM_EMAIL` utilise un domaine vérifié dans Resend
- Consultez les logs dans Resend dashboard → **Logs**

**❌ Erreur 500 sur l'API :**
- Vérifiez les variables d'environnement
- Consultez les logs du serveur dans Vercel/Netlify
- Testez en local avec `npm run dev`

---

## 📝 Checklist de déploiement

- [ ] Compte Resend créé et domaine vérifié
- [ ] Clé API Resend obtenue
- [ ] Variables d'environnement configurées
- [ ] Site déployé sur Vercel/Netlify
- [ ] Formulaire testé en production
- [ ] Email de test reçu
- [ ] Domaine personnalisé configuré (optionnel)

---

## 🎯 Prochaines étapes (optionnel)

Pour aller plus loin, vous pouvez :

1. **Sauvegarder les inscriptions en base de données** (Supabase, MongoDB, etc.)
2. **Ajouter un système de tracking** (Google Analytics)
3. **Configurer un domaine personnalisé**
4. **Ajouter un système de notification** pour vous alerter des nouvelles inscriptions

---

## 💡 Support

Si vous avez des questions :
- Documentation Nuxt : [https://nuxt.com](https://nuxt.com)
- Documentation Resend : [https://resend.com/docs](https://resend.com/docs)
- Documentation Vercel : [https://vercel.com/docs](https://vercel.com/docs)

