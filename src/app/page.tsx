"use client";

import React, { useEffect } from "react";
import { useLuminaStore } from "../store/useLuminaStore";
import LiquidHeader from "../components/LiquidHeader";
import AiSynthesisStudio from "../components/AiSynthesisStudio";
import AcousticEqLab from "../components/AcousticEqLab";
import LiquidTaskBoard from "../components/LiquidTaskBoard";
import EcosystemShowcase from "../components/EcosystemShowcase";
import { ExternalLink } from "lucide-react";

function SiteFooter({ lang, theme }: { lang: "fa" | "en"; theme: "PEARL" | "AURORA" | "TITANIUM" }) {
  const isFa = lang === "fa";
  const isPearl = theme === "PEARL";
  return (
    <footer className="relative z-10 w-full max-w-[1680px] mx-auto px-3 sm:px-4 lg:px-8 pt-3 pb-5">
      <div className={`${isPearl ? "liquid-shell-light" : "liquid-shell-dark"} rounded-[24px] px-5 py-5 sm:px-7 flex flex-col sm:flex-row items-center justify-between gap-5`}>
        <div className="flex items-center gap-3 min-w-0">
          <img src="./lumina-mark.svg" alt="Lumina Glass" width="42" height="42" className="w-[42px] h-[42px] shrink-0" />
          <div className="min-w-0">
            <div className="font-mono font-black tracking-[.16em] text-sm">LUMINA GLASS</div>
            <p className="text-[11px] opacity-65 mt-1">{isFa ? "آزمایشگاه اپتیک، شیشه مایع و صدای دیجیتال" : "Optics, liquid glass & digital audio lab"}</p>
          </div>
        </div>
        <nav aria-label={isFa ? "پیوندهای رسمی" : "Official links"} className="flex flex-wrap items-center justify-center gap-2">
          <a href="https://github.com/pooya-labs" target="_blank" rel="noreferrer" className={`${isPearl ? "btn-liquid-light" : "btn-liquid-dark"} rounded-full px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2 hover:-translate-y-0.5`}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/></svg> GitHub
          </a>
          <a href="https://pooya-labs.github.io/pooya-labs-platform/" target="_blank" rel="noreferrer" className={`${isPearl ? "btn-liquid-light" : "btn-liquid-dark"} rounded-full px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2 hover:-translate-y-0.5`}>
            <img src="https://raw.githubusercontent.com/pooya-labs/pooya-labs-platform/main/apps/platform/public/brand/pooya-monogram.webp" alt="" aria-hidden="true" width="22" height="22" className="shrink-0 object-contain" />
            Pooya Labs Platform <ExternalLink size={13} aria-hidden="true" />
          </a>
        </nav>
      </div>
      <div className="text-center text-[10px] opacity-50 font-mono mt-3">© {new Date().getFullYear()} POOYA GOODARZI · BUILT WITH LIGHT & CODE</div>
    </footer>
  );
}

export default function LuminaGlassPage() {
  const { lang, theme, activeTab, hydrateLuminaPreferences } = useLuminaStore();

  useEffect(() => {
    hydrateLuminaPreferences();
  }, [hydrateLuminaPreferences]);

  useEffect(() => {
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  const envClass =
    theme === "PEARL"
      ? "liquid-env-pearl"
      : theme === "AURORA"
      ? "liquid-env-aurora"
      : "liquid-env-titanium";

  return (
    <div className={`lumina-page min-h-[100svh] min-h-[100dvh] ${envClass} relative flex flex-col pb-[calc(1.5rem+env(safe-area-inset-bottom))]`}>
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
        <div className="liquid-blob absolute -top-20 left-10 w-80 h-80 rounded-full bg-indigo-400/30 blur-3xl" />
        <div className="liquid-blob absolute top-40 right-12 w-96 h-96 rounded-full bg-pink-400/25 blur-3xl" />
        <div className="liquid-blob absolute bottom-10 left-1/3 w-96 h-96 rounded-full bg-cyan-400/25 blur-3xl" />
      </div>
      <div className="relative z-10 flex-1 flex flex-col space-y-6">
        <LiquidHeader />
        <main className="max-w-[1680px] w-full mx-auto px-3 sm:px-4 lg:px-8 flex-1 min-w-0 pb-4">
          {activeTab === "SYNTHESIS" && <AiSynthesisStudio />}
          {activeTab === "ACOUSTIC" && <AcousticEqLab />}
          {activeTab === "WORKFLOW" && <LiquidTaskBoard />}
          {activeTab === "ECOSYSTEM" && <EcosystemShowcase />}
        </main>
      </div>
      <SiteFooter lang={lang} theme={theme} />
    </div>
  );
}