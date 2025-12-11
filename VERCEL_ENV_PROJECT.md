# 🔧 Ajouter les variables d'environnement au niveau PROJET dans Vercel

## ⚠️ Important : Variables au niveau PROJET, pas ÉQUIPE

Les variables doivent être dans la section **"Environment Variables"** du **PROJET**, pas de l'équipe.

---

## 📋 ÉTAPE 1 : Accéder aux variables du projet

### Option A : Via le menu Settings

1. **Allez sur** [vercel.com](https://vercel.com)
2. **Cliquez** sur votre projet **"doggywash"** (dans la liste des projets)
3. **Cliquez** sur **"Settings"** (dans le menu du haut)
4. **Cliquez** sur **"Environment Variables"** (dans le menu de gauche)
5. Vous devriez voir la section **"Environment Variables"** du projet

### Option B : Via l'URL directe

1. **Allez sur** : `https://vercel.com/[votre-équipe]/doggywash/settings/environment-variables`
   - Remplacez `[votre-équipe]` par le nom de votre équipe

---

## 📋 ÉTAPE 2 : Vérifier que vous êtes au bon endroit

Vous devriez voir :
- **En haut** : "Environment Variables" (titre de la page)
- **En dessous** : Une section avec vos variables existantes (FACEBOOK_PIXEL_ID, RESEND_API_KEY, etc.)
- **Un bouton** : "Add" ou "Ajouter" ou "+" pour ajouter une nouvelle variable

**Si vous voyez** "Shared Environment Variables" ou "Team Environment Variables" en bas, **ce n'est pas le bon endroit**. Remontez plus haut dans la page.

---

## 📋 ÉTAPE 3 : Ajouter GOOGLE_SHEETS_ID

1. **Cliquez** sur **"Add"** (ou "Ajouter" ou "+")
2. **Remplissez** :
   - **Key** (Clé) : `GOOGLE_SHEETS_ID`
   - **Value** (Valeur) : `1GLEKeq1hrV44lfAapNo9xROryzSHSi3_0UdLB_EwtSY`
   - **Environments** : Cochez ☑ **Production** ☑ **Preview** ☑ **Development**
     - Ou cochez "All Environments" si disponible
3. **Cliquez** sur **"Save"** (ou "Sauvegarder")
4. **Vérifiez** : La variable `GOOGLE_SHEETS_ID` devrait apparaître dans la liste

---

## 📋 ÉTAPE 4 : Ajouter GOOGLE_SERVICE_ACCOUNT

1. **Cliquez** sur **"Add"** (ou "Ajouter" ou "+")
2. **Remplissez** :
   - **Key** (Clé) : `GOOGLE_SERVICE_ACCOUNT`
   - **Value** (Valeur) : Collez le JSON encodé en base64
     - C'est une très longue chaîne de caractères (plusieurs centaines de caractères)
     - Vous l'avez copié depuis [base64encode.org](https://www.base64encode.org/)
   - **Environments** : Cochez ☑ **Production** ☑ **Preview** ☑ **Development**
     - Ou cochez "All Environments" si disponible
3. **Cliquez** sur **"Save"** (ou "Sauvegarder")
4. **Vérifiez** : La variable `GOOGLE_SERVICE_ACCOUNT` devrait apparaître dans la liste

---

## 📋 ÉTAPE 5 : Vérification finale

Vous devriez maintenant avoir **7 variables** dans la liste :
1. `FACEBOOK_PIXEL_ID`
2. `RESEND_FROM_EMAIL`
3. `RESEND_API_KEY`
4. `NODE_ENV`
5. `RESEND_TEST_EMAIL`
6. `GOOGLE_SHEETS_ID` ← **NOUVELLE**
7. `GOOGLE_SERVICE_ACCOUNT` ← **NOUVELLE**

---

## 📋 ÉTAPE 6 : Redéployer

1. **Allez** dans **"Deployments"** (dans le menu du haut)
2. **Cliquez** sur les **"..."** (3 points) du dernier déploiement
3. **Cliquez** sur **"Redeploy"**
4. **Attendez** 2-3 minutes que le déploiement soit terminé

---

## 🧪 ÉTAPE 7 : Test

1. **Allez** sur https://doggywash.fr
2. **Remplissez** le formulaire avec votre email et une commune
3. **Attendez** 1-2 minutes
4. **Ouvrez** votre Google Sheet
5. **Actualisez** la page (F5)
6. **Vous devriez voir** une nouvelle ligne avec toutes les données, y compris la commune !

---

## 🆘 Si vous ne trouvez pas le bon endroit

**Essayez cette URL directe** :
```
https://vercel.com/[votre-équipe]/doggywash/settings/environment-variables
```

Remplacez `[votre-équipe]` par le nom de votre équipe (celui qui apparaît en haut à gauche dans Vercel).

---

**Dites-moi si vous voyez maintenant les 2 nouvelles variables dans la liste !** 🔍

