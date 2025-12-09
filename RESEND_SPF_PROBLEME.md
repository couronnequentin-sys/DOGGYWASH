# 🔍 Problème : Enregistrements SPF requis manquants

## 🎯 Problème

Resend dit : "Enregistrements SPF requis manquants" même après avoir ajouté les 3 enregistrements.

---

## 🔍 Vérification 1 : Les valeurs sont-elles exactes ?

### Vérifier l'enregistrement SPF TXT (`send`)

1. **Dans IONOS**, vérifiez l'enregistrement TXT avec le nom `send`
2. **La valeur doit être EXACTEMENT** : `v=spf1 include:amazonses.com ~all`
3. **Vérifiez** :
   - Pas de guillemets autour
   - Pas d'espaces en début/fin
   - La valeur commence bien par `v=spf1`
   - Elle se termine bien par `~all`

### Vérifier l'enregistrement SPF MX (`send`)

1. **Dans IONOS**, vérifiez l'enregistrement MX avec le nom `send`
2. **La valeur doit être EXACTEMENT** : `feedback-smtp.eu-west-1.amazonses.com`
3. **La priorité doit être** : `10`

---

## ⚠️ Problème courant : Conflit avec les enregistrements SPF existants d'IONOS

IONOS crée automatiquement des enregistrements SPF pour le domaine racine (`@`). Cela peut créer un conflit.

### Solution : Vérifier l'enregistrement SPF du domaine racine

1. **Dans IONOS**, cherchez un enregistrement **TXT** avec le nom `@` (ou vide)
2. **La valeur ressemble probablement à** : `v=spf1 include:_spf-eu.ionos.com ~all`
3. **Vous avez 2 options** :

#### Option A : Modifier l'enregistrement SPF existant (RECOMMANDÉ)

1. **Trouvez** l'enregistrement TXT avec le nom `@` qui contient `v=spf1`
2. **Modifiez-le** pour inclure aussi Resend :
   ```
   v=spf1 include:_spf-eu.ionos.com include:amazonses.com ~all
   ```
3. **Enregistrez**

#### Option B : Laisser tel quel (si vous n'utilisez que Resend pour envoyer)

Si vous n'utilisez que Resend pour envoyer des emails (pas IONOS), vous pouvez :
1. **Modifier** l'enregistrement SPF du domaine racine pour :
   ```
   v=spf1 include:amazonses.com ~all
   ```

---

## 🧪 Test : Vérifier avec un outil externe

1. **Allez sur** [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** : `send.doggywash.fr`
3. **Sélectionnez** "TXT Lookup"
4. **Cliquez** sur "Lookup"
5. **Vous devriez voir** : `v=spf1 include:amazonses.com ~all`

**Si vous ne voyez rien :**
- Les DNS ne sont pas encore propagés (attendez 30 minutes)
- Ou il y a une erreur dans les valeurs

---

## 📝 Checklist de vérification

- [ ] L'enregistrement MX `send` existe avec la valeur `feedback-smtp.eu-west-1.amazonses.com` et priorité `10`
- [ ] L'enregistrement TXT `send` existe avec la valeur `v=spf1 include:amazonses.com ~all`
- [ ] Les valeurs correspondent EXACTEMENT à celles dans Resend (caractère par caractère)
- [ ] Pas de guillemets autour des valeurs TXT
- [ ] Les noms sont exactement `send` (sans `.doggywash.fr`)
- [ ] Test sur mxtoolbox.com fonctionne pour `send.doggywash.fr`

---

## 🔧 Solution alternative : Attendre la propagation

Parfois, Resend met du temps à détecter les changements DNS. **Attendez 30 minutes à 1 heure** après avoir ajouté les enregistrements, puis :

1. **Retournez** dans Resend → Domains → `doggywash.fr`
2. **Actualisez** la page (F5 ou Cmd+R)
3. **Cliquez** sur "Vérifier" ou "Refresh" si disponible

---

## 🆘 Si rien ne fonctionne

1. **Contactez le support Resend** : [resend.com/support](https://resend.com/support)
2. **Donnez-leur** :
   - Votre domaine : `doggywash.fr`
   - Les résultats des tests mxtoolbox.com
   - Une capture d'écran de vos enregistrements DNS dans IONOS

---

**Vérifiez d'abord que les valeurs sont exactes, puis testez sur mxtoolbox.com !** 🔍

