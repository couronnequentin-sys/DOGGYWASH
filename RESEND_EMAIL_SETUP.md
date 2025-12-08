# 📧 Configuration de l'adresse email dans Resend

## Étape 1 : Ajouter le domaine dans Resend

1. Allez sur [https://resend.com/domains](https://resend.com/domains)
2. Cliquez sur **"Add Domain"** (en haut à droite)
3. Entrez votre domaine : `doggywash.fr`
4. Cliquez sur **"Add"**

## Étape 2 : Récupérer les enregistrements DNS

Resend va vous afficher des enregistrements DNS à ajouter dans IONOS. Il y aura :
- Des enregistrements **TXT** (pour la vérification du domaine)
- Des enregistrements **MX** (pour recevoir des emails - optionnel si vous n'utilisez que l'envoi)

**Notez-les ou gardez la page ouverte !**

## Étape 3 : Ajouter les enregistrements dans IONOS

1. Retournez dans IONOS → **Domaines** → Votre domaine → **DNS**
2. Cliquez sur **"Ajouter un enregistrement"** ou **"Add Record"**
3. Pour chaque enregistrement que Resend vous a donné :

   **Pour un enregistrement TXT :**
   - **Type :** `TXT`
   - **Nom/Host :** (celui donné par Resend, souvent `@` ou `_resend`)
   - **Valeur :** (celle donnée par Resend, souvent commence par `resend-verify=...`)
   - **TTL :** 3600 (ou laissez par défaut)
   - Cliquez sur **"Ajouter"**

   **Pour un enregistrement MX (si nécessaire) :**
   - **Type :** `MX`
   - **Nom/Host :** `@`
   - **Valeur :** (celle donnée par Resend)
   - **Priorité :** 10 (ou celle donnée par Resend)
   - Cliquez sur **"Ajouter"**

## Étape 4 : Vérifier le domaine dans Resend

1. Retournez dans Resend → **Domains**
2. Cliquez sur **"Verify"** à côté de votre domaine `doggywash.fr`
3. Attendez 5-10 minutes (parfois jusqu'à 24h)
4. Le statut devrait passer à **✅ Verified**

## Étape 5 : Mettre à jour Vercel

Une fois le domaine vérifié dans Resend :

1. Allez dans Vercel → Projet "doggywash" → **Settings** → **Environment Variables**
2. Trouvez `RESEND_FROM_EMAIL`
3. Cliquez sur **"Edit"** (ou les 3 points → Edit)
4. Changez la valeur en :
   ```
   DOGGYWASH <noreply@doggywash.fr>
   ```
   (Remplacez `noreply@doggywash.fr` par l'adresse email que vous avez créée sur IONOS)
5. Cliquez sur **"Save"**
6. **Important :** Redéployez votre site dans Vercel (Settings → Deployments → ... → Redeploy)

## ✅ Checklist

- [ ] Domaine ajouté dans Resend
- [ ] Enregistrements DNS ajoutés dans IONOS
- [ ] Domaine vérifié dans Resend (✅ Verified)
- [ ] Variable `RESEND_FROM_EMAIL` mise à jour dans Vercel
- [ ] Site redéployé sur Vercel

---

**Dites-moi quelle adresse email vous avez créée sur IONOS et je vous guide !**

