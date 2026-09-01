"use client";

import Image from "next/image";
import { useState } from "react";

const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "O Ramo", href: "#ramo" },
  { label: "Capítulos", href: "#capitulos" },
  { label: "Diretoria", href: "#diretoria" },
  { label: "Faça parte", href: "#faca-parte" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#00629B] text-white shadow-sm">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#inicio"
          className="flex items-center"
          aria-label="Ir para o início"
          onClick={closeMenu}
        >
          <Image
            src="/images/logos/ieee-ufabc-logo.svg"
            alt="IEEE UFABC"
            width={110}
            height={44}
            priority
            className="h-10 w-auto"
          />
        </a>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Fechar menu" : "Abrir menu"}
          </span>

          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                isMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/20 px-5 py-4 md:hidden"
          aria-label="Navegação para dispositivos móveis"
        >
          <ul className="mx-auto flex max-w-7xl flex-col">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-3 text-sm font-medium transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}