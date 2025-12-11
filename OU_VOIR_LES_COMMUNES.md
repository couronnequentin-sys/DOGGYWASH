# 📍 Où voir les communes des prospects ?

## ⚠️ Important : Resend ne stocke pas les communes

**Resend** est un service d'envoi d'emails uniquement. Il ne stocke **pas** les données du formulaire (nom, email, commune).

Les communes sont stockées dans **2 endroits** :

---

## 📊 Option 1 : Google Sheets (RECOMMANDÉ)

Si vous avez configuré Google Sheets, **toutes les communes sont là** :

1. **Ouvrez** votre Google Sheet "DOGGYWASH - Inscriptions"
2. **Colonne D** = Commune
3. Vous verrez toutes les communes des prospects qui se sont inscrits

**Structure du Sheet :**
| A | B | C | D | E |
|---|---|---|---|---|
| Date/Heure | Prénom | Email | **Commune** | Code coupon |

---

## 📋 Option 2 : Logs Vercel

Les communes sont aussi dans les logs Vercel :

1. **Allez sur** [vercel.com](https://vercel.com)
2. **Projet "doggywash"** → **Deployments**
3. **Cliquez** sur le dernier déploiement
4. **Ouvrez** "Journaux de construction" (Build logs)
5. **Cherchez** les lignes qui commencent par : `Nouvelle inscription:`
6. Vous verrez : `Nouvelle inscription: Prénom (email) - Commune: Villefranche-sur-Saône - Coupon: DOGGY-1234`

---

## 🔍 Comment vérifier que les communes sont bien enregistrées ?

### Test 1 : Vérifier dans Google Sheets

1. **Ouvrez** votre Google Sheet
2. **Vérifiez** que la colonne D "Commune" existe
3. **Remplissez** le formulaire sur https://doggywash.fr
4. **Attendez** 1-2 minutes
5. **Actualisez** votre Sheet (F5)
6. **Vous devriez voir** la nouvelle ligne avec la commune dans la colonne D

### Test 2 : Vérifier dans les logs Vercel

1. **Allez** dans Vercel → Projet → Deployments
2. **Cliquez** sur le dernier déploiement
3. **Ouvrez** "Journaux de construction"
4. **Remplissez** le formulaire
5. **Regardez** les nouveaux logs - vous devriez voir la commune

---

## ❓ Si vous ne voyez pas les communes

### Problème 1 : Google Sheets non configuré

Si vous n'avez pas encore configuré Google Sheets, les communes ne sont **que dans les logs Vercel**.

**Solution :** Configurez Google Sheets (voir `GOOGLE_SHEETS_GUIDE.md`)

### Problème 2 : Colonne "Commune" manquante dans Google Sheets

Si vous avez Google Sheets mais pas de colonne "Commune" :

1. **Ouvrez** votre Sheet
2. **Ajoutez** "Commune" dans la colonne D (entre Email et Code coupon)
3. **Les nouvelles inscriptions** incluront automatiquement la commune

---

## ✅ Résumé

- **Resend** = Emails envoyés uniquement (pas de données formulaire)
- **Google Sheets** = Toutes les données (nom, email, commune, coupon) ✅
- **Logs Vercel** = Logs avec toutes les données ✅

**Pour voir les communes facilement, configurez Google Sheets !** 📊

