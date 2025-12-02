# 🎯 Guide complet : Resend + Vercel + Domaine

Ce guide vous explique **EXACTEMENT** ce qu'il faut faire, étape par étape.

---

## 📧 PARTIE 1 : Configuration Resend

### Étape 1.1 : Vérifier votre compte Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Connectez-vous avec votre compte
3. Vérifiez que vous voyez votre clé API dans **API Keys**

✅ **Vous avez déjà fait ça !**

---

### Étape 1.2 : Comprendre les limitations du compte gratuit

**Actuellement (mode test) :**
- ✅ Vous pouvez envoyer des emails **uniquement** à votre propre email (`couronnequentin@gmail.com`)
- ✅ C'est suffisant pour tester en local
- ❌ Vous **ne pouvez pas** envoyer à d'autres emails

**Pour envoyer à n'importe qui :**
- Vous devez vérifier un domaine dans Resend
- OU utiliser le domaine de test Resend (limité)

---

### Étape 1.3 : Option A - Utiliser le domaine de test Resend (SIMPLE)

**C'est ce que vous faites actuellement !** C'est parfait pour commencer.

**Avantages :**
- ✅ Aucune configuration supplémentaire
- ✅ Fonctionne immédiatement
- ✅ Gratuit

**Inconvénients :**
- ❌ Les emails peuvent aller en spam
- ❌ L'expéditeur sera `onboarding@resend.dev` (pas très professionnel)
- ❌ Limité à 100 emails/jour

**Configuration actuelle :**
```
RESEND_FROM_EMAIL=DOGGYWASH <onboarding@resend.dev>
```

✅ **Vous pouvez continuer avec ça pour l'instant !**

---

### Étape 1.4 : Option B - Vérifier votre propre domaine (PROFESSIONNEL)

