"use client";

import React from "react";
import { useLuminaStore } from "../store/useLuminaStore";
import SmartAssetImage from "./SmartAssetImage";
import { ExternalLink } from "lucide-react";

type Project = {
  num: string;
  name: string;
  logo: string;
  category: string;
  desc: { fa: string; en: string };
  live?: string;
  repo: string;
  accent: string;
};

const PROJECTS: Project[] = [
  {
    num: "01", name: "Pooya.OS", logo: "https://raw.githubusercontent.com/pooya-labs/pooya-os/main/public/brand/pooya-os.svg", category: "Spatial WebOS",
    desc: { fa: "محیط دسکتاپ تحت وب با پنجره‌های تعاملی، ترمینال و تجربه‌ای شبیه سیستم‌عامل.", en: "A spatial browser desktop with interactive windows, a command terminal and an OS-like workflow." },
    live: "https://pooya-labs.github.io/pooya-os/", repo: "https://github.com/pooya-labs/pooya-os", accent: "from-cyan-400 to-blue-500"
  },
  {
    num: "02", name: "AuraPulse", logo: "https://raw.githubusercontent.com/pooya-labs/aurapulse/main/public/aurapulse-mark.svg", category: "Market Intelligence",
    desc: { fa: "ترمینال بازار با نمودارهای زنده، دفتر سفارش شبیه‌سازی‌شده و معاملات آزمایشی.", en: "A market terminal with live charts, a simulated order book and local paper trading." },
    live: "https://pooya-labs.github.io/aurapulse/", repo: "https://github.com/pooya-labs/aurapulse", accent: "from-emerald-400 to-teal-500"
  },
  {
    num: "03", name: "NexusCanvas", logo: "https://raw.githubusercontent.com/pooya-labs/nexus-canvas/main/public/nexus-canvas-mark.svg", category: "Cloud Architecture Studio",
    desc: { fa: "محیط بصری طراحی معماری سیستم‌های ابری و سرویس‌های توزیع‌شده.", en: "A visual workspace for cloud architecture and distributed service design." },
    live: "https://pooya-labs.github.io/nexus-canvas/", repo: "https://github.com/pooya-labs/nexus-canvas", accent: "from-indigo-400 to-purple-500"
  },
  {
    num: "04", name: "GlobalCart", logo: "https://raw.githubusercontent.com/pooya-labs/globalcart/main/app/icon.svg", category: "Commerce Experience",
    desc: { fa: "دموی فروشگاه بین‌المللی با کاتالوگ چنددسته‌ای و تجربه خرید واکنش‌گرا.", en: "A responsive international marketplace demo with a multi-category product catalogue." },
    live: "https://pooya-labs.github.io/globalcart/", repo: "https://github.com/pooya-labs/globalcart", accent: "from-lime-400 to-emerald-600"
  },
  {
    num: "05", name: "Aetherflow", logo: "./project-marks/aetherflow.svg", category: "Workflow Orchestration · Rust",
    desc: { fa: "پلتفرم ارکستریشن گردش‌کار توزیع‌شده با اجرای پایدار و زمان‌بندی رویدادمحور.", en: "A fault-tolerant distributed workflow engine with durable execution and event-driven scheduling." },
    repo: "https://github.com/pooya-labs/aetherflow", accent: "from-orange-400 to-rose-500"
  },
  {
    num: "06", name: "Orbit", logo: "https://raw.githubusercontent.com/pooya-labs/orbit/main/app/icon.svg", category: "Systems Observability",
    desc: { fa: "ابزار مشاهده‌پذیری و هوشمندی برای سامانه‌های توزیع‌شده.", en: "An intelligence and observability workspace for distributed systems." },
    repo: "https://github.com/pooya-labs/orbit", accent: "from-violet-400 to-fuchsia-500"
  },
  {
    num: "07", name: "Salon Booking", logo: "https://raw.githubusercontent.com/pooya-labs/salon-booking/main/public/icons/salon-icon.svg", category: "Booking & Operations",
    desc: { fa: "سامانه رزرو نوبت و پنل مدیریت سبک برای کسب‌وکارهای خدماتی.", en: "A lightweight appointment booking and management system for service businesses." },
    repo: "https://github.com/pooya-labs/salon-booking", accent: "from-amber-400 to-orange-500"
  },
  {
    num: "08", name: "Pooya Labs Platform", logo: "https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram.webp", category: "Personal Product Platform",
    desc: { fa: "درگاه رسمی پروژه‌ها، محصولات و تجربه‌های مهندسی پویا لبز.", en: "The official home for Pooya Labs projects, products and engineering work." },
    live: "https://pooya-labs.github.io/pooya-labs-platform/", repo: "https://github.com/pooya-labs/pooya-labs-platform", accent: "from-sky-400 to-violet-500"
  },
  {
    num: "09", name: "Lumina Glass", logo: "./lumina-mark.svg", category: "Creative Engineering Studio",
    desc: { fa: "استودیوی شیشه مایع، ابزارهای اپتیکی و آزمایشگاه صدای دیجیتال.", en: "A liquid-glass studio for optical tools, creative experiments and browser-native audio." },
    live: "https://pooya-labs.github.io/lumina-glass/", repo: "https://github.com/pooya-labs/lumina-glass", accent: "from-sky-300 to-fuchsia-500"
  },
];

