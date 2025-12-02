# Configuration des variables d'environnement

Créez un fichier `.env` à la racine du projet avec le contenu suivant :

```env
# Configuration Resend pour l'envoi d'emails
# Obtenez votre clé API sur https://resend.com/api-keys
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Email de l'expéditeur (doit être vérifié dans Resend)
# Format: "Nom <email@domaine.com>"
RESEND_FROM_EMAIL=DOGGYWASH <noreply@votredomaine.com>

# Environnement
NODE_ENV=production
```

**Important :** 
- Ne commitez JAMAIS le fichier `.env` (il est déjà dans .gitignore)
- Remplacez les valeurs par vos vraies clés API
- Pour le développement local, utilisez `NODE_ENV=development`