**Quand vous serez prêt** (optionnel pour l'instant) :

#### 1.4.1 : Acheter un domaine (si vous n'en avez pas)

**Où acheter un domaine :**
- [Namecheap](https://www.namecheap.com) - ~10€/an
- [OVH](https://www.ovh.com) - ~5-10€/an
- [Google Domains](https://domains.google) - ~10€/an

**Exemple :** `doggywash.fr` ou `doggywash.com`

#### 1.4.2 : Vérifier le domaine dans Resend

1. Dans Resend, allez dans **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre domaine (ex: `doggywash.fr`)
4. Resend vous donnera des enregistrements DNS à ajouter

#### 1.4.3 : Configurer les DNS

1. Allez sur votre registrar (là où vous avez acheté le domaine)
2. Trouvez la section **DNS** ou **Zone DNS**
3. Ajoutez les enregistrements que Resend vous a donnés :
   - Des enregistrements TXT pour la vérification
   - Des enregistrements MX pour les emails
4. Attendez 5-10 minutes pour la propagation

#### 1.4.4 : Vérifier dans Resend

1. Retournez dans Resend → **Domains**
2. Cliquez sur **Verify**
3. Une fois vérifié (✅), vous pouvez utiliser `noreply@doggywash.fr`

#### 1.4.5 : Mettre à jour votre configuration

Dans Vercel, modifiez la variable d'environnement :
```
RESEND_FROM_EMAIL=DOGGYWASH <noreply@doggywash.fr>
```

---

## 🚀 PARTIE 2 : Déploiement sur Vercel

### Étape 2.1 : Préparer votre code sur GitHub

**Si vous n'avez pas encore de repository GitHub :**

1. Allez sur [https://github.com](https://github.com)
2. Créez un compte (gratuit)
3. Cliquez sur **New repository**
4. Nommez-le `doggywash`
5. **Ne cochez PAS** "Initialize with README"
6. Cliquez sur **Create repository**

**Ensuite, dans votre terminal :**

```bash
cd "/Users/quent/Desktop/ADS DOGGY WASH/doggywash"

# Initialiser git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - DOGGYWASH site"

# Ajouter le remote GitHub (remplacez VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/doggywash.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

**Important :** Assurez-vous que le fichier `.env` est dans `.gitignore` (il y est déjà) pour ne pas exposer votre clé API !

---

### Étape 2.2 : Créer un compte Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Cliquez sur **Sign Up**
3. Choisissez **Continue with GitHub**
4. Autorisez Vercel à accéder à votre compte GitHub
5. Complétez votre profil

✅ **Compte créé !**

---

### Étape 2.3 : Importer votre projet

1. Dans Vercel, cliquez sur **Add New** → **Project**
2. Vous verrez la liste de vos repositories GitHub
3. Trouvez `doggywash` et cliquez sur **Import**

**Configuration automatique :**
- Vercel détectera automatiquement que c'est un projet Nuxt.js
- Il utilisera les bonnes commandes de build
- ✅ **Vous n'avez rien à changer !**

4. Cliquez sur **Import**

---

### Étape 2.4 : Configurer les variables d'environnement

**C'EST LA PARTIE LA PLUS IMPORTANTE !**

1. Avant de déployer, cliquez sur **Environment Variables** (à gauche)
2. Ajoutez ces 3 variables :

#### Variable 1 : RESEND_API_KEY
- **Name :** `RESEND_API_KEY`
- **Value :** `re_dSUoGs2N_8vkUqbaxQJdTEFc2Z4ZAbzHc`
- **Environments :** Cochez toutes les cases (Production, Preview, Development)

#### Variable 2 : RESEND_FROM_EMAIL
- **Name :** `RESEND_FROM_EMAIL`
- **Value :** `DOGGYWASH <onboarding@resend.dev>`
- **Environments :** Toutes les cases

#### Variable 3 : NODE_ENV
- **Name :** `NODE_ENV`
- **Value :** `production`
- **Environments :** Toutes les cases

#### Variable 4 (optionnelle) : RESEND_TEST_EMAIL
- **Name :** `RESEND_TEST_EMAIL`
- **Value :** `couronnequentin@gmail.com`
- **Environments :** Toutes les cases

3. Cliquez sur **Save** pour chaque variable

---

### Étape 2.5 : Déployer

1. Cliquez sur **Deploy** (en bas à droite)
2. Attendez 2-3 minutes pendant que Vercel :
   - Installe les dépendances
   - Build le projet
   - Déploie le site
3. Une fois terminé, vous verrez **"Congratulations!"**

✅ **Votre site est en ligne !**

---

### Étape 2.6 : Obtenir l'URL de votre site

Après le déploiement, Vercel vous donnera une URL comme :
```
https://doggywash-abc123.vercel.app
```

**C'est votre site en ligne !** 🎉

---

## 🌐 PARTIE 3 : Domaine personnalisé (OPTIONNEL)

### Vous N'AVEZ PAS besoin d'héberger votre domaine !

**Important :** Vercel gère tout pour vous. Vous n'avez pas besoin d'héberger votre domaine ailleurs.

### Étape 3.1 : Ajouter un domaine personnalisé sur Vercel

**Si vous avez un domaine (ex: `doggywash.fr`) :**

1. Dans Vercel, allez dans votre projet
2. Cliquez sur **Settings** → **Domains**
3. Entrez votre domaine : `doggywash.fr`
4. Cliquez sur **Add**

### Étape 3.2 : Configurer les DNS

Vercel vous donnera des instructions précises :

**Option A : Utiliser les nameservers Vercel (RECOMMANDÉ)**
1. Allez sur votre registrar (là où vous avez acheté le domaine)
2. Trouvez la section **Nameservers**
3. Remplacez par ceux donnés par Vercel :
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
4. Attendez 24-48h pour la propagation

**Option B : Ajouter un enregistrement CNAME**
1. Dans votre registrar, allez dans **DNS**
2. Ajoutez un enregistrement CNAME :
   - **Name :** `@` ou `www`
   - **Value :** `cname.vercel-dns.com`
3. Attendez quelques minutes

### Étape 3.3 : Vérifier

1. Retournez dans Vercel → **Domains**
2. Vercel vérifiera automatiquement
3. Une fois vérifié (✅), votre site sera accessible sur `doggywash.fr`

---

## ✅ Checklist finale

### Resend
- [x] Compte créé
- [x] Clé API obtenue
- [x] Configuration en local fonctionne
- [ ] (Optionnel) Domaine vérifié dans Resend

### Vercel
- [ ] Compte créé
- [ ] Projet importé depuis GitHub
- [ ] Variables d'environnement configurées
- [ ] Site déployé
- [ ] Formulaire testé en production
- [ ] (Optionnel) Domaine personnalisé configuré

---

## 🆘 Questions fréquentes

### "Dois-je héberger mon domaine ailleurs ?"
**NON !** Vercel gère tout. Vous configurez juste les DNS pour pointer vers Vercel.

### "Combien ça coûte ?"
- **Vercel :** Gratuit pour les projets personnels
- **Resend :** Gratuit jusqu'à 100 emails/jour
- **Domaine :** ~5-10€/an (optionnel)

### "Les emails iront-ils en spam ?"
Avec `onboarding@resend.dev`, oui parfois. Avec votre propre domaine vérifié, beaucoup moins.

### "Puis-je tester avant de déployer ?"
Oui ! Testez en local avec `npm run dev`. Une fois que ça marche, déployez.

---

## 🎯 Résumé : Ce que vous devez faire MAINTENANT

1. **Mettre votre code sur GitHub** (5 min)
2. **Créer un compte Vercel** (2 min)
3. **Importer le projet** (1 min)
4. **Ajouter les variables d'environnement** (2 min)
5. **Déployer** (3 min)

**Total : ~15 minutes** et votre site sera en ligne ! 🚀

---

Besoin d'aide sur une étape précise ? Dites-moi où vous en êtes !

