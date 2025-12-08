# 🔧 Configurer les DNS dans IONOS

## Ce que Vercel demande

Vercel vous demande d'ajouter cet enregistrement DNS :
- **Type :** A (ou UN)
- **Nom :** @
- **Valeur :** 216.198.79.1

---

## Étapes dans IONOS

### 1. Aller dans IONOS

1. Allez sur [ionos.fr](https://www.ionos.fr)
2. Connectez-vous à votre compte
3. Allez dans **Domaines** → Cliquez sur **"doggywash.fr"**

### 2. Accéder aux DNS

1. Cherchez **"DNS"** ou **"Paramètres DNS"** ou **"Zone DNS"**
2. Cliquez dessus

### 3. Ajouter l'enregistrement A

1. Cliquez sur **"Ajouter un enregistrement"** ou **"Add Record"**
2. Remplissez :
   - **Type :** `A` (ou sélectionnez "A" dans le menu)
   - **Nom/Host :** `@` (ou laissez vide pour le domaine racine)
   - **Valeur/IP :** `216.198.79.1`
   - **TTL :** 3600 (ou laissez par défaut)
3. Cliquez sur **"Ajouter"** ou **"Sauvegarder"**

### 4. Vérifier

1. Retournez dans Vercel → Settings → Domains
2. Attendez 5-10 minutes
3. Le statut devrait passer de "Configuration Invalide" à **"Valid"** (vert) ✅

---

**Allez dans IONOS et ajoutez cet enregistrement DNS, puis dites-moi quand c'est fait !**

