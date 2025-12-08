# 🔧 Configuration Domaine : Vercel + IONOS - Guide pas à pas

## 📋 Informations nécessaires

**Avant de commencer, notez :**
- Votre nom de domaine : `_________________` (ex: doggywash.fr)
- Votre email IONOS : `_________________` (ex: contact@doggywash.fr)

---

## ÉTAPE 1 : Ajouter le domaine dans Vercel

### 1.1 : Aller dans Vercel
1. Allez sur : https://vercel.com/dashboard
2. Cliquez sur votre projet **"doggywash"**

### 1.2 : Ajouter le domaine
1. Dans le menu de gauche, cliquez sur **"Settings"**
2. Cliquez sur **"Domains"** (dans le sous-menu)
3. Cliquez sur le bouton **"Add Domain"** (en haut à droite)
4. Dans le champ, entrez votre domaine : `doggywash.fr` (remplacez par votre domaine)
5. Cliquez sur **"Add"**

### 1.3 : Récupérer les instructions DNS
Vercel va vous afficher une page avec des instructions. **Deux options possibles :**

**Option A : Nameservers (Recommandé)**
- Vercel vous donnera 2 nameservers comme :
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

**Option B : Enregistrement CNAME**
- Vercel vous donnera un CNAME comme :
  - `cname.vercel-dns.com`

**📝 Notez ce que Vercel vous donne et dites-moi !**

---

## ÉTAPE 2 : Configurer les DNS dans IONOS

### 2.1 : Aller dans IONOS
1. Allez sur : https://www.ionos.fr
2. Connectez-vous à votre compte
3. Allez dans **"Domaines"** (menu principal)

### 2.2 : Accéder aux paramètres DNS
1. Cliquez sur votre domaine (ex: `doggywash.fr`)
2. Cherchez **"DNS"** ou **"Paramètres DNS"** ou **"Zone DNS"**
3. Cliquez dessus

### 2.3A : Si Vercel vous a donné des NAMESERVERS

1. Dans IONOS, trouvez la section **"Nameservers"** ou **"Serveurs de noms"**
2. Cliquez sur **"Modifier"** ou **"Changer"**
3. Remplacez les nameservers actuels par ceux de Vercel :
   - Nameserver 1 : `ns1.vercel-dns.com`
   - Nameserver 2 : `ns2.vercel-dns.com`
4. Cliquez sur **"Enregistrer"** ou **"Sauvegarder"**

### 2.3B : Si Vercel vous a donné un CNAME

1. Dans IONOS → DNS, cherchez **"Ajouter un enregistrement"** ou **"Add Record"**
2. Sélectionnez le type **"CNAME"**
3. Remplissez :
   - **Nom/Host :** `@` (ou laissez vide pour le domaine racine)
   - **Valeur/Cible :** `cname.vercel-dns.com`
4. Cliquez sur **"Ajouter"** ou **"Sauvegarder"**

### 2.4 : Attendre la propagation
- **Nameservers :** 24-48 heures
- **CNAME :** 5-30 minutes

---

## ÉTAPE 3 : Vérifier dans Vercel

1. Retournez dans Vercel → Settings → Domains
2. Votre domaine devrait apparaître avec un statut :
   - ⏳ **"Pending"** = En attente (normal, attendez)
   - ✅ **"Valid"** = Configuré et fonctionnel !

---

## ÉTAPE 4 : Vérifier le domaine dans Resend (pour les emails)

### 4.1 : Ajouter le domaine dans Resend
1. Allez sur : https://resend.com/domains
2. Cliquez sur **"Add Domain"**
3. Entrez votre domaine : `doggywash.fr`
4. Cliquez sur **"Add"**

### 4.2 : Récupérer les enregistrements DNS
Resend vous donnera des enregistrements à ajouter dans IONOS :
- Des enregistrements **TXT** (pour la vérification)
- Des enregistrements **MX** (pour les emails)

### 4.3 : Ajouter dans IONOS
1. Retournez dans IONOS → Domaines → DNS
2. Ajoutez chaque enregistrement que Resend vous a donné :
   - **Type :** TXT ou MX
   - **Nom :** (celui donné par Resend)
   - **Valeur :** (celle donnée par Resend)
3. Sauvegardez

### 4.4 : Vérifier dans Resend
1. Retournez dans Resend → Domains
2. Cliquez sur **"Verify"** à côté de votre domaine
3. Attendez 5-10 minutes
4. Une fois vérifié (✅), vous pouvez utiliser `noreply@doggywash.fr`

---

## ÉTAPE 5 : Mettre à jour Vercel

1. Dans Vercel → Settings → Environment Variables
2. Trouvez `RESEND_FROM_EMAIL`
3. Cliquez sur **"Edit"** ou les 3 points → **"Edit"**
4. Changez la valeur en : `DOGGYWASH <noreply@doggywash.fr>`
   (Remplacez `doggywash.fr` par votre vrai domaine)
5. Cliquez sur **"Save"**

---

## ✅ Checklist finale

- [ ] Domaine ajouté dans Vercel
- [ ] DNS configurés dans IONOS (nameservers ou CNAME)
- [ ] Domaine vérifié dans Vercel (statut "Valid")
- [ ] Domaine ajouté dans Resend
- [ ] Enregistrements DNS Resend ajoutés dans IONOS
- [ ] Domaine vérifié dans Resend (✅)
- [ ] Variable `RESEND_FROM_EMAIL` mise à jour dans Vercel
- [ ] Site accessible sur `doggywash.fr`

---

**Besoin d'aide ? Dites-moi à quelle étape vous êtes bloqué !**

