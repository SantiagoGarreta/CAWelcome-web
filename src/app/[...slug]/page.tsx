import Link from "next/link";

export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const title = slug.map((part) => part.replaceAll("-", " ")).join(" / ");
  return <main className="flex min-h-screen items-center justify-center bg-[var(--welcome-off-white)] px-6"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">Página en preparación</p><h1 className="display mt-5 text-6xl font-bold capitalize tracking-[-.08em]">{title}</h1><p className="mt-6 leading-7 text-black/60">Esta ruta está preparada para incorporar contenido oficial cuando sea proporcionado. No se agregaron datos inventados.</p><Link href="/" className="mt-8 inline-block rounded-full bg-[var(--welcome-red)] px-6 py-4 text-sm font-bold text-white">Volver al inicio</Link></div></main>;
}
