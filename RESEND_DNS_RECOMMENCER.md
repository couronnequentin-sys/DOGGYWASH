# 🔄 Recommencer la configuration DNS Resend - Guide étape par étape

## 🎯 Objectif

Supprimer et recréer proprement les 3 enregistrements DNS Resend dans IONOS pour que Resend puisse les vérifier.

---

## 📋 ÉTAPE 1 : Récupérer les valeurs exactes depuis Resend

1. **Allez sur** [resend.com/domains](https://resend.com/domains)
2. **Cliquez** sur votre domaine `doggywash.fr`
3. **Vous voyez 3 enregistrements** à ajouter :

### Enregistrement 1 : DKIM (TXT)
- **Type :** TXT
- **Nom :** `resend._domainkey`
- **Contenu :** `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD...` (très long, plusieurs centaines de caractères)
- **TTL :** Auto (mettez 3600 dans IONOS)

### Enregistrement 2 : SPF (MX)
- **Type :** MX
- **Nom :** `send`
- **Contenu :** `feedback-smtp.eu-west-1.amazonses.com` (l'adresse complète)
- **Priorité :** `10`
- **TTL :** 60

### Enregistrement 3 : SPF (TXT)
- **Type :** TXT
- **Nom :** `send` (même nom que l'enregistrement MX)
- **Contenu :** `v=spf1 include:amazonses.com ~all` (commence par `v=spf1`)
- **TTL :** 60

**📝 IMPORTANT :** Copiez EXACTEMENT ces valeurs depuis Resend (ne les inventez pas !)

---

## 🗑️ ÉTAPE 2 : Supprimer les anciens enregistrements dans IONOS

1. **Allez sur** [ionos.fr](https://www.ionos.fr)
2. **Connectez-vous**
3. **Domaines** → Cliquez sur `doggywash.fr`
4. **DNS** ou **Enregistrements DNS**

### Supprimer les 3 enregistrements Resend :

1. **Cherchez** l'enregistrement avec le nom `resend._domainkey` (Type TXT)
   - Cochez la case à gauche
   - Cliquez sur l'icône **poubelle** (🗑️) ou **Supprimer**
   - Confirmez la suppression

2. **Cherchez** l'enregistrement avec le nom `send` (Type MX)
   - Cochez la case à gauche
   - Cliquez sur l'icône **poubelle** (🗑️) ou **Supprimer**
   - Confirmez la suppression

3. **Cherchez** l'enregistrement avec le nom `send` (Type TXT)
   - Cochez la case à gauche
   - Cliquez sur l'icône **poubelle** (🗑️) ou **Supprimer**
   - Confirmez la suppression

✅ **Vérifiez** : Les 3 enregistrements Resend ne doivent plus apparaître dans la liste

---

## ⏱️ ÉTAPE 3 : Attendre 5 minutes

**Important :** Attendez 5 minutes après la suppression pour que les changements se propagent.

---

## ➕ ÉTAPE 4 : Recréer les enregistrements dans IONOS

### 4.1 : Ajouter l'enregistrement DKIM (TXT)

1. **Cliquez** sur **"Ajouter un enregistrement"** ou **"+"** ou **"Add Record"**
2. **Sélectionnez** le type : **"TXT"**
3. **Remplissez** :
   - **Nom/Hôte/Host** : `resend._domainkey`
     - ⚠️ **TRÈS IMPORTANT** : 
       - ✅ **CORRECT** : `resend._domainkey`
       - ❌ **FAUX** : `resend._domainkey.doggywash.fr`
       - ❌ **FAUX** : `@resend._domainkey`
   - **Valeur/Contenu/Value** : Collez le contenu complet depuis Resend
     - Il commence par `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD...`
     - **Copiez TOUT le contenu**, même s'il est très long
     - ⚠️ **Ne mettez PAS de guillemets** autour de la valeur
   - **TTL** : `3600` (ou laissez par défaut)
4. **Cliquez** sur **"Enregistrer"** ou **"Valider"** ou **"Save"**

✅ **Vérifiez** : Un nouvel enregistrement TXT avec le nom `resend._domainkey` apparaît

---

### 4.2 : Ajouter l'enregistrement SPF (MX)

1. **Cliquez** sur **"Ajouter un enregistrement"** ou **"+"**
2. **Sélectionnez** le type : **"MX"**
3. **Remplissez** :
   - **Nom/Hôte/Host** : `send`
     - ⚠️ **TRÈS IMPORTANT** :
       - ✅ **CORRECT** : `send`
       - ❌ **FAUX** : `send.doggywash.fr`
       - ❌ **FAUX** : `@send`
   - **Valeur/Contenu/Value** : `feedback-smtp.eu-west-1.amazonses.com`
     - Copiez l'adresse complète depuis Resend
   - **Priorité/Priority** : `10`
   - **TTL** : `60` (ou `3600` si 60 n'est pas disponible)
4. **Cliquez** sur **"Enregistrer"** ou **"Valider"**

✅ **Vérifiez** : Un nouvel enregistrement MX avec le nom `send` apparaît

---

### 4.3 : Ajouter l'enregistrement SPF (TXT)

1. **Cliquez** sur **"Ajouter un enregistrement"** ou **"+"**
2. **Sélectionnez** le type : **"TXT"**
3. **Remplissez** :
   - **Nom/Hôte/Host** : `send`
     - ⚠️ **TRÈS IMPORTANT** :
       - ✅ **CORRECT** : `send` (le même nom que l'enregistrement MX précédent)
       - ❌ **FAUX** : `send.doggywash.fr`
       - ❌ **FAUX** : `@send`
   - **Valeur/Contenu/Value** : `v=spf1 include:amazonses.com ~all`
     - Il commence par `v=spf1 include:amazonses.com`
     - **Copiez TOUT le contenu** depuis Resend
     - ⚠️ **Ne mettez PAS de guillemets** autour de la valeur
   - **TTL** : `60` (ou `3600` si 60 n'est pas disponible)
4. **Cliquez** sur **"Enregistrer"** ou **"Valider"**

✅ **Vérifiez** : Vous devriez maintenant avoir **2 enregistrements avec le nom `send`** :
   - 1 MX (priorité 10)
   - 1 TXT (contenu `v=spf1...`)

---

## ⏱️ ÉTAPE 5 : Attendre la propagation DNS

1. **Attendez 15-30 minutes** (parfois jusqu'à 1 heure)
2. **Ne vérifiez pas tout de suite** dans Resend, laissez le temps à la propagation

---

## ✅ ÉTAPE 6 : Vérifier dans Resend

1. **Retournez** dans Resend → **Domains**
2. **Cliquez** sur votre domaine `doggywash.fr`
3. **Actualisez** la page (F5 ou Cmd+R)
4. **Les statuts** devraient passer de **"Échoué"** à **"Vérifié"** (vert) ✅

**Si c'est toujours "Échoué" après 30 minutes :**
- Vérifiez les valeurs avec mxtoolbox.com (voir guide `VERIFIER_DNS.md`)
- Contactez le support Resend si les tests externes fonctionnent

---

## 📝 Checklist finale

- [ ] Les 3 anciens enregistrements supprimés dans IONOS
- [ ] Attendu 5 minutes après suppression
- [ ] Enregistrement 1 (DKIM TXT) recréé avec le nom `resend._domainkey`
- [ ] Enregistrement 2 (SPF MX) recréé avec le nom `send`
- [ ] Enregistrement 3 (SPF TXT) recréé avec le nom `send`
- [ ] Les valeurs correspondent exactement à celles dans Resend
- [ ] Pas de guillemets autour des valeurs TXT
- [ ] Attendu 15-30 minutes pour la propagation
- [ ] Vérifié dans Resend - statuts passés en vert ✅

---

## 🆘 Besoin d'aide ?

**Dites-moi à quelle étape vous êtes** et je vous guide en temps réel ! 🚀

**Exemples :**
- "J'ai supprimé les 3 enregistrements, je fais quoi maintenant ?"
- "Je ne trouve pas où ajouter l'enregistrement dans IONOS"
- "J'ai une erreur quand j'ajoute l'enregistrement"