export default function EcosystemShowcase() {
  const { lang, theme, blurPx } = useLuminaStore();
  const isLight = theme === "PEARL";
  const shellClass = isLight ? "liquid-shell-light" : "liquid-shell-dark";
  const btnClass = isLight ? "btn-liquid-light" : "btn-liquid-dark";
  const isFa = lang === "fa";

  return (
    <section dir={isFa ? "rtl" : "ltr"} style={{ backdropFilter: `blur(${blurPx}px) saturate(190%)`, WebkitBackdropFilter: `blur(${blurPx}px) saturate(190%)` }} className={`${shellClass} rounded-[32px] p-5 sm:p-6 md:p-8 space-y-6`}>
      <div className="flex flex-col sm:flex-row items-center gap-5 border-b border-white/30 pb-6">
        <div className="w-[88px] h-[88px] shrink-0 rounded-[24px] overflow-hidden border border-white/60 shadow-xl bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center">
          <SmartAssetImage baseName="pooya-liquid" alt="Pooya Goodarzi" style={{ width: "88px", height: "88px", objectFit: "cover", objectPosition: "top center" }} fallback={<span className="font-mono font-black text-2xl text-white">PG</span>} />
        </div>
        <div className="text-center sm:text-start min-w-0">
          <span className="text-[10px] sm:text-xs font-mono font-bold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-500 border border-indigo-400/30">POOYA LABS · PROJECT ECOSYSTEM</span>
          <h2 className="text-xl md:text-3xl font-black mt-3">{isFa ? "پویا گودرزی — مجموعه پروژه‌ها و محصولات" : "Pooya Goodarzi — Projects & Products"}</h2>
          <p className="text-xs md:text-sm opacity-75 mt-2 max-w-3xl leading-relaxed">{isFa ? "از ابزارهای تعاملی وب تا زیرساخت‌های توزیع‌شده؛ مجموعه‌ای از پروژه‌های مستقل با تمرکز بر مهندسی نرم‌افزار و تجربه کاربری." : "From interactive web tools to distributed infrastructure — an evolving collection of independent engineering projects."}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {PROJECTS.map((project) => (
          <article key={project.num} className={`${btnClass} rounded-[24px] p-5 flex flex-col justify-between gap-5 min-w-0`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className={`font-mono text-[10px] font-black px-3 py-1 rounded-full text-white bg-gradient-to-r ${project.accent}`}>PROJECT / {project.num}</span>
                <span className="font-mono text-[10px] opacity-65 text-end">{project.category}</span>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-12 h-12 shrink-0 rounded-[15px] border p-1.5 shadow-sm flex items-center justify-center ${project.name === "Pooya Labs Platform" ? "bg-black border-white/15" : "border-slate-300/25 bg-white/80"}`}>
                  <img src={project.logo} alt={`${project.name} logo`} loading="lazy" decoding="async" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-black min-w-0">{project.name}</h3>
              </div>
              <p className="text-xs opacity-80 leading-relaxed min-h-[42px]">{project.desc[lang]}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="btn-liquid-primary rounded-full px-3.5 py-2.5 text-xs font-bold inline-flex items-center gap-2"><span>{isFa ? "مشاهده سایت" : "Visit Website"}</span><ExternalLink size={14} /></a>}
              <a href={project.repo} target="_blank" rel="noreferrer" className={`rounded-full px-3.5 py-2.5 text-xs font-bold inline-flex items-center gap-2 ${project.live ? btnClass : "btn-liquid-primary"}`}><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-.28-2.48-1.24-5.09-1.24-5.09 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg><span>{isFa ? "مخزن گیت‌هاب" : "Source"}</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}