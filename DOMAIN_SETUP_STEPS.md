# 🔧 Configuration du domaine - Étapes détaillées

## ✅ Ce qui est fait :
- [x] Domaine acheté sur IONOS
- [x] Email créé sur IONOS

## 📋 Prochaines étapes :

### Étape 1 : Ajouter le domaine dans Vercel
1. Vercel → Projet → Settings → Domains
2. Cliquez "Add Domain"
3. Entrez votre domaine (ex: `doggywash.fr`)
4. Vercel vous donnera des instructions DNS

### Étape 2 : Configurer les DNS dans IONOS

**Option A : Utiliser les nameservers Vercel (RECOMMANDÉ - Plus simple)**

1. Dans IONOS, allez dans **Domaines** → Votre domaine → **DNS**
2. Trouvez la section **Nameservers**
3. Remplacez les nameservers actuels par ceux donnés par Vercel :
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
4. Sauvegardez
5. Attendez 24-48h pour la propagation

**Option B : Ajouter un enregistrement CNAME**

1. Dans IONOS → Domaines → DNS
2. Ajoutez un enregistrement CNAME :
   - **Name :** `@` ou `www`
   - **Value :** `cname.vercel-dns.com`
3. Sauvegardez
4. Attendez quelques minutes

### Étape 3 : Vérifier le domaine dans Resend

1. Allez sur [resend.com/domains](https://resend.com/domains)
2. Cliquez "Add Domain"
3. Entrez votre domaine : `doggywash.fr`
4. Resend vous donnera des enregistrements DNS à ajouter
5. Ajoutez-les dans IONOS → DNS
6. Attendez la vérification (5-10 minutes)

### Étape 4 : Mettre à jour Vercel

Dans Vercel → Settings → Environment Variables :
- Modifiez `RESEND_FROM_EMAIL` = `DOGGYWASH <noreply@doggywash.fr>`

---

**Dites-moi où vous en êtes et je vous guide !**

