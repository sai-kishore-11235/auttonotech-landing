## Auttonotech Landing (React + Vite)

This is a React + TypeScript single-page app that implements an Auttonotech-style landing page focused on **offshore operations for US mortgage, support, and cloud businesses**.

The project is structured like a standard Vite React/TypeScript app so you can extend it easily.

### Getting started

1. **Install dependencies**

   From the `auttonotech-landing` folder:

   ```bash
   npm install
   ```

2. **Run the dev server**

   ```bash
   npm run dev
   ```

   Then open the URL shown in the terminal (usually `http://localhost:5173`).

The contact form sends mail through [EmailJS](https://www.emailjs.com/) (`@emailjs/browser` in `src/lib/sendContactEmail.ts`). There is no server-side mailer.

1. Create a free account at [dashboard.emailjs.com](https://dashboard.emailjs.com/admin).
2. **Email Services → Add New Service** — Gmail, Outlook, or **Custom SMTP**. For a Hostinger mailbox use SMTP host `smtp.hostinger.com`, port **465** (SSL) or **587** (STARTTLS), username = full mailbox address, password = mailbox password. Copy the **Service ID**.
3. **Email Templates → Create New Template** — set **To** to your inbox and **Reply To** to `{{from_email}}`. Use these template variables (exactly): `from_name`, `from_email`, `phone`, `company`, `service`, `volume`, `message`. Copy the **Template ID**.
4. **Account → General** — copy the **Public Key**.
5. Copy `.env.example` to `.env` (never commit `.env`) and fill:

   ```
   VITE_EMAILJS_SERVICE_ID=
   VITE_EMAILJS_TEMPLATE_ID=
   VITE_EMAILJS_PUBLIC_KEY=
   ```

6. Restart Vite after any `.env` change (`npm run dev`). Keys are public in the browser; restrict allowed domains in EmailJS if your plan includes a domain whitelist (paid plans). Free tier is 200 requests/month.

3. **Build for production**

   ```bash
   npm run build
   npm run preview
   ```

### Tech stack

- **React 18** + **TypeScript**
- **Vite** for fast dev server & bundling

### Customization tips

- Edit the main page content in `src/App.tsx`.
- Global layout and visual system (colors, spacing, typography) live in `src/index.css`.
- You can easily:
  - Swap copy for your own positioning.
  - Adjust colors and gradients in the CSS variables at the top of `index.css`.
  - Add more sections or routes if you outgrow a single page.

