import { AtSign, Mail, MapPin } from "lucide-react";
import { navItems } from "@/data/content";

export function Footer() { return <footer className="bg-[var(--welcome-black)] px-6 py-14 text-white lg:px-10">
  <div className="mx-auto max-w-7xl"><div className="grid gap-12 border-b border-white/15 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
    <div><div className="display text-4xl font-extrabold tracking-[-.07em]"><span className="text-[var(--welcome-red)]">W</span>ELCOME<span className="text-[var(--welcome-red)]">.</span></div><p className="mt-5 max-w-xs text-sm leading-6 text-white/55">Sitio oficial del Club Atlético Welcome. Contenido institucional pendiente de completar.</p></div>
    <div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/40">Navegación</p><div className="flex flex-col gap-3 text-sm text-white/75">{navItems.map((item) => <a key={item.label} href={item.href} className="hover:text-white">{item.label}</a>)}</div></div>
    <div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/40">Contacto</p><div className="flex flex-col gap-4 text-sm text-white/75"><span className="flex gap-3"><Mail size={17} /> email pendiente</span><span className="flex gap-3"><MapPin size={17} /> dirección pendiente</span></div></div>
    <div><p className="mb-5 text-xs font-bold uppercase tracking-[.18em] text-white/40">Redes</p><a className="flex items-center gap-3 text-sm text-white/75" href="#redes"><AtSign size={17} /> Instagram pendiente</a></div>
  </div><div className="flex flex-col gap-3 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Club Atlético Welcome</span><span>cawelcome.com.uy</span></div></div>
</footer>; }
