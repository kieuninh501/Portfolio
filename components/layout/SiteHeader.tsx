"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { type Locale } from "@/lib/i18n";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { navigation } from "@/data/content";
import { copy } from "@/data/content";
import { profile } from "@/data/profile";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const t = copy[locale];
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerDialogRef = useRef<HTMLDialogElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const isCaseStudyGridPinned = () => {
      if (!window.matchMedia("(min-width: 1180px)").matches) {
        return false;
      }

      const contentGrid = document.querySelector<HTMLElement>(".case-study-page__content-grid");

      if (!contentGrid) {
        return false;
      }

      const pinnedTop = Number.parseFloat(
        window.getComputedStyle(contentGrid).getPropertyValue("--case-study-pinned-top"),
      );
      const topOffset = Number.isFinite(pinnedTop) ? pinnedTop : 114;
      const bounds = contentGrid.getBoundingClientRect();

      return bounds.top <= topOffset + 1 && bounds.bottom > topOffset + 1;
    };

    const setHeaderState = (isScrolled: boolean, isHidden: boolean) => {
      const header = headerRef.current;

      if (!header) {
        return;
      }

      header.classList.toggle("site-header-shell--scrolled", isScrolled);
      header.classList.toggle("site-header-shell--hidden", isHidden);
    };

    const handleScroll = () => {
      if (ticking) {
        return;
      }

      window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
        const isPastTop = currentScrollY > 16;
        const isScrollingDown = currentScrollY > lastScrollY.current;
        const shouldShowPinnedHeader = isCaseStudyGridPinned();

        if (shouldShowPinnedHeader) {
          setHeaderState(true, false);
        } else if (!isPastTop) {
          setHeaderState(false, false);
        } else if (scrollDelta > 4) {
          setHeaderState(true, isScrollingDown);
        }

        if (scrollDelta > 4 || !isPastTop) {
          lastScrollY.current = currentScrollY;
        }

        ticking = false;
      });

      ticking = true;
    };

    lastScrollY.current = Math.max(window.scrollY, 0);
    setHeaderState(lastScrollY.current > 16 || isCaseStudyGridPinned(), lastScrollY.current > 16 && !isCaseStudyGridPinned());
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dialog = drawerDialogRef.current;

    if (!dialog) {
      return;
    }

    if (isDrawerOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isDrawerOpen && dialog.open) {
      dialog.close();
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    const dialog = drawerDialogRef.current;

    if (!dialog) {
      return;
    }

    const handleClose = () => setIsDrawerOpen(false);
    const handleCancel = () => setIsDrawerOpen(false);

    dialog.addEventListener("close", handleClose);
    dialog.addEventListener("cancel", handleCancel);

    return () => {
      dialog.removeEventListener("close", handleClose);
      dialog.removeEventListener("cancel", handleCancel);
    };
  }, []);

  useEffect(() => {
    if (!isDrawerOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header
      className={`site-header-shell${isDrawerOpen ? " site-header-shell--drawer-open" : ""}`}
      ref={headerRef}
    >
      <div aria-hidden={isDrawerOpen} className="site-header">
        <Link className="site-header__logo" href={`/${locale}`}>
          {profile.name}.
        </Link>
        <nav className="site-header__nav" aria-label="Primary navigation">
          {navigation[locale].map((item) => (
            <Link className="site-header__nav-link" href={`/${locale}${item.href}`} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink
          className="site-header__cta"
          href={profile.links.resume}
          rel="noreferrer"
          size="sm"
          target="_blank"
          trailingIconSrc="/assets/icons/arrow-right-up.svg"
        >
          {t.headerCta}
        </ButtonLink>
        <button
          aria-controls="site-mobile-drawer"
          aria-expanded={isDrawerOpen}
          aria-label={isDrawerOpen ? "Close navigation menu" : "Open navigation menu"}
          className="site-header__menu-button"
          onClick={() => setIsDrawerOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span aria-hidden="true" className="site-header__menu-icon">
            <span className="site-header__menu-icon-line" />
            <span className="site-header__menu-icon-line" />
            <span className="site-header__menu-icon-line" />
          </span>
        </button>
      </div>
      <dialog
        aria-label="Mobile navigation"
        className="site-mobile-drawer"
        id="site-mobile-drawer"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDrawer();
          }
        }}
        ref={drawerDialogRef}
      >
        <aside
          className="site-mobile-drawer__panel"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="site-mobile-drawer__header">
            <Link className="site-mobile-drawer__logo" href={`/${locale}`} onClick={closeDrawer}>
              {profile.name}.
            </Link>
            <button
              aria-label="Close navigation menu"
              className="site-mobile-drawer__close"
              onClick={closeDrawer}
              type="button"
            >
              <span aria-hidden="true" className="site-mobile-drawer__close-icon" />
            </button>
          </div>
          <nav className="site-mobile-drawer__nav" aria-label="Mobile primary navigation">
            {navigation[locale].map((item) => (
              <Link
                className="site-mobile-drawer__nav-link"
                href={`/${locale}${item.href}`}
                key={item.href}
                onClick={closeDrawer}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            className="site-mobile-drawer__cta"
            href={profile.links.resume}
            onClick={closeDrawer}
            rel="noreferrer"
            size="sm"
            target="_blank"
            trailingIconSrc="/assets/icons/arrow-right-up.svg"
          >
            {t.headerCta}
          </ButtonLink>
        </aside>
      </dialog>
    </header>
  );
}
