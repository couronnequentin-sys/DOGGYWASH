# 📧 Configuration Resend avec Gmail

## ⚠️ Important : Resend ne peut pas envoyer depuis Gmail directement

Resend nécessite de vérifier un domaine pour envoyer des emails. Vous avez deux options :

---

## ✅ Option 1 : Vérifier votre domaine `doggywash.fr` dans Resend (RECOMMANDÉ)

C'est la meilleure solution : vous utiliserez `contact@doggywash.fr` (plus professionnel que Gmail).

### Étapes :

1. **Dans Resend :**
   - Allez sur [resend.com/domains](https://resend.com/domains)
   - Cliquez "Add Domain"
   - Entrez `doggywash.fr`
   - Resend vous donnera des enregistrements DNS

2. **Dans IONOS :**
   - Allez dans Domaines → `doggywash.fr` → DNS
   - Ajoutez les enregistrements TXT que Resend vous a donnés
   - Attendez la vérification (5-10 minutes)

3. **Dans Vercel :**
   - Settings → Environment Variables
   - Modifiez `RESEND_FROM_EMAIL` = `DOGGYWASH <contact@doggywash.fr>`

**Avantages :**
- ✅ Plus professionnel
- ✅ Moins de risques de spam
- ✅ Meilleure délivrabilité

---

## ⚡ Option 2 : Utiliser le domaine de test Resend (TEMPORAIRE)

Pour tester rapidement, vous pouvez utiliser `onboarding@resend.dev` :

1. **Dans Vercel :**
   - Settings → Environment Variables
   - Modifiez `RESEND_FROM_EMAIL` = `DOGGYWASH <onboarding@resend.dev>`

**Inconvénients :**
- ❌ Moins professionnel
- ❌ Peut aller en spam
- ❌ Limité à 100 emails/jour

---

## 🎯 Recommandation

**Je vous conseille l'Option 1** : vérifier `doggywash.fr` dans Resend et utiliser `contact@doggywash.fr`.

Votre Gmail `contact.doggywash@gmail.com` peut servir pour :
- Recevoir les emails de contact
- Gérer votre compte
- Mais pas pour envoyer via Resend

---

**Quelle option préférez-vous ? Je peux vous guider étape par étape !**

