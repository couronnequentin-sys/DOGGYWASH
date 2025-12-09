# 🔍 Vérifier que les DNS sont bien propagés

## 🎯 Objectif

Vérifier que les enregistrements DNS Resend sont bien visibles publiquement, même si Resend ne les trouve pas.

---

## 🧪 Test 1 : Vérifier le DKIM

1. **Allez sur** [mxtoolbox.com](https://mxtoolbox.com)
2. **Dans le champ de recherche**, tapez :
   ```
   resend._domainkey.doggywash.fr
   ```
3. **Sélectionnez** "TXT Lookup" dans le menu déroulant
4. **Cliquez** sur "Lookup"
5. **Résultat attendu :**
   - Vous devriez voir une ligne avec votre enregistrement DKIM
   - Il devrait commencer par `p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNAD...`

**Si vous ne voyez rien :**
- Les DNS ne sont pas encore propagés
- Ou il y a une erreur dans le nom/valeur dans IONOS

---

## 🧪 Test 2 : Vérifier le SPF (TXT)

1. **Sur** [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** :
   ```
   send.doggywash.fr
   ```
3. **Sélectionnez** "TXT Lookup"
4. **Cliquez** sur "Lookup"
5. **Résultat attendu :**
   - Vous devriez voir : `v=spf1 include:amazonses.com ~all`

**Si vous ne voyez rien :**
- L'enregistrement TXT n'est pas propagé
- Ou il y a une erreur dans IONOS

---

## 🧪 Test 3 : Vérifier le SPF (MX)

1. **Sur** [mxtoolbox.com](https://mxtoolbox.com)
2. **Tapez** :
   ```
   send.doggywash.fr
   ```
3. **Sélectionnez** "MX Lookup"
4. **Cliquez** sur "Lookup"
5. **Résultat attendu :**
   - Vous devriez voir : `feedback-smtp.eu-west-1.amazonses.com` avec priorité 10

**Si vous ne voyez rien :**
- L'enregistrement MX n'est pas propagé
- Ou il y a une erreur dans IONOS

---

## 🔍 Test 4 : Vérifier avec dig (si vous avez accès au terminal)

```bash
# Vérifier DKIM
dig TXT resend._domainkey.doggywash.fr

# Vérifier SPF TXT
dig TXT send.doggywash.fr

# Vérifier SPF MX
dig MX send.doggywash.fr
```

---

## ⚠️ Problèmes courants

### Les tests externes fonctionnent mais Resend ne trouve toujours pas

**Causes possibles :**
1. **Resend vérifie depuis un autre serveur DNS** - attendez encore 30 minutes
2. **Les valeurs ne correspondent pas exactement** - vérifiez caractère par caractère
3. **Problème de cache Resend** - contactez le support Resend

### Les tests externes ne fonctionnent pas

**Causes possibles :**
1. **Les valeurs dans IONOS sont incorrectes** - vérifiez qu'elles correspondent exactement à Resend
2. **Les noms sont incorrects** - doivent être `resend._domainkey` et `send` (sans `.doggywash.fr`)
3. **Les DNS ne sont pas encore propagés** - attendez 30 minutes à 24 heures

---

## 📝 Checklist

- [ ] Test DKIM sur mxtoolbox.com fonctionne
- [ ] Test SPF TXT sur mxtoolbox.com fonctionne
- [ ] Test SPF MX sur mxtoolbox.com fonctionne
- [ ] Les valeurs dans IONOS correspondent exactement à celles dans Resend
- [ ] Pas de guillemets autour des valeurs TXT dans IONOS
- [ ] Les noms sont exactement : `resend._domainkey` et `send`

---

**Faites ces tests et dites-moi ce que vous voyez !** 🔍

