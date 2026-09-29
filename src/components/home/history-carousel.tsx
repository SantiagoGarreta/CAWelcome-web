"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";

import photo1953 from "../../../assets/1953.png";
import photo1956 from "../../../assets/1956.png";
import photo1957 from "../../../assets/1957.png";
import photo1966 from "../../../assets/1966.png";
import photo1967 from "../../../assets/1967.png";
import photo1997 from "../../../assets/1997.png";
import photo1998 from "../../../assets/1998.png";
import photo1999 from "../../../assets/1999.png";
import photo2000 from "../../../assets/2000.png";

const champions = [
  { year: "1953", image: photo1953 },
  { year: "1956", image: photo1956 },
  { year: "1957", image: photo1957 },
  { year: "1966", image: photo1966 },
  { year: "1967", image: photo1967 },
  { year: "1997", image: photo1997 },
  { year: "1998", image: photo1998 },
  { year: "1999", image: photo1999 },
  { year: "2000", image: photo2000 },
] as const;

export function HistoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reducedMotion = useReducedMotion();
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const yearsRef = useRef<HTMLDivElement>(null);
  const slide = champions[activeIndex];
  const slideVariants = {
    enter: (slideDirection: number) =>
      reducedMotion
        ? { opacity: 0 }
        : { opacity: 0, x: slideDirection * 32, scale: 0.985 },
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (slideDirection: number) =>
      reducedMotion
        ? { opacity: 0 }
        : { opacity: 0, x: -slideDirection * 32, scale: 0.985 },
  };

  useEffect(() => {
    const years = yearsRef.current;
    const button = years?.children[activeIndex] as HTMLElement | undefined;
    if (!years || !button) return;

    const center =
      button.getBoundingClientRect().left -
      years.getBoundingClientRect().left +
      years.scrollLeft +
      button.offsetWidth / 2 -
      years.clientWidth / 2;
    years.scrollTo({
      left: center,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }, [activeIndex, reducedMotion]);

  function selectSlide(index: number) {
    const nextIndex = (index + champions.length) % champions.length;
    if (nextIndex === activeIndex) return;

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(activeIndex + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectSlide(activeIndex - 1);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStart.current = {
      x: event.changedTouches[0].clientX,
      y: event.changedTouches[0].clientY,
    };
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (!touchStart.current) return;
    const deltaX = event.changedTouches[0].clientX - touchStart.current.x;
    const deltaY = event.changedTouches[0].clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) > 55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      selectSlide(activeIndex + (deltaX < 0 ? 1 : -1));
    }
  }

  return (
    <section
      aria-label="Galería de campeones federales de Welcome"
      aria-roledescription="carrusel"
      className="mx-auto mt-12 w-[calc(100%-3rem)] max-w-[860px] overflow-hidden rounded-[1.4rem] bg-[var(--welcome-black)] text-white shadow-[0_28px_75px_-35px_rgba(17,17,18,.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--welcome-red)] md:mt-16 md:rounded-[2rem]"
      onKeyDown={handleKeyDown}
      role="region"
      tabIndex={0}
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7 lg:px-10">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[var(--welcome-red)] shadow-[0_0_0_5px_rgba(229,41,50,.16)]" />
          <span className="text-[.65rem] font-bold uppercase tracking-[.22em] text-white/65 sm:text-xs">
            Archivo Welcome
          </span>
        </div>
        <span className="text-xs font-medium tabular-nums text-white/45">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(champions.length).padStart(2, "0")}
        </span>
      </div>

      <div
        className="relative isolate aspect-[4/3] w-full overflow-hidden bg-[#24211f] sm:aspect-[3/2] lg:aspect-auto lg:h-[clamp(360px,50vh,500px)]"
        onTouchCancel={() => {
          touchStart.current = null;
        }}
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_70%)]" />
        <AnimatePresence custom={direction} initial={false} mode="sync">
          <motion.div
            animate="center"
            aria-label={`${activeIndex + 1} de ${champions.length}: Campeón Federal ${slide.year}`}
            aria-roledescription="diapositiva"
            className="absolute inset-0 p-3 sm:p-6 lg:p-8"
            custom={direction}
            exit="exit"
            initial="enter"
            key={slide.year}
            role="group"
            transition={{
              duration: reducedMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            variants={slideVariants}
          >
            <div className="relative h-full w-full">
              <Image
                alt={`Equipo de Welcome, campeón federal de ${slide.year}`}
                className="object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,.28)]"
                fill
                priority={activeIndex === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1200px"
                src={slide.image}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-5 px-5 py-6 sm:px-7 sm:py-7 lg:px-10">
        <div
          aria-atomic="true"
          aria-live="polite"
          className="flex min-w-0 items-baseline gap-2 sm:gap-6"
        >
          <span className="display shrink-0 text-[clamp(3.1rem,10vw,7.5rem)] font-bold leading-[.8] tracking-[-.1em] text-[var(--welcome-red-light)]">
            {slide.year}
          </span>
          <div className="min-w-0">
            <p className="text-[.6rem] font-bold uppercase tracking-[.2em] text-white/45 sm:text-xs">
              La historia en imágenes
            </p>
            <p className="mt-1 text-sm font-semibold sm:text-lg">
              Campeón Federal
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Ver foto anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white hover:bg-white hover:text-[var(--welcome-black)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:h-12 sm:w-12"
            onClick={() => selectSlide(activeIndex - 1)}
            type="button"
          >
            <ArrowLeft aria-hidden="true" size={19} />
          </button>
          <button
            aria-label="Ver foto siguiente"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--welcome-red)] transition-colors hover:bg-[var(--welcome-red-light)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white sm:h-12 sm:w-12"
            onClick={() => selectSlide(activeIndex + 1)}
            type="button"
          >
            <ArrowRight aria-hidden="true" size={19} />
          </button>
        </div>
      </div>

      <div className="border-t border-white/15 px-5 py-4 sm:px-7 lg:px-10">
        <div
          aria-label="Elegir año"
          className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={yearsRef}
          role="group"
        >
          {champions.map((champion, index) => (
            <button
              aria-label={`Ver campeón federal de ${champion.year}`}
              aria-pressed={index === activeIndex}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold tabular-nums transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm ${
                index === activeIndex
                  ? "bg-white text-[var(--welcome-black)]"
                  : "text-white/55 hover:bg-white/10 hover:text-white"
              }`}
              key={champion.year}
              onClick={() => selectSlide(index)}
              type="button"
            >
              {champion.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
