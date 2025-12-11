# 🔍 Comment vérifier que les variables d'environnement sont bien associées au projet dans Vercel

## 🎯 Objectif

Vérifier que les variables `GOOGLE_SHEETS_ID` et `GOOGLE_SERVICE_ACCOUNT` sont bien liées au projet "doggywash" et disponibles pour le déploiement.

---

## 📋 ÉTAPE 1 : Accéder aux variables d'environnement du projet

### 1.1 : Aller sur Vercel

1. **Ouvrez** votre navigateur
2. **Allez sur** [vercel.com](https://vercel.com)
3. **Connectez-vous** avec votre compte

### 1.2 : Sélectionner le projet

1. **Dans la liste des projets**, cherchez **"doggywash"**
2. **Cliquez** sur le projet "doggywash"
3. Vous êtes maintenant dans le projet

### 1.3 : Accéder aux variables d'environnement

1. **En haut de la page**, vous voyez un menu avec : "Overview", "Deployments", "Analytics", "Settings", etc.
2. **Cliquez** sur **"Settings"** (ou "Paramètres")
3. **Dans le menu de gauche**, cherchez **"Environment Variables"** (ou "Variables d'environnement")
4. **Cliquez** dessus

---

## 📋 ÉTAPE 2 : Vérifier que vous êtes au bon endroit

### 2.1 : Vérifier le titre de la page

Vous devriez voir en haut :
- **"Environment Variables"** (ou "Variables d'environnement")
- **Le nom du projet** : "doggywash" (quelque part en haut)

### 2.2 : Vérifier qu'il n'y a pas "Team" ou "Shared" dans le titre

**✅ BON** : "Environment Variables" (sans "Team" ou "Shared")
**❌ MAUVAIS** : "Team Environment Variables" ou "Shared Environment Variables"

Si vous voyez "Team" ou "Shared", vous êtes dans la mauvaise section. Revenez au projet "doggywash" et allez dans Settings → Environment Variables.

---

## 📋 ÉTAPE 3 : Vérifier la liste des variables

### 3.1 : Voir toutes les variables

Vous devriez voir une liste avec toutes vos variables :
- `FACEBOOK_PIXEL_ID`
- `RESEND_FROM_EMAIL`
- `RESEND_API_KEY`
- `NODE_ENV`
- `RESEND_TEST_EMAIL`
- `GOOGLE_SHEETS_ID` ← **Vérifiez que celle-ci est là**
- `GOOGLE_SERVICE_ACCOUNT` ← **Vérifiez que celle-ci est là**

### 3.2 : Si les variables ne sont pas dans la liste

**Problème** : Les variables ne sont pas au niveau du projet.

**Solution** :
1. **Cherchez** une section en bas de la page appelée **"Shared Environment Variables"** ou **"Team Environment Variables"**
2. **Si vous voyez** `GOOGLE_SHEETS_ID` et `GOOGLE_SERVICE_ACCOUNT` dans cette section :
   - **Cliquez** sur chaque variable
   - **Vérifiez** qu'elle est liée au projet "doggywash"
   - **Ou** copiez-les dans la section "Environment Variables" du projet

---

## 📋 ÉTAPE 4 : Vérifier chaque variable individuellement

### 4.1 : Vérifier GOOGLE_SHEETS_ID

1. **Dans la liste**, trouvez `GOOGLE_SHEETS_ID`
2. **Cliquez** dessus (ou sur les "..." à droite → "Edit")
3. **Vérifiez** :
   - **Key (Clé)** : `GOOGLE_SHEETS_ID` (exactement, en majuscules)
   - **Value (Valeur)** : `1GLEKeq1hrV44lfAapNo9xROryzSHSi3_0UdLB_EwtSY`
   - **Environments** : ☑ Production ☑ Preview ☑ Development (ou "All Environments")
4. **Si tout est bon**, cliquez sur "Save" (ou "Cancel" si vous n'avez rien changé)

### 4.2 : Vérifier GOOGLE_SERVICE_ACCOUNT

1. **Dans la liste**, trouvez `GOOGLE_SERVICE_ACCOUNT`
2. **Cliquez** dessus (ou sur les "..." à droite → "Edit")
3. **Vérifiez** :
   - **Key (Clé)** : `GOOGLE_SERVICE_ACCOUNT` (exactement, en majuscules)
   - **Value (Valeur)** : Une très longue chaîne de caractères (le JSON encodé en base64)
     - Elle devrait commencer par quelque chose comme : `ewogICJ0eXBlIjogInN...`
   - **Environments** : ☑ Production ☑ Preview ☑ Development (ou "All Environments")
4. **Si tout est bon**, cliquez sur "Save" (ou "Cancel")

---

## 📋 ÉTAPE 5 : Vérifier dans les logs de déploiement

### 5.1 : Aller dans les déploiements

1. **Dans le menu du haut**, cliquez sur **"Deployments"** (ou "Déploiements")
2. **Cliquez** sur le **dernier déploiement** (celui en haut de la liste)

### 5.2 : Voir les logs

1. **Dans la page du déploiement**, cherchez **"Build Logs"** ou **"Journaux de construction"**
2. **Cliquez** dessus pour ouvrir les logs
3. **Cherchez** dans les logs les lignes qui contiennent :
   - `GOOGLE_SHEETS_ID`
   - `GOOGLE_SERVICE_ACCOUNT`
   - `Google Sheets`

### 5.3 : Tester le formulaire et voir les logs en temps réel

1. **Allez** sur https://doggywash.fr
2. **Remplissez** le formulaire avec votre email et une commune
3. **Retournez** dans Vercel → Deployments → Dernier déploiement → **"Logs"** (ou "Runtime Logs")
4. **Regardez** les nouveaux logs qui apparaissent
5. **Vous devriez voir** soit :
   - `Google Sheets non configuré - données non sauvegardées` → Les variables ne sont pas détectées ❌
   - `Données sauvegardées dans Google Sheets` → Ça fonctionne ! ✅

---

## 📋 ÉTAPE 6 : Vérifier dans Google Sheets (test final)

### 6.1 : Remplir le formulaire

1. **Allez** sur https://doggywash.fr
2. **Remplissez** le formulaire avec :
   - Votre prénom
   - Votre email
   - Une commune (ex: "Villefranche-sur-Saône")
3. **Cliquez** sur "Recevoir mon coupon -50%"

### 6.2 : Vérifier dans Google Sheets

1. **Ouvrez** votre Google Sheet (ID : `1GLEKeq1hrV44lfAapNo9xROryzSHSi3_0UdLB_EwtSY`)
2. **Attendez** 1-2 minutes après avoir rempli le formulaire
3. **Actualisez** la page du Sheet (F5 ou Cmd+R)
4. **Vous devriez voir** une nouvelle ligne avec :
   - Date/Heure
   - Votre prénom
   - Votre email
   - La commune que vous avez saisie
   - Un code coupon (ex: DOGGY-1234)

**Si vous voyez la nouvelle ligne** → Tout fonctionne ! ✅
**Si vous ne voyez rien** → Il y a un problème avec les variables ❌

---

## ✅ Checklist de vérification

- [ ] Je suis dans le projet "doggywash" (pas dans l'équipe)
- [ ] Je suis dans "Settings" → "Environment Variables" (pas "Team Environment Variables")
- [ ] Je vois `GOOGLE_SHEETS_ID` dans la liste
- [ ] Je vois `GOOGLE_SERVICE_ACCOUNT` dans la liste
- [ ] La valeur de `GOOGLE_SHEETS_ID` est : `1GLEKeq1hrV44lfAapNo9xROryzSHSi3_0UdLB_EwtSY`
- [ ] La valeur de `GOOGLE_SERVICE_ACCOUNT` est une longue chaîne (JSON encodé)
- [ ] Les deux variables ont "All Environments" ou Production + Preview + Development coché
- [ ] J'ai redéployé le projet après avoir ajouté/modifié les variables
- [ ] J'ai testé le formulaire et vérifié dans Google Sheets

---

## 🆘 Si ça ne fonctionne toujours pas

### Vérifier les logs Vercel

1. **Allez** dans Vercel → Projet "doggywash" → Deployments → Dernier déploiement → **"Logs"**
2. **Remplissez** le formulaire
3. **Regardez** les logs - que voyez-vous ?

**Si vous voyez** : `Google Sheets non configuré`
→ Les variables ne sont pas détectées. Vérifiez qu'elles sont bien au niveau du projet, pas de l'équipe.

**Si vous voyez** : `Données sauvegardées dans Google Sheets`
→ Les variables fonctionnent ! Mais peut-être que Google Sheets n'est pas bien configuré.

---

**Suivez ces étapes une par une et dites-moi où vous en êtes !** 🔍

