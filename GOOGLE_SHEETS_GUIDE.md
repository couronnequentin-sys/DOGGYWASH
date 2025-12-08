# 📊 Guide complet : Configuration Google Sheets

## 🎯 Objectif

Stocker automatiquement toutes les inscriptions dans un Google Sheet avec :
- **Date/Heure** (Colonne A)
- **Prénom** (Colonne B)
- **Email** (Colonne C)
- **Code coupon** (Colonne D)

---

## 📋 Étape 1 : Créer le Google Sheet

1. Allez sur [sheets.google.com](https://sheets.google.com)
2. Créez un nouveau tableur
3. Nommez-le : **"DOGGYWASH - Inscriptions"**
4. Dans la **première ligne**, ajoutez les en-têtes :
   ```
   A1: Date/Heure
   B1: Prénom
   C1: Email
   D1: Code coupon
   ```
5. **📝 IMPORTANT :** Notez l'ID du Sheet dans l'URL :
   - L'URL ressemble à : `https://docs.google.com/spreadsheets/d/1ABC123...XYZ/edit`
   - L'ID est la partie entre `/d/` et `/edit` : `1ABC123...XYZ`
   - **Copiez cet ID !**

---

## 🔑 Étape 2 : Configurer Google Cloud

### 2.1 : Créer un projet Google Cloud

1. Allez sur [console.cloud.google.com](https://console.cloud.google.com)
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Select a project"** → **"New Project"**
4. Nommez-le : **"DOGGYWASH"**
5. Cliquez sur **"Create"**

### 2.2 : Activer l'API Google Sheets

1. Dans Google Cloud Console, allez dans **"APIs & Services"** → **"Library"**
2. Cherchez **"Google Sheets API"**
3. Cliquez dessus
4. Cliquez sur **"Enable"** (Activer)

### 2.3 : Créer un compte de service

1. Allez dans **"APIs & Services"** → **"Credentials"**
2. Cliquez sur **"Create Credentials"** → **"Service Account"**
3. Remplissez :
   - **Service account name :** `doggywash-sheets`
   - **Service account ID :** (auto-généré)
4. Cliquez sur **"Create and Continue"**
5. **Étape "Grant this service account access to project"** : Passez cette étape (cliquez sur **"Continue"** puis **"Done"**)

### 2.4 : Créer une clé JSON

1. Dans la liste des comptes de service, cliquez sur celui que vous venez de créer (`doggywash-sheets`)
2. Allez dans l'onglet **"Keys"**
3. Cliquez sur **"Add Key"** → **"Create new key"**
4. Sélectionnez **"JSON"**
5. Cliquez sur **"Create"**
6. **Un fichier JSON sera téléchargé automatiquement**
7. **📝 Ouvrez ce fichier avec un éditeur de texte** (TextEdit, Notepad, etc.)
8. **Copiez TOUT le contenu du fichier** (vous en aurez besoin)

### 2.5 : Partager le Sheet avec le compte de service

1. Retournez dans votre Google Sheet
2. Cliquez sur **"Partager"** (bouton en haut à droite)
3. Dans le fichier JSON que vous avez ouvert, trouvez le champ **`"client_email"`**
   - Il ressemble à : `"client_email": "doggywash-sheets@votre-projet.iam.gserviceaccount.com"`
4. **Copiez cet email**
5. Dans le champ "Partager", collez cet email
6. Donnez-lui les droits : **"Éditeur"**
7. **Décochez** "Notifier les personnes"
8. Cliquez sur **"Envoyer"**

---

## 🔧 Étape 3 : Configurer dans Vercel

### 3.1 : Préparer le JSON pour Vercel

Le fichier JSON contient des retours à la ligne. Pour Vercel, vous avez 2 options :

**Option A : Format une seule ligne (simple)**
1. Ouvrez le fichier JSON
2. Supprimez tous les retours à la ligne
3. Mettez tout sur une seule ligne
4. Copiez cette ligne

**Option B : Format base64 (plus sûr - recommandé)**
1. Allez sur [base64encode.org](https://www.base64encode.org/)
2. Collez le contenu complet du fichier JSON
3. Cliquez sur "Encode"
4. Copiez le résultat

### 3.2 : Ajouter les variables dans Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Sélectionnez votre projet **"doggywash"**
3. Allez dans **"Settings"** → **"Environment Variables"**
4. Ajoutez ces 2 variables :

#### Variable 1 : GOOGLE_SHEETS_ID
- **Key :** `GOOGLE_SHEETS_ID`
- **Value :** L'ID de votre Sheet (ex: `1ABC123...XYZ`)
- **Environments :** ☑ Production ☑ Preview ☑ Development
- Cliquez sur **"Save"**

#### Variable 2 : GOOGLE_SERVICE_ACCOUNT
- **Key :** `GOOGLE_SERVICE_ACCOUNT`
- **Value :** 
  - Si Option A : Le JSON sur une seule ligne
  - Si Option B : Le JSON encodé en base64
- **Environments :** ☑ Production ☑ Preview ☑ Development
- Cliquez sur **"Save"**

### 3.3 : Redéployer le site

1. Dans Vercel, allez dans **"Deployments"**
2. Cliquez sur les **3 points** (⋯) du dernier déploiement
3. Cliquez sur **"Redeploy"**
4. Attendez que le déploiement soit terminé

---

## 🧪 Test

1. Allez sur https://doggywash.fr
2. Remplissez le formulaire avec votre email
3. Vérifiez votre Google Sheet
4. **Une nouvelle ligne devrait apparaître** avec :
   - La date/heure
   - Votre prénom
   - Votre email
   - Le code coupon

---

## ✅ Checklist

- [ ] Google Sheet créé avec les en-têtes (Date/Heure, Prénom, Email, Code coupon)
- [ ] ID du Sheet noté
- [ ] Projet Google Cloud créé
- [ ] API Google Sheets activée
- [ ] Compte de service créé
- [ ] Clé JSON téléchargée
- [ ] Sheet partagé avec l'email du compte de service (droits Éditeur)
- [ ] Variable `GOOGLE_SHEETS_ID` ajoutée dans Vercel
- [ ] Variable `GOOGLE_SERVICE_ACCOUNT` ajoutée dans Vercel
- [ ] Site redéployé
- [ ] Test effectué et fonctionnel

---

## 🐛 Dépannage

### Erreur : "Google Sheets non configuré"
- Vérifiez que les 2 variables sont bien ajoutées dans Vercel
- Vérifiez que le site a été redéployé après l'ajout des variables

### Erreur : "Permission denied"
- Vérifiez que le Sheet est bien partagé avec l'email du compte de service
- Vérifiez que les droits sont "Éditeur"

### Erreur : "Invalid JSON"
- Si vous avez utilisé base64, vérifiez que le décodage fonctionne
- Essayez l'Option A (une seule ligne) si base64 ne fonctionne pas

### Les données n'apparaissent pas
- Vérifiez les logs Vercel : **Deployments** → **Logs**
- Vérifiez que l'ID du Sheet est correct
- Vérifiez que la feuille s'appelle bien "Sheet1" (par défaut)

---

## 📝 Note importante

**Le stockage dans Google Sheets est non bloquant** : si Google Sheets échoue, l'email sera quand même envoyé. C'est une sécurité pour ne pas bloquer l'inscription.

---

**Besoin d'aide ?** Dites-moi où vous en êtes et je vous guide ! 🚀

