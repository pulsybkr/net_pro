import { NextResponse } from 'next/server';
import { sendDevisConfirmationEmail, sendDevisAdminNotification } from '@/utils/emailService';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Envoi des emails
    await Promise.all([
      sendDevisConfirmationEmail(data),
      sendDevisAdminNotification(data)
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