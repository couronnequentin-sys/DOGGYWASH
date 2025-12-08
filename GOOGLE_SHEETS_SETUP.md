# 📊 Configuration Google Sheets pour stocker les données

## 🎯 Objectif

Stocker automatiquement toutes les inscriptions dans un Google Sheet avec :
- Date/Heure
- Prénom
- Email
- Code coupon

---

## 📋 Étape 1 : Créer un Google Sheet

1. Allez sur [sheets.google.com](https://sheets.google.com)
2. Créez un nouveau tableur
3. Donnez-lui un nom : `DOGGYWASH - Inscriptions`
4. Dans la première ligne, ajoutez les en-têtes :
   - **Colonne A :** Date/Heure
   - **Colonne B :** Prénom
   - **Colonne C :** Email
   - **Colonne D :** Code coupon
5. **Important :** Notez l'ID du Sheet dans l'URL :
   - L'URL ressemble à : `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit`
   - L'ID est la partie entre `/d/` et `/edit` : `1ABC123...XYZ`
   - **📝 Notez cet ID !**

---

## 🔑 Étape 2 : Créer un compte de service Google

### 2.1 : Aller dans Google Cloud Console

1. Allez sur [console.cloud.google.com](https://console.cloud.google.com)
2. Connectez-vous avec votre compte Google
3. Créez un nouveau projet ou sélectionnez un projet existant

### 2.2 : Activer l'API Google Sheets

1. Dans Google Cloud Console, allez dans **"APIs & Services"** → **"Library"**
2. Cherchez **"Google Sheets API"**
3. Cliquez dessus et activez l'API

### 2.3 : Créer un compte de service

1. Allez dans **"APIs & Services"** → **"Credentials"**
2. Cliquez sur **"Create Credentials"** → **"Service Account"**
3. Donnez un nom : `doggywash-sheets`
4. Cliquez sur **"Create and Continue"**
5. Cliquez sur **"Done"**

### 2.4 : Créer une clé JSON

1. Cliquez sur le compte de service que vous venez de créer
2. Allez dans l'onglet **"Keys"**
3. Cliquez sur **"Add Key"** → **"Create new key"**
4. Sélectionnez **"JSON"**
5. Cliquez sur **"Create"**
6. Un fichier JSON sera téléchargé
7. **📝 Ouvrez ce fichier et copiez son contenu !**

### 2.5 : Partager le Sheet avec le compte de service

1. Retournez dans votre Google Sheet
2. Cliquez sur **"Partager"** (en haut à droite)
3. Dans le champ, collez l'**email du compte de service** (trouvé dans le fichier JSON, champ `client_email`)
4. Donnez-lui les droits : **"Éditeur"**
5. Cliquez sur **"Envoyer"**

---

## 🔧 Étape 3 : Configurer dans Vercel

1. Allez dans **Vercel** → Projet "doggywash" → **Settings** → **Environment Variables**
2. Ajoutez ces variables :

### Variable 1 : GOOGLE_SHEETS_ID
- **Key :** `GOOGLE_SHEETS_ID`
- **Value :** L'ID de votre Sheet (ex: `1ABC123...XYZ`)
- **Environments :** ☑ Production ☑ Preview ☑ Development

### Variable 2 : GOOGLE_SERVICE_ACCOUNT
- **Key :** `GOOGLE_SERVICE_ACCOUNT`
- **Value :** Le contenu complet du fichier JSON (en une seule ligne, ou format JSON)
- **Environments :** ☑ Production ☑ Preview ☑ Development

---

## 📝 Note importante

Le fichier JSON contient des informations sensibles. Il faut le formater correctement pour Vercel.

**Option A :** Convertir en une seule ligne JSON
**Option B :** Utiliser un format base64 (plus sûr)

---

**Une fois que vous avez créé le Sheet et obtenu le fichier JSON, dites-moi et je vous guide pour l'ajouter dans Vercel !**

