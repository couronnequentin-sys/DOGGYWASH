# ⏱️ Vérification de la propagation DNS

## ✅ Ce qui est fait

- ✅ Enregistrement A ajouté dans IONOS : 216.198.79.1
- ✅ Message de confirmation reçu

## ⏳ Propagation en cours

La propagation DNS peut prendre :
- **Minimum :** 5-10 minutes
- **Moyen :** 15-30 minutes
- **Maximum :** 24-48 heures (rare)

## 🔍 Vérifier la propagation

### Option 1 : Vérifier avec un outil en ligne

1. Allez sur : https://dnschecker.org/
2. Entrez : `doggywash.fr`
3. Sélectionnez le type : **A**
4. Cliquez sur "Search"
5. Vérifiez si l'IP `216.198.79.1` apparaît dans les résultats

### Option 2 : Vérifier avec la commande

Ouvrez un terminal et tapez :
```bash
dig doggywash.fr A +short
```

Ou sur Windows :
```bash
nslookup doggywash.fr
```

Vous devriez voir : `216.198.79.1`

## 📋 Checklist

- [ ] Enregistrement A ajouté dans IONOS ✅
- [ ] Valeur correcte : 216.198.79.1 ✅
- [ ] Attendre 10-15 minutes
- [ ] Vérifier dans Vercel à nouveau
- [ ] Si toujours invalid après 30 min, vérifier avec dnschecker.org

---

**Attendez encore 10-15 minutes, puis vérifiez à nouveau dans Vercel !**

