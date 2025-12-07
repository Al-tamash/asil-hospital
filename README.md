# Asil Hospital Website

A modern, responsive multi-page website for Asil Hospital built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.

## 🏥 About

This website serves as the digital presence for Asil Hospital, located in Sangareddy, Telangana. It provides information about services, doctors, and allows patients to book appointments online.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom color tokens
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Validation**: Zod

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customizing Brand Colors

The website uses a custom color palette defined in `tailwind.config.ts`. To modify brand colors:

```ts
// tailwind.config.ts
const primary = {
  50: "#f7fafc",   // Lightest
  100: "#e6f2fa",
  200: "#bfdeef",
  300: "#99cae4",
  400: "#4fa6d4",
  500: "#0f85c1",  // Primary brand color
  600: "#0c6fa0",
  700: "#08567f",
  800: "#063a57",
  900: "#032235",  // Darkest
};
```

Colors are used throughout the app via Tailwind classes:
- `bg-brand-500` - Primary brand color
- `text-brand-600` - Darker text
- `bg-brand-50` - Light backgrounds

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/
│   ├── api/contact/        # Contact form API
│   ├── blog/
│   ├── contact/
│   ├── doctors/
│   ├── faq/
│   ├── privacy/
│   ├── services/
│   ├── terms/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/             # Reusable components
│   ├── layout/             # Header, Footer
│   └── ui/                 # shadcn/ui components
└── lib/
    ├── data/               # Static data (services, doctors, etc.)
    └── utils.ts
```

## 📝 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, services, doctors, testimonials |
| About | `/about` | Hospital info, mission, values |
| Services | `/services` | All medical services |
| Doctors | `/doctors` | Doctor profiles |
| Contact | `/contact` | Appointment form, map |
| FAQ | `/faq` | Frequently asked questions |
| Blog | `/blog` | Health articles |
| Terms | `/terms` | Terms & conditions |
| Privacy | `/privacy` | Privacy policy |

## 🔧 Environment Variables

Create a `.env.local` file for email configuration:

```env
# SMTP Configuration (for contact form)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your-email@example.com
SMTP_PASSWORD=your-password
SMTP_FROM_EMAIL=noreply@asilhospital.com

# Or use Resend
RESEND_API_KEY=your-resend-api-key
```

## 📧 Contact Form Setup

The contact form API is located at `src/app/api/contact/route.ts`. It includes commented code for:

1. **Nodemailer** - SMTP email sending
2. **Resend** - Modern email API

Uncomment and configure your preferred method.

## 🔍 SEO Features

- Meta tags on all pages
- Open Graph tags for social sharing
- JSON-LD structured data (Hospital schema)
- XML Sitemap (`/sitemap.xml`)
- robots.txt

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast WCAG AA compliant
- Respects `prefers-reduced-motion`

## 📄 License

This project is proprietary to Asil Hospital.

## 📞 Contact

**Asil Hospital**
- Phone: +91 96030 13571
- Address: 10-20/3, Vidya Nagar Colony, Sangareddy, Telangana 502295
