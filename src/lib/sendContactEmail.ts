import emailjs from '@emailjs/browser';

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  volume: string;
  message: string;
}

function requireEnv(name: string): string {
  const value = import.meta.env[name] as string | undefined;
  if (!value?.trim()) {
    throw new Error(`Missing ${name}. Add it to your .env file.`);
  }
  return value.trim();
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  const serviceId = requireEnv('VITE_EMAILJS_SERVICE_ID');
  const templateId = requireEnv('VITE_EMAILJS_TEMPLATE_ID');
  const publicKey = requireEnv('VITE_EMAILJS_PUBLIC_KEY');

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      phone: payload.phone,
      company: payload.company,
      service: payload.service,
      volume: payload.volume || 'Not specified',
      message: payload.message || 'No additional message',
    },
    { publicKey },
  );
}
