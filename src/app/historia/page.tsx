import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import champions1997 from "../../../assets/1997.png";
import PisoWelcome from "../../../assets/PisoWelcome.png";
import hinchadaBandera from "../../../assets/LaBandaEsElAguanteBandera.jpeg";
import hinchadaTribuna from "../../../assets/LBEELLarreborges.jpeg";
import oscarMoglia from "../../../assets/Oscar Moglia.jpeg";
import fefoRuiz from "../../../assets/Fefo Ruiz.jpeg";
import estebanBatista from "../../../assets/Esteban Batista.png";
import laBandaAntigua from "../../../assets/LaBandaEsElAguanteAntigua.jpeg";

export const metadata: Metadata = {
  title: "Historia | Club Atlético Welcome",
  description:
    "Desde el garaje donde nació en 1926 hasta sus nueve títulos federales: conocé la historia del Club Atlético Welcome.",
  alternates: { canonical: "/historia" },
};

const beginnings = [
  {
    year: "1926",
    title: "Una idea a la luz de las velas",
    text: "El 13 de octubre, un grupo de jóvenes se reunió en un garaje de la calle Durazno. Edison García Maggi y Hebert Mendoza impulsaron el nuevo club; Eduardo Mendoza Galli propuso el nombre Welcome.",
  },
  {
    year: "1927",
    title: "El primer partido oficial",
    text: "Tras afiliarse a la Federación Uruguaya de Básquetbol, Welcome debutó el 3 de marzo: venció 20 a 10 a la Asociación Cristiana de Jóvenes en la categoría novicios.",
  },
  {
    year: "1928",
    title: "Un paso adelante",
    text: "El equipo comenzó a competir en Intermedia, la segunda categoría de aquel tiempo.",
  },
  {
    year: "1930",
    title: "Más allá de Montevideo",
    text: "Welcome disputó un encuentro internacional ante Gimnasia y Esgrima de Buenos Aires en la Plaza de Deportes N.º 3 del Parque Rodó.",
  },
];

const titlePeriods = [
  { years: "1953", label: "El primer título" },
  { years: "1956 · 1957", label: "La primera consagración consecutiva" },
  { years: "1966 · 1967", label: "Una nueva época de gloria" },
  { years: "1997 · 1998 · 1999 · 2000", label: "Cuatro títulos seguidos" },
];

const figures = [
  {
    name: "Óscar Moglia",
    detail: "Una de las grandes figuras surgidas de Welcome. Fue distinguido por el Salón de la Fama de FIBA en 2021.",
    image: oscarMoglia,
  },
  {
    name: "Wilfredo “Fefo” Ruiz",
    detail: "Otro nombre inseparable de la historia del club y del básquetbol uruguayo.",
    image: fefoRuiz,
  },
  {
    name: "Esteban Batista",
    detail: "Formado en las juveniles de Welcome, llegó a jugar en la NBA con Atlanta Hawks.",
    image: estebanBatista,
  },
];

