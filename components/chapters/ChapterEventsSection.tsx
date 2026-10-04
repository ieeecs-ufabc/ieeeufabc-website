"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { ChapterPageData } from "@/types/chapter";

type ChapterEventsSectionProps = {
  events: ChapterPageData["events"];
};

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}

function formatShortDate(date: string) {
  const [, month, day] = date.split("-");

  return `${day}/${month}`;
}

function getRegistrationLabel(deadline: string, currentTime: number | null) {
  const deadlineLabel = `Inscrições até ${formatShortDate(deadline)}`;

  if (currentTime === null) {
    return deadlineLabel;
  }

  const deadlineTime = new Date(`${deadline}T23:59:59-03:00`).getTime();

  return currentTime <= deadlineTime ? deadlineLabel : "Inscrições encerradas";
}

export function ChapterEventsSection({ events }: ChapterEventsSectionProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const [scrollPositions, setScrollPositions] = useState<number[]>([0]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCurrentTime(Date.now());
    }, 0);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const observedList = listRef.current;

    if (!observedList) {
      return;
    }

    function calculateScrollPositions() {
      const currentList = listRef.current;

      if (!currentList) {
        return;
      }

      const firstCard = currentList.children[0] as HTMLElement | undefined;

      const secondCard = currentList.children[1] as HTMLElement | undefined;

      const maxScrollLeft = currentList.scrollWidth - currentList.clientWidth;

      if (!firstCard || maxScrollLeft <= 0) {
        setScrollPositions([0]);
        setCurrentPosition(0);
        return;
      }

      const cardStep = secondCard
        ? secondCard.offsetLeft - firstCard.offsetLeft
        : firstCard.offsetWidth;

      const positions: number[] = [];

      for (let position = 0; position < maxScrollLeft; position += cardStep) {
        positions.push(position);
      }

      const lastPosition = positions[positions.length - 1] ?? 0;

      if (maxScrollLeft - lastPosition > 4) {
        positions.push(maxScrollLeft);
      } else {
        positions[positions.length - 1] = maxScrollLeft;
      }

      setScrollPositions(positions);

      setCurrentPosition((current) => Math.min(current, positions.length - 1));
    }

    calculateScrollPositions();

    const resizeObserver = new ResizeObserver(calculateScrollPositions);

    resizeObserver.observe(observedList);

    return () => {
      resizeObserver.disconnect();
    };
  }, [events.items.length]);

  function goToPosition(positionIndex: number) {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const nextPosition = Math.max(
      0,
      Math.min(positionIndex, scrollPositions.length - 1),
    );

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    list.scrollTo({
      left: scrollPositions[nextPosition],
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    setCurrentPosition(nextPosition);
  }

  function handleScroll() {
    const list = listRef.current;

    if (!list) {
      return;
    }

    let closestPosition = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    scrollPositions.forEach((position, index) => {
      const distance = Math.abs(list.scrollLeft - position);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPosition = index;
      }
    });

    setCurrentPosition(closestPosition);
  }

  return (
    <section
      id="eventos"
      aria-labelledby="events-title"
      className="scroll-mt-16 overflow-hidden bg-ieee-blue px-6 py-14 text-white sm:px-8 lg:px-14"
    >
      <div className="mx-auto max-w-7xl">
        <header>
          <h2
            id="events-title"
            className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            {events.title}
          </h2>

          <p className="mt-3 text-base leading-7 text-white/90">
            {events.description}
          </p>
        </header>

        <div className="relative mt-10">
          <ul
            ref={listRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory scroll-smooth gap-8 overflow-x-auto pb-2 pr-8 scrollbar-none [&::-webkit-scrollbar]:hidden"
            aria-label="Eventos da Computer Society"
          >
            {events.items.map((event) => (
              <li key={event.id} className="w-72 shrink-0 snap-start">
                <article className="h-full overflow-hidden rounded-xl bg-white text-content-primary">
                  <div className="relative h-48 bg-black/10">
                    <Image
                      src={event.image.src}
                      alt={event.image.alt}
                      fill
                      sizes="288px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-h-47 p-4">
                    <p className="text-sm font-semibold text-content-primary">
                      {getRegistrationLabel(
                        event.registrationDeadline,
                        currentTime,
                      )}
                    </p>

                    <h3 className="mt-3 text-base font-semibold leading-6 text-content-primary">
                      {event.title}{" "}
                      <span className="whitespace-nowrap">
                        | {formatDate(event.eventDate)}
                      </span>
                    </h3>

                    <p className="mt-3 text-sm leading-5 text-content-secondary">
                      {event.description}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

          {events.items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Mostrar evento anterior"
                disabled={currentPosition === 0}
                onClick={() => goToPosition(currentPosition - 1)}
                className="absolute left-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-2xl text-content-primary shadow transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                ‹
              </button>

              <button
                type="button"
                aria-label="Mostrar próximo evento"
                disabled={currentPosition === scrollPositions.length - 1}
                onClick={() => goToPosition(currentPosition + 1)}
                className="absolute right-2 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 text-2xl text-content-primary shadow transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                ›
              </button>
            </>
          )}
        </div>

        {scrollPositions.length > 1 && (
          <div
            className="mt-5 flex justify-center gap-4"
            aria-label="Selecionar posição do carrossel"
          >
            {scrollPositions.map((position, index) => (
              <button
                key={position}
                type="button"
                aria-label={`Mostrar posição ${index + 1}`}
                aria-current={currentPosition === index ? "true" : undefined}
                onClick={() => goToPosition(index)}
                className={`size-3 rounded-full transition-colors ${
                  currentPosition === index
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}

            <p className="sr-only" aria-live="polite">
              Posição {currentPosition + 1} de {scrollPositions.length}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
