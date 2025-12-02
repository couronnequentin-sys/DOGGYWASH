# 📋 Guide Vercel - Étape par étape avec captures

## 🎯 Ce que vous allez faire

1. Mettre votre code sur GitHub
2. Créer un compte Vercel
3. Importer le projet
4. Configurer les variables d'environnement
5. Déployer

**Temps estimé : 15 minutes**

---

## ÉTAPE 1 : GitHub (si pas déjà fait)

### 1.1 : Créer un repository GitHub

1. Allez sur [https://github.com/new](https://github.com/new)
2. **Repository name :** `doggywash`
3. **Description :** (optionnel) "Site DOGGYWASH"
4. **Public** ou **Private** (votre choix)
5. **NE COCHEZ PAS** "Add a README file"
6. Cliquez sur **Create repository**

### 1.2 : Pousser votre code

**Ouvrez votre terminal et exécutez :**

```bash
# Aller dans le dossier du projet
cd "/Users/quent/Desktop/ADS DOGGY WASH/doggywash"

# Vérifier que git est initialisé
git status

# Si vous voyez "not a git repository", faites :
git init

# Ajouter tous les fichiers
git add .

# Faire le commit
git commit -m "Initial commit - DOGGYWASH"

# Ajouter le remote GitHub (remplacez VOTRE_USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE_USERNAME/doggywash.git

# Renommer la branche en main
git branch -M main

# Pousser sur GitHub
git push -u origin main
```

**Remplacez `VOTRE_USERNAME` par votre vrai nom d'utilisateur GitHub !**

---

## ÉTAPE 2 : Vercel - Créer un compte

1. Allez sur [https://vercel.com/signup](https://vercel.com/signup)
2. Cliquez sur **Continue with GitHub**
3. Autorisez Vercel à accéder à votre compte GitHub
4. Complétez votre profil si demandé

✅ **Compte créé !**

---

## ÉTAPE 3 : Importer le projet

1. Dans Vercel, cliquez sur **Add New** → **Project**
   - Ou allez sur [https://vercel.com/new](https://vercel.com/new)

2. Vous verrez la liste de vos repositories GitHub
   - Si vous ne voyez pas `doggywash`, cliquez sur **Adjust GitHub App Permissions**
   - Autorisez l'accès au repository `doggywash`

3. Trouvez `doggywash` dans la liste
   - Cliquez sur **Import** à côté

4. **Configuration du projet :**
   - **Project Name :** `doggywash` (par défaut)
   - **Framework Preset :** Nuxt.js (détecté automatiquement)
   - **Root Directory :** `./` (par défaut)
   - **Build Command :** `npm run build` (par défaut)
   - **Output Directory :** `.output` (par défaut)
   - **Install Command :** `npm install` (par défaut)

   ✅ **Ne changez RIEN, c'est déjà bon !**

5. **MAIS ATTENDEZ !** Ne cliquez pas encore sur **Deploy**
   - Cliquez d'abord sur **Environment Variables** (à gauche)

---

## ÉTAPE 4 : Configurer les variables d'environnement

**C'EST TRÈS IMPORTANT !**

1. Dans la section **Environment Variables**, vous verrez un tableau vide

2. Cliquez sur **Add** pour chaque variable suivante :

### Variable 1 : RESEND_API_KEY
- Cliquez sur **Add**
- **Key :** `RESEND_API_KEY`
- **Value :** `re_dSUoGs2N_8vkUqbaxQJdTEFc2Z4ZAbzHc`
- **Environments :** Cochez toutes les cases :
  - ☑ Production
  - ☑ Preview  
  - ☑ Development
- Cliquez sur **Save**

### Variable 2 : RESEND_FROM_EMAIL
- Cliquez sur **Add**
- **Key :** `RESEND_FROM_EMAIL`
- **Value :** `DOGGYWASH <onboarding@resend.dev>`
- **Environments :** Toutes les cases cochées
- Cliquez sur **Save**

### Variable 3 : NODE_ENV
- Cliquez sur **Add**
- **Key :** `NODE_ENV`
- **Value :** `production`
- **Environments :** Toutes les cases cochées
- Cliquez sur **Save**

### Variable 4 : RESEND_TEST_EMAIL (optionnelle)
- Cliquez sur **Add**
- **Key :** `RESEND_TEST_EMAIL`
- **Value :** `couronnequentin@gmail.com`
- **Environments :** Toutes les cases cochées
- Cliquez sur **Save**

3. Vous devriez maintenant voir 4 variables dans le tableau

✅ **Variables configurées !**

---

## ÉTAPE 5 : Déployer

1. Maintenant vous pouvez cliquer sur **Deploy** (en bas à droite)

2. Vercel va :
   - Installer les dépendances (`npm install`)
   - Builder le projet (`npm run build`)
   - Déployer le site

3. **Attendez 2-3 minutes** - vous verrez les logs en temps réel

4. Une fois terminé, vous verrez :
   - ✅ **"Congratulations!"**
   - Une URL comme : `https://doggywash-abc123.vercel.app`

5. Cliquez sur **Visit** pour voir votre site en ligne !

---

## ÉTAPE 6 : Tester en production

1. Ouvrez votre site (l'URL Vercel)
2. Remplissez le formulaire de coupon
3. Vérifiez votre email (`couronnequentin@gmail.com`)
4. **Vérifiez aussi les spams !**

✅ **Si vous recevez l'email avec le coupon, tout fonctionne !**

---

## 🔄 Mises à jour futures

**Chaque fois que vous modifiez votre code :**

1. Faites vos modifications en local
2. Committez et poussez sur GitHub :
   ```bash
   git add .
   git commit -m "Description de vos modifications"
   git push
   ```
3. Vercel déploiera automatiquement la nouvelle version !

**C'est tout !** Pas besoin de faire quoi que ce soit d'autre.

---

## 🆘 Problèmes courants

### "Je ne vois pas mon repository dans Vercel"
- Vérifiez que vous avez bien poussé le code sur GitHub
- Cliquez sur **Adjust GitHub App Permissions** dans Vercel
- Autorisez l'accès au repository

### "Le déploiement échoue"
- Vérifiez les logs dans Vercel
- Assurez-vous que toutes les variables d'environnement sont bien configurées
- Vérifiez que `npm install` fonctionne en local

### "Les emails ne fonctionnent pas en production"
- Vérifiez que `RESEND_API_KEY` est bien configurée dans Vercel
- Vérifiez les logs dans Resend dashboard → **Logs**
- Assurez-vous que `RESEND_FROM_EMAIL` est correct

---

## ✅ Checklist de déploiement

- [ ] Code poussé sur GitHub
- [ ] Compte Vercel créé
- [ ] Projet importé dans Vercel
- [ ] 4 variables d'environnement ajoutées
- [ ] Déploiement réussi
- [ ] Site accessible en ligne
- [ ] Formulaire testé
- [ ] Email reçu avec le coupon

---

**Vous avez terminé ? Félicitations ! 🎉**

Votre site est maintenant en ligne et fonctionnel !

