#!/bin/bash

echo "🚀 Configuration de DOGGYWASH"
echo "=============================="
echo ""

# Vérifier si .env existe déjà
if [ -f .env ]; then
    echo "⚠️  Le fichier .env existe déjà."
    read -p "Voulez-vous le remplacer ? (o/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Oo]$ ]]; then
        echo "Annulé."
        exit 1
    fi
fi

echo "📧 Configuration Resend"
echo ""
read -p "Entrez votre clé API Resend (commence par 're_'): " RESEND_KEY
read -p "Entrez votre email d'expéditeur (ex: noreply@votredomaine.com): " RESEND_EMAIL

# Créer le fichier .env
cat > .env << EOF
# Configuration Resend pour l'envoi d'emails
RESEND_API_KEY=$RESEND_KEY
RESEND_FROM_EMAIL=DOGGYWASH <$RESEND_EMAIL>
NODE_ENV=development
EOF

echo ""
echo "✅ Fichier .env créé avec succès !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Testez en local : npm run dev"
echo "2. Remplissez le formulaire sur http://localhost:3000"
echo "3. Vérifiez votre email pour recevoir le coupon"
echo ""

