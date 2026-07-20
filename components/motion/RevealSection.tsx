"use client";

import {
  useEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  type RefObject,
} from "react";

type RevealSectionProps = {
  children: ReactNode;
  className: string;
  id?: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export function RevealSection({
  children,
  className,
  id,
  once = true,
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.08,
}: RevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || (once && isVisible)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (once && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          return;
        }

        if (!once) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible, once, rootMargin, threshold]);

  return (
    <section className={`${className}${isVisible ? " is-visible" : ""}`} id={id} ref={sectionRef}>
      {children}
    </section>
  );
}

type RevealOnViewProps = {
  children: ReactNode;
  className: string;
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export function RevealOnView({
  children,
  className,
  once = true,
  rootMargin = "0px 0px -14% 0px",
  threshold = 0.16,
}: RevealOnViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || (once && isVisible)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (once && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          return;
        }

        if (!once) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [isVisible, once, rootMargin, threshold]);

  return (
    <div className={`${className}${isVisible ? " is-visible" : ""}`} ref={containerRef}>
      {children}
    </div>
  );
}

type RevealItemProps = Omit<
  HTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLAnchorElement>,
  "children" | "className" | "style"
> & {
  as?: "article" | "div" | "a";
  children: ReactNode;
  className: string;
  once?: boolean;
  rootMargin?: string;
  style?: CSSProperties;
  threshold?: number;
};

export function RevealItem({
  as = "div",
  children,
  className,
  once = false,
  rootMargin = "0px 0px 10% 0px",
  style,
  threshold = 0.04,
  ...rest
}: RevealItemProps) {
  const itemRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const item = itemRef.current;

    if (!item || (once && isVisible)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) {
          return;
        }

        if (once && entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
          return;
        }

        if (!once) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    observer.observe(item);

    return () => observer.disconnect();
  }, [isVisible, once, rootMargin, threshold]);

  const itemClassName = `${className}${isVisible ? " is-visible" : ""}`;

  if (as === "article") {
    return (
      <article
        {...rest}
        className={itemClassName}
        ref={itemRef as RefObject<HTMLArticleElement>}
        style={style}
      >
        {children}
      </article>
    );
  }

  if (as === "a") {
    return (
      <a
        {...rest}
        className={itemClassName}
        ref={itemRef as RefObject<HTMLAnchorElement>}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <div
      {...rest}
      className={itemClassName}
      ref={itemRef as RefObject<HTMLDivElement>}
      style={style}
    >
      {children}
    </div>
  );
}
