# 🔧 Configuration DNS Resend dans IONOS

## 🎯 Objectif

Ajouter les enregistrements DNS DKIM et SPF dans IONOS pour que Resend puisse vérifier votre domaine `doggywash.fr` et envoyer des emails.

**⚠️ IMPORTANT :** Vous devez ajouter **3 enregistrements** au total :
1. **1 enregistrement TXT** pour DKIM (`resend._domainkey`)
2. **1 enregistrement MX** pour SPF (`send`)
3. **1 enregistrement TXT** pour SPF (`send`)

---

## 📋 Étape 1 : Récupérer les enregistrements depuis Resend

Dans votre capture d'écran Resend, vous voyez :

### Enregistrement 1 : DKIM (TXT)
- **Type :** TXT (affiché comme "SMS" dans Resend, mais c'est bien TXT)
- **Nom :** `resend._domainkey`
- **Contenu :** `p=MIGfMAOGCSqGSIb3DQEB...` (très long, commence par `p=`)
- **TTL :** Auto (mettez 3600 dans IONOS)
- **Priorité :** (vide)

### Enregistrement 2 : SPF - MX
- **Type :** MX
- **Nom :** `send`
- **Contenu :** `feedback-smtp.eu-west-...` (l'adresse complète)
- **TTL :** 60
- **Priorité :** 10

### Enregistrement 3 : SPF - TXT
- **Type :** TXT (affiché comme "SMS" dans Resend)
- **Nom :** `send`
- **Contenu :** `v=spf1 include:amazons...` (commence par `v=spf1`)
- **TTL :** 60
- **Priorité :** (vide)

---

## 🔧 Étape 2 : Ajouter les enregistrements dans IONOS

### 2.1 : Accéder à la gestion DNS

1. **Connectez-vous** à [ionos.fr](https://www.ionos.fr)
2. Allez dans **"Domaines & SSL"**
3. **Cliquez** sur votre domaine `doggywash.fr`
4. Allez dans l'onglet **"Enregistrements DNS"** ou **"Gestion DNS"**

### 2.2 : Ajouter l'enregistrement DKIM (TXT)

1. **Cliquez** sur **"Ajouter un enregistrement"** ou **"+"** ou **"Add Record"**
2. **Sélectionnez** le type : **"TXT"**
3. **Remplissez** :
   - **Nom/Hôte/Host** : `resend._domainkey`
     - ⚠️ **TRÈS IMPORTANT** : 
       - ✅ **CORRECT** : `resend._domainkey`
       - ❌ **FAUX** : `resend._domainkey.doggywash.fr`
       - ❌ **FAUX** : `@resend._domainkey`
       - Juste `resend._domainkey` tout seul !
   - **Valeur/Contenu/Value** : Collez le contenu complet depuis Resend
     - Il commence par `p=MIGfMAOGCSqGSIb3DQEB...` (très long, plusieurs lignes)
     - **Copiez TOUT le contenu**, même s'il est très long
   - **TTL** : `3600` (ou laissez par défaut si c'est déjà 3600)
4. **Cliquez** sur **"Enregistrer"** ou **"Valider"** ou **"Save"**

✅ **Vérifiez** : Vous devriez voir un nouvel enregistrement TXT avec le nom `resend._domainkey`

### 2.3 : Ajouter le premier enregistrement SPF (MX)

1. **Cliquez** sur **"Ajouter un enregistrement"** ou **"+"**
2. **Sélectionnez** le type : **"MX"**
3. **Remplissez** :
   - **Nom/Hôte/Host** : `send`
     - ⚠️ **TRÈS IMPORTANT** :
       - ✅ **CORRECT** : `send`
       - ❌ **FAUX** : `send.doggywash.fr`
       - ❌ **FAUX** : `@send`
       - Juste `send` tout seul !
   - **Valeur/Contenu/Value** : `feedback-smtp.eu-west-...` (le contenu complet depuis Resend)
     - Copiez l'adresse complète depuis Resend
   - **Priorité/Priority** : `10`
   - **TTL** : `60` (ou `3600` si 60 n'est pas disponible)
4. **Cliquez** sur **"Enregistrer"** ou **"Valider"**

✅ **Vérifiez** : Vous devriez voir un nouvel enregistrement MX avec le nom `send`

### 2.4 : Ajouter le deuxième enregistrement SPF (TXT)

1. **Cliquez** sur **"Ajouter un enregistrement"** ou **"+"**
2. **Sélectionnez** le type : **"TXT"**
3. **Remplissez** :
   - **Nom/Hôte/Host** : `send`
     - ⚠️ **TRÈS IMPORTANT** :
       - ✅ **CORRECT** : `send` (le même nom que l'enregistrement MX précédent)
       - ❌ **FAUX** : `send.doggywash.fr`
       - ❌ **FAUX** : `@send`
       - Juste `send` tout seul !
   - **Valeur/Contenu/Value** : `v=spf1 include:amazons...` (le contenu complet depuis Resend)
     - Il commence par `v=spf1 include:amazons...`
     - **Copiez TOUT le contenu**
   - **TTL** : `60` (ou `3600` si 60 n'est pas disponible)
4. **Cliquez** sur **"Enregistrer"** ou **"Valider"**

✅ **Vérifiez** : Vous devriez maintenant avoir **2 enregistrements avec le nom `send`** :
   - 1 MX (priorité 10)
   - 1 TXT (contenu `v=spf1...`)

---

## ⏱️ Étape 3 : Attendre la propagation DNS

1. **Les enregistrements DNS** peuvent prendre **5 minutes à 48 heures** pour se propager
2. **En général**, c'est **15-30 minutes** pour IONOS
3. **Dans Resend**, vous pouvez cliquer sur **"Vérifier"** ou **"Refresh"** pour vérifier le statut

---

## ✅ Vérification

1. **Retournez** dans Resend
2. **Actualisez** la page
3. **Les statuts** devraient passer de **"Échoué"** à **"Vérifié"** (vert) au bout de quelques minutes

---

## 🐛 Dépannage

### Les enregistrements sont toujours en échec après 30 minutes

1. **Vérifiez** que vous avez bien mis :
   - **Nom** : `resend._domainkey` (sans `.doggywash.fr`)
   - **Nom** : `send` (sans `.doggywash.fr`)

2. **Vérifiez** que le **contenu** est exactement le même que dans Resend (copier-coller complet)

3. **Vérifiez** que vous avez bien créé **3 enregistrements** :
   - 1 TXT pour DKIM (`resend._domainkey`)
   - 1 MX pour SPF (`send`)
   - 1 TXT pour SPF (`send`)

### Erreur "Nom déjà existant"

- Si vous avez déjà un enregistrement `send`, vous pouvez :
  - Soit le modifier pour ajouter les deux valeurs
  - Soit le supprimer et le recréer

### Comment vérifier que les enregistrements sont bien ajoutés ?

1. Allez sur [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** : `resend._domainkey.doggywash.fr`
3. **Sélectionnez** "TXT Lookup"
4. **Cliquez** sur "Lookup"
5. Vous devriez voir votre enregistrement DKIM

---

## 📝 Résumé des 3 enregistrements à ajouter

| Type | Nom | Contenu | Priorité | TTL |
|------|-----|---------|----------|-----|
| **TXT** | `resend._domainkey` | `p=MIGfMAOGCSqGSIb3DQEB...` (depuis Resend) | - | 3600 |
| **MX** | `send` | `feedback-smtp.eu-west-...` (depuis Resend) | 10 | 60 |
| **TXT** | `send` | `v=spf1 include:amazons...` (depuis Resend) | - | 60 |

---

**Une fois que les 3 enregistrements sont ajoutés, attendez 15-30 minutes et vérifiez dans Resend !** 🚀

