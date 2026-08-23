# 🚀 Deployment & Production Guide for SHRISTIKA COMPUTER PRESS

This repository contains the complete production-ready code for **SHRISTIKA COMPUTER PRESS** (`shristikacomputerpress.in`), a professional printing and graphic designing studio based in Bodhgaya, Bihar.

---

## 📋 Business Details
* **Business Name:** SHRISTIKA COMPUTER PRESS
* **Address:** Domuhan, Cherki Road, Dayal Kunj, Kolhaura, Bodhgaya, Bihar - 824231
* **Tagline:** “High Quality Printing • Reasonable Price • Fast Service”
* **WhatsApp / Phone 1:** `+91 6200796553` (WhatsApp Enabled)
* **WhatsApp / Phone 2:** `+91 9835733642` (WhatsApp Enabled)
* **Primary Domain:** `shristikacomputerpress.in` / `www.shristikacomputerpress.in`

---

## 🛠️ 1. Build & Local Preview

### Prerequisites
* Node.js 18+ installed
* npm, pnpm, or bun

### Commands
```bash
# Install dependencies
npm install

# Run development server (runs on port 3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
The production bundle will be generated in the `/dist` directory.

---

## 🌐 2. Custom Domain Configuration (`shristikacomputerpress.in`)

To connect `shristikacomputerpress.in` to your hosting provider, configure the DNS records in your domain registrar (e.g., Hostinger, GoDaddy, Namecheap, Cloudflare):

### Recommended DNS Records:
| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | *IP Address provided by your host (e.g. 76.76.21.21 for Vercel)* | Auto / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` or `shristikacomputerpress.in` | Auto / 3600 |
| **TXT** | `@` | *Domain verification string if required* | Auto / 3600 |

### SSL / HTTPS:
All modern hosting platforms (Vercel, Netlify, Cloudflare Pages, Hostinger) provide automatic, free Let's Encrypt SSL certificates. Ensure **"Always use HTTPS"** is enabled in your dashboard.

---

## ☁️ 3. One-Click Hosting Options

### Option A: Vercel (Recommended)
1. Push this project to a GitHub repository.
2. Sign in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`, Output directory: `dist`.
6. Click **Deploy**.
7. In **Project Settings > Domains**, add `shristikacomputerpress.in` and `www.shristikacomputerpress.in`.

### Option B: Netlify
1. Log in to [netlify.com](https://netlify.com) and import the repository.
2. Build command: `npm run build`, Publish directory: `dist`.
3. The included `/public/_redirects` file automatically handles single-page routing.
4. Go to **Domain Management** and add your custom domain.

### Option C: Hostinger cPanel / Shared Hosting
1. Run `npm run build` locally to generate the `/dist` folder.
2. Log in to Hostinger hPanel or cPanel.
3. Open **File Manager** and navigate to `public_html`.
4. Upload all files from inside the `/dist` folder directly into `public_html`.
5. Ensure an `.htaccess` file exists in `public_html` for React SPA fallback:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Option D: Cloudflare Pages
1. In Cloudflare dashboard, go to **Workers & Pages > Create application > Pages**.
2. Connect your Git repository.
3. Framework preset: **Vite**, Build command: `npm run build`, Output directory: `dist`.
4. Add your custom domain directly through Cloudflare DNS.

---

## 📊 4. Search Engine Optimization (SEO) & Analytics

### Verified SEO Assets:
* **`index.html`**: Contains complete Open Graph, Twitter Cards, Geo Coordinates (Bodhgaya), and LocalBusiness Schema JSON-LD.
* **`/public/robots.txt`**: Configured to allow all standard search bots and points to the sitemap.
* **`/public/sitemap.xml`**: Pre-indexed routes for all primary sections.
* **`/public/manifest.json`**: PWA manifest with theme color `#0a1835`.

### Adding Google Analytics (GA4):
To add tracking, insert your Google tag script inside `<head>` in `/index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 💬 5. Direct WhatsApp & Contact Features

* **Dual WhatsApp Routing**: Customers can choose to chat with Line 1 (`6200796553`) or Line 2 (`9835733642`).
* **Pre-formatted Inquiries**: The quotation modal and contact form automatically format customer selections, quantities, and material choices into clean WhatsApp messages ready to send with one click.
* **Direct Studio Call & Maps**: Call buttons connect directly to phone lines, and address links route to Google Maps.
