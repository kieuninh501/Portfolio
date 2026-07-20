"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import type {
  CaseStudy,
  CaseStudyImageStack,
  CaseStudyExperience,
  CaseStudyImageGroup,
  CaseStudyListItem,
  CaseStudyNumberedItem,
  CaseStudySection,
} from "@/data/case-studies";

type CaseStudyLayoutProps = {
  study: CaseStudy;
};

type ImageGroupProps = {
  group: CaseStudyImageGroup;
  isInteractive?: boolean;
  onPreviewChange?: (group: CaseStudyImageGroup | null) => void;
};

function ImageGroup({ group, isInteractive = false, onPreviewChange }: ImageGroupProps) {
  const className = `case-study-image-group ${group.className ?? ""}${isInteractive ? " case-study-image-group--interactive" : ""}`;

  return (
    <div
      className={className}
      onBlur={isInteractive ? () => onPreviewChange?.(null) : undefined}
      onFocus={isInteractive ? () => onPreviewChange?.(group) : undefined}
      onPointerEnter={isInteractive ? () => onPreviewChange?.(group) : undefined}
      onPointerLeave={isInteractive ? () => onPreviewChange?.(null) : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {group.layers.map((layer) => (
        <img alt={layer.alt} className={layer.className} key={`${layer.src}-${layer.className}`} src={layer.src} />
      ))}
    </div>
  );
}

function TextBlock({ text }: { text: string | string[] }) {
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <>
      {paragraphs.map((paragraph) => (
        <p className="case-study-copy" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

function SmallTextBlock({ text }: { text: string | string[] }) {
  const paragraphs = Array.isArray(text) ? text : [text];

  return (
    <>
      {paragraphs.map((paragraph) => (
        <p className="case-study-copy case-study-copy--small" key={paragraph}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

function splitLabel(text: string) {
  const separatorIndex = text.indexOf(":");

  if (separatorIndex === -1) {
    return { label: "", body: text };
  }

  return {
    label: text.slice(0, separatorIndex),
    body: text.slice(separatorIndex + 1).trim(),
  };
}

function stripLeadingNumber(text: string) {
  return text.replace(/^\d+\.\s*/, "");
}

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="case-study-text-list">
      {items.map((item) => {
        const { label, body } = splitLabel(item);

        return (
          <li className="case-study-text-list__item" key={item}>
            {label ? <strong className="case-study-text-list__label">{label}:</strong> : null}
            <span>{body}</span>
          </li>
        );
      })}
    </ul>
  );
}

function NumberedTitle({ children, index }: { children: string; index: number }) {
  return (
    <h3 className="case-study-subsection__title">
      <span className="case-study-subsection__number">{index + 1}.</span> {stripLeadingNumber(children)}
    </h3>
  );
}

function ListItems({
  items,
  variant = "simple",
}: {
  items: CaseStudyListItem[];
  variant?: "overview" | "simple" | "detail";
}) {
  return (
    <div className={`case-study-list case-study-list--${variant}`}>
      {items.map((item) => (
        <div className="case-study-list__item" key={`${item.title}-${item.body}`}>
          <p className="case-study-list__title">{item.title}</p>
          {item.body ? <p className="case-study-list__body">{item.body}</p> : null}
        </div>
      ))}
    </div>
  );
}

function NumberedContent({
  items,
  variant = "detail",
}: {
  items: CaseStudyNumberedItem[];
  variant?: "overview" | "detail" | "plain";
}) {
  return (
    <div className={`case-study-numbered case-study-numbered--${variant}`}>
      {items.map((item, index) => (
        <article className="case-study-numbered__item" key={`${item.title}-${index}`}>
          <h3 className="case-study-numbered__title">
            {variant === "plain" ? item.title : `${index + 1}. ${stripLeadingNumber(item.title)}`}
          </h3>
          {item.body ? (
            <div className="case-study-numbered__body">
              <TextBlock text={item.body} />
            </div>
          ) : null}
          {item.items ? <ListItems items={item.items} variant="detail" /> : null}
          {item.prompt ? (
            <div className="case-study-prompt" aria-label={`${item.title} prompt`}>
              {item.prompt.map((line, promptIndex) =>
                line ? (
                  <p key={`${line}-${promptIndex}`}>{line}</p>
                ) : (
                  <span aria-hidden="true" className="case-study-prompt__spacer" key={`prompt-space-${promptIndex}`} />
                ),
              )}
            </div>
          ) : null}
          {item.images ? (
            <div
              className={
                item.images.length === 1
                  ? "case-study-tarot-gallery case-study-tarot-gallery--single"
                  : "case-study-tarot-gallery"
              }
            >
              {item.images.map((image) => (
                <img alt={image.alt} className="case-study-tarot-gallery__image" key={image.src} src={image.src} />
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
}

function ImageStack({ stack }: { stack: CaseStudyImageStack }) {
  const stackVariant = stack.images.length > 1 ? "multi" : "single";

  return (
    <figure className={`case-study-image-stack case-study-image-stack--${stackVariant}`}>
      <div className="case-study-image-stack__images">
        {stack.images.map((image) => (
          <img alt={image.alt} className="case-study-image-stack__image" key={image.src} src={image.src} />
        ))}
      </div>
      {stack.caption ? <figcaption className="case-study-image-stack__caption">{stack.caption}</figcaption> : null}
    </figure>
  );
}

function ProductChallenges({ section }: { section: CaseStudySection }) {
  if (!section.productChallenges) {
    return null;
  }

  return (
    <div className="case-study-challenges">
      <p className="case-study-subintro">A few product challenges I worked through</p>
      <div className="case-study-challenge-list">
        {section.productChallenges.map((challenge, index) => {
          const contribution = Array.isArray(challenge.contribution) ? challenge.contribution : [challenge.contribution];
          const [contributionIntro, ...contributionItems] = contribution;

          return (
            <article className="case-study-subsection" key={challenge.title}>
              <NumberedTitle index={index}>{challenge.title}</NumberedTitle>
              <div className="case-study-detail-block">
                <p className="case-study-detail-block__label">THE CHALLENGE</p>
                <div className="case-study-detail-block__content">
                  <SmallTextBlock text={challenge.challenge} />
                </div>
              </div>
              <div className="case-study-detail-block">
                <p className="case-study-detail-block__label">MY CONTRIBUTION</p>
                <div className="case-study-detail-block__content">
                  <SmallTextBlock text={contributionIntro} />
                  {contributionItems.length ? <TextList items={contributionItems} /> : null}
                </div>
              </div>
              <div className="case-study-detail-block">
                <p className="case-study-detail-block__label">DESIGN OUTCOME</p>
                <div className="case-study-detail-block__content">
                  <SmallTextBlock text={challenge.outcome} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

function Experience({
  experience,
  index,
  onPreviewChange,
}: {
  experience: CaseStudyExperience;
  index: number;
  onPreviewChange: (group: CaseStudyImageGroup | null) => void;
}) {
  const hasDetailedItems = experience.items.some((item) => item.body);

  return (
    <article className="case-study-subsection">
      <NumberedTitle index={index}>{experience.title}</NumberedTitle>
      <div className="case-study-experience__description">
        <SmallTextBlock text={experience.body} />
        {!hasDetailedItems ? (
          <ul className="case-study-plain-list">
            {experience.items.map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        ) : null}
      </div>
      {hasDetailedItems ? (
        <div className="case-study-detail-block">
          <p className="case-study-detail-block__label">EXPERIENCE</p>
          <div className="case-study-detail-block__content">
            <ul className="case-study-text-list">
              {experience.items.map((item) => (
                <li className="case-study-text-list__item" key={item.title}>
                  <strong className="case-study-text-list__label">{item.title}:</strong>
                  <span>{item.body}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {experience.images ? (
        <div className="case-study-design-block">
          <p className="case-study-detail-block__label">DESIGN</p>
          <div className="case-study-image-grid">
            {experience.images.map((imageGroup, index) => (
              <ImageGroup
                group={imageGroup}
                isInteractive
                key={`${experience.title}-${index}`}
                onPreviewChange={onPreviewChange}
              />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function SectionContent({
  section,
  onPreviewChange,
}: {
  section: CaseStudySection;
  onPreviewChange: (group: CaseStudyImageGroup | null) => void;
}) {
  return (
    <section aria-labelledby={`${section.id}-title`} className="case-study-content-card">
      <div className="case-study-content-card__header">
        <p className="case-study-content-card__eyebrow">{section.eyebrow}</p>
      </div>
      <div className="case-study-content-card__body">
        <div className="case-study-content-card__body-inner">
          <h2 className="case-study-content-card__title" id={`${section.id}-title`}>
            {section.title}
          </h2>
          {section.intro ? (
            <div className="case-study-callout">
              <TextBlock text={section.intro} />
            </div>
          ) : null}
          {section.numberedItems ? (
            <NumberedContent items={section.numberedItems} variant={section.numberedVariant} />
          ) : null}
          {section.processText ? <p className="case-study-process-text">{section.processText}</p> : null}
          {section.imageStack ? <ImageStack stack={section.imageStack} /> : null}
          {section.overviewItems ? <ListItems items={section.overviewItems} variant="overview" /> : null}
          <ProductChallenges section={section} />
          {section.experiences ? (
            <div className="case-study-experiences">
              {section.experiences.map((experience, index) => (
                <Experience
                  experience={experience}
                  index={index}
                  key={experience.title}
                  onPreviewChange={onPreviewChange}
                />
              ))}
            </div>
          ) : null}
          {section.systemItems ? <ListItems items={section.systemItems} /> : null}
          {section.image ? <img alt={section.image.alt} className="case-study-content-image" src={section.image.src} /> : null}
          {section.reflectionItems ? <ListItems items={section.reflectionItems} /> : null}
        </div>
      </div>
    </section>
  );
}

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  const [activeSectionId, setActiveSectionId] = useState(study.sections[0]?.id ?? "");
  const [previewGroup, setPreviewGroup] = useState<CaseStudyImageGroup | null>(null);
  const contentGridRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);
  const activeSection = useMemo(
    () => study.sections.find((section) => section.id === activeSectionId) ?? study.sections[0],
    [activeSectionId, study.sections],
  );

  const getPinnedTopOffset = () => {
    const contentGrid = contentGridRef.current;

    if (!contentGrid) {
      return 114;
    }

    const value = window.getComputedStyle(contentGrid).getPropertyValue("--case-study-pinned-top");
    return Number.parseFloat(value) || 114;
  };

  useEffect(() => {
    const contentGrid = contentGridRef.current;

    if (!contentGrid) {
      return;
    }

    const getScrollableTarget = (eventTarget: EventTarget | null) => {
      const target = eventTarget instanceof Element ? eventTarget : null;

      if (!target) {
        return mainContentRef.current?.querySelector<HTMLElement>(".case-study-content-card__body-inner") ?? null;
      }

      return (
        target.closest<HTMLElement>(".case-study-content-card__body-inner") ??
        target.closest<HTMLElement>(".case-study-stickybar__items") ??
        target.closest<HTMLElement>(".case-study-sidebar") ??
        mainContentRef.current?.querySelector<HTMLElement>(".case-study-content-card__body-inner") ??
        null
      );
    };

    const canScrollElement = (element: HTMLElement, deltaY: number) => {
      const maxScroll = element.scrollHeight - element.clientHeight;

      return deltaY > 0 ? element.scrollTop < maxScroll - 1 : element.scrollTop > 1;
    };

    const onWheel = (event: WheelEvent) => {
      if (window.matchMedia("(width < 1180px)").matches) {
        return;
      }

      const rect = contentGrid.getBoundingClientRect();
      const pinnedTop = getPinnedTopOffset();
      const isPinned = rect.top <= pinnedTop + 1 && rect.bottom > pinnedTop + 1;

      if (!isPinned) {
        return;
      }

      const hoveredScrollable = getScrollableTarget(event.target);
      const contentScrollable = mainContentRef.current?.querySelector<HTMLElement>(".case-study-content-card__body-inner") ?? null;
      const scrollable =
        hoveredScrollable && canScrollElement(hoveredScrollable, event.deltaY)
          ? hoveredScrollable
          : contentScrollable && canScrollElement(contentScrollable, event.deltaY)
            ? contentScrollable
            : hoveredScrollable;

      if (!scrollable) {
        return;
      }

      if (canScrollElement(scrollable, event.deltaY)) {
        event.preventDefault();
        scrollable.scrollTop += event.deltaY;
        return;
      }

      if (event.deltaY !== 0) {
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, [activeSectionId]);

  useEffect(() => {
    const body = contentGridRef.current?.querySelector<HTMLElement>(".case-study-content-card__body");
    const bodyInner = contentGridRef.current?.querySelector<HTMLElement>(".case-study-content-card__body-inner");

    if (!body || !bodyInner) {
      return;
    }

    let frameId = 0;

    const updateBottomState = () => {
      const maxScroll = bodyInner.scrollHeight - bodyInner.clientHeight;
      const hasOverflow = maxScroll > 1;
      const isAtEnd = !hasOverflow || bodyInner.scrollTop >= maxScroll - 1;

      body.classList.toggle("case-study-content-card__body--open-bottom", hasOverflow && !isAtEnd);
      body.classList.toggle("case-study-content-card__body--at-end", hasOverflow && isAtEnd);
      body.classList.toggle("case-study-content-card__body--fit-content", !hasOverflow);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateBottomState);
    };

    scheduleUpdate();
    bodyInner.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    const resizeObserver = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(scheduleUpdate);
    resizeObserver?.observe(bodyInner);
    if (bodyInner.firstElementChild) {
      resizeObserver?.observe(bodyInner.firstElementChild);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
      bodyInner.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
      body.classList.remove("case-study-content-card__body--open-bottom");
      body.classList.remove("case-study-content-card__body--at-end");
      body.classList.remove("case-study-content-card__body--fit-content");
    };
  }, [activeSectionId]);

  const handleSectionChange = (sectionId: string) => {
    setPreviewGroup(null);
    setActiveSectionId(sectionId);

    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }

    window.setTimeout(() => {
      const contentGrid = contentGridRef.current;

      if (!contentGrid) {
        return;
      }

      contentGrid.querySelector<HTMLElement>(".case-study-content-card__body-inner")?.scrollTo({ top: 0, behavior: "auto" });

      window.scrollTo({
        top: contentGrid.getBoundingClientRect().top + window.scrollY - getPinnedTopOffset(),
        behavior: "auto",
      });
    }, 0);
  };

  return (
    <div className="case-study-page">
      <div className="case-study-page__inner">
        <div className="case-study-showcase" aria-label={`${study.title} showcase`}>
          <ImageGroup group={study.showcase} />
        </div>

        <div className="case-study-page__content-grid" ref={contentGridRef}>
          <aside className="case-study-sidebar" aria-label="Case study sections">
            <p className="case-study-sidebar__title">ON THIS PAGE</p>
            <nav className="case-study-sidebar__nav">
              {study.sections.map((section) => (
                <button
                  className={
                    section.id === activeSection.id
                      ? "case-study-sidebar__item case-study-sidebar__item--active"
                      : "case-study-sidebar__item"
                  }
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  type="button"
                >
                  {section.navLabel}
                </button>
              ))}
            </nav>
          </aside>

          <div className="case-study-main-content" ref={mainContentRef} tabIndex={0}>
            {activeSection ? <SectionContent section={activeSection} onPreviewChange={setPreviewGroup} /> : null}
          </div>

          <aside className="case-study-stickybar" aria-label="Project details">
            <p className="case-study-stickybar__title">PROJECT DETAILS</p>
            <div className="case-study-stickybar__items">
              {study.details.map((detail) => (
                <div className="case-study-stickybar__item" key={detail.label}>
                  <p className="case-study-stickybar__label">{detail.label}</p>
                  {Array.isArray(detail.value) ? (
                    <div className="case-study-stickybar__value">
                      {detail.value.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="case-study-stickybar__value">{detail.value}</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
      {previewGroup ? (
        <div className="case-study-image-preview" aria-hidden="true">
          <ImageGroup group={previewGroup} />
        </div>
      ) : null}
    </div>
  );
}
