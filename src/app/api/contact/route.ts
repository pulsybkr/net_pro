import { NextResponse } from 'next/server';
import { sendContactConfirmationEmail, sendContactAdminNotification } from '@/utils/emailService';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Envoi des emails
    await Promise.all([
      sendContactConfirmationEmail(data),
      sendContactAdminNotification(data)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi des emails:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi des emails' },
      { status: 500 }
    );
  }
} 