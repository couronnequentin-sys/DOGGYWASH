# ✅ Finaliser la configuration Resend

## Étape 1 : Vérifier le domaine dans Resend

1. Allez sur [resend.com/domains](https://resend.com/domains)
2. Cherchez `doggywash.fr` dans la liste
3. Cliquez sur **"Verify"** à côté du domaine
4. Attendez 5-10 minutes
5. Le statut devrait passer à **✅ Verified**

**Si le statut est "Pending" :**
- C'est normal, attendez encore quelques minutes
- La vérification peut prendre jusqu'à 24h (rare)

---

## Étape 2 : Mettre à jour Vercel

Une fois le domaine vérifié dans Resend :

1. Allez dans **Vercel** → Projet "doggywash" → **Settings** → **Environment Variables**
2. Trouvez `RESEND_FROM_EMAIL`
3. Cliquez sur **"Edit"** (ou les 3 points → Edit)
4. Changez la valeur en :
   ```
   DOGGYWASH <contact@doggywash.fr>
   ```
5. Cliquez sur **"Save"**

---

## Étape 3 : Redéployer le site

1. Dans Vercel → Projet "doggywash"
2. Allez dans **"Deployments"**
3. Cliquez sur les **"..."** à côté du dernier déploiement
4. Cliquez sur **"Redeploy"**
5. Attendez 2-3 minutes

---

## Étape 4 : Tester

1. Allez sur https://doggywash.fr
2. Remplissez le formulaire de coupon
3. Vérifiez votre email
4. L'email devrait venir de : `contact@doggywash.fr` ✅

---

**Allez vérifier dans Resend si le domaine est vérifié, puis on met à jour Vercel !**

