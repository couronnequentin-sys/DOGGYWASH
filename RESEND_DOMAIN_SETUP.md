# 📧 Configuration Resend avec le domaine doggywash.fr

## ⚠️ Important : Resend ne peut pas utiliser Gmail directement

Resend nécessite de vérifier un domaine pour envoyer des emails. Vous ne pouvez pas utiliser `contact.doggywash@gmail.com` directement.

**Solution :** Vérifier `doggywash.fr` dans Resend et utiliser `contact@doggywash.fr` ou `noreply@doggywash.fr`

---

## Étape 1 : Vérifier le domaine dans Resend

### 1.1 : Ajouter le domaine

1. Allez sur [resend.com/domains](https://resend.com/domains)
2. Cliquez sur **"Add Domain"**
3. Entrez : `doggywash.fr`
4. Cliquez sur **"Add"**

### 1.2 : Récupérer les enregistrements DNS

Resend va vous afficher des enregistrements DNS à ajouter dans IONOS :
- Des enregistrements **TXT** (pour la vérification)
- Des enregistrements **MX** (optionnel, pour recevoir des emails)

**Notez-les ou gardez la page ouverte !**

---

## Étape 2 : Ajouter les enregistrements DNS dans IONOS

1. Retournez dans IONOS → **Domaines** → `doggywash.fr` → **DNS**
2. Cliquez sur **"Ajouter un enregistrement"**

### Pour chaque enregistrement TXT que Resend vous a donné :

1. **Type :** `TXT`
2. **Nom/Host :** (celui donné par Resend, souvent `@` ou `_resend`)
3. **Valeur :** (celle donnée par Resend, souvent commence par `resend-verify=...`)
4. **TTL :** 3600 (ou laissez par défaut)
5. Cliquez sur **"Ajouter"**

### Pour les enregistrements MX (si nécessaire) :

1. **Type :** `MX`
2. **Nom/Host :** `@`
3. **Valeur :** (celle donnée par Resend)
4. **Priorité :** 10 (ou celle donnée par Resend)
5. Cliquez sur **"Ajouter"**

---

## Étape 3 : Vérifier le domaine dans Resend

1. Retournez dans Resend → **Domains**
2. Cliquez sur **"Verify"** à côté de `doggywash.fr`
3. Attendez 5-10 minutes (parfois jusqu'à 24h)
4. Le statut devrait passer à **✅ Verified**

---

## Étape 4 : Mettre à jour Vercel

Une fois le domaine vérifié dans Resend :

1. Allez dans Vercel → Projet "doggywash" → **Settings** → **Environment Variables**
2. Trouvez `RESEND_FROM_EMAIL`
3. Cliquez sur **"Edit"** (ou les 3 points → Edit)
4. Changez la valeur en :
   ```
   DOGGYWASH <contact@doggywash.fr>
   ```
   (Ou `noreply@doggywash.fr` si vous préférez)
5. Cliquez sur **"Save"**
6. **Important :** Redéployez votre site dans Vercel (Settings → Deployments → ... → Redeploy)

---

## ✅ Checklist

- [ ] Domaine ajouté dans Resend
- [ ] Enregistrements DNS ajoutés dans IONOS
- [ ] Domaine vérifié dans Resend (✅ Verified)
- [ ] Variable `RESEND_FROM_EMAIL` mise à jour dans Vercel
- [ ] Site redéployé sur Vercel
- [ ] Test du formulaire en production

---

**Commencez par l'Étape 1 : Allez dans Resend et ajoutez le domaine `doggywash.fr` !**

