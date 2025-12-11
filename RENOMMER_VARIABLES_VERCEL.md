# 🔧 Renommer les variables dans Vercel

## ⚠️ Problème identifié

Les variables dans Vercel ont des noms différents de ceux attendus par le code :

**Dans Vercel :**
- `ID_GOOGLE_SHEETS` ❌
- `COMPTE DE SERVICE GOOGLE` ❌

**Attendu par le code :**
- `GOOGLE_SHEETS_ID` ✅
- `GOOGLE_SERVICE_ACCOUNT` ✅

---

## 📋 Solution : Renommer les variables

### Option A : Modifier les variables existantes (RECOMMANDÉ)

1. **Dans Vercel**, cliquez sur les **"..."** (3 points) à droite de `ID_GOOGLE_SHEETS`
2. **Cliquez** sur **"Edit"** (ou "Modifier")
3. **Changez** le nom de la clé :
   - **Ancien nom** : `ID_GOOGLE_SHEETS`
   - **Nouveau nom** : `GOOGLE_SHEETS_ID`
4. **Cliquez** sur **"Save"**
5. **Répétez** pour `COMPTE DE SERVICE GOOGLE` → renommez en `GOOGLE_SERVICE_ACCOUNT`

### Option B : Supprimer et recréer (si l'option A ne fonctionne pas)

1. **Supprimez** les 2 variables existantes (`ID_GOOGLE_SHEETS` et `COMPTE DE SERVICE GOOGLE`)
2. **Recréez-les** avec les bons noms :
   - `GOOGLE_SHEETS_ID` = `1GLEKeq1hrV44lfAapNo9xROryzSHSi3_0UdLB_EwtSY`
   - `GOOGLE_SERVICE_ACCOUNT` = (JSON encodé en base64)

---

## ✅ Après renommage

1. **Redéployez** le projet :
   - Deployments → "..." → "Redeploy"
2. **Attendez** 2-3 minutes
3. **Testez** le formulaire
4. **Vérifiez** votre Google Sheet

---

**Renommez les variables et dites-moi quand c'est fait !** 🔧

