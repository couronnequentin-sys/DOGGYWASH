# 🎯 Guide de configuration étape par étape

## Ce que je peux faire pour vous :

✅ **Préparer tous les fichiers de configuration**  
✅ **Créer le fichier .env avec votre clé API** (si vous me la donnez)  
✅ **Tester l'API en local**  
✅ **Préparer le déploiement**  

❌ **Je ne peux pas** : Accéder à votre compte Resend ou déployer directement

---

## Option 1 : Configuration automatique (si vous me donnez votre clé API)

**Dites-moi simplement :**
1. Votre clé API Resend (commence par `re_`)
2. Votre email d'expéditeur (ex: `noreply@votredomaine.com`)

Et je créerai le fichier `.env` pour vous !

---

## Option 2 : Configuration manuelle (5 minutes)

### Étape 1 : Obtenir votre clé API Resend

1. Allez sur [https://resend.com](https://resend.com)
2. Connectez-vous à votre compte
3. Allez dans **API Keys** (menu de gauche)
4. Cliquez sur **Create API Key**
5. Donnez-lui un nom (ex: "DOGGYWASH Production")
6. **Copiez la clé** (elle commence par `re_`)

### Étape 2 : Vérifier votre domaine

Dans Resend :
1. Allez dans **Domains**
2. Soit vous vérifiez votre propre domaine
3. Soit utilisez le domaine de test fourni (ex: `onboarding.resend.dev`)

### Étape 3 : Créer le fichier .env

**Méthode A : Utiliser le script automatique**
```bash
./setup-env.sh
```

**Méthode B : Créer manuellement**

Créez un fichier `.env` à la racine du projet avec :

```env
RESEND_API_KEY=re_votre_cle_ici
RESEND_FROM_EMAIL=DOGGYWASH <noreply@votredomaine.com>
NODE_ENV=development
```

**Important :** Remplacez :
- `re_votre_cle_ici` par votre vraie clé API Resend
- `noreply@votredomaine.com` par un email vérifié dans Resend

### Étape 4 : Tester en local

```bash
npm run dev
```

Puis allez sur `http://localhost:3000`, remplissez le formulaire et vérifiez votre email !

---

## 🚀 Déploiement sur Vercel

Une fois que ça fonctionne en local :

### 1. Créer un compte Vercel

1. Allez sur [https://vercel.com](https://vercel.com)
2. Créez un compte (gratuit)
3. Connectez votre compte GitHub/GitLab

### 2. Importer votre projet

1. Cliquez sur **Add New** → **Project**
2. Importez votre repository DOGGYWASH
3. Vercel détectera automatiquement Nuxt.js

### 3. Configurer les variables d'environnement

Dans les paramètres du projet Vercel :
1. Allez dans **Settings** → **Environment Variables**
2. Ajoutez ces 3 variables :

| Nom | Valeur |
|-----|--------|
| `RESEND_API_KEY` | Votre clé Resend (re_...) |
| `RESEND_FROM_EMAIL` | DOGGYWASH <noreply@votredomaine.com> |
| `NODE_ENV` | production |

### 4. Déployer

Cliquez sur **Deploy** et attendez 2-3 minutes !

---

## ✅ Checklist

- [ ] Compte Resend créé
- [ ] Clé API Resend obtenue
- [ ] Domaine vérifié dans Resend
- [ ] Fichier `.env` créé avec les bonnes valeurs
- [ ] Test en local réussi (email reçu)
- [ ] Compte Vercel créé
- [ ] Projet importé sur Vercel
- [ ] Variables d'environnement configurées sur Vercel
- [ ] Site déployé et testé en production

---

## 🆘 Besoin d'aide ?

**Si vous me donnez votre clé API Resend**, je peux :
- Créer le fichier `.env` pour vous
- Vérifier que tout est bien configuré
- Tester l'API

**Sinon**, suivez les étapes ci-dessus - c'est très simple ! 😊

