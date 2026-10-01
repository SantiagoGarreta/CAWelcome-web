import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { NewsCard } from "@/components/news/news-card";
import { getNewsArticle, newsArticles } from "@/data/news";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return { title: "Historia no encontrada | Club Atlético Welcome" };
  return {
    title: `${article.title} | Club Atlético Welcome`,
    description: article.excerpt,
    alternates: { canonical: `/noticias/${article.slug}` },
    openGraph: { title: article.title, description: article.excerpt, images: [{ url: article.image.src }] },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) notFound();
  const related = newsArticles.filter((item) => item.slug !== slug && (item.category === article.category || item.slug === newsArticles[0].slug)).slice(0, 2);
  if (related.length < 2) related.push(...newsArticles.filter((item) => item.slug !== slug && !related.includes(item)).slice(0, 2 - related.length));

  return (
    <>
      <Header />
      <main>
        <article>
          <header className="bg-[var(--welcome-black)] px-6 pb-16 pt-36 text-white lg:px-10 lg:pb-24 lg:pt-44">
            <div className="mx-auto max-w-7xl">
              <Link href="/noticias" className="inline-flex items-center gap-2 text-sm font-bold text-white/65 transition-colors hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> Volver a noticias</Link>
              <p className="mt-16 text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red-light)]">Historias de Welcome <span className="mx-2 text-white/35">/</span> {article.category}</p>
              <h1 className="display mt-6 max-w-5xl text-[clamp(3.4rem,8vw,7.6rem)] font-extrabold leading-[.88] tracking-[-.085em]">{article.title}<span className="text-[var(--welcome-red-light)]">.</span></h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">{article.excerpt}</p>
            </div>
          </header>

          <div className="bg-[var(--welcome-black)] px-6 lg:px-10">
            <div className="relative mx-auto aspect-[4/3] max-w-7xl overflow-hidden sm:aspect-[16/9]">
              <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1279px) 100vw, 1280px" className="object-cover" style={{ objectPosition: article.imagePosition ?? "center" }} />
            </div>
          </div>

          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.38fr_1fr] lg:gap-20 lg:px-10 lg:py-28">
            <aside className="border-t border-black/15 pt-5 text-xs font-bold uppercase tracking-[.2em] text-black/50">
              <p>Welcome / {article.category}</p>
              <p className="mt-3">Historias del club</p>
            </aside>
            <div className="max-w-3xl">
              {article.sections.map((section) => (
                <section key={section.heading} className="mb-14 last:mb-0">
                  <h2 className="display text-[clamp(2.2rem,4vw,3.7rem)] font-bold leading-[.96] tracking-[-.07em]">{section.heading}</h2>
                  <div className="mt-7 space-y-6 text-base leading-8 text-black/70 sm:text-lg sm:leading-9">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
              <div className="mt-16 border-t border-black/15 pt-8">
                <Link href="/noticias" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--welcome-red-dark)] hover:underline hover:underline-offset-4"><ArrowLeft size={16} aria-hidden="true" /> Volver a todas las historias</Link>
              </div>
            </div>
          </div>
        </article>

        <section className="bg-white px-6 py-20 lg:px-10 lg:py-28" aria-labelledby="related-heading">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div><p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">Seguí leyendo</p><h2 id="related-heading" className="display mt-5 text-[clamp(2.8rem,5vw,5rem)] font-bold leading-[.9] tracking-[-.08em]">Más de Welcome.</h2></div>
              <Link href="/noticias" className="inline-flex items-center gap-2 text-sm font-bold">Ver todas <ArrowUpRight size={16} aria-hidden="true" /></Link>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">{related.map((item) => <NewsCard key={item.slug} article={item} index={newsArticles.indexOf(item)} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