export default function HistoryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative isolate flex min-h-[760px] items-end overflow-hidden bg-[var(--welcome-black)] px-6 pb-20 pt-40 text-white lg:px-10 lg:pb-28">
          <Image
            src={champions1997}
            alt="Plantel de Welcome en la cancha durante la década de 1990"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="relative mx-auto w-full max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[.28em] text-[var(--welcome-red-light)]">Club Atlético Welcome · Desde 1926</p>
            <h1 className="display mt-7 max-w-5xl text-[clamp(4rem,10vw,9rem)] font-extrabold leading-[.85] tracking-[-.09em]">
              Nuestra<br /><span className="text-[var(--welcome-red-light)]">historia</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Nacimos en un garaje, a la luz de unas velas. Crecimos con el barrio, el básquetbol y generaciones que hicieron grande a la W.
            </p>
            <a href="#origen" className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-4 text-sm font-bold transition-colors hover:bg-white hover:text-black">
              Recorré nuestra historia <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section aria-label="Welcome en números" className="bg-[var(--welcome-red)] px-6 py-10 text-white lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-3 sm:gap-0">
            {[
              { number: "1926", label: "Año de fundación" },
              { number: "9", label: "Títulos federales" },
              { number: "4", label: "Campeonatos seguidos, de 1997 a 2000" },
            ].map((stat) => (
              <div key={stat.label} className="border-white/25 sm:border-l sm:pl-8 sm:first:border-l-0 sm:first:pl-0 lg:pl-14">
                <p className="display text-6xl font-bold leading-none tracking-[-.08em] lg:text-7xl">{stat.number}</p>
                <p className="mt-2 max-w-[15rem] text-sm font-medium leading-5 text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="origen" className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-36">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">El origen</p>
              <h2 className="display mt-5 text-[clamp(3rem,6vw,6rem)] font-bold leading-[.9] tracking-[-.08em]">El garaje de los sueños.</h2>
            </div>
            <div className="max-w-2xl space-y-6 text-base leading-8 text-[#111111] sm:text-lg">
              <p>El 13 de octubre de 1926, un grupo de jóvenes del entorno de Tristán Narvaja, Durazno e Isla de Flores se reunió en un garaje de Durazno 1882, casi Eduardo Acevedo. El local no tenía luz eléctrica: unas velas alumbraron la reunión en la que nació Welcome.</p>
              <p>La iniciativa de Edison García Maggi y Hebert Mendoza buscaba crear un espacio deportivo y social para el barrio. García Maggi sería el primer presidente, y el nombre propuesto por Eduardo Mendoza Galli fue aceptado por todos.</p>
              <p>Desde aquel comienzo, la historia del club quedó unida a la de Palermo y Parque Rodó: una comunidad que construyó sus canchas, acompañó sus equipos y sostuvo a la institución a lo largo de las décadas.</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-10 lg:py-32" aria-labelledby="primeros-pasos">
          <div className="absolute inset-0"><Image src={PisoWelcome} alt="Piso de Welcome" fill className="object-cover object-center opacity-60" /></div>
          <div className="absolute inset-0 bg-white/55" />
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">Los primeros pasos</p>
            <h2 id="primeros-pasos" className="display mt-5 max-w-4xl text-[clamp(2.8rem,5vw,5.5rem)] font-bold leading-[.92] tracking-[-.08em]">De una idea a una institución.</h2>
            <ol className="mt-14 grid border-t border-black/15 md:grid-cols-2 xl:grid-cols-4">
              {beginnings.map((item) => (
                <li key={item.year} className="border-b border-black/15 py-8 md:px-6 md:first:pl-0 xl:border-r xl:last:border-r-0">
                  <p className="display text-5xl font-bold tracking-[-.08em] text-[var(--welcome-red)]">{item.year}</p>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/90">{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="titulos" className="scroll-mt-20 px-6 pt-24 lg:px-10 lg:pt-36" aria-labelledby="titulos-heading">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">Las conquistas</p>
              <h2 id="titulos-heading" className="display mt-5 text-[clamp(3rem,6vw,6rem)] font-bold leading-[.9] tracking-[-.08em]">Nueve veces en lo más alto.</h2>
            </div>
            <p className="max-w-lg text-base leading-8 text-black/65">Welcome conquistó nueve campeonatos federales. Entre 1997 y 2000 logró cuatro títulos consecutivos, una de las marcas más destacadas del básquetbol uruguayo.</p>
          </div>
        </section>
        <section className="px-6 pb-24 pt-16 lg:px-10 lg:pb-36" aria-label="Años de los títulos federales">
          <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {titlePeriods.map((period) => (
              <div key={period.years} className="bg-white p-7">
                <p className="display text-2xl font-bold tracking-[-.06em] text-[var(--welcome-red)]">{period.years}</p>
                <p className="mt-3 text-sm leading-6 text-black/65">{period.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[var(--welcome-black)] px-6 py-24 text-white lg:px-10 lg:py-36" aria-labelledby="club-heading">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red-light)]">Nuestra casa</p>
              <h2 id="club-heading" className="display mt-5 text-[clamp(3rem,6vw,6rem)] font-bold leading-[.9] tracking-[-.08em]">Un club hecho por su gente.</h2>
            </div>
            <div className="lg:-mt-8">
              <div className="space-y-6 text-base leading-8 text-white/70 sm:text-lg">
                <p>Socios y simpatizantes ayudaron a preparar los primeros terrenos a pico y pala. Welcome levantó canchas en Gaboto y Gonzalo Ramírez y en la entonces calle Tristán Narvaja, hoy Emilio Frugoni.</p>
                <p>Ese esfuerzo colectivo abrió el camino hacia la sede y el estadio techado propio. Hoy, el Estadio Óscar Magurno, en Emilio Frugoni 924, sigue siendo un punto de encuentro para la W.</p>
              </div>
              <Image
                src={laBandaAntigua}
                alt="Grupo de hinchas de Welcome en una fotografía antigua"
                sizes="(max-width: 1023px) calc(100vw - 48px), 600px"
                className="mt-9 h-auto w-full border border-white/15"
              />
            </div>
          </div>
        </section>

        <section id="hinchada" className="relative isolate scroll-mt-20 overflow-hidden bg-[#110b0d] px-6 py-24 text-white lg:px-10 lg:py-28" aria-labelledby="hinchada-heading">
          <video
            className="pointer-events-none absolute inset-0 -z-20 h-full w-full scale-[1.04] object-cover object-center opacity-75 blur-[2px]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/media/ascenso-loop.mp4" type="video/mp4" media="(prefers-reduced-motion: no-preference)" />
          </video>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#110b0d]/95 via-[#110b0d]/70 to-[#110b0d]/35" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#110b0d] via-transparent to-[#110b0d]/40" />

          <div className="relative mx-auto grid max-w-7xl gap-14 lg:min-h-[650px] lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-10">
            <div className="relative z-10">
              <p className="flex items-center gap-4 text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red-light)]">
                <span className="h-px w-9 bg-[var(--welcome-red-light)]" aria-hidden="true" />
                La fuerza de la W
              </p>
              <h2 id="hinchada-heading" className="display mt-8 text-[clamp(3.2rem,10vw,6.5rem)] font-bold leading-[.87] tracking-[-.08em]">
                Su<br />hinchada.
              </h2>
              <p className="mt-9 max-w-md border-l-2 border-[var(--welcome-red-light)] pl-5 text-base leading-8 text-white/80 sm:text-lg">
                &ldquo;Juntos pasamos muy duros momentos,
                <br></br>
                Cuando descendimos, más grande se hizo el sentimiento.
                <br></br>
                A los jugadores, les pido que dejen la vida.
                <br></br>
                Cuando yo me muera, te voy a alentar desde arriba.&rdquo;
                <br></br><br></br>
                - La Banda es el Aguante. 
              </p>
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[620px] lg:py-10">
              <figure className="ml-auto w-[88%] border border-white/20 bg-[#1c1517] p-2 shadow-[0_25px_75px_rgba(0,0,0,.45)] sm:w-[80%] lg:w-[86%]">
                <div className="relative aspect-[1.44] overflow-hidden">
                  <Image
                    src={hinchadaBandera}
                    alt="Hinchas de Welcome junto a la bandera La Banda Es El Aguante"
                    fill
                    sizes="(max-width: 639px) 78vw, (max-width: 1023px) 480px, 520px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-1 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/65">
                  <span>01 / La banda es el aguante</span><span>Welcome</span>
                </figcaption>
              </figure>
              <figure className="relative -mt-8 w-[70%] border border-white/20 bg-[#1c1517] p-2 shadow-[0_25px_75px_rgba(0,0,0,.5)] sm:-mt-14 sm:w-[62%] lg:-mt-16 lg:w-[68%]">
                <div className="relative aspect-[1.47] overflow-hidden">
                  <Image
                    src={hinchadaTribuna}
                    alt="La hinchada de Welcome alentando desde la tribuna"
                    fill
                    sizes="(max-width: 639px) 62vw, (max-width: 1023px) 370px, 420px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 px-1 pb-1 pt-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/65">
                  <span>02 / En las tribunas</span><span>La W</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-10 lg:py-36" aria-labelledby="figuras-heading">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[var(--welcome-red)]">Personas que dejaron huella</p>
            <h2 id="figuras-heading" className="display mt-5 max-w-4xl text-[clamp(3rem,5vw,5.5rem)] font-bold leading-[.9] tracking-[-.08em]">Nombres de una historia compartida.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {figures.map((figure, index) => (
                <article key={figure.name} className="overflow-hidden border-t-2 border-[var(--welcome-red)] bg-white">
                  <div className="relative aspect-[4/3] bg-[#24211f]">
                    <Image
                      src={figure.image}
                      alt={`${figure.name} con la camiseta de Welcome`}
                      fill
                      sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 33vw, 400px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-xs font-bold tracking-[.2em] text-black/35">0{index + 1}</span>
                    <h3 className="display mt-5 text-3xl font-bold tracking-[-.06em]">{figure.name}</h3>
                    <p className="mt-4 text-sm leading-7 text-black/60">{figure.detail}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--welcome-red)] px-6 py-20 text-white lg:px-10 lg:py-28">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-white/70">El próximo capítulo</p>
              <h2 className="display mt-5 max-w-3xl text-[clamp(3rem,6vw,6rem)] font-bold leading-[.9] tracking-[-.08em]">La historia sigue jugando.</h2>
            </div>
            <Link href="/" className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold text-black transition-transform hover:scale-105">
              Volver al inicio <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <aside className="px-6 py-10 text-sm lg:px-10" aria-label="Fuentes de la historia">
          <div className="mx-auto max-w-7xl border-t border-black/15 pt-7">
            <p className="font-bold">Fuentes</p>
            <div className="mt-3 flex flex-col gap-2 text-black/60 sm:flex-row sm:gap-6">
              <a className="underline underline-offset-4 hover:text-black" href="https://www.elpais.com.uy/ovacion/basquetbol/el-garage-de-los-suenos-la-historia-de-welcome-un-gigante-del-basquetbol-uruguayo-que-cumple-97-anos" target="_blank" rel="noopener noreferrer">El País · El garaje de los sueños</a>
              <a className="underline underline-offset-4 hover:text-black" href="https://en.wikipedia.org/wiki/Club_Atl%C3%A9tico_Welcome" target="_blank" rel="noopener noreferrer">Wikipedia · Club Atlético Welcome</a>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </>
  );
}
