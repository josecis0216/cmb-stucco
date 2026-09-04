import { NextResponse } from 'next/server';
import { ContactEmail } from '@/app/components/email-tempate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'Contact CMB <contact@cmbexteriors.com>',
      to: ['cmbexteriors@outlook.com'],
      subject: 'Contact Request',
      react: <ContactEmail name={name} email={email} message={message} />,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}