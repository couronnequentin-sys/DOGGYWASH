# 📝 Ajouter les enregistrements DNS Resend dans Vercel - Étapes

## 🎯 Vous avez trouvé la section "Add" dans Vercel - Parfait !

Maintenant, ajoutons les 3 enregistrements DNS Resend un par un.

---

## 📋 ENREGISTREMENT 1 : DKIM (TXT)

### Étape 1 : Cliquer sur "Add"

1. Dans Vercel → Settings → Domains → `doggywash.fr`
2. **Cliquez** sur le bouton **"Add"**

### Étape 2 : Remplir les champs

1. **Type :** Sélectionnez `TXT`
2. **Name/Host :** Tapez exactement : `resend._domainkey`
   - ⚠️ **Important** : Juste `resend._domainkey`, pas `resend._domainkey.doggywash.fr`
3. **Value :** 
   - Retournez dans **Resend** (onglet ouvert)
   - Cherchez l'enregistrement **DKIM** avec le nom `resend._domainkey`
   - **Copiez TOUT le contenu** (commence par `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD...`)
   - Collez-le dans le champ Value
   - ⚠️ **Ne mettez PAS de guillemets** autour
4. **TTL :** Mettez `3600` (ou laissez par défaut)
5. **Cliquez** sur **"Save"** ou **"Add"**

✅ **Vérifiez** : Un nouvel enregistrement TXT avec le nom `resend._domainkey` devrait apparaître

---

## 📋 ENREGISTREMENT 2 : SPF (MX)

### Étape 1 : Cliquer sur "Add"

1. **Cliquez** à nouveau sur **"Add"**

### Étape 2 : Remplir les champs

1. **Type :** Sélectionnez `MX`
2. **Name/Host :** Tapez exactement : `send`
   - ⚠️ **Important** : Juste `send`, pas `send.doggywash.fr`
3. **Value/Points to :** 
   - Retournez dans **Resend**
   - Cherchez l'enregistrement **MX** avec le nom `send`
   - **Copiez la valeur** : `feedback-smtp.eu-west-1.amazonses.com`
   - Collez-la dans le champ Value
4. **Priority :** Tapez : `10`
5. **TTL :** Mettez `60` (ou `3600` si 60 n'est pas disponible)
6. **Cliquez** sur **"Save"** ou **"Add"**

✅ **Vérifiez** : Un nouvel enregistrement MX avec le nom `send` devrait apparaître

---

## 📋 ENREGISTREMENT 3 : SPF (TXT)

### Étape 1 : Cliquer sur "Add"

1. **Cliquez** à nouveau sur **"Add"**

### Étape 2 : Remplir les champs

1. **Type :** Sélectionnez `TXT`
2. **Name/Host :** Tapez exactement : `send`
   - ⚠️ **Important** : Juste `send` (le même nom que l'enregistrement MX précédent)
3. **Value :** 
   - Retournez dans **Resend**
   - Cherchez l'enregistrement **TXT** avec le nom `send`
   - **Copiez la valeur** : `v=spf1 include:amazonses.com ~all`
   - Collez-la dans le champ Value
   - ⚠️ **Ne mettez PAS de guillemets** autour
4. **TTL :** Mettez `60` (ou `3600` si 60 n'est pas disponible)
5. **Cliquez** sur **"Save"** ou **"Add"**

✅ **Vérifiez** : Vous devriez maintenant avoir **2 enregistrements avec le nom `send`** :
   - 1 MX (priorité 10)
   - 1 TXT (contenu `v=spf1...`)

---

## ✅ Vérification finale

Vous devriez maintenant avoir **3 enregistrements** dans Vercel :

1. ✅ **TXT** : Nom = `resend._domainkey`
2. ✅ **MX** : Nom = `send`, Priorité = `10`
3. ✅ **TXT** : Nom = `send`

---

## ⏱️ Prochaine étape : Attendre et vérifier

1. **Attendez 15-30 minutes** pour la propagation DNS
2. **Retournez** dans Resend → Domains → `doggywash.fr`
3. **Actualisez** la page (F5 ou Cmd+R)
4. **Les statuts** devraient passer de **"Échoué"** à **"Vérifié"** (vert) ✅

---

## 🧪 Test optionnel : Vérifier avec mxtoolbox.com

Après 15-30 minutes, testez sur [mxtoolbox.com](https://mxtoolbox.com) :

1. `resend._domainkey.doggywash.fr` → TXT Lookup
2. `send.doggywash.fr` → TXT Lookup
3. `send.doggywash.fr` → MX Lookup

Vous devriez voir vos enregistrements !

---

**Commencez par ajouter le premier enregistrement (DKIM TXT) et dites-moi quand c'est fait !** 🚀

