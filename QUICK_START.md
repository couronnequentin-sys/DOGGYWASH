# 🚀 Guide de démarrage rapide

## ✅ Ce qui a été configuré

1. ✅ **API route** pour gérer les soumissions de formulaire (`/server/api/coupon.post.ts`)
2. ✅ **Intégration Resend** pour l'envoi automatique d'emails
3. ✅ **Template d'email** professionnel avec le coupon -50%
4. ✅ **Formulaire mis à jour** pour appeler l'API
5. ✅ **Gestion d'erreurs** dans le formulaire

---

## 📋 Étapes pour mettre en ligne

### Étape 1 : Configurer Resend (5 minutes)

1. Allez sur [https://resend.com](https://resend.com) et créez un compte
2. Dans **API Keys**, créez une nouvelle clé API
3. Copiez la clé (commence par `re_`)
4. Vérifiez un domaine ou utilisez le domaine de test fourni

### Étape 2 : Déployer sur Vercel (10 minutes)

1. **Créez un compte** sur [https://vercel.com](https://vercel.com)
2. **Importez votre projet** depuis GitHub/GitLab
3. **Ajoutez les variables d'environnement** :
   - `RESEND_API_KEY` = votre clé Resend
   - `RESEND_FROM_EMAIL` = `DOGGYWASH <noreply@votredomaine.com>`
4. **Déployez** ! Vercel détectera automatiquement Nuxt.js

### Étape 3 : Tester

1. Remplissez le formulaire sur votre site en ligne
2. Vérifiez votre boîte email (dossier spam au début)
3. Vous devriez recevoir un email avec un code coupon unique (ex: `DOGGY-1234`)

---

## 🔧 Configuration locale (pour tester)

1. Créez un fichier `.env` à la racine :
```env
RESEND_API_KEY=re_votre_cle_ici
RESEND_FROM_EMAIL=DOGGYWASH <noreply@votredomaine.com>
NODE_ENV=development
```

2. Testez en local :
```bash
npm run dev
```

3. Remplissez le formulaire sur `http://localhost:3000`

---

## 📧 Format de l'email envoyé

L'email contient :
- ✅ Un design professionnel avec les couleurs DOGGYWASH
- ✅ Un code coupon unique (ex: `DOGGY-1234`)
- ✅ Des instructions claires pour utiliser le coupon
- ✅ Un design responsive (mobile-friendly)

---

## 🆘 Problèmes courants

**L'email n'arrive pas ?**
- Vérifiez le dossier spam
- Vérifiez que `RESEND_FROM_EMAIL` utilise un domaine vérifié dans Resend
- Consultez les logs dans Resend dashboard → **Logs**

**Erreur 500 sur le formulaire ?**
- Vérifiez que les variables d'environnement sont bien configurées
- Consultez les logs dans Vercel/Netlify

---

## 📚 Documentation complète

Pour plus de détails, consultez `DEPLOYMENT.md`

---

**Besoin d'aide ?** Tous les fichiers de configuration sont prêts. Il ne reste plus qu'à configurer Resend et déployer ! 🎉

