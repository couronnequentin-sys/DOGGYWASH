# 🔧 Ajouter les enregistrements DNS Resend dans Vercel

## 🎯 Problème identifié

Votre domaine `doggywash.fr` utilise les **nameservers Vercel** (`ns1.vercel-dns.com`), donc les enregistrements DNS ajoutés dans IONOS ne sont pas utilisés.

**Solution :** Ajouter les enregistrements DNS Resend directement dans Vercel.

---

## 📋 ÉTAPE 1 : Accéder aux DNS dans Vercel

1. **Allez sur** [vercel.com](https://vercel.com)
2. **Connectez-vous**
3. **Sélectionnez** votre projet "doggywash"
4. Allez dans **"Settings"** → **"Domains"**
5. **Cliquez** sur `doggywash.fr`

---

## 📋 ÉTAPE 2 : Ajouter les enregistrements DNS

Dans Vercel, cherchez la section **"DNS Records"** ou **"Enregistrements DNS"** ou **"Custom DNS Records"**.

### Si Vercel a une interface pour ajouter des DNS :

Ajoutez les 3 enregistrements un par un :

#### Enregistrement 1 : DKIM (TXT)

1. **Cliquez** sur **"Add Record"** ou **"+"**
2. **Type :** `TXT`
3. **Name/Host :** `resend._domainkey`
4. **Value :** Copiez depuis Resend (commence par `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD...`)
5. **TTL :** `3600`
6. **Save**

#### Enregistrement 2 : SPF (MX)

1. **Cliquez** sur **"Add Record"**
2. **Type :** `MX`
3. **Name/Host :** `send`
4. **Value :** `feedback-smtp.eu-west-1.amazonses.com`
5. **Priority :** `10`
6. **TTL :** `60`
7. **Save**

#### Enregistrement 3 : SPF (TXT)

1. **Cliquez** sur **"Add Record"**
2. **Type :** `TXT`
3. **Name/Host :** `send`
4. **Value :** `v=spf1 include:amazonses.com ~all`
5. **TTL :** `60`
6. **Save**

---

## ⚠️ Si Vercel n'a pas d'interface pour les DNS personnalisés

Vercel peut ne pas permettre d'ajouter des enregistrements DNS personnalisés directement. Dans ce cas, vous avez 2 options :

### Option A : Utiliser un sous-domaine pour les emails

1. Créez un sous-domaine dans IONOS : `mail.doggywash.fr`
2. Configurez Resend avec ce sous-domaine
3. Ajoutez les enregistrements DNS dans IONOS pour ce sous-domaine

### Option B : Changer les nameservers pour IONOS (plus complexe)

1. Dans IONOS → Domaines → `doggywash.fr` → **Serveurs de noms**
2. Changez pour utiliser les nameservers IONOS par défaut
3. Attendez 24-48h pour la propagation
4. Reconfigurez le domaine dans Vercel (peut nécessiter de reconfigurer le domaine)
5. Ajoutez les enregistrements DNS Resend dans IONOS

---

## 🧪 Test après ajout

1. **Attendez** 15-30 minutes
2. **Testez** sur [mxtoolbox.com](https://mxtoolbox.com) :
   - `resend._domainkey.doggywash.fr` → TXT Lookup
   - `send.doggywash.fr` → TXT Lookup
   - `send.doggywash.fr` → MX Lookup
3. **Vérifiez** dans Resend → Domains → `doggywash.fr`

---

## 📝 Note importante

Si Vercel ne permet pas d'ajouter des enregistrements DNS personnalisés, la meilleure solution est d'utiliser un sous-domaine pour les emails (ex: `mail.doggywash.fr`) ou de contacter le support Vercel pour demander comment ajouter des enregistrements DNS personnalisés.

---

**Allez dans Vercel → Settings → Domains → doggywash.fr et dites-moi si vous voyez une section pour ajouter des enregistrements DNS !** 🔍

