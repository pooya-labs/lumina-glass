# Lumina Glass

**A liquid-glass optical studio, browser audio lab and creative workspace.**

- **Live site:** https://pooya-labs.github.io/lumina-glass/
- **Repository:** https://github.com/pooya-labs/lumina-glass
- **Maintainer:** [Pooya Goodarzi](https://github.com/pooya-labs)

## What’s inside

- **Liquid Optical Studio** — tune optical parameters, preview the result, and save or export presets.
- **Web Audio EQ** — a five-band browser-native equalizer for the built-in tone, local audio files, and microphone input.
- **Sprint Workflow** — a compact local task board with persistent browser storage.
- **Project Ecosystem** — a current directory of Pooya Labs projects, live demos, and source repositories.

## Project ecosystem

| Project | Website | Source |
| --- | --- | --- |
| Pooya.OS | [Open](https://pooya-labs.github.io/pooya-os/) | [GitHub](https://github.com/pooya-labs/pooya-os) |
| AuraPulse | [Open](https://pooya-labs.github.io/aurapulse/) | [GitHub](https://github.com/pooya-labs/aurapulse) |
| NexusCanvas | [Open](https://pooya-labs.github.io/nexus-canvas/) | [GitHub](https://github.com/pooya-labs/nexus-canvas) |
| GlobalCart | [Open](https://pooya-labs.github.io/globalcart/) | [GitHub](https://github.com/pooya-labs/globalcart) |
| Aetherflow | — | [GitHub](https://github.com/pooya-labs/aetherflow) |
| Orbit | — | [GitHub](https://github.com/pooya-labs/orbit) |
| Salon Booking | — | [GitHub](https://github.com/pooya-labs/salon-booking) |
| Pooya Labs Platform | [Open](https://pooya-labs.github.io/pooya-labs-platform/) | [GitHub](https://github.com/pooya-labs/pooya-labs-platform) |

## Local-first behavior

Optical presets, EQ settings, and task-board data are stored in the current browser. They are not synchronized to a remote account or database. Audio is processed through the browser’s Web Audio API; microphone use requires permission and a secure context (HTTPS or localhost). Playback does not restart automatically after a reload.

## Stack

Next.js, React, TypeScript, Tailwind CSS, SVG/Canvas, Web Audio API, and localStorage.

## Development

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Links

- [GitHub profile](https://github.com/pooya-labs)
- [Pooya Labs Platform](https://pooya-labs.github.io/pooya-labs-platform/)


---

## راهنمای فارسی

### معرفی

**Lumina Glass** یک استودیوی تعاملی مبتنی بر وب برای تجربهٔ جلوه‌های نوری شیشه‌ای، پردازش صدای مرورگر و ابزارهای خلاقانهٔ سبک است.

### بخش‌های اصلی

- **استودیوی اپتیکال:** تنظیم پارامترهای جلوهٔ نوری، مشاهدهٔ پیش‌نمایش و ذخیره یا خروجی‌گرفتن از presetها.
- **اکولایزر صوتی:** اکولایزر پنج‌باند مبتنی بر Web Audio API برای صدای داخلی برنامه، فایل صوتی محلی و ورودی میکروفون.
- **برد مدیریت کار:** تختهٔ محلی و فشرده برای پیگیری کارها.
- **اکوسیستم پروژه‌ها:** فهرست پروژه‌های Pooya Labs به‌همراه پیوند نسخهٔ نمایشی و مخزن هر پروژه.

### رفتار محلی و حریم داده

تنظیمات اپتیکال، اکولایزر و اطلاعات برد کار در مرورگر فعلی ذخیره می‌شوند و به حساب یا پایگاه دادهٔ راه دور همگام‌سازی نمی‌شوند. پردازش صدا از Web Audio API مرورگر استفاده می‌کند. دسترسی به میکروفون به مجوز کاربر و محیط امن HTTPS یا localhost نیاز دارد. پخش صدا پس از بارگذاری مجدد صفحه به‌صورت خودکار از سر گرفته نمی‌شود.

### اجرای پروژه

```bash
npm install
npm run dev
```

برای ساخت نسخهٔ تولید:

```bash
npm run build
```

### فناوری‌ها

Next.js، React، TypeScript، Tailwind CSS، SVG/Canvas، Web Audio API و localStorage.

برای مشاهدهٔ سایر پروژه‌های مجموعه، به جدول «Project ecosystem» در بخش انگلیسی README مراجعه کنید.
