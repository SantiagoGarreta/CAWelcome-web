import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { NewsArticle } from "@/data/news";

export function NewsCard({ article, index }: { article: NewsArticle; index: number }) {
  return (
    <article className="group flex h-full flex-col border-t-2 border-[var(--welcome-red)] bg-white">
      <Link href={`/noticias/${article.slug}`} className="relative block aspect-[1.35] overflow-hidden bg-[#24211f]" aria-label={`Leer ${article.title}`}>
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: article.imagePosition ?? "center" }}
        />
        <span className="absolute left-4 top-4 bg-[var(--welcome-black)] px-3 py-2 text-[10px] font-bold uppercase tracking-[.18em] text-white">
          {article.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
        <p className="text-[11px] font-bold uppercase tracking-[.18em] text-black/40">Historias de Welcome <span aria-hidden="true">/</span> 0{index + 1}</p>
        <h3 className="display mt-4 text-[clamp(1.7rem,2.3vw,2.25rem)] font-bold leading-[1.06] tracking-[-.06em]">
          <Link href={`/noticias/${article.slug}`} className="transition-colors hover:text-[var(--welcome-red-dark)]">{article.title}</Link>
        </h3>
        <p className="mt-4 text-sm leading-6 text-black/60">{article.excerpt}</p>
        <Link href={`/noticias/${article.slug}`} className="mt-auto inline-flex w-fit items-center gap-2 pt-8 text-sm font-bold text-[var(--welcome-red-dark)] hover:underline hover:underline-offset-4">
          Leer historia <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
