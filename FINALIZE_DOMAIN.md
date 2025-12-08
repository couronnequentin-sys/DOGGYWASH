# 🔧 Finaliser la connexion du domaine

## Étape 1 : Ajouter le domaine dans Vercel

1. Allez sur [vercel.com/dashboard](https://vercel.com/dashboard)
2. Cliquez sur votre projet **"doggywash"**
3. Allez dans **Settings** → **Domains**
4. Cliquez sur **"Add Domain"** (en haut à droite)
5. Entrez : `doggywash.fr`
6. Cliquez sur **"Add"**

**Deux possibilités :**

### ✅ Si Vercel accepte le domaine
- Vercel va vous donner des instructions DNS
- Notez ce qu'il vous donne (nameservers ou CNAME)
- Passez à l'Étape 2

### ❌ Si Vercel dit "No projects found" ou erreur
- Le domaine n'est peut-être pas encore actif dans IONOS
- Attendez 10-15 minutes et réessayez
- OU configurez les DNS directement dans IONOS (Étape 2)

---

## Étape 2 : Configurer les DNS dans IONOS

### Option A : Utiliser les nameservers Vercel (RECOMMANDÉ)

1. Dans IONOS → **Domaines** → `doggywash.fr` → **DNS**
2. Trouvez **"Serveurs de noms"** ou **"Nameservers"**
3. Cliquez sur **"Modifier"**
4. Remplacez par les nameservers Vercel :
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
5. Sauvegardez

### Option B : Si Vercel vous a donné un CNAME

1. Dans IONOS → **Domaines** → `doggywash.fr` → **DNS**
2. Cliquez sur **"Ajouter un enregistrement"**
3. Type : **CNAME**
4. Nom : `@` (ou laissez vide)
5. Valeur : `cname.vercel-dns.com` (ou celle donnée par Vercel)
6. Sauvegardez

---

## Étape 3 : Attendre la propagation

- **Nameservers :** 24-48 heures
- **CNAME :** 5-30 minutes

---

## Étape 4 : Vérifier dans Vercel

1. Retournez dans Vercel → Settings → Domains
2. Votre domaine devrait passer à **"Valid"** (vert) ✅

---

**Commencez par l'Étape 1 et dites-moi ce que Vercel vous affiche !**

