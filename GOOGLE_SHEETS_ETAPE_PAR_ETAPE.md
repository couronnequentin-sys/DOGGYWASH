# 🚀 Configuration Google Sheets - Guide étape par étape

## ⚡ Version rapide (10 minutes)

---

## 📋 ÉTAPE 1 : Créer le Google Sheet (2 min)

1. **Ouvrez** [sheets.google.com](https://sheets.google.com)
2. **Cliquez** sur "Nouveau" → "Nouveau tableur"
3. **Nommez-le** : `DOGGYWASH - Inscriptions`
4. **Dans la ligne 1**, tapez ces en-têtes :
   - **A1** : `Date/Heure`
   - **B1** : `Prénom`
   - **C1** : `Email`
   - **D1** : `Code coupon`
5. **📝 IMPORTANT :** Regardez l'URL de votre navigateur
   - Elle ressemble à : `https://docs.google.com/spreadsheets/d/1ABC123XYZ.../edit`
   - **Copiez la partie entre `/d/` et `/edit`**
   - Exemple : Si l'URL est `.../d/1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT/edit`
   - **L'ID est :** `1aB2cD3eF4gH5iJ6kL7mN8oP9qR0sT`
   - **📝 Notez cet ID quelque part !**

✅ **Vous avez terminé l'étape 1 ?** Dites-moi l'ID et je vous guide pour l'étape 2 !

---

## 🔑 ÉTAPE 2 : Google Cloud Console (3 min)

### 2.1 : Créer un projet

1. **Ouvrez** [console.cloud.google.com](https://console.cloud.google.com)
2. **Connectez-vous** avec votre compte Google
3. En haut à gauche, **cliquez** sur "Select a project"
4. **Cliquez** sur "New Project"
5. **Nommez-le** : `DOGGYWASH`
6. **Cliquez** sur "Create"
7. **Attendez** quelques secondes que le projet soit créé

### 2.2 : Activer l'API Google Sheets

1. Dans la barre de recherche en haut, **tapez** : `Google Sheets API`
2. **Cliquez** sur "Google Sheets API"
3. **Cliquez** sur le bouton bleu "Enable" (Activer)
4. **Attendez** quelques secondes

### 2.3 : Créer un compte de service

1. Dans le menu de gauche, **cliquez** sur "APIs & Services" → "Credentials"
2. En haut, **cliquez** sur "Create Credentials"
3. **Sélectionnez** "Service Account"
4. Remplissez :
   - **Service account name** : `doggywash-sheets`
   - **Service account ID** : (laissez tel quel, auto-généré)
5. **Cliquez** sur "Create and Continue"
6. **Étape "Grant this service account access"** : **Passez cette étape** (cliquez sur "Continue" puis "Done")

### 2.4 : Créer la clé JSON

1. Dans la liste, **cliquez** sur le compte de service que vous venez de créer (`doggywash-sheets@...`)
2. Allez dans l'onglet **"Keys"**
3. **Cliquez** sur "Add Key" → "Create new key"
4. **Sélectionnez** "JSON"
5. **Cliquez** sur "Create"
6. **Un fichier JSON sera téléchargé automatiquement** dans votre dossier Téléchargements
7. **📝 Ouvrez ce fichier** (double-clic dessus)
8. **Copiez TOUT le contenu** du fichier (Cmd+A puis Cmd+C sur Mac, Ctrl+A puis Ctrl+C sur Windows)

✅ **Vous avez le fichier JSON ouvert ?** Dites-moi et je vous guide pour l'étape suivante !

---

## 📧 ÉTAPE 3 : Partager le Sheet (1 min)

1. **Retournez** dans votre Google Sheet
2. **Cliquez** sur le bouton **"Partager"** (en haut à droite)
3. Dans le fichier JSON que vous avez ouvert, **trouvez** la ligne qui commence par `"client_email"`
   - Elle ressemble à : `"client_email": "doggywash-sheets@votre-projet.iam.gserviceaccount.com"`
4. **Copiez l'email** entre les guillemets (sans les guillemets)
   - Exemple : `doggywash-sheets@votre-projet.iam.gserviceaccount.com`
5. **Collez cet email** dans le champ "Partager"
6. **Changez les droits** en "Éditeur"
7. **Décochez** "Notifier les personnes"
8. **Cliquez** sur "Envoyer"

✅ **Sheet partagé ?** Passons à Vercel !

---

## 🔧 ÉTAPE 4 : Configurer Vercel (3 min)

### 4.1 : Préparer le JSON pour Vercel

Le JSON contient des retours à la ligne. Pour Vercel, on va le mettre sur une seule ligne :

1. **Ouvrez** le fichier JSON
2. **Sélectionnez tout** (Cmd+A / Ctrl+A)
3. **Copiez** (Cmd+C / Ctrl+C)
4. **Allez** sur [base64encode.org](https://www.base64encode.org/)
5. **Collez** le contenu dans le champ de gauche
6. **Cliquez** sur "Encode"
7. **Copiez** le résultat (c'est votre JSON encodé en base64)

### 4.2 : Ajouter les variables dans Vercel

1. **Ouvrez** [vercel.com](https://vercel.com)
2. **Sélectionnez** votre projet "doggywash"
3. Allez dans **"Settings"** → **"Environment Variables"**
4. **Ajoutez la première variable** :
   - **Key :** `GOOGLE_SHEETS_ID`
   - **Value :** L'ID de votre Sheet (celui que vous avez noté à l'étape 1)
   - **Environments :** Cochez ☑ Production ☑ Preview ☑ Development
   - **Cliquez** sur "Save"
5. **Ajoutez la deuxième variable** :
   - **Key :** `GOOGLE_SERVICE_ACCOUNT`
   - **Value :** Le JSON encodé en base64 (celui que vous avez copié)
   - **Environments :** Cochez ☑ Production ☑ Preview ☑ Development
   - **Cliquez** sur "Save"

### 4.3 : Redéployer

1. Allez dans **"Deployments"**
2. **Cliquez** sur les **3 points** (⋯) du dernier déploiement
3. **Cliquez** sur "Redeploy"
4. **Attendez** que le déploiement soit terminé (2-3 minutes)

✅ **Redéploiement terminé ?** Testons !

---

## 🧪 ÉTAPE 5 : Test (1 min)

1. **Allez** sur https://doggywash.fr
2. **Remplissez** le formulaire avec votre email
3. **Retournez** dans votre Google Sheet
4. **Actualisez** la page (F5 ou Cmd+R)
5. **Une nouvelle ligne devrait apparaître** avec vos données !

---

## ✅ Checklist finale

- [ ] Google Sheet créé avec les 4 en-têtes
- [ ] ID du Sheet noté
- [ ] Projet Google Cloud créé
- [ ] API Google Sheets activée
- [ ] Compte de service créé
- [ ] Clé JSON téléchargée
- [ ] Sheet partagé avec l'email du compte de service
- [ ] Variable `GOOGLE_SHEETS_ID` ajoutée dans Vercel
- [ ] Variable `GOOGLE_SERVICE_ACCOUNT` ajoutée dans Vercel (base64)
- [ ] Site redéployé
- [ ] Test effectué et fonctionnel

---

## 🆘 Besoin d'aide ?

**Dites-moi à quelle étape vous êtes** et je vous guide en temps réel ! 🚀

