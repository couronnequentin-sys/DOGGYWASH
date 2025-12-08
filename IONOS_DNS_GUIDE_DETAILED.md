# 📋 Guide détaillé : Ajouter l'enregistrement DNS dans IONOS

## 🎯 Ce qu'il faut faire

Ajouter cet enregistrement DNS dans IONOS :
- **Type :** A
- **Nom :** @
- **Valeur :** 216.198.79.1

---

## 📝 Étapes détaillées

### Étape 1 : Se connecter à IONOS

1. Ouvrez votre navigateur
2. Allez sur : https://www.ionos.fr
3. Cliquez sur **"Connexion"** (en haut à droite)
4. Entrez vos identifiants IONOS
5. Cliquez sur **"Se connecter"**

### Étape 2 : Accéder à votre domaine

1. Une fois connecté, vous verrez votre tableau de bord
2. Dans le menu principal, cliquez sur **"Domaines"** (ou cherchez "Domaines" dans la navigation)
3. Vous verrez la liste de vos domaines
4. Cliquez sur **"doggywash.fr"**

### Étape 3 : Accéder aux paramètres DNS

**Plusieurs possibilités selon l'interface IONOS :**

**Option A :**
- Vous verrez un onglet ou un lien **"DNS"** ou **"Paramètres DNS"**
- Cliquez dessus

**Option B :**
- Vous verrez **"Zone DNS"** ou **"Gestion DNS"**
- Cliquez dessus

**Option C :**
- Cherchez un menu déroulant ou des onglets
- Cliquez sur celui qui concerne les DNS

### Étape 4 : Ajouter l'enregistrement A

1. Une fois dans les paramètres DNS, vous verrez une liste d'enregistrements existants
2. Cherchez un bouton :
   - **"Ajouter un enregistrement"**
   - **"Add Record"**
   - **"+"** ou **"Nouveau"**
   - Un bouton vert ou bleu pour ajouter
3. Cliquez sur ce bouton

### Étape 5 : Remplir le formulaire

Un formulaire va s'ouvrir. Remplissez-le ainsi :

**Champ "Type" ou "Record Type" :**
- Sélectionnez **"A"** dans le menu déroulant
- (Parfois écrit "A (IPv4)")

**Champ "Nom" ou "Host" ou "Name" :**
- Entrez : `@`
- OU laissez vide (selon IONOS, @ peut être représenté par un champ vide)
- OU entrez juste le domaine : `doggywash.fr`

**Champ "Valeur" ou "IP" ou "Target" :**
- Entrez : `216.198.79.1`
- (C'est l'adresse IP que Vercel vous a donnée)

**Champ "TTL" (si présent) :**
- Laissez par défaut (généralement 3600)
- Ou entrez : `3600`

### Étape 6 : Sauvegarder

1. Vérifiez que tous les champs sont corrects
2. Cliquez sur **"Ajouter"** ou **"Sauvegarder"** ou **"Enregistrer"**
3. Vous devriez voir un message de confirmation

### Étape 7 : Vérifier dans Vercel

1. Retournez dans Vercel → Settings → Domains
2. Attendez 5-10 minutes (parfois jusqu'à 30 minutes)
3. Le statut devrait passer de "Configuration Invalide" à **"Valid"** (vert) ✅

---

## 🆘 Si vous ne trouvez pas où ajouter

**Dites-moi :**
- Ce que vous voyez dans IONOS après avoir cliqué sur "doggywash.fr"
- Les onglets/menus disponibles
- Je vous guiderai plus précisément !

---

## ⏱️ Temps de propagation

- **Minimum :** 5-10 minutes
- **Maximum :** 24-48 heures (rare)
- **Moyen :** 15-30 minutes

---

**Allez-y étape par étape et dites-moi où vous en êtes ou si vous êtes bloqué !**

