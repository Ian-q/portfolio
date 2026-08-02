/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import type { Project } from "@/lib/site-data";

type CardProps = {
  p: Project;
  idx: number;
  total: number;
  onOpen: (id: string) => void;
  feature?: boolean;
  compact?: boolean;
};

export function ProjectCard({
  p,
  idx,
  total,
  onOpen,
  feature = false,
  compact = false,
}: CardProps) {
  const firstImg = p.images && p.images[0];
  // The compact variant is a fixed 4-up grid, so a portrait tile would break the
  // row rhythm. Force landscape framing there regardless of the source image.
  const orient =
    !compact && firstImg && firstImg.orient === "portrait" ? "portrait" : "landscape";
  const mediaCls =
    "site-project__media " +
    (feature ? "site-project__media--feature " : "") +
    (compact ? "site-project__media--compact " : "") +
    "site-project__media--" +
    orient;

  return (
    <button
      type="button"
      className={
        "site-project" +
        (feature ? " site-project--feature" : "") +
        (compact ? " site-project--compact" : "")
      }
      onClick={() => onOpen(p.id)}
      aria-label={"Open project: " + p.title}
    >
      <div className={mediaCls}>
        {firstImg ? (
          <img src={firstImg.src} alt={firstImg.alt} className="site-project__img" loading="lazy" />
        ) : (
          <div className="placeholder-img" data-label={p.placeholderLabel || p.id}></div>
        )}
        <div className="site-project__media-meta">
          <span className="chip">
            {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            {"  ·  "}
            {p.tagCategory.toUpperCase()}
          </span>
          <span className="site-project__expand">
            <span>OPEN</span>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5" />
            </svg>
          </span>
        </div>
      </div>

      <div className="site-project__body">
        {feature && <div className="site-project__featurebadge">FEATURED PROJECT</div>}
        <div className="site-project__head">
          <h3 className="site-project__title">{p.title}</h3>
          <span className="site-project__years">{p.years}</span>
        </div>
        <div className="site-project__role">{p.role}</div>
        <p className="site-project__summary">{p.summary}</p>
      </div>
    </button>
  );
}

export function ProjectBand({
  label,
  count,
  children,
}: {
  label: string;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <section className="site-band" aria-label={label}>
      <div className="site-band__head">
        <h3 className="site-band__label mono">{"// " + label.toUpperCase()}</h3>
        <span className="site-band__rule" aria-hidden="true" />
        <span className="site-band__count mono">
          {String(count).padStart(2, "0")} {count === 1 ? "item" : "items"}
        </span>
      </div>
      {children}
    </section>
  );
}

function VideoOrPlaceholder({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="site-modal__videoslot">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
        <div className="site-modal__videoslot-text">
          <div className="site-modal__videoslot-label">VIDEO · COMING SOON</div>
          <div className="mono site-modal__videoslot-path">{src}</div>
        </div>
      </div>
    );
  }
  return (
    <video
      className="site-modal__video"
      src={src}
      controls
      preload="metadata"
      playsInline
      onError={() => setFailed(true)}
    />
  );
}

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.classList.remove("modal-open");
    };
  }, [handleKey]);

  if (!project) return null;
  const p = project;
  const hero = p.images && p.images[0];
  const rest = p.images && p.images.slice(1);

  return (
    <div className="site-modal-backdrop" onClick={onClose}>
      <div
        className="site-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={"modal-" + p.id}
      >
        <div className="site-modal__bar">
          <div className="site-modal__crumb">
            <span>Project</span>
            <span>/</span>
            <strong>{p.title}</strong>
          </div>
          <button className="site-modal__close" onClick={onClose} aria-label="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              <path d="M2 2l10 10M12 2L2 12" />
            </svg>
          </button>
        </div>

        <div className="site-modal__hero">
          {hero ? (
            <img src={hero.src} alt={hero.alt} className="site-modal__hero-img" />
          ) : (
            <div className="placeholder-img" data-label={p.placeholderLabel || p.id}></div>
          )}
        </div>

        <header className="site-modal__head">
          <div className="site-modal__tags">
            <span className="site-modal__tag">{p.tag.toUpperCase()}</span>
            <span className="site-modal__tag site-modal__tag--years">{p.years}</span>
            <span className="site-modal__tag site-modal__tag--role">{p.role}</span>
          </div>
          <h2 id={"modal-" + p.id} className="site-modal__title">
            {p.title}
          </h2>
          <p className="site-modal__lede">{p.summary}</p>
        </header>

        <div className="site-modal__body">
          <div className="site-modal__prose">
            {p.long.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <aside className="site-modal__side">
            {p.bullets && p.bullets.length > 0 && (
              <div className="site-modal__sideblock">
                <div className="site-modal__sidehead">What&apos;s in it</div>
                <ul className="site-modal__bullets">
                  {p.bullets.map((b, i) => (
                    <li key={i}>
                      <span></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {p.links && p.links.length > 0 && (
              <div className="site-modal__sideblock">
                <div className="site-modal__sidehead">Links</div>
                <div className="site-modal__links">
                  {p.links.map((l, i) => (
                    <a key={i} className="site-modal__linkrow" href={l.href} target="_blank" rel="noopener noreferrer">
                      <span>{l.label}</span>
                      <span className="mono">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {((rest && rest.length > 0) || p.videoPath) && (
          <div className="site-modal__gallery">
            <div className="site-modal__galleryhead">More</div>
            <div className="site-modal__grid">
              {rest &&
                rest.map((img, i) => (
                  <img key={i} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              {p.videoPath && <VideoOrPlaceholder src={p.videoPath} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
