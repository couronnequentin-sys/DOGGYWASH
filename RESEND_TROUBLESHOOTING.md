# 🔍 Dépannage : Resend ne trouve pas les enregistrements DNS

## 🎯 Problème

Les enregistrements DNS sont ajoutés dans IONOS depuis le début, mais Resend ne les trouve toujours pas.

---

## ✅ Vérification 1 : Configuration Vercel

**Non, il n'y a rien à configurer dans Vercel pour les DNS.** Les DNS sont gérés uniquement par IONOS.

**MAIS**, vérifiez que `RESEND_FROM_EMAIL` est bien configuré :

1. Allez dans **Vercel** → Projet "doggywash" → **Settings** → **Environment Variables**
2. Vérifiez que `RESEND_FROM_EMAIL` existe et contient :
   ```
   DOGGYWASH <contact@doggywash.fr>
   ```
   ou
   ```
   DOGGYWASH <noreply@doggywash.fr>
   ```

---

## 🔍 Vérification 2 : Les valeurs DNS sont-elles exactes ?

### Problème courant : Les guillemets dans les valeurs TXT

Dans IONOS, quand vous ajoutez un enregistrement TXT, **ne mettez PAS de guillemets** autour de la valeur, même si Resend les affiche.

**Exemple :**
- ❌ **FAUX** : `"p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD..."`
- ✅ **CORRECT** : `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD...`

### Vérifier les valeurs exactes

1. **Dans Resend**, copiez EXACTEMENT les valeurs affichées
2. **Dans IONOS**, vérifiez que les valeurs correspondent caractère par caractère
3. **Attention aux espaces** en début/fin de ligne

---

## 🧪 Vérification 3 : Tester avec un outil externe

### Test 1 : Vérifier le DKIM

1. Allez sur [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** : `resend._domainkey.doggywash.fr`
3. **Sélectionnez** "TXT Lookup"
4. **Cliquez** sur "Lookup"
5. **Vous devriez voir** votre enregistrement DKIM

**Si vous ne voyez rien :**
- Les DNS ne sont pas encore propagés
- Ou il y a une erreur dans le nom/valeur

### Test 2 : Vérifier le SPF (TXT)

1. Sur [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** : `send.doggywash.fr`
3. **Sélectionnez** "TXT Lookup"
4. **Cliquez** sur "Lookup"
5. **Vous devriez voir** : `v=spf1 include:amazonses.com ~all`

### Test 3 : Vérifier le SPF (MX)

1. Sur [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** : `send.doggywash.fr`
3. **Sélectionnez** "MX Lookup"
4. **Cliquez** sur "Lookup"
5. **Vous devriez voir** : `feedback-smtp.eu-west-1.amazonses.com` avec priorité 10

---

## 🔧 Solution : Supprimer et recréer les enregistrements

Si les tests externes ne fonctionnent pas, essayez de :

1. **Supprimer** les 3 enregistrements dans IONOS
2. **Attendre** 5 minutes
3. **Recréer** les 3 enregistrements exactement comme dans Resend
4. **Attendre** 15-30 minutes
5. **Vérifier** dans Resend

---

## ⚠️ Problème spécifique : Les valeurs sont tronquées

Parfois, IONOS tronque les valeurs très longues. Vérifiez que :

1. La valeur DKIM est **complète** (elle fait plusieurs centaines de caractères)
2. Il n'y a pas de coupure au milieu
3. La valeur commence bien par `p=` et se termine correctement

---

## 📝 Checklist de vérification

- [ ] Les valeurs dans IONOS correspondent EXACTEMENT à celles dans Resend (caractère par caractère)
- [ ] Pas de guillemets autour des valeurs TXT dans IONOS
- [ ] Les noms sont exactement : `resend._domainkey` et `send` (sans `.doggywash.fr`)
- [ ] Les 3 enregistrements sont bien présents dans IONOS
- [ ] Les tests sur mxtoolbox.com fonctionnent
- [ ] `RESEND_FROM_EMAIL` est bien configuré dans Vercel

---

## 🆘 Si rien ne fonctionne

1. **Contactez le support Resend** : [resend.com/support](https://resend.com/support)
2. **Donnez-leur** :
   - Votre domaine : `doggywash.fr`
   - Les résultats des tests mxtoolbox.com
   - Une capture d'écran de vos enregistrements DNS dans IONOS

---

**Faites les tests sur mxtoolbox.com et dites-moi ce que vous voyez !** 🔍

