# 📝 Guide étape par étape : Ajouter les 3 enregistrements DNS Resend

## ✅ Enregistrement 1 : DKIM (TXT) - DÉJÀ FAIT ✅

---

## 📋 ENREGISTREMENT 2 : SPF (MX)

### Étape 1 : Cliquer sur "Ajouter un enregistrement"

1. Dans IONOS, cherchez le bouton **"Ajouter un enregistrement"** ou **"+"** ou **"Add Record"**
2. Cliquez dessus

### Étape 2 : Sélectionner le type "MX"

1. Dans le menu déroulant des types DNS, **sélectionnez "MX"**
2. ⚠️ **Important** : Ne choisissez PAS "TXT", choisissez bien **"MX"**

### Étape 3 : Remplir les champs

1. **Nom/Hôte/Host** :
   - Tapez exactement : `send`
   - ⚠️ **TRÈS IMPORTANT** :
     - ✅ **CORRECT** : `send`
     - ❌ **FAUX** : `send.doggywash.fr`
     - ❌ **FAUX** : `@send`
     - Juste `send` tout seul !

2. **Valeur/Contenu/Value** :
   - Retournez dans **Resend** (onglet ouvert)
   - Cherchez l'enregistrement **MX** avec le nom `send`
   - Copiez la valeur complète : `feedback-smtp.eu-west-1.amazonses.com`
   - Collez-la dans le champ Valeur

3. **Priorité/Priority** :
   - Tapez : `10`
   - ⚠️ **Important** : Mettez bien `10`, pas autre chose

4. **TTL** :
   - Mettez `60` ou `3600` (selon ce qui est disponible)

### Étape 4 : Enregistrer

1. Cliquez sur **"Enregistrer"** ou **"Valider"** ou **"Save"**
2. ✅ **Vérifiez** : Un nouvel enregistrement **MX** avec le nom `send` devrait apparaître dans votre liste

---

## 📋 ENREGISTREMENT 3 : SPF (TXT)

### Étape 1 : Cliquer sur "Ajouter un enregistrement"

1. Dans IONOS, **cliquez à nouveau** sur **"Ajouter un enregistrement"** ou **"+"**

### Étape 2 : Sélectionner le type "TXT"

1. Dans le menu déroulant des types DNS, **sélectionnez "TXT"**
2. ⚠️ **Important** : 
   - ✅ Choisissez **"TXT"** (pas "IONOS SPF (TXT)", juste "TXT")
   - C'est le même type que pour le premier enregistrement DKIM

### Étape 3 : Remplir les champs

1. **Nom/Hôte/Host** :
   - Tapez exactement : `send`
   - ⚠️ **TRÈS IMPORTANT** :
     - ✅ **CORRECT** : `send` (le **même nom** que l'enregistrement MX précédent !)
     - ❌ **FAUX** : `send.doggywash.fr`
     - ❌ **FAUX** : `@send`
     - Juste `send` tout seul !

2. **Valeur/Contenu/Value** :
   - Retournez dans **Resend** (onglet ouvert)
   - Cherchez l'enregistrement **TXT** avec le nom `send`
   - Copiez la valeur complète : `v=spf1 include:amazonses.com ~all`
   - Collez-la dans le champ Valeur
   - ⚠️ **Important** : Ne mettez PAS de guillemets autour de la valeur

3. **TTL** :
   - Mettez `60` ou `3600` (selon ce qui est disponible)

### Étape 4 : Enregistrer

1. Cliquez sur **"Enregistrer"** ou **"Valider"** ou **"Save"**
2. ✅ **Vérifiez** : Vous devriez maintenant avoir **2 enregistrements avec le nom `send`** :
   - 1 **MX** (priorité 10)
   - 1 **TXT** (contenu `v=spf1...`)

---

## ✅ Vérification finale

Vous devriez maintenant avoir **3 enregistrements** dans IONOS :

1. ✅ **TXT** : Nom = `resend._domainkey`
2. ✅ **MX** : Nom = `send`, Priorité = `10`
3. ✅ **TXT** : Nom = `send`

---

## ⏱️ Prochaine étape : Attendre

1. **Attendez 15-30 minutes** pour la propagation DNS
2. **Retournez** dans Resend → Domains → `doggywash.fr`
3. **Actualisez** la page (F5 ou Cmd+R)
4. **Les statuts** devraient passer de **"Échoué"** à **"Vérifié"** (vert) ✅

---

## 🆘 Besoin d'aide ?

**Dites-moi :**
- "J'ai ajouté l'enregistrement 2, je fais quoi maintenant ?"
- "Je ne trouve pas où mettre la priorité"
- "J'ai une erreur"

**Je vous guide en temps réel !** 🚀

