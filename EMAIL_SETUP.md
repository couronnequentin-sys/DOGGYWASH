# 📧 Configuration email professionnelle DOGGYWASH

## Option recommandée : Email Gmail professionnel

### Étape 1 : Créer un compte Gmail

1. Allez sur [https://accounts.google.com/signup](https://accounts.google.com/signup)
2. Créez un compte avec un nom professionnel :
   - Exemples : `doggywash.contact@gmail.com` ou `contact.doggywash@gmail.com`
   - Ou : `noreply.doggywash@gmail.com`
3. Complétez la création du compte

### Étape 2 : Vérifier dans Resend

1. Allez sur [https://resend.com/domains](https://resend.com/domains)
2. Pour l'instant, vous pouvez utiliser `onboarding@resend.dev` (domaine de test)
3. **OU** si vous avez un domaine, vérifiez-le dans Resend

### Étape 3 : Mettre à jour la configuration

**Dans Vercel, modifiez la variable :**
- `RESEND_FROM_EMAIL` = `DOGGYWASH <noreply@doggywash.fr>` (si vous avez un domaine)
- OU `DOGGYWASH <doggywash.contact@gmail.com>` (si vous utilisez Gmail)

**Note :** Avec le domaine de test Resend (`onboarding@resend.dev`), les emails fonctionnent mais peuvent aller en spam. Avec votre propre domaine vérifié, c'est beaucoup mieux !

---

## Option future : Domaine personnalisé

Quand vous serez prêt :
1. Achetez un domaine (ex: `doggywash.fr` - ~10€/an)
2. Vérifiez-le dans Resend
3. Créez `contact@doggywash.fr` ou `noreply@doggywash.fr`
4. Mettez à jour `RESEND_FROM_EMAIL` dans Vercel

---

## Pour l'instant

Vous pouvez continuer avec `onboarding@resend.dev` pour tester. C'est fonctionnel, mais moins professionnel. Une fois que vous aurez créé votre email professionnel, on mettra à jour la configuration !

