"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { NewsCard } from "@/components/news/news-card";
import { newsArticles, newsCategories, type NewsCategory } from "@/data/news";

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export function NewsArchive() {
  const [category, setCategory] = useState<NewsCategory | "Todas">("Todas");
  const [query, setQuery] = useState("");
  const search = normalize(query.trim());
  const results = newsArticles.filter((article) =>
    (category === "Todas" || article.category === category) &&
    (!search || normalize(`${article.title} ${article.excerpt} ${article.category}`).includes(search))
  );

  return (
    <section id="archivo" className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32" aria-labelledby="archive-heading">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">Para explorar</p>
            <h2 id="archive-heading" className="display mt-5 text-[clamp(3rem,6vw,6rem)] font-bold leading-[.9] tracking-[-.08em]">Todas las historias<span className="text-[var(--welcome-red)]">.</span></h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-black/60">Personas, equipos y momentos que cuentan quiénes somos.</p>
          </div>
          <label className="relative block w-full max-w-sm">
            <span className="sr-only">Buscar historias</span>
            <Search size={19} aria-hidden="true" className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-black/45" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar historias"
              className="h-14 w-full rounded-full border border-black/20 bg-white pl-13 pr-12 text-sm outline-none transition-colors placeholder:text-black/45 focus:border-[var(--welcome-red)]"
            />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Borrar búsqueda" className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-black/55 hover:text-black"><X size={18} /></button>}
          </label>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Filtrar historias por categoría">
          {newsCategories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition-colors ${category === item ? "border-[var(--welcome-black)] bg-[var(--welcome-black)] text-white" : "border-black/15 bg-white text-black/65 hover:border-black/50 hover:text-black"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <p className="mt-9 text-xs font-bold uppercase tracking-[.17em] text-black/45" aria-live="polite">
          {results.length} {results.length === 1 ? "historia" : "historias"}
        </p>

        {results.length > 0 ? (
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {results.map((article) => <NewsCard key={article.slug} article={article} index={newsArticles.indexOf(article)} />)}
          </div>
        ) : (
          <div className="mt-5 border border-black/15 bg-white px-7 py-14 text-center">
            <p className="display text-3xl font-bold tracking-[-.06em]">No encontramos historias con esa búsqueda.</p>
            <p className="mt-3 text-sm text-black/55">Probá con otra palabra o elegí una categoría diferente.</p>
            <button type="button" onClick={() => { setCategory("Todas"); setQuery(""); }} className="mt-7 rounded-full bg-[var(--welcome-red)] px-6 py-3 text-sm font-bold text-white hover:bg-[var(--welcome-red-dark)]">Ver todas las historias</button>
          </div>
        )}
      </div>
    </section>
  );
}
