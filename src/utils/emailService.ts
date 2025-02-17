import nodemailer from 'nodemailer';

// Configuration du transporteur d'emails
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Types pour les formulaires
interface DevisFormData {
  surface: string;
  typeLocal: string;
  nombrePieces: string;
  nombreSanitaires: string;
  etage: boolean;
  ascenseur: boolean;
  frequence: string;
  horairePreference: string;
  dateDebut: string;
  vitres: boolean;
  moquette: boolean;
  desinfection: boolean;
  cuisine: boolean;
  fournitures: boolean;
  materiel: boolean;
  nom: string;
  email: string;
  telephone: string;
  societe: string;
  poste: string;
  adresse: string;
  codePostal: string;
  ville: string;
  commentaires: string;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

// Fonction pour envoyer l'email de confirmation au client (Devis)
export const sendDevisConfirmationEmail = async (data: DevisFormData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: data.email,
    subject: 'Confirmation de votre demande de devis - ProNet Lille',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Merci pour votre demande de devis</h2>
        <p>Cher(e) ${data.nom},</p>
        <p>Nous avons bien reçu votre demande de devis pour le nettoyage de vos locaux.</p>
        
        <h3 style="color: #2563eb;">Récapitulatif de votre demande :</h3>
        <ul>
          <li>Type de local : ${data.typeLocal}</li>
          <li>Surface : ${data.surface} m²</li>
          <li>Fréquence souhaitée : ${data.frequence}</li>
          <li>Date de début souhaitée : ${data.dateDebut}</li>
        </ul>

        <p>Notre équipe étudie votre demande et vous contactera dans les 2 heures ouvrées.</p>
        
        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Besoin d'aide ?</strong></p>
          <p style="margin: 5px 0;">📞 03 20 XX XX XX</p>
          <p style="margin: 5px 0;">✉️ contact@pronet-lille.fr</p>
        </div>

        <p style="font-size: 12px; color: #6b7280;">
          Ce message est généré automatiquement, merci de ne pas y répondre directement.
        </p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Fonction pour envoyer l'email de notification à l'admin (Devis)
export const sendDevisAdminNotification = async (data: DevisFormData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `Nouvelle demande de devis - ${data.societe}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #2563eb;">Nouvelle demande de devis</h2>
        
        <h3>Informations client :</h3>
        <ul>
          <li>Nom : ${data.nom}</li>
          <li>Société : ${data.societe}</li>
          <li>Email : ${data.email}</li>
          <li>Téléphone : ${data.telephone}</li>
          <li>Poste : ${data.poste}</li>
        </ul>

        <h3>Informations local :</h3>
        <ul>
          <li>Type : ${data.typeLocal}</li>
          <li>Surface : ${data.surface} m²</li>
          <li>Nombre de pièces : ${data.nombrePieces}</li>
          <li>Sanitaires : ${data.nombreSanitaires}</li>
          <li>Étages : ${data.etage ? 'Oui' : 'Non'}</li>
          <li>Ascenseur : ${data.ascenseur ? 'Oui' : 'Non'}</li>
        </ul>

        <h3>Services demandés :</h3>
        <ul>
          ${data.vitres ? '<li>Nettoyage vitres</li>' : ''}
          ${data.moquette ? '<li>Nettoyage moquette</li>' : ''}
          ${data.desinfection ? '<li>Désinfection</li>' : ''}
          ${data.cuisine ? '<li>Espace cuisine</li>' : ''}
          ${data.fournitures ? '<li>Fourniture consommables</li>' : ''}
          ${data.materiel ? '<li>Matériel fourni</li>' : ''}
        </ul>

        <h3>Planning souhaité :</h3>
        <ul>
          <li>Fréquence : ${data.frequence}</li>
          <li>Horaires : ${data.horairePreference}</li>
          <li>Date de début : ${data.dateDebut}</li>
        </ul>

        <h3>Commentaires :</h3>
        <p>${data.commentaires || 'Aucun commentaire'}</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Fonction pour envoyer l'email de confirmation au client (Contact)
export const sendContactConfirmationEmail = async (data: ContactFormData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: data.email,
    subject: 'Confirmation de votre message - ProNet Lille',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Merci de nous avoir contacté</h2>
        <p>Cher(e) ${data.name},</p>
        <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
        <p>Notre équipe vous répondra dans les plus brefs délais.</p>

        <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0;"><strong>Besoin d'aide ?</strong></p>
          <p style="margin: 5px 0;">📞 03 20 XX XX XX</p>
          <p style="margin: 5px 0;">✉️ contact@pronet-lille.fr</p>
        </div>

        <p style="font-size: 12px; color: #6b7280;">
          Ce message est généré automatiquement, merci de ne pas y répondre directement.
        </p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
};

// Fonction pour envoyer l'email de notification à l'admin (Contact)
export const sendContactAdminNotification = async (data: ContactFormData) => {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.ADMIN_EMAIL,
    subject: `Nouveau message de contact - ${data.company}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #2563eb;">Nouveau message de contact</h2>
        
        <h3>Informations contact :</h3>
        <ul>
          <li>Nom : ${data.name}</li>
          <li>Société : ${data.company}</li>
          <li>Email : ${data.email}</li>
          <li>Téléphone : ${data.phone}</li>
          <li>Service concerné : ${data.service}</li>
        </ul>

        <h3>Message :</h3>
        <p>${data.message}</p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
}; 