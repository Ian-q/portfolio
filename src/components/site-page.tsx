"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { siteData as D, type Patent, type Publication, type Experience, type Education } from "@/lib/site-data";
import { ProjectCard, ProjectModal } from "./site-projects";

function Nav({ active }: { active: string }) {
  return (
    <nav className="pf-nav v2-nav site-nav" aria-label="Section navigation">
      <div className="pf-nav__brand v2-nav__brand">
        <div className="v2-nav__mark">
          <span className="mono">IA</span>
        </div>
        <div className="v2-nav__wordmark mono">
          IANADELMAN.<span>DEV</span>
        </div>
      </div>
      {D.nav.map((n, i) => (
        <a
          key={n.id}
          className={"pf-nav__link v2-nav__link" + (active === n.id ? " pf-nav__link--active" : "")}
          href={"#" + n.id}
        >
          <span className="mono v2-nav__num">{String(i + 1).padStart(2, "0")}</span>
          <span>{n.label}</span>
        </a>
      ))}
    </nav>
  );
}

function Hero() {
  return (
    <header className="v2-hero" id="about">
      <div className="v2-hero__topline">
        <div className="v2-hero__pill">
          <span className="v2-hero__dot" />
          <span className="mono">AVAILABLE FOR TECHNICAL ADVISORY · 2026</span>
        </div>
        <div className="mono v2-hero__loc">{D.location} · ETR ◷</div>
      </div>

      <div className="v2-hero__grid">
        <div className="v2-hero__left">
          <div className="eyebrow v2-hero__eyebrow">Ian Adelman / Portfolio</div>
          <h1 className="v2-hero__h">
            Embedded systems
            <br />
            for <em className="em-italic">moving things</em>.
          </h1>
          <p className="v2-hero__lede">{D.bioShort}</p>
          <div className="v2-hero__bio">
            {D.bioLong.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="v2-hero__right">
          <div className="v2-card v2-vcard">
            <div className="v2-vcard__head">
              <span className="eyebrow">Identity</span>
              <span className="mono v2-vcard__id">/ian-adelman</span>
            </div>
            <dl className="v2-vcard__dl">
              <div>
                <dt className="mono">name</dt>
                <dd>{D.name}</dd>
              </div>
              <div>
                <dt className="mono">role</dt>
                <dd>{D.role}</dd>
              </div>
              <div>
                <dt className="mono">at</dt>
                <dd>{D.company}</dd>
              </div>
              <div>
                <dt className="mono">based</dt>
                <dd>{D.location}</dd>
              </div>
              <div>
                <dt className="mono">stack</dt>
                <dd>{D.stack}</dd>
              </div>
              <div>
                <dt className="mono">domain</dt>
                <dd>Embedded · controls · power · robotics</dd>
              </div>
            </dl>
            <div className="v2-vcard__foot">
              <a href={"mailto:" + D.contact.email} className="v2-vcard__cta">
                <span>Get in touch</span>
                <span className="mono">→</span>
              </a>
            </div>
          </div>

          <div className="v2-stats">
            {[
              { v: D.publications.length, l: "Papers" },
              { v: D.patents.length, l: "Patents" },
              { v: D.projects.length, l: "Projects" },
              { v: "MS '26", l: "U Washington" },
            ].map((s, i) => (
              <div key={i} className="v2-stat">
                <div className="serif v2-stat__v">{s.v}</div>
                <div className="eyebrow v2-stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </header>
  );
}

function Section({
  id,
  num,
  title,
  sub,
  count,
  children,
}: {
  id: string;
  num: string;
  title: ReactNode;
  sub?: ReactNode;
  count: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="v2-section">
      <div className="v2-section__head">
        <div className="v2-section__left">
          <div className="v2-section__num mono">{num}</div>
        </div>
        <div className="v2-section__mid">
          <h2 className="v2-section__h">{title}</h2>
          {sub && <p className="v2-section__sub">{sub}</p>}
        </div>
        <div className="v2-section__right mono">{count}</div>
      </div>
      {children}
    </section>
  );
}

function PublicationRow({ p, i }: { p: Publication; i: number }) {
  const tagCls = p.kind === "Journal" ? "v2-tag v2-tag--wp" : "v2-tag v2-tag--cp";
  return (
    <article className="v2-row">
      <div className="v2-row__idx mono">{String(i + 1).padStart(2, "0")}</div>
      <div className="v2-row__type">
        <span className={tagCls}>{p.kind.toUpperCase()}</span>
      </div>
      <div className="v2-row__main">
        <h3 className="v2-row__title">{p.title}</h3>
        <div className="v2-row__meta mono">
          <span>{p.venue}</span>
          <span className="v2-sep">/</span>
          <span>{p.ref}</span>
          <span className="v2-sep">/</span>
          <span>{p.authorship}</span>
        </div>
        <p className="v2-row__summary">{p.summary}</p>
      </div>
      <div className="v2-row__year mono">{p.year}</div>
      <div className="v2-row__action">
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="v2-pill-link">
          <span>READ</span>
          <span className="mono">↗</span>
        </a>
      </div>
    </article>
  );
}

function PatentRow({ p, i }: { p: Patent; i: number }) {
  return (
    <article className="v2-row v2-row--patent">
      <div className="v2-row__idx mono">{String(i + 1).padStart(2, "0")}</div>
      <div className="v2-row__type">
        <span className="v2-tag v2-tag--patent">PATENT · {p.status.toUpperCase()}</span>
      </div>
      <div className="v2-row__main">
        <h3 className="v2-row__title">{p.title}</h3>
        <div className="v2-row__meta mono">
          <span>{p.ref}</span>
          <span className="v2-sep">/</span>
          <span>Filed {p.year}</span>
        </div>
        <p className="v2-row__summary">{p.summary}</p>
      </div>
      <div className="v2-row__year mono">{p.year}</div>
      <div className="v2-row__action">
        <span className="v2-pill-static mono">PENDING</span>
      </div>
    </article>
  );
}

function ExpRow({ e, last }: { e: Experience; last: boolean }) {
  return (
    <article className={"v2-exp" + (last ? " v2-exp--last" : "")}>
      <div className="v2-exp__years mono">{e.years}</div>
      <div className="v2-exp__rail">
        <div className="v2-exp__dot" />
        <div className="v2-exp__line" />
      </div>
      <div className="v2-exp__body">
        <div className="v2-exp__head">
          <h3 className="v2-exp__role">{e.role}</h3>
          <span className="v2-exp__org">{e.org}</span>
        </div>
        <p className="v2-exp__summary">{e.summary}</p>
      </div>
    </article>
  );
}

function EduCard({ e }: { e: Education }) {
  return (
    <article className="site-edu">
      <div className="site-edu__head">
        <span className="mono site-edu__date">{e.date.toUpperCase()}</span>
        <span className="mono site-edu__loc">{e.location}</span>
      </div>
      <h3 className="site-edu__degree">{e.degree}</h3>
      <div className="site-edu__school">{e.school}</div>
      {e.specialty && <div className="site-edu__specialty mono">{e.specialty.toUpperCase()}</div>}
      {e.notes && <p className="site-edu__notes">{e.notes}</p>}
    </article>
  );
}

function Contact() {
  return (
    <Section
      id="contact"
      num="// 07"
      title={
        <>
          Get in <em className="em-italic">touch</em>.
        </>
      }
      sub="Open to advisory work, technical collaboration, and conversations about distributed propulsion."
      count="5 channels"
    >
      <div className="v2-contact">
        <a href={"mailto:" + D.contact.email} className="v2-contact__card">
          <span className="eyebrow">Email · primary</span>
          <span className="v2-contact__val">{D.contact.email}</span>
          <span className="mono v2-contact__arr">→</span>
        </a>
        <a href={D.contact.github} target="_blank" rel="noopener noreferrer" className="v2-contact__card">
          <span className="eyebrow">Github</span>
          <span className="v2-contact__val">{D.contact.githubLabel}</span>
          <span className="mono v2-contact__arr">↗</span>
        </a>
        <a href={D.contact.sae} target="_blank" rel="noopener noreferrer" className="v2-contact__card">
          <span className="eyebrow">SAE · 2026</span>
          <span className="v2-contact__val">2026-01-0065</span>
          <span className="mono v2-contact__arr">↗</span>
        </a>
        <a href={D.contact.elsp} target="_blank" rel="noopener noreferrer" className="v2-contact__card">
          <span className="eyebrow">Robot Learning · 2025</span>
          <span className="v2-contact__val">ELSP — quaternion kinematics</span>
          <span className="mono v2-contact__arr">↗</span>
        </a>
        <a href={D.contact.ieee} target="_blank" rel="noopener noreferrer" className="v2-contact__card v2-contact__card--wide">
          <span className="eyebrow">IEEE SoutheastCon · 2024</span>
          <span className="v2-contact__val">Quaternion-based kinematic modeling &amp; control</span>
          <span className="mono v2-contact__arr">↗</span>
        </a>
      </div>

      <div className="v2-footer">
        <div className="mono">{D.name.toUpperCase()} · PORTFOLIO · 2026 · v1.0.0</div>
        <div className="mono">SET IN INSTRUMENT SERIF · INTER · JETBRAINS MONO</div>
      </div>
    </Section>
  );
}

export default function SitePage() {
  const [active, setActive] = useState("about");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const ids = D.nav.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const visible = new Map<string, number>();
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        }
        if (visible.size > 0) {
          let best: string | null = null;
          for (const id of ids) {
            if (visible.has(id)) {
              best = id;
              break;
            }
          }
          if (best) setActive(best);
        }
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const openProject = (id: string) => setOpenId(id);
  const closeProject = () => setOpenId(null);
  const openProjectObj = useMemo(
    () => D.projects.find((p) => p.id === openId) || null,
    [openId]
  );

  const feature = D.projects.find((p) => p.feature);
  const others = D.projects.filter((p) => !p.feature);

  return (
    <div className="pf-root v2-root site-root">
      <Nav active={active} />

      <main className="v2-main">
        <Hero />

        <Section
          id="publications"
          num="// 02"
          title={<>Published <em className="em-italic">papers</em>.</>}
          sub="Peer-reviewed conference papers and journal work on distributed propulsion control, embedded real-time systems, and quaternion-based robot kinematics."
          count={`${D.publications.length} items`}
        >
          <div className="v2-rows">
            <div className="v2-rows__head mono">
              <span>#</span>
              <span>Type</span>
              <span>Title &amp; Summary</span>
              <span>Year</span>
              <span>Action</span>
            </div>
            {D.publications.map((p, i) => (
              <PublicationRow key={i} p={p} i={i} />
            ))}
          </div>
        </Section>

        <Section
          id="patents"
          num="// 03"
          title={<>Patents <em className="em-italic">pending</em>.</>}
          sub="US patent applications covering Elementrailer's core distributed-propulsion architecture and the power-routing strategies that make it practical."
          count={`${D.patents.length} items`}
        >
          <div className="v2-rows">
            <div className="v2-rows__head mono">
              <span>#</span>
              <span>Type</span>
              <span>Title &amp; Summary</span>
              <span>Year</span>
              <span>Action</span>
            </div>
            {D.patents.map((p, i) => (
              <PatentRow key={i} p={p} i={i} />
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          num="// 04"
          title={<>Selected <em className="em-italic">work</em>.</>}
          sub="Five projects spanning hardware, embedded firmware, robotics, AI tooling, and the web — each one shipping. Open any card to read more."
          count={`${D.projects.length} items`}
        >
          <div className="site-projects">
            {feature && (
              <ProjectCard
                p={feature}
                idx={D.projects.indexOf(feature)}
                total={D.projects.length}
                onOpen={openProject}
                feature
              />
            )}
            <div className="site-projects__row">
              {others.slice(0, 2).map((p) => (
                <ProjectCard
                  key={p.id}
                  p={p}
                  idx={D.projects.indexOf(p)}
                  total={D.projects.length}
                  onOpen={openProject}
                />
              ))}
            </div>
            <div className="site-projects__row">
              {others.slice(2, 4).map((p) => (
                <ProjectCard
                  key={p.id}
                  p={p}
                  idx={D.projects.indexOf(p)}
                  total={D.projects.length}
                  onOpen={openProject}
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          num="// 05"
          title={<>Work <em className="em-italic">history</em>.</>}
          sub="A compressed CV. Reverse-chronological."
          count={`${D.experience.length} roles`}
        >
          <div className="v2-exps">
            {D.experience.map((e, i) => (
              <ExpRow key={i} e={e} last={i === D.experience.length - 1} />
            ))}
          </div>
        </Section>

        <Section
          id="education"
          num="// 06"
          title={<>Where I <em className="em-italic">studied</em>.</>}
          sub="Mechanical engineering, undergraduate through graduate — with the robotics work that became the basis for two co-authored publications."
          count={`${D.education.length} degrees`}
        >
          <div className="site-edus">
            {D.education.map((e, i) => (
              <EduCard key={i} e={e} />
            ))}
          </div>
        </Section>

        <Contact />
      </main>

      {openProjectObj && <ProjectModal project={openProjectObj} onClose={closeProject} />}
    </div>
  );
}
