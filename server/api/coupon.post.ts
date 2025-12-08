import { Resend } from 'resend'
import jwt from 'jsonwebtoken'

const resend = new Resend(process.env.RESEND_API_KEY)

// Fonction pour envoyer les données à Google Sheets
async function saveToGoogleSheets(nom: string, email: string, couponCode: string): Promise<void> {
  const sheetsId = process.env.GOOGLE_SHEETS_ID
  const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT

  // Si Google Sheets n'est pas configuré, on ne fait rien
  if (!sheetsId || !serviceAccount) {
    console.log('Google Sheets non configuré - données non sauvegardées')
    return
  }

  try {
    // Parser le compte de service
    let serviceAccountJson: any
    try {
      serviceAccountJson = typeof serviceAccount === 'string' 
        ? JSON.parse(serviceAccount) 
        : serviceAccount
    } catch (e) {
      console.error('Erreur parsing Google Service Account:', e)
      return
    }

    // Obtenir un token d'accès
    const jwt = await getGoogleAccessToken(serviceAccountJson)
    
    // Préparer les données
    const dateTime = new Date().toLocaleString('fr-FR', { 
      timeZone: 'Europe/Paris',
      dateStyle: 'short',
      timeStyle: 'medium'
    })
    
    const values = [[dateTime, nom, email, couponCode]]
    
    // Ajouter la ligne dans le Sheet (feuille "Sheet1" par défaut)
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetsId}/values/Sheet1!A:D:append?valueInputOption=RAW`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${jwt}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: values,
        }),
      }
    )

    if (!response.ok) {
      const error = await response.text()
      console.error('Erreur Google Sheets:', error)
    } else {
      console.log('Données sauvegardées dans Google Sheets')
    }
  } catch (error) {
    console.error('Erreur lors de la sauvegarde dans Google Sheets:', error)
    // On ne bloque pas l'envoi de l'email si Google Sheets échoue
  }
}

// Fonction pour obtenir un token d'accès Google
async function getGoogleAccessToken(serviceAccount: any): Promise<string> {
  const now = Math.floor(Date.now() / 1000)
  const jwtPayload = {
    iss: serviceAccount.client_email,
    sub: serviceAccount.client_email,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
  }

  const token = jwt.sign(jwtPayload, serviceAccount.private_key, {
    algorithm: 'RS256',
  })

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: token,
    }),
  })

  const data = await response.json()
  return data.access_token
}

// Génère un code de coupon unique
function generateCouponCode(): string {
  const prefix = 'DOGGY'
  const randomNum = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}-${randomNum}`
}

// Template d'email HTML pour le coupon
function getEmailTemplate(nom: string, couponCode: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ton coupon -50% DOGGYWASH</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #EFF6FB;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #EFF6FB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: bold;">
                🐕 DOGGYWASH
              </h1>
              <p style="color: #8dbdde; margin: 10px 0 0 0; font-size: 14px;">
                Propre. Rapide. Sans stress.
              </p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="color: #0A2540; margin: 0 0 20px 0; font-size: 28px; font-weight: bold;">
                Salut ${nom} ! 👋
              </h2>
              
              <p style="color: #486581; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Merci de t'être inscrit ! Tu fais partie des 100 premiers à profiter de cette offre exclusive.
              </p>
              
              <!-- Coupon Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%); border-radius: 12px; padding: 30px; margin: 30px 0; text-align: center;">
                <tr>
                  <td>
                    <div style="background-color: #EFF6FB; border-radius: 8px; padding: 20px; display: inline-block; margin-bottom: 20px;">
                      <div style="font-size: 48px; font-weight: bold; color: #0A2540; margin: 0;">
                        -50%
                      </div>
                    </div>
                    <h3 style="color: #ffffff; font-size: 24px; margin: 0 0 15px 0; font-weight: bold;">
                      Ton code de réduction
                    </h3>
                    <div style="background-color: rgba(255,255,255,0.2); border-radius: 8px; padding: 15px; margin: 15px 0;">
                      <div style="font-size: 32px; font-weight: bold; color: #ffffff; letter-spacing: 4px; font-family: monospace;">
                        ${couponCode}
                      </div>
                    </div>
                    <p style="color: #b9d5eb; font-size: 14px; margin: 15px 0 0 0;">
                      Valable dès l'ouverture de DOGGYWASH à Villefranche-sur-Saône
                    </p>
                  </td>
                </tr>
              </table>
              
              <!-- Instructions -->
              <div style="background-color: #EFF6FB; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #0A2540; font-size: 18px; margin: 0 0 15px 0; font-weight: bold;">
                  Comment utiliser ton coupon ?
                </h3>
                <ol style="color: #486581; font-size: 14px; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>Présente-toi à la station DOGGYWASH</li>
                  <li>Mentionne ton code : <strong style="color: #0A2540;">${couponCode}</strong></li>
                  <li>Profite de -50% sur ton premier lavage !</li>
                </ol>
              </div>
              
              <p style="color: #486581; font-size: 14px; line-height: 1.6; margin: 20px 0 0 0;">
                On te tiendra au courant dès que la station ouvrira ses portes. En attendant, garde précieusement ce code ! 🔐
              </p>
              
              <p style="color: #486581; font-size: 14px; line-height: 1.6; margin: 30px 0 0 0;">
                À bientôt,<br>
                <strong style="color: #0A2540;">L'équipe DOGGYWASH</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0A2540; padding: 30px; text-align: center;">
              <p style="color: #8dbdde; font-size: 12px; margin: 0 0 10px 0;">
                DOGGYWASH – Villefranche-sur-Saône (69)
              </p>
              <p style="color: #8dbdde; font-size: 12px; margin: 0;">
                <a href="#" style="color: #8dbdde; text-decoration: underline;">Se désinscrire</a> | 
                <a href="#" style="color: #8dbdde; text-decoration: underline;">Mentions légales</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

