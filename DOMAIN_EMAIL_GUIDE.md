# 🌐 Guide : Acheter un domaine et créer un email

## 🎯 Recommandation : IONOS (ou autre registrar) + Vercel

**Pourquoi ?**
- ✅ Domaines moins chers (~5-10€/an vs ~15-20€/an sur Vercel)
- ✅ Plus de contrôle sur votre domaine
- ✅ Meilleures options pour l'email
- ✅ Facile à configurer avec Vercel

---

## 📋 Option 1 : IONOS (Recommandé) ⭐

### Étape 1 : Acheter le domaine sur IONOS

1. Allez sur [https://www.ionos.fr](https://www.ionos.fr)
2. Recherchez votre domaine (ex: `doggywash.fr` ou `doggywash.com`)
3. Ajoutez-le au panier
4. **Choisissez l'offre :**
   - Domaine seul : ~5-10€/an
   - Domaine + Email : ~2-5€/mois (recommandé si vous voulez l'email)
5. Complétez l'achat

### Étape 2 : Créer l'adresse email sur IONOS

**Si vous avez pris l'offre avec email :**

1. Dans votre compte IONOS, allez dans **Email**
2. Cliquez sur **Créer une adresse email**
3. Créez : `contact@doggywash.fr` ou `noreply@doggywash.fr`
4. Configurez le mot de passe
5. ✅ Votre email est prêt !

**Alternative : Email gratuit avec Gmail**
- Créez `doggywash.contact@gmail.com` (gratuit)
- Moins professionnel mais fonctionne

### Étape 3 : Configurer le domaine sur Vercel

1. Dans Vercel → votre projet → **Settings** → **Domains**
2. Cliquez sur **Add Domain**
3. Entrez votre domaine : `doggywash.fr`
4. Vercel vous donnera des instructions DNS

### Étape 4 : Configurer les DNS sur IONOS

1. Dans IONOS, allez dans **Domaines** → **DNS**
2. Ajoutez les enregistrements que Vercel vous a donnés :
   - **Option A :** Utiliser les nameservers Vercel (plus simple)
     - Remplacez les nameservers par ceux de Vercel
   - **Option B :** Ajouter un enregistrement CNAME
     - Name : `@` ou `www`
     - Value : `cname.vercel-dns.com`
3. Attendez 24-48h pour la propagation

### Étape 5 : Vérifier le domaine dans Resend

1. Allez sur [https://resend.com/domains](https://resend.com/domains)
2. Cliquez sur **Add Domain**
3. Entrez `doggywash.fr`
4. Resend vous donnera des enregistrements DNS à ajouter dans IONOS
5. Ajoutez-les dans IONOS → **DNS**
6. Attendez la vérification (5-10 minutes)

### Étape 6 : Mettre à jour Vercel

Dans Vercel → **Settings** → **Environment Variables**, modifiez :
- `RESEND_FROM_EMAIL` = `DOGGYWASH <noreply@doggywash.fr>`

---

## 📋 Option 2 : Vercel (Plus simple mais plus cher)

### Avantages :
- ✅ Tout au même endroit
- ✅ Configuration DNS automatique
- ✅ Plus rapide à configurer

### Inconvénients :
- ❌ Plus cher (~15-20€/an)
- ❌ Pas d'email inclus (il faut un service séparé)
- ❌ Moins de contrôle

### Étapes :

1. Dans Vercel → votre projet → **Settings** → **Domains**
2. Cliquez sur **Buy Domain**
3. Recherchez et achetez votre domaine
4. Vercel configure automatiquement les DNS
5. **Pour l'email :** Vous devrez quand même utiliser IONOS ou un autre service

---

## 💡 Comparaison des prix

| Service | Domaine | Email | Total/an |
|---------|---------|-------|----------|
| **IONOS** | ~8€ | ~3€/mois (36€/an) | ~44€/an |
| **IONOS (sans email)** | ~8€ | Gmail gratuit | ~8€/an |
| **Vercel** | ~15-20€ | Service séparé nécessaire | ~20€/an + email |

---

## 🎯 Ma recommandation

**Pour commencer :**
1. ✅ Achetez le domaine sur **IONOS** (~8€/an)
2. ✅ Utilisez **Gmail gratuit** : `doggywash.contact@gmail.com`
3. ✅ Configurez le domaine sur **Vercel**
4. ✅ Vérifiez le domaine dans **Resend** pour les emails automatiques

**Plus tard (quand vous avez plus de budget) :**
- Ajoutez l'email professionnel IONOS (~3€/mois)
- OU utilisez Google Workspace (~6€/mois)

---

## 📝 Checklist

- [ ] Domaine acheté sur IONOS
- [ ] Email créé (Gmail ou IONOS)
- [ ] Domaine configuré sur Vercel
- [ ] DNS configurés dans IONOS
- [ ] Domaine vérifié dans Resend
- [ ] Variable `RESEND_FROM_EMAIL` mise à jour dans Vercel
- [ ] Site accessible sur `doggywash.fr`

---

**Besoin d'aide pour une étape précise ? Dites-moi où vous en êtes !**

