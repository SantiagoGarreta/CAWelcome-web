import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewsArchive } from "@/components/news/news-archive";
import { newsArticles } from "@/data/news";

export const metadata: Metadata = {
  title: "Noticias | Club Atlético Welcome",
  description: "Historias del básquet, las formativas, el club y la gente que hace Welcome.",
  alternates: { canonical: "/noticias" },
};

const featured = newsArticles[0];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate overflow-hidden bg-[var(--welcome-black)] text-white">
          <Image
            src={featured.image}
            alt={featured.imageAlt}
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover object-center opacity-45 lg:object-[center_42%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111112] via-[#111112]/85 to-[#111112]/35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#111112] via-transparent to-[#111112]/35" />
          <div className="mx-auto flex min-h-[760px] max-w-7xl flex-col justify-end px-6 pb-14 pt-36 lg:min-h-[780px] lg:px-10 lg:pb-16">
            <div className="max-w-4xl">
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.27em] text-[var(--welcome-red-light)]"><span className="h-px w-8 bg-[var(--welcome-red-light)]" aria-hidden="true" /> Club Atlético Welcome / Actualidad</p>
              <h1 className="display mt-7 text-[clamp(3.4rem,12vw,11rem)] font-extrabold leading-[.78] tracking-[-.1em]">Noti<span className="text-[var(--welcome-red-light)]">cias.</span></h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">Lo que pasa dentro y alrededor de la W. Historias de básquet, comunidad y pertenencia.</p>
              <a href="#archivo" className="mt-9 inline-flex items-center gap-3 rounded-full border border-white/45 px-6 py-4 text-sm font-bold transition-colors hover:bg-white hover:text-black">
                Explorar historias <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>
            <Link href={`/noticias/${featured.slug}`} className="group mt-20 grid gap-5 border-t border-white/30 pt-6 transition-colors hover:border-white sm:grid-cols-[11rem_1fr_auto] sm:items-center">
              <span className="text-xs font-bold uppercase tracking-[.2em] text-[var(--welcome-red-light)]">En portada / 01</span>
              <span className="display max-w-xl text-2xl font-bold leading-tight tracking-[-.06em] sm:text-3xl">{featured.title}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><ArrowUpRight size={20} aria-hidden="true" /></span>
            </Link>
          </div>
        </section>

        <div className="bg-[var(--welcome-red)] px-6 py-5 text-white lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 text-xs font-bold uppercase tracking-[.22em]">
            <span>En la cancha. En la tribuna. En el club.</span>
            <span className="text-white/70">Siempre Welcome.</span>
          </div>
        </div>

        <NewsArchive />

        <section className="bg-[var(--welcome-black)] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red-light)]">Desde 1926</p>
              <h2 className="display mt-5 max-w-3xl text-[clamp(3rem,6vw,6rem)] font-bold leading-[.9] tracking-[-.08em]">Cada historia empieza en algún lugar.</h2>
              <p className="mt-6 max-w-xl leading-7 text-white/60">Conocé cómo nació Welcome y los momentos que marcaron el camino de la W.</p>
            </div>
            <Link href="/historia" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[var(--welcome-red)] px-6 py-4 text-sm font-bold transition-colors hover:bg-[var(--welcome-red-dark)]">
              Nuestra historia <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
