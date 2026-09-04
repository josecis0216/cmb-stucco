import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactEmail: React.FC<ContactEmailProps> = ({ name, email, message }) => (
  <div>
    <h1>New Contact Message</h1>
    <p><strong>From:</strong> {name} ({email})</p>
    <p><strong>Message:</strong></p>
    <p>{message}</p>
  </div>
);