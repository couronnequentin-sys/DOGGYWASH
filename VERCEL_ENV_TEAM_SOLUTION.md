# 🔧 Solution : Variables d'environnement au niveau ÉQUIPE dans Vercel

## ✅ Bonne nouvelle : Les variables d'équipe fonctionnent aussi !

Si vous avez ajouté les variables dans la section **"Team Environment Variables"** (variables d'équipe), **elles devraient fonctionner** pour tous les projets de l'équipe, y compris "doggywash".

---

## 🔍 Vérification : Où sont vos variables ?

### Option 1 : Variables dans la section ÉQUIPE

Si vous avez ajouté `GOOGLE_SHEETS_ID` et `GOOGLE_SERVICE_ACCOUNT` dans la section **"Team Environment Variables"** ou **"Shared Environment Variables"**, c'est **OK** ! Elles sont disponibles pour tous les projets.

### Option 2 : Variables manquantes

Si vous ne voyez **pas** ces 2 variables dans la liste, il faut les ajouter.

---

## 📋 Comment ajouter les variables dans la section ÉQUIPE

### Étape 1 : Accéder aux variables d'équipe

1. **Allez sur** [vercel.com](https://vercel.com)
2. **Cliquez** sur le nom de votre équipe (en haut à gauche, à côté du logo Vercel)
3. **Cliquez** sur **"Settings"** (dans le menu)
4. **Cliquez** sur **"Environment Variables"** (dans le menu de gauche)
5. Vous devriez voir la section **"Team Environment Variables"** ou **"Shared Environment Variables"**

### Étape 2 : Ajouter GOOGLE_SHEETS_ID

1. **Cliquez** sur **"Add"** (ou "Ajouter")
2. **Remplissez** :
   - **Key** : `GOOGLE_SHEETS_ID`
   - **Value** : `1GLEKeq1hrV44lfAapNo9xROryzSHSi3_0UdLB_EwtSY`
   - **Environments** : Cochez ☑ **Production** ☑ **Preview** ☑ **Development**
   - **Projects** : Sélectionnez **"doggywash"** (ou "All Projects")
3. **Cliquez** sur **"Save"**

### Étape 3 : Ajouter GOOGLE_SERVICE_ACCOUNT

1. **Cliquez** sur **"Add"**
2. **Remplissez** :
   - **Key** : `GOOGLE_SERVICE_ACCOUNT`
   - **Value** : Collez le JSON encodé en base64 (depuis base64encode.org)
   - **Environments** : Cochez ☑ **Production** ☑ **Preview** ☑ **Development**
   - **Projects** : Sélectionnez **"doggywash"** (ou "All Projects")
3. **Cliquez** sur **"Save"**

---

## 🔍 Vérification : Les variables sont-elles bien là ?

Dans la section "Team Environment Variables", vous devriez voir :
- `GOOGLE_SHEETS_ID`
- `GOOGLE_SERVICE_ACCOUNT`

Si elles sont là, **elles fonctionnent** pour votre projet !

---

## 📋 Redéployer le projet

1. **Retournez** dans le projet "doggywash"
2. Allez dans **"Deployments"**
3. **Cliquez** sur les **"..."** du dernier déploiement
4. **Cliquez** sur **"Redeploy"**
5. **Attendez** 2-3 minutes

---

## 🧪 Test

1. **Allez** sur https://doggywash.fr
2. **Remplissez** le formulaire
3. **Vérifiez** votre Google Sheet dans 1-2 minutes

---

## 🆘 Si ça ne fonctionne toujours pas

### Vérifier les logs Vercel

1. Allez dans **Deployments** → Dernier déploiement → **"Logs"**
2. **Cherchez** les lignes qui contiennent : `Google Sheets`
3. **Si vous voyez** : `Google Sheets non configuré` → Les variables ne sont pas détectées
4. **Si vous voyez** : `Données sauvegardées dans Google Sheets` → Ça fonctionne !

---

**Dites-moi si vous voyez les 2 variables dans la section Team Environment Variables !** 🔍

