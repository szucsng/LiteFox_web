# LFWeb - LiteFox Roleplay Szerver Weboldal

## 📋 **Projekt Áttekintés**

Ez a Next.js alapú weboldal a LiteFox Roleplay szerver hivatalos weboldala. Modern, reszponzív dizájnnal és narancssárga színsémával.

## 🚀 **Gyors Indítás**

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev

# Build production verzióhoz
npm run build

# Production szerver indítása
npm start
```

## 📁 **Projekt Struktúra**

```
lfweb/
├── public/                    # Statikus fájlok
│   ├── favicon.ico           # Weboldal ikon
│   ├── lficon/              # Admin rang ikonok
│   └── profilkep/           # Admin profilképek
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── about/           # Rólunk oldal
│   │   ├── admins/          # Admin lista oldal
│   │   ├── contact/         # Kapcsolat oldal
│   │   ├── join/            # Csatlakozás oldal
│   │   ├── rules/           # Szabályok oldal
│   │   ├── globals.css      # Globális stílusok
│   │   ├── layout.tsx       # Fő layout
│   │   ├── page.tsx         # Főoldal
│   │   └── providers.tsx    # NextUI providers
│   └── components/
│       └── Navbar.tsx       # Navigációs sáv
├── tailwind.config.js       # Tailwind CSS konfiguráció
├── next.config.js           # Next.js konfiguráció
└── package.json             # Projekt függőségek
```

## 🎨 **Színséma & Dizájn**

### **Narancssárga Téma**
- **Elsődleges**: `#FF6B35` (narancssárga)
- **Másodlagos**: `#FF8C42` (világos narancs)
- **Kiegészítő**: `#FF4D1C` (sötét narancs)
- **Háttér**: `#FFF8F0` (világos krémszín)

### **Globális CSS Változók**
```css
:root {
  --primary-orange: #FF6B35;
  --secondary-orange: #FF8C42;
  --accent-orange: #FF4D1C;
  --background-cream: #FFF8F0;
}
```

## 👥 **Admin Rendszer**

### **Admin Adatok Módosítása**
**Fájl**: `src/app/admins/page.tsx`

```typescript
interface Admin {
  id: number
  name: string
  role: string
  avatar: string        // Rang ikon útvonala
  profileImage?: string // Profil kép útvonala
  description: string
  badges?: string[]
  specialty?: string
  joinDate?: string
}
```

### **Új Admin Hozzáadása**
1. **Profil kép hozzáadása**: Másold a képet a `public/profilkep/` mappába
2. **Rang ikon**: Használd a megfelelő ikont a `public/lficon/` mappából
3. **Adatok frissítése**: Add hozzá az admin objektumot a `admins` tömbben

### **Rang Ikonok**
- `lftulaj.png` - Tulajdonos
- `lfsuperadmin.png` - Super Admin
- `lffoadmin.png` - Fő Admin
- `lfadmincontroller.png` - Admin Controller
- `lfadminseged.png` - Admin Segéd
- `lfprobaidosadmin.png` - Próbaidős Admin
- `lfservermanager.png` - Server Manager
- `lftdeveloper.png` - Developer
- `lfcomonitymanager.png` - Community Manager

## 🖼️ **Képek Kezelése**

### **Támogatott Formátumok**
- **PNG**: `.png` (ajánlott)
- **GIF**: `.gif` (animált képekhez)
- **JFIF**: `.jfif` (kompatibilitás)

### **Kép Útvonalak**
```typescript
// Profil képek
profileImage: "/profilkep/adminnev.png"

// Rang ikonok
avatar: "/lficon/lfrangnev.png"
```

### **Next.js Image Komponens**
```tsx
import Image from 'next/image'

<Image
  src="/profilkep/adminnev.png"
  alt="Admin neve"
  width={150}
  height={150}
  className="rounded-full"
/>
```

## ⚙️ **Konfiguráció**

### **Next.js Konfiguráció** (`next.config.js`)
```javascript
const nextConfig = {
  images: {
    remotePatterns: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}
```

### **Tailwind CSS Konfiguráció** (`tailwind.config.js`)
```javascript
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FF8C42',
          dark: '#FF4D1C',
        },
        background: '#FFF8F0',
      },
    },
  },
  plugins: [require("@nextui-org/react")],
}
```

## 🎯 **Oldalak**

### **Főoldal** (`src/app/page.tsx`)
- Hero szekció favicon logóval
- Narancssárga színséma
- Reszponzív dizájn

### **Admin Oldal** (`src/app/admins/page.tsx`)
- Admin kártyák profilképekkel
- Rang ikonok külön szekcióban
- TypeScript interfészek
- Hibakezelés opcionális mezőkkel

### **Egyéb Oldalak**
- **Rólunk**: `src/app/about/page.tsx`
- **Kapcsolat**: `src/app/contact/page.tsx`
- **Csatlakozás**: `src/app/join/page.tsx`
- **Szabályok**: `src/app/rules/page.tsx`

## 🔧 **Karbantartás**

### **Új Admin Hozzáadása**
1. **Kép feltöltése**: `public/profilkep/adminnev.png`
2. **Adatok frissítése**: `src/app/admins/page.tsx`
3. **Rang ikon**: Válaszd ki a megfelelő ikont
4. **Tesztelés**: `npm run dev`

### **Színek Módosítása**
1. **Tailwind config**: `tailwind.config.js`
2. **Globális CSS**: `src/app/globals.css`
3. **Komponensek**: Egyes fájlokban

### **Logó Módosítása**
1. **Favicon**: `public/favicon.ico`
2. **Navbar**: `src/components/Navbar.tsx`
3. **Főoldal**: `src/app/page.tsx`

### **Képek Frissítése**
1. **Profilképek**: `public/profilkep/`
2. **Rang ikonok**: `public/lficon/`
3. **Útvonalak**: Frissítsd a kódban

## 🐛 **Hibaelhárítás**

### **Kép nem jelenik meg**
- Ellenőrizd az útvonalat
- Győződj meg róla, hogy a fájl a `public` mappában van
- Használd a Next.js Image komponenst

### **TypeScript hibák**
- Ellenőrizd az interfészeket
- Használj opcionális mezőket (`?`)
- Adj meg alapértelmezett értékeket

### **Next.js konfigurációs hibák**
- Ne használj elavult beállításokat
- A `images.formats` csak `image/avif` és `image/webp` támogatott

### **Színek nem jelennek meg**
- Ellenőrizd a Tailwind konfigurációt
- Frissítsd a globális CSS-t
- Töröld a böngésző cache-t

## 📦 **Függőségek**

### **Fő Függőségek**
- `next`: ^14.0.0
- `react`: ^18.0.0
- `@nextui-org/react`: ^2.0.0
- `tailwindcss`: ^3.0.0

### **Fejlesztői Függőségek**
- `typescript`: ^5.0.0
- `@types/node`: ^20.0.0
- `@types/react`: ^18.0.0

## 🚀 **Deploy**

### **Vercel (Ajánlott)**
1. Csatlakozd a GitHub repository-t
2. Automatikus deploy minden push-nál
3. Custom domain beállítása

### **Netlify**
1. Drag & drop a `out` mappával
2. Build parancs: `npm run build`
3. Publish directory: `out`

### **Saját Szerver**
```bash
npm run build
npm start
```

## 📞 **Kapcsolat**

**Fejlesztő**: LiteFox Team  
**Verzió**: 1.0.0  
**Utolsó frissítés**: 2025. Július

---

**Fontos**: Minden módosítás előtt készíts backup-ot! 🛡️ 
