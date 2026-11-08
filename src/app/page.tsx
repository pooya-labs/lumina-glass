"use client";

import React, { useEffect } from "react";
import { useLuminaStore } from "../store/useLuminaStore";
import LiquidHeader from "../components/LiquidHeader";
import AiSynthesisStudio from "../components/AiSynthesisStudio";
import AcousticEqLab from "../components/AcousticEqLab";
import LiquidTaskBoard from "../components/LiquidTaskBoard";
import EcosystemShowcase from "../components/EcosystemShowcase";
import { Github, ExternalLink } from "lucide-react";

function SiteFooter({ lang }: { lang: "fa" | "en" }) {
  const isFa = lang === "fa";
  return (
    <footer className="relative z-10 w-full max-w-[1680px] mx-auto px-3 sm:px-4 lg:px-8 pt-3 pb-5">
      <div className="liquid-shell-dark rounded-[24px] px-5 py-5 sm:px-7 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3 min-w-0">
          <img src="./lumina-mark.svg" alt="Lumina Glass" width="42" height="42" className="w-[42px] h-[42px] shrink-0" />
          <div className="min-w-0">
            <div className="font-mono font-black tracking-[.16em] text-sm">LUMINA GLASS</div>
            <p className="text-[11px] opacity-65 mt-1">{isFa ? "آزمایشگاه اپتیک، شیشه مایع و صدای دیجیتال" : "Optics, liquid glass & digital audio lab"}</p>
          </div>
        </div>
        <nav aria-label={isFa ? "پیوندهای رسمی" : "Official links"} className="flex flex-wrap items-center justify-center gap-2">
          <a href="https://github.com/pooya-labs" target="_blank" rel="noreferrer" className="btn-liquid-dark rounded-full px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2 hover:-translate-y-0.5">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          <a href="https://pooya-labs.github.io/pooya-labs-platform/" target="_blank" rel="noreferrer" className="btn-liquid-dark rounded-full px-4 py-2.5 text-xs font-bold inline-flex items-center gap-2 hover:-translate-y-0.5">
            <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true" className="shrink-0"><defs><linearGradient id="pl-mark" x1="2" y1="2" x2="30" y2="30"><stop stopColor="#67E8F9"/><stop offset="1" stopColor="#A78BFA"/></linearGradient></defs><path d="M16 2.5 29.5 10v12L16 29.5 2.5 22V10L16 2.5Z" fill="none" stroke="url(#pl-mark)" strokeWidth="1.8"/><path d="M11 23V9h7.2a4.2 4.2 0 0 1 0 8.4H11" fill="none" stroke="url(#pl-mark)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
      <SiteFooter lang={lang} />
    </div>
  );
}