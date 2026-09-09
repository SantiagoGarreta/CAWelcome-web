"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/content";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15 bg-black/15 text-white backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
      <a href="#inicio" className="display text-xl font-extrabold tracking-[-.06em]" aria-label="Welcome, inicio"><span className="text-[var(--welcome-red)]">W</span>ELCOME<span className="text-[var(--welcome-red)]">.</span></a>
      <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex" aria-label="Navegación principal">
        {navItems.map((item) => <a key={item.label} className="transition-opacity hover:opacity-65" href={item.href}>{item.label}</a>)}
      </nav>
      <a href="#socios" className="hidden items-center gap-2 rounded-full bg-[var(--welcome-red)] px-5 py-3 text-sm font-bold transition-transform hover:scale-105 lg:flex">Hacete socio <ArrowUpRight size={16} /></a>
      <button className="rounded-full border border-white/30 p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Abrir menú"><Menu /></button>
    </div>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-[var(--welcome-black)] p-6 lg:hidden">
      <div className="flex items-center justify-between"><span className="display text-xl font-bold"><span className="text-[var(--welcome-red)]">W</span>ELCOME.</span><button onClick={() => setOpen(false)} aria-label="Cerrar menú"><X size={28} /></button></div>
      <nav className="mt-20 flex flex-col gap-6" aria-label="Menú móvil">{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="display text-5xl font-bold tracking-[-.06em]">{item.label}</a>)}</nav>
    </motion.div>}</AnimatePresence>
  </header>;
}
