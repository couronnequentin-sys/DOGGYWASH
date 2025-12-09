# 🔍 Problème : Resend ne trouve pas les enregistrements DNS

## 🎯 Cause probable : Problème de nameservers

Si votre domaine `doggywash.fr` utilise les **nameservers de Vercel** au lieu de ceux d'IONOS, alors **les enregistrements DNS que vous ajoutez dans IONOS ne sont pas utilisés !**

---

## 🔍 Vérification 1 : Quels nameservers sont utilisés ?

### Option A : Vérifier dans IONOS

1. **Allez dans** IONOS → Domaines → `doggywash.fr`
2. **Cherchez** la section **"Serveurs de noms"** ou **"Nameservers"**
3. **Vérifiez** quels nameservers sont configurés :
   - Si vous voyez `ns1.vercel-dns.com` et `ns2.vercel-dns.com` → **Problème trouvé !**
   - Si vous voyez des nameservers IONOS (ex: `ns1.ionos.fr`) → Les DNS IONOS sont utilisés

### Option B : Vérifier avec un outil externe

1. **Allez sur** [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** : `doggywash.fr`
3. **Sélectionnez** "NS Lookup" (Name Server Lookup)
4. **Cliquez** sur "Lookup"
5. **Vous verrez** les nameservers utilisés :
   - Si c'est `ns1.vercel-dns.com` / `ns2.vercel-dns.com` → **Problème !**
   - Si c'est IONOS → Les DNS IONOS sont utilisés

---

## ✅ Solution : 2 options

### Solution A : Utiliser les nameservers IONOS (RECOMMANDÉ pour Resend)

Si vous utilisez les nameservers Vercel, **changez-les pour utiliser ceux d'IONOS** :

1. **Dans IONOS** → Domaines → `doggywash.fr` → **Serveurs de noms**
2. **Changez** pour utiliser les nameservers IONOS (par défaut)
3. **Attendez** 24-48h pour la propagation
4. **Ajoutez** les enregistrements DNS Resend dans IONOS (comme vous l'avez fait)
5. **Vérifiez** dans Resend après 30 minutes

**⚠️ Attention :** Cela peut affecter votre site sur Vercel. Vous devrez peut-être reconfigurer le domaine dans Vercel.

---

### Solution B : Ajouter les enregistrements DNS dans Vercel (si vous gardez les nameservers Vercel)

Si vous voulez garder les nameservers Vercel, **ajoutez les enregistrements DNS Resend dans Vercel** :

1. **Allez dans** Vercel → Projet "doggywash" → **Settings** → **Domains**
2. **Cliquez** sur `doggywash.fr`
3. **Cherchez** la section **"DNS Records"** ou **"Enregistrements DNS"**
4. **Ajoutez** les 3 enregistrements Resend :
   - **TXT** : Nom = `resend._domainkey`, Valeur = (depuis Resend)
   - **MX** : Nom = `send`, Valeur = `feedback-smtp.eu-west-1.amazonses.com`, Priorité = `10`
   - **TXT** : Nom = `send`, Valeur = `v=spf1 include:amazonses.com ~all`
5. **Attendez** 15-30 minutes
6. **Vérifiez** dans Resend

**⚠️ Note :** Vercel peut ne pas avoir d'interface pour ajouter des enregistrements DNS personnalisés. Dans ce cas, utilisez la Solution A.

---

## 🧪 Test : Vérifier si les DNS sont propagés

Même si vous avez ajouté les enregistrements, testez avec un outil externe :

1. **Allez sur** [mxtoolbox.com](https://mxtoolbox.com)
2. **Testez** :
   - `resend._domainkey.doggywash.fr` → TXT Lookup
   - `send.doggywash.fr` → TXT Lookup
   - `send.doggywash.fr` → MX Lookup
3. **Si vous ne voyez rien** → Les enregistrements ne sont pas propagés ou ne sont pas au bon endroit

---

## 📝 Checklist de diagnostic

- [ ] Vérifié quels nameservers sont utilisés (IONOS ou Vercel)
- [ ] Si nameservers Vercel → Ajouté les enregistrements dans Vercel OU changé pour IONOS
- [ ] Si nameservers IONOS → Vérifié que les enregistrements sont bien dans IONOS
- [ ] Testé avec mxtoolbox.com pour vérifier la propagation
- [ ] Les valeurs correspondent exactement à celles dans Resend
- [ ] Attendu 30 minutes minimum après les changements

---

## 🆘 Si rien ne fonctionne

1. **Contactez le support Resend** : [resend.com/support](https://resend.com/support)
2. **Donnez-leur** :
   - Votre domaine : `doggywash.fr`
   - Les nameservers utilisés (résultat du test NS Lookup)
   - Les résultats des tests mxtoolbox.com
   - Une capture d'écran de vos enregistrements DNS

---

**Faites d'abord le test NS Lookup sur mxtoolbox.com et dites-moi quels nameservers sont utilisés !** 🔍