export default defineEventHandler(async (event) => {
  // Vérifier que c'est une requête POST
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      message: 'Method not allowed'
    })
  }

  try {
    // Récupérer les données du formulaire
    const body = await readBody(event)
    const { nom, email } = body

    // Validation
    if (!nom || !email) {
      throw createError({
        statusCode: 400,
        message: 'Tous les champs sont requis'
      })
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        message: 'Email invalide'
      })
    }

    // Générer le code de coupon
    const couponCode = generateCouponCode()

    // Vérifier que la clé API est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY n\'est pas configurée')
      // En développement, on peut retourner un succès sans envoyer l'email
      if (process.env.NODE_ENV === 'development') {
        return {
          success: true,
          message: 'Inscription réussie (mode développement - email non envoyé)',
          couponCode
        }
      }
      throw createError({
        statusCode: 500,
        message: 'Configuration email manquante'
      })
    }

    // En mode développement/test, utiliser l'email de test autorisé si configuré
    const testEmail = process.env.RESEND_TEST_EMAIL
    const recipientEmail = (process.env.NODE_ENV === 'development' && testEmail) ? testEmail : email

    // Envoyer l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'DOGGYWASH <onboarding@resend.dev>',
      to: recipientEmail,
      subject: '🎉 Ton coupon -50% DOGGYWASH est prêt !',
      html: getEmailTemplate(nom, couponCode),
    })

    if (error) {
      console.error('Erreur Resend:', error)
      
      // Message d'erreur plus détaillé pour aider au débogage
      let errorMessage = 'Erreur lors de l\'envoi de l\'email'
      
      if (error.message) {
        errorMessage = error.message
      } else if (error.statusCode === 403) {
        errorMessage = 'Pour tester, vous devez utiliser votre propre email. Ajoutez RESEND_TEST_EMAIL dans .env avec votre email.'
      }
      
      throw createError({
        statusCode: 500,
        message: errorMessage
      })
    }

    // Log pour le suivi
    console.log(`Nouvelle inscription: ${nom} (${email}) - Coupon: ${couponCode}`)

    // Sauvegarder dans Google Sheets (si configuré - non bloquant)
    await saveToGoogleSheets(nom, email, couponCode).catch(err => {
      console.error('Erreur Google Sheets (non bloquant):', err)
    })

    // Retourner le succès
    return {
      success: true,
      message: 'Coupon envoyé avec succès !',
      couponCode
    }

  } catch (error: any) {
    console.error('Erreur API coupon:', error)
    
    // Si c'est déjà une erreur HTTP, la renvoyer
    if (error.statusCode) {
      throw error
    }

    // Sinon, créer une erreur générique
    throw createError({
      statusCode: 500,
      message: error.message || 'Une erreur est survenue'
    })
  }
})

