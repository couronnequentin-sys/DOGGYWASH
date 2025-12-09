# ⚡ Configuration DNS Resend - Guide rapide

## 🎯 Vous devez ajouter 3 enregistrements dans IONOS

---

## 📝 Résumé des 3 enregistrements

| # | Type | Nom | Contenu | Priorité | TTL |
|---|------|-----|---------|----------|-----|
| **1** | **TXT** | `resend._domainkey` | `p=MIGfMAOGCSqGSIb3DQEB...` (depuis Resend) | - | 3600 |
| **2** | **MX** | `send` | `feedback-smtp.eu-west-...` (depuis Resend) | **10** | 60 |
| **3** | **TXT** | `send` | `v=spf1 include:amazons...` (depuis Resend) | - | 60 |

---

## 🚀 Étapes rapides dans IONOS

### 1. Aller dans IONOS DNS

1. [ionos.fr](https://www.ionos.fr) → Connectez-vous
2. **Domaines** → Cliquez sur `doggywash.fr`
3. **DNS** ou **Enregistrements DNS**

### 2. Ajouter l'enregistrement 1 (DKIM - TXT)

- **Type :** TXT
- **Nom :** `resend._domainkey` ⚠️ (sans `.doggywash.fr`)
- **Valeur :** Copiez depuis Resend (commence par `p=...`)
- **TTL :** 3600
- **Enregistrer**

### 3. Ajouter l'enregistrement 2 (SPF - MX)

- **Type :** MX
- **Nom :** `send` ⚠️ (sans `.doggywash.fr`)
- **Valeur :** Copiez depuis Resend (`feedback-smtp.eu-west-...`)
- **Priorité :** `10`
- **TTL :** 60
- **Enregistrer**

### 4. Ajouter l'enregistrement 3 (SPF - TXT)

- **Type :** TXT
- **Nom :** `send` ⚠️ (sans `.doggywash.fr`, même nom que l'enregistrement MX)
- **Valeur :** Copiez depuis Resend (commence par `v=spf1...`)
- **TTL :** 60
- **Enregistrer**

---

## ⏱️ Attendre la propagation

- **15-30 minutes** généralement
- **Maximum 48 heures**

---

## ✅ Vérifier dans Resend

1. Retournez dans Resend → Domains
2. Actualisez la page
3. Les statuts devraient passer de **"Échoué"** à **"Vérifié"** (vert)

---

## 🐛 Problème courant

**Erreur : "Nom déjà existant"**
- Si vous avez déjà un enregistrement `send`, vous pouvez :
  - Le modifier pour ajouter les deux valeurs
  - Ou le supprimer et le recréer

**Les enregistrements sont toujours en échec après 30 minutes**
- Vérifiez que les **noms** sont exactement : `resend._domainkey` et `send` (sans `.doggywash.fr`)
- Vérifiez que le **contenu** est exactement le même que dans Resend (copier-coller complet)

---

**Besoin d'aide détaillée ?** Voir `RESEND_DNS_IONOS.md` 🚀

