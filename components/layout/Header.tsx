"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import {
  homeHeaderNavigationItems,
  type HeaderNavigationItem,
} from "@/data/navigationItems";

type HeaderProps = {
  items?: readonly HeaderNavigationItem[];
};

export function Header({ items = homeHeaderNavigationItems }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  function closeNavigation() {
    setIsMenuOpen(false);
    setOpenSubmenuId(null);
  }

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
    setOpenSubmenuId(null);
  }

  function toggleSubmenu(itemId: string) {
    setOpenSubmenuId((currentId) => (currentId === itemId ? null : itemId));
  }

  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    closeNavigation();

    const targetUrl = new URL(href, window.location.href);
    const targetId = decodeURIComponent(targetUrl.hash.slice(1));

    const isCurrentPage = targetUrl.pathname === window.location.pathname;

    if (!isCurrentPage || !targetId) {
      return;
    }

    const targetElement = document.getElementById(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    targetElement.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    if (window.location.hash !== targetUrl.hash) {
      window.history.pushState(
        null,
        "",
        `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`,
      );
    }
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setOpenSubmenuId(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!openSubmenuId) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (!headerRef.current?.contains(target)) {
        setOpenSubmenuId(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openSubmenuId]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-ieee-blue text-white shadow-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/#inicio"
          aria-label="Ir para o início"
          onClick={(event) => handleLinkClick(event, "/#inicio")}
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Image
            src="/images/logos/ieee-ufabc-logo.svg"
            alt="IEEE UFABC"
            width={103}
            height={45}
            priority
            className="h-10 w-auto object-contain md:h-[44.82px] md:w-[102.63px]"
          />
        </Link>

        <nav className="hidden md:block" aria-label="Navegação principal">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li
                key={item.id}
                className="relative"
                onPointerEnter={(event) => {
                  if ("children" in item && event.pointerType === "mouse") {
                    setOpenSubmenuId(item.id);
                  }
                }}
                onPointerLeave={(event) => {
                  if ("children" in item && event.pointerType === "mouse") {
                    setOpenSubmenuId((currentId) =>
                      currentId === item.id ? null : currentId,
                    );
                  }
                }}
              >
                {"children" in item ? (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openSubmenuId === item.id}
                      aria-controls={`submenu-${item.id}`}
                      onClick={() => toggleSubmenu(item.id)}
                      className="flex items-center gap-1 text-base font-semibold text-white transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {item.label}

                      <span
                        aria-hidden="true"
                        className={`text-xs transition-transform ${
                          openSubmenuId === item.id ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {openSubmenuId === item.id && (
                      <div
                        id={`submenu-${item.id}`}
                        className="absolute left-1/2 top-full z-50 w-80 max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3"
                      >
                        <ul className="rounded-lg bg-white p-2 text-content-primary shadow-lg ring-1 ring-black/10">
                          {item.children.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={child.href}
                                onClick={(event) =>
                                  handleLinkClick(event, child.href)
                                }
                                className="block rounded-md px-4 py-3 text-sm font-semibold transition-colors hover:bg-ieee-blue/10 focus-visible:outline-2 focus-visible:outline-ieee-blue"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(event) => handleLinkClick(event, item.href)}
                    className="text-base font-semibold text-white transition-colors hover:text-white/75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={toggleMenu}
          className="flex size-11 items-center justify-center rounded-md transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
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
          aria-label="Navegação para dispositivos móveis"
          className="border-t border-white/20 px-5 py-4 md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col">
            {items.map((item) => (
              <li key={item.id}>
                {"children" in item ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openSubmenuId === item.id}
                      aria-controls={`mobile-submenu-${item.id}`}
                      onClick={() => toggleSubmenu(item.id)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
                    >
                      {item.label}

                      <span
                        aria-hidden="true"
                        className={`text-xs transition-transform ${
                          openSubmenuId === item.id ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {openSubmenuId === item.id && (
                      <ul
                        id={`mobile-submenu-${item.id}`}
                        className="ml-4 border-l border-white/30 pl-3"
                      >
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.href}
                              onClick={(event) =>
                                handleLinkClick(event, child.href)
                              }
                              className="block rounded-md px-3 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={(event) => handleLinkClick(event, item.href)}
                    className="block rounded-md px-3 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
