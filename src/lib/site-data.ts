export type Publication = {
  kind: "Conference Paper" | "Journal";
  venue: string;
  ref: string;
  year: string;
  authorship: string;
  title: string;
  summary: string;
  url: string;
};

export type Patent = {
  status: string;
  ref: string;
  year: string;
  title: string;
  summary: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  orient?: "portrait" | "landscape";
};

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  years: string;
  tag: string;
  tagCategory: string;
  feature?: boolean;
  summary: string;
  long: string[];
  bullets: string[];
  images: ProjectImage[];
  videoPath?: string;
  hasVideo?: boolean;
  links: ProjectLink[];
  placeholderLabel?: string;
};

export type Experience = {
  role: string;
  org: string;
  years: string;
  summary: string;
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  date: string;
  specialty?: string;
  notes?: string;
};

export type NavItem = { id: string; label: string };

export type SiteData = {
  name: string;
  role: string;
  company: string;
  location: string;
  bioShort: string;
  bioLong: string[];
  stack: string;
  publications: Publication[];
  patents: Patent[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  contact: {
    email: string;
    github: string;
    githubLabel: string;
    sae: string;
    ieee: string;
    elsp: string;
  };
  nav: NavItem[];
};

export const siteData: SiteData = {
  name: "Ian Adelman",
  role: "Founder & CTO",
  company: "Elementrailer Inc.",
  location: "United States",
  bioShort:
    "Building smart electric trailers — turning trailers into intelligent energy infrastructure.",
  bioLong: [
    "Founder and CTO of Elementrailer, where I'm building smart electric trailers for safer, more efficient commercial fleets. My work focuses on the embedded systems, distributed control, and regenerative-braking strategies that let a trailer carry its own propulsion and energy.",
    "My background sits at the intersection of mechanical engineering, embedded real-time control, and power electronics — the layer where firmware meets the physical world. I publish where the work moves the field forward, and I patent where the work needs protecting.",
  ],
  stack: "C · Rust · Python · MATLAB · CAN · Real-time embedded",

  publications: [
    {
      kind: "Conference Paper",
      venue: "SAE International",
      ref: "2026-01-0065",
      year: "2026",
      authorship: "Co-author",
      title:
        "Embedded Real-Time Control of a Distributed Trailer Propulsion System with Regenerative Braking for Net Neutral Load Towing",
      summary:
        "Architecture and control strategy for a distributed trailer propulsion system that uses regenerative braking to achieve net-neutral energy towing under representative duty cycles.",
      url: "https://saemobilus.sae.org/papers/embedded-real-time-control-a-distributed-trailer-propulsion-system-regenerative-braking-net-neutral-load-towing-2026-01-0065",
    },
    {
      kind: "Journal",
      venue: "Robot Learning · ELSP",
      ref: "Robot Learning · 2025",
      year: "2025",
      authorship: "Co-author",
      title:
        "Application and benefits of using unit-quaternions for mobile robot kinematics and control",
      summary:
        "Extended treatment of unit-quaternion kinematic models for differential-drive ground robots, with control-design and stability benefits over Euler-angle baselines.",
      url: "https://www.elspub.com/papers/j/1927094629142839296.html",
    },
    {
      kind: "Conference Paper",
      venue: "IEEE SoutheastCon",
      ref: "IEEE 10500133",
      year: "2024",
      authorship: "Co-author",
      title:
        "Quaternion-Based Kinematic Modeling and Control for Differential Drive Mobile Robots",
      summary:
        "Quaternion-based kinematic model and control formulation for differential-drive mobile robots, benchmarked against conventional Euler-angle approaches.",
      url: "https://ieeexplore.ieee.org/document/10500133",
    },
  ],

  // TODO: replace with real filing data when ready to publish.
  patents: [
    {
      status: "Pending",
      ref: "US 63/810,647",
      year: "2025",
      title:
        "Distributed propulsion and regenerative braking system for towable platforms",
      summary:
        "Method and apparatus for sensing tractor-state and coordinating in-trailer electric drives to deliver tractive assistance and recover braking energy on a non-instrumented tractor.",
    },
  ],

  projects: [
    {
      id: "et-prototype",
      title: "Elementrailer Prototype",
      role: "Founder, CTO · architecture, hardware, firmware",
      years: "2023 — 2024",
      tag: "Hardware platform",
      tagCategory: "Vehicle · Embedded",
      feature: true,
      summary:
        "First running prototype of an active electric trailer — Elementrailer's Gen-0 platform. Designed and built from the ground up: drive system, pack, power electronics, embedded control stack, and a tractor-sensing layer that runs on non-instrumented towing vehicles.",
      long: [
        "Gen-0 is the prototype that took Elementrailer from paper to driving. The trailer carries its own electric propulsion, a battery pack sized for the duty cycle, and a vehicle control unit (VCU) that decides — every few milliseconds — how much tractive assistance to deliver and how much braking energy to recover.",
        "The hardest design problem was operating intelligently on a tractor we don't own. The prototype doesn't require any wiring changes to the towing vehicle — instead it derives the tractor's intent from a small set of trailer-side sensors. That's what unlocks fleet retrofit.",
        "Built with a small team across mechanical, embedded, controls, and power electronics. From CAD to commissioning in under twelve months.",
      ],
      bullets: [
        "Dual electric drive units, trailer-resident pack",
        "Embedded real-time VCU on automotive-grade microcontroller",
        "Tractor-state inference from trailer-side sensors only",
        "Functional-safety architecture (ISO 26262, ASIL-aligned)",
        "CAN-based intra-trailer data fabric",
      ],
      images: [
        { src: "/images/ET-prototype-garage.jpg", alt: "Elementrailer prototype in the garage", orient: "portrait" },
        { src: "/images/ET-prototype-precharge.jpg", alt: "Prototype on pre-charge", orient: "landscape" },
      ],
      videoPath: "/videos/et-prototype.mp4",
      links: [],
    },
    {
      id: "et-mvp",
      title: "Elementrailer MVP · VCU",
      role: "Embedded lead · firmware, controls",
      years: "2024 — present",
      tag: "Embedded · firmware",
      tagCategory: "Embedded",
      summary:
        "Vehicle control unit hardware and firmware for the Elementrailer MVP — the production-track successor to the Gen-0 prototype. Real-time control stack, on-bench right now, headed for the next vehicle.",
      long: [
        "The MVP VCU is the brain of the next-generation Elementrailer trailer. It runs the real-time control loops that arbitrate between traction, regen, and friction-brake demand; it manages safety state; and it speaks to the rest of the trailer over CAN.",
        "Development is on a dev bench so the firmware, fault-handling, and integration with the broader power-electronics ecosystem can be hardened before the unit moves into the vehicle. The bench includes the production hardware, instrumented power-electronics stand-ins, and a hardware-in-the-loop layer that exercises the failure modes that are hard to provoke on the road.",
      ],
      bullets: [
        "Production-track VCU hardware revision",
        "Real-time embedded firmware (C / Rust)",
        "HIL bench for fault-handling and edge cases",
        "Functional-safety lifecycle in active development",
        "CAN integration with pack, drives, and telemetry",
      ],
      images: [
        { src: "/images/ET-MVP-VCU.jpg", alt: "MVP VCU on the dev bench", orient: "landscape" },
      ],
      hasVideo: false,
      links: [],
    },
    {
      id: "carta",
      title: "Carta",
      role: "Author · open source",
      years: "2025 — present",
      tag: "Open source · AI tooling",
      tagCategory: "Open Source",
      summary:
        "Open-source agentic-coding plugin for repos where documentation outnumbers maintainers. Turns large PDF and spec libraries into first-class searchable context for AI coding agents — fully local.",
      long: [
        "Carta is a tool I wrote because I needed it. Elementrailer's codebase sits next to hundreds of pages of hardware specs, datasheets, and standards documents — the kind of context that any honest implementation has to respect, but that no coding agent can fit in its prompt.",
        "It does page-by-page document classification, fully local semantic embedding into a self-hosted Qdrant server, sidecar files per document, and stale-reference detection wired into agent hooks. Large PDF / spec libraries become first-class searchable context for AI coding agents — and nothing leaves the machine.",
        "I use it daily on Elementrailer's hardware specs.",
      ],
      bullets: [
        "Page-by-page PDF / document classification",
        "Local semantic embedding into self-hosted Qdrant",
        "Sidecar files per document for reproducibility",
        "Stale-reference detection wired into agent hooks",
        "Fully local — no data leaves the machine",
      ],
      images: [
        { src: "/images/Carta-github-screenshot.png", alt: "Carta repository on GitHub", orient: "landscape" },
      ],
      links: [
        { label: "github.com/Ian-q/Carta", href: "https://github.com/Ian-q/Carta", primary: true },
      ],
    },
    {
      id: "erau-robotics",
      title: "Robotics Capstone",
      role: "Co-author · mechanical & controls",
      years: "2023 — 2024",
      tag: "Robotics · undergrad",
      tagCategory: "Robotics",
      summary:
        "Senior capstone for the BS Mechanical Engineering program at Embry-Riddle Aeronautical University. The work formed the basis of two co-authored publications on quaternion-based kinematics and control for differential-drive robots.",
      long: [
        "My capstone at Embry-Riddle Aeronautical University. The team designed and built an autonomous differential-drive ground robot and the controls and modeling work behind it.",
        "The technical contribution we ended up publishing is a quaternion-based kinematic model and controller for differential-drive ground robots that side-steps the singularity and stability issues of Euler-angle approaches. That work landed at IEEE SoutheastCon (2024) and then in extended form in Robot Learning (ELSP, 2025).",
      ],
      bullets: [
        "Mechanical design and build of differential-drive platform",
        "Quaternion-based kinematic modeling and control",
        "Two co-authored publications (IEEE 2024 · ELSP 2025)",
        "BS Mechanical Engineering, Embry-Riddle Aeronautical University",
      ],
      images: [
        { src: "/images/ERAU-robot-01.jpg", alt: "ERAU capstone robot, view 1", orient: "landscape" },
        { src: "/images/ERAU-robot-02.jpg", alt: "ERAU capstone robot, view 2", orient: "landscape" },
      ],
      hasVideo: false,
      links: [],
    },
    {
      id: "destify",
      title: "Destify",
      role: "Co-author · design + engineering",
      years: "2025 — present",
      tag: "Web · travel planning",
      tagCategory: "Web Product",
      summary:
        "Co-authored travel-planning web app. Event-level trip organization with travel-detection: when a trip implies international travel, the app walks the user through the prerequisite paperwork in the right order ahead of the relevant flight.",
      long: [
        "Destify is a travel-planning web app I co-author. The novel piece is travel-detection: when the itinerary implies international travel, the app walks the user through the prerequisite paperwork — visas, customs declarations, prescription rules, IDPs — in the right order, anchored to the flight that triggered them.",
        "An AI-assisted intake interview handles the unique cases (dual citizenship, medical considerations, controlled items) that a decision tree alone can't cover. The decision tree is what runs when the case is clean.",
      ],
      bullets: [
        "Event-level trip organization with map + timeline",
        "Travel-detection driven pre-flight paperwork flow",
        "AI-assisted intake interview for unique cases",
        "Built on Next.js · React · Tailwind · shadcn",
      ],
      images: [
        { src: "/images/Destify-overview.png", alt: "Destify trip-organizer overview", orient: "landscape" },
      ],
      links: [
        { label: "destify-fawn.vercel.app", href: "https://destify-fawn.vercel.app", primary: true },
      ],
    },
  ],

  experience: [
    {
      role: "Founder & CTO",
      org: "Elementrailer Inc.",
      years: "2023 — present",
      summary:
        "Founded Elementrailer to bring smart electric trailers to commercial fleets. Lead engineering across hardware, embedded, controls, and cloud — from prototype Gen-0 unit through MVP.",
    },
    {
      role: "Engineering — robotics research",
      org: "Embry-Riddle Aeronautical University",
      years: "2022 — 2024",
      summary:
        "Robotics research at ERAU, alongside the mechanical engineering degree. Co-authored two publications on quaternion-based kinematic modeling and control for differential-drive mobile robots.",
    },
  ],

  education: [
    {
      degree: "M.S. Mechanical Engineering",
      school: "University of Washington",
      location: "Seattle, WA",
      date: "May 2026",
      specialty: "",
      notes:
        "Graduate-level mechanical engineering coursework alongside founding Elementrailer.",
    },
    {
      degree: "B.S. Mechanical Engineering",
      school: "Embry-Riddle Aeronautical University",
      location: "Prescott, AZ",
      date: "May 2024",
      specialty: "Robotics specialization",
      notes:
        "Co-authored two publications on quaternion-based kinematic modeling and control for differential-drive mobile robots.",
    },
  ],

  contact: {
    email: "Ian@elementrailer.com",
    github: "https://github.com/Ian-q",
    githubLabel: "github.com/Ian-q",
    sae: "https://saemobilus.sae.org/papers/embedded-real-time-control-a-distributed-trailer-propulsion-system-regenerative-braking-net-neutral-load-towing-2026-01-0065",
    ieee: "https://ieeexplore.ieee.org/document/10500133",
    elsp: "https://www.elspub.com/papers/j/1927094629142839296.html",
  },

  nav: [
    { id: "about", label: "About" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
};
