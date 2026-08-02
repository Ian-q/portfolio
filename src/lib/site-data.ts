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

export type ProjectGroup = "elementrailer" | "oss" | "research";

export type ProjectGroupDef = {
  id: ProjectGroup;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  years: string;
  tag: string;
  tagCategory: string;
  group: ProjectGroup;
  feature?: boolean;
  /** Render in the dense 4-up variant. Used by the research band. */
  compact?: boolean;
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
  projectGroups: ProjectGroupDef[];
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

  projectGroups: [
    { id: "elementrailer", label: "Elementrailer" },
    { id: "oss", label: "Open Source & Tools" },
    { id: "research", label: "Research & Coursework" },
  ],

  projects: [
    {
      id: "et-prototype",
      title: "Elementrailer Prototype",
      role: "Founder, CTO · architecture, hardware, firmware",
      years: "2023 — 2024",
      tag: "Hardware platform",
      tagCategory: "Vehicle · Embedded",
      group: "elementrailer",
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
      group: "elementrailer",
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
      role: "Author · open source (sole maintainer)",
      years: "2025 — present",
      tag: "Agent tooling · retrieval",
      tagCategory: "Open Source",
      group: "oss",
      summary:
        "A Claude Code plugin and Python CLI that keeps project documentation honest — auditing for contradictions, embedding reference material into a local knowledge base, and giving coding agents cited recall over it. Fully local, MIT, on PyPI as carta-cc.",
      long: [
        "Carta grew out of a specific failure mode: when agents write documentation faster than humans review it, four files end up describing the same interface four different ways, and neither the human nor the agent knows which one is right. Elementrailer's codebase sits next to hundreds of pages of hardware specs and datasheets that any honest implementation has to respect but no agent can fit in its prompt.",
        "The audit runs in two passes — a structural scanner that makes zero model calls and covers eighteen issue types (broken and one-way frontmatter links, stale review dates, orphaned docs, sidecar drift), then a semantic pass that checks changed document pairs for contradictions in configured categories: version numbers, API endpoints, config values, or domain-specific ones like pin numbers and CAN IDs. Findings carry stable IDs that survive across runs, and an issue that goes three audits unresolved escalates itself into a triage backlog.",
        "Retrieval is hybrid — dense embeddings fused with BM25 by reciprocal rank fusion, with an optional reranking stage. On a twenty-query eval over a real technical-docs corpus, hybrid lifted recall@5 from 0.550 to 0.700 against dense-only. Visually-rich PDFs go through an optional late-interaction layer that embeds each page as patch vectors, which took a datasheet eval from 0.500 to 0.857 and recovered five of six queries whose answer lives only on a diagram or a derating curve — unreachable by text search at all. These are one project's eval sets rather than a public benchmark: they show what each retrieval layer adds, not a state-of-the-art claim.",
        "Everything runs on localhost — Qdrant and Ollama, no cloud dependency. The proactive-recall hook fails open on every path and runs under a three-second budget, added after discovering that pointing the vector store at a remote host turned an instant connection refusal into an eighty-second stall on every prompt.",
      ],
      bullets: [
        "Two-pass doc audit: zero-LLM structural scanner across 18 issue types, then a semantic contradiction pass",
        "Stable finding IDs that persist across runs and auto-escalate to a triage backlog after 3 unresolved audits",
        "Hybrid retrieval (dense + BM25, RRF-fused) — recall@5 0.550 → 0.700 over dense-only on a 20-query eval",
        "Optional visual layer for datasheets — 0.500 → 0.857 recall@5, recovering diagram-only queries text search can't reach",
        "Fully local (Qdrant + Ollama); recall hook fails open under a 3s budget so a dead store degrades to silence",
        "5 Claude Code skills, 5 MCP tools, 24-subcommand CLI; ~16k lines of Python against ~1,300 tests, CI on 3.10–3.12",
      ],
      images: [
        { src: "/images/Carta-github-screenshot.png", alt: "Carta repository on GitHub", orient: "landscape" },
      ],
      links: [
        { label: "github.com/Ian-q/Carta", href: "https://github.com/Ian-q/Carta", primary: true },
        { label: "PyPI · carta-cc", href: "https://pypi.org/project/carta-cc/" },
        { label: "Releases", href: "https://github.com/Ian-q/Carta/releases" },
      ],
    },
    {
      id: "teensy-tinyllm",
      title: "teensy-tinyllm",
      role: "Solo · inference engine, PSRAM driver, quantizer, firmware, bring-up",
      years: "2026",
      tag: "Embedded · ML",
      tagCategory: "Embedded",
      group: "oss",
      summary:
        "A 15M-parameter quantized Llama running under Zephyr on a Teensy 4.1 — 600 MHz Cortex-M7, no OS, no network — with PSRAM hand-soldered to the board's two unpopulated footprints. First hardware run July 2026: 2.98 tok/s, 309 ms to first token.",
      long: [
        "The Teensy 4.1 ships with two unpopulated footprints on its underside, wired to the processor's second QSPI controller. This project solders PSRAM to them and finds out what a 600 MHz Cortex-M7 with external RAM will actually do with a transformer. Measured on the first board: a 15M-parameter model loads from a FAT32 microSD into PSRAM and generates coherent prose at 2.98 tok/s, 309 ms to first token, reading 8.3 MB of weights per token at 25.5 MB/s effective — 81% of what the raw sequential bench reports, with the missing fifth going to the KV cache and sampler scratch sharing the same bus with random access.",
        "Every design decision follows from one measurement. Autoregressive decoding reads each weight exactly once and reuses none, so arithmetic intensity is pinned near one operation per byte: compute needs about 58 ms for a forward pass where memory needs 690 ms. Memory loses by nearly twelve times and the core sits idle roughly 92% of each token. So the levers are bits per weight and bus clock — not kernels, not overclocking. Quantization scales are interleaved into each block rather than kept in a parallel array, because two concurrent read streams defeat the prefetcher on the one access pattern this workload consists entirely of. And since the achievable bus clock is a property of your specific solder joints, the firmware sweeps and memtests it at runtime instead of hardcoding a constant.",
        "Because the whole engine was written before any hardware existed, correctness had to come from somewhere other than the board. The host suite runs 602 assertions; the full forward pass matches an independent NumPy reference to within 8e-06 worst relative error; and the DSP kernels — the one path a native host test cannot reach — are cross-compiled and executed under emulation to the identical figure, with the build grepping the disassembly to confirm the intended instruction is really in the binary. Bring-up still found five real defects that emulation could not: a reset-state bit routing a FIFO to DMA so every chip ID read returned zero, a clock table that assumed a different PLL programming than the RTOS actually uses, DMA into cacheable buffers, and an alignment bug in the arena carver.",
        "The piece I'd point at first is a codec that uses the model itself as the probability source for a range coder — two endpoints holding the identical weights transmit only the residual surprise of a message rather than its text, at 1.79× smaller than the strongest classical baseline for payloads too short to build a dictionary from. Getting there meant making the forward pass bit-identical across architectures, because the decoder has to rebuild the encoder's probability table exactly or the range desynchronises and the rest of the message is lost. That turned out to require replacing four standard math functions which disagree in the last bit on about 1.2% of the values a forward pass touches — enough, at thousands of calls per token, to desynchronise a decoder almost immediately.",
      ],
      bullets: [
        "Measured on hardware: 2.98 tok/s, 309 ms to first token, 25.5 MB/s effective — 81% of the sequential PSRAM bench",
        "Engine compiles to ~10.5 KB of Cortex-M7 code with zero bytes of static RAM; freestanding C99, no malloc, no OS calls",
        "Verified before hardware existed: 602 assertions, forward pass within 8e-06 of a NumPy reference, DSP kernels run under emulation",
        "PSRAM driver sweeps and memtests its own bus clock at runtime — achievable speed is a property of the solder joints",
        "Bit-identical forward pass across architectures, achieved by replacing the four libm functions that disagree in the last bit",
        "Model-as-probability-source range coder: 1.79× smaller than dictionary-primed deflate on short messages",
      ],
      images: [],
      placeholderLabel: "teensy 4.1",
      links: [
        { label: "github.com/Ian-q/teensy-tinyllm", href: "https://github.com/Ian-q/teensy-tinyllm", primary: true },
      ],
    },
    {
      id: "airframe-lab",
      title: "airframe-lab",
      role: "Solo · design, print-process development, test methodology",
      years: "2026 — present",
      tag: "UAV · 3D printing",
      tagCategory: "Vehicle · Embedded",
      group: "oss",
      summary:
        "A meta-repo for designing, building, and flying 3D-printed RC fixed-wing aircraft. Plane one is an 1100 mm lightweight-PLA trainer specced around a staged path to autonomy. Early: the spec, BOM, and test protocol are written and one coupon test is run — nothing printed, nothing flown.",
      long: [
        "The premise is that the aerodynamics of a sport trainer are commodity engineering and the interesting work is everywhere else. So the first aircraft anchors its aero on published values — a NACA 4412 wing, tail volume coefficients from the textbook, CG at 27% MAC — and spends the design effort on structure, print manufacturability, and avionics packaging instead. The airframe is a single-perimeter foamed lightweight-PLA shell over a pultruded carbon spar, and the avionics bay is specified once for the entire four-phase roadmap: one flight controller carries manual flight through waypoint missions on one firmware, then re-flashes to another for autotune and autoland, with no hardware change between phases.",
        "The methodology is the part that actually exists. Twelve numbered procedures — eight bench tests and four material coupons — gate the phases, so electronics get measured before the CAD that packages them is frozen and the slicer profile gets locked from coupon data before any flight part is printed. One of the twelve has been run: a nine-point foaming-temperature sweep that came back non-monotonic, where specific temperatures dropped out to a thin wall while their neighbours foamed correctly. Constant specimen mass ruled out under-extrusion and inspecting every exported gcode confirmed the commanded setpoints were right, which left hot-end thermal instability near the foaming threshold. The result is a tentative temperature band, explicitly not written into a profile until a single-variable confirmation print is done.",
      ],
      bullets: [
        "Meta-repo: reusable workflow — CAD conventions, airfoil library, 12 test procedures, checklists — with per-aircraft work isolated beneath it",
        "Bench-first rather than CAD-first: component performance is measured before bay geometry freezes",
        "Lightweight-PLA foaming sweep isolated non-monotonic wall thickness to hot-end thermal instability, not slicer or flow error",
        "One hardware set spans the whole autonomy roadmap — firmware re-flash between phases, no board swap",
        "Every deviation from spec logged with a date and a rationale",
        "Status: design and test methodology written, one coupon test run. Nothing printed, nothing flown.",
      ],
      images: [],
      placeholderLabel: "phase 0",
      links: [],
    },
    {
      id: "erau-robotics",
      title: "Robotics Capstone",
      role: "Co-author · mechanical & controls",
      years: "2023 — 2024",
      tag: "Robotics · undergrad",
      tagCategory: "Robotics",
      group: "research",
      compact: true,
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
      id: "destified",
      title: "Destified",
      role: "Author · design + engineering",
      years: "2026",
      tag: "Web · travel + points",
      tagCategory: "Web Product",
      group: "oss",
      summary:
        "Two surfaces on one travel app: a trip organizer that resolves pre-flight paperwork from a stored profile through a decision graph, and a deal optimizer that reduces cash, points, and adjustments to a single effective-dollar figure to rank booking options you already found.",
      long: [
        "The organizer is trip planning built on a rules layer rather than a checklist. A resolver takes a permanent profile — citizenships with per-passport expiry, residence and visa status, controlled medications, IDP convention — plus per-trip context like minors or driving at the destination, and walks it through a decision graph. The graph renders with an automatic layered layout and drops off-path nodes to low opacity, so you only read the subgraph that applies to you. Trip readiness is computed over the nodes actually on your path instead of a fixed list, and every verdict carries a rule ID and a human-readable reason, so the interface can always say why it decided what it decided.",
        "The second surface is a deal optimizer for points-and-miles travel, and it deliberately does not search for flights — it is the decision layer over options you already hunted down. Every option carries one payment shape with no type discriminator, so a cash fare, an award with co-pay fees, and a cash-plus-points hybrid are the same row. The engine collapses each to one comparable number and ranks them between the journey's cheapest and most expensive. Its defining rule is a refusal to fail open: an option with points but no resolvable cents-per-point is bucketed as incomplete with a prompt to fix it, never valued at zero — because a zero-valued unknown would sort as the best deal on the board.",
        "The engineering posture is the part I'd defend. Layering is strict — a pure engine, then data access with the database handle injected and the user ID in every WHERE clause, then thin server actions that resolve the session, then server components, then client renderers. Schemas parse every input at the action boundary and ownership is re-checked server-side on every mutation. Tests run the real migration chain against an in-process Postgres, so constraint behavior is pinned by test rather than assumed. AI is confined to one narrow job: fetching structured travel-condition rows against a strict schema with a confidence level and citations, cached behind per-row-type TTLs with a stale-value fallback. It is not free-form advice, and the app defers to an embassy where a rule is unproven.",
      ],
      bullets: [
        "Rules-layer resolver: profile + trip context → path through a decision graph, every verdict carrying a rule ID and a reason",
        "Readiness computed over the nodes actually on your path, not a fixed checklist",
        "Deal engine reduces cash, points, and manual adjustments to one effective-dollar figure and ranks the journey's options",
        "Refuses to fail open — an option with points but no resolvable cents-per-point is flagged incomplete, never valued at $0",
        "Postgres via Drizzle; tests run the real migration chain against in-process PGlite so constraint behavior is pinned",
        "AI narrowed to schema-validated travel-condition lookups with confidence and citations, cached with a stale-value fallback",
      ],
      images: [],
      placeholderLabel: "destified",
      links: [
        { label: "github.com/Ian-q/Destified", href: "https://github.com/Ian-q/Destified", primary: true },
      ],
    },
    // Disclosure-limited by design. dermis/NOTICE.md bars any public disclosure
    // before a provisional patent application is filed — no method, no figures,
    // no geometry, no repo link. Expand this card only after filing.
    {
      id: "dermis",
      title: "dermis",
      role: "Principal investigator",
      years: "2025 — present",
      tag: "Applied aerodynamics · R&D",
      tagCategory: "Research",
      group: "oss",
      summary:
        "Ongoing applied-aerodynamics research program on drag reduction for commercial vehicles. Simulation pipeline, physical test plan, and a paper in progress. Details are withheld pending a provisional patent filing.",
      long: [
        "An active research program on aerodynamic drag reduction for heavy commercial vehicles — the same duty cycles Elementrailer targets, approached from the aerodynamic side rather than the powertrain side.",
        "The work spans parametric geometry generation, wall-resolved CFD, manufacturability screening, and a physical validation plan, with a paper and a provisional patent application as the near-term deliverables. Substance is deliberately omitted here: the project operates under a no-disclosure constraint until that provisional is on file. Happy to talk about it under NDA.",
      ],
      bullets: [
        "Reproducible CFD and screening pipeline",
        "Physical validation planned against simulation",
        "Paper in progress",
        "Provisional patent application pending — details withheld",
      ],
      images: [],
      placeholderLabel: "under wraps",
      links: [],
    },
    {
      id: "me583-ekf",
      title: "Trailer Dynamics & EKF",
      role: "Solo · modeling, system ID, state estimation",
      years: "2025",
      tag: "Controls · estimation",
      tagCategory: "Controls",
      group: "research",
      compact: true,
      summary:
        "Grey-box nonlinear model of an electric-assist trailer, identified from a 242-second instrumented drive, with a Lyapunov stability proof of the assist control law and a three-state EKF that estimates road grade with no grade sensor. Graduate nonlinear-controls final project.",
      long: [
        "The trailer carries its own electric drive under a proportional load-following law — motor force tracks the filtered hitch force, so the trailer pulls its own share. The open question was whether that law, wrapped around an aggressively filtered force sensor, could destabilize. I built a two-state grey-box model from the longitudinal force balance, with the cascaded digital filter collapsed to a single first-order pole; nonlinearity enters through quadratic aero drag, motor saturation, and the feedback coupling between the filter and acceleration.",
        "Parameters came from one instrumented baseline drive — load cell, OBD-II vehicle speed, motor telemetry over CAN, and a GPS log with DEM-derived elevation as grade ground truth, synchronized and resampled to 10 Hz. Least squares on the quasi-steady subset gave a rolling-resistance coefficient of 0.011 and a drag coefficient of 0.27. The first regression returned negative resistance coefficients — the road pushing the trailer forward — which a correlation check isolated to an inverted load-cell sign convention. I report the weak fit quality rather than defend it: the test track is near-flat, and the grade force that flatness hides is a quarter of the rolling resistance the fit is trying to resolve.",
        "For stability, linearizing at cruise gives a slow inertial mode and a fast filter mode; solving the Lyapunov equation yields a positive-definite P, and the resulting function was checked against the full nonlinear dynamics on a grid spanning the operating envelope, with a deliberately destabilized controller run as a contrast case. Gain and mass sweeps left the dominant eigenvalue negative throughout. The three-state EKF then recovers road grade with no grade sensor, tracking the DEM trend — and surfaced a persistent grade bias that traces back to a load-cell zero-point error, a calibration fault the regression alone could not see.",
        "The follow-on experiment — drop the load cell entirely and reconstruct hitch force from the remaining sensors — returned a clean negative on this data, and I reported it as one. The measured signal is vibration-dominated with shock spikes an order of magnitude above its standard deviation, and the only acceleration channel available is differentiated OBD speed, so the question is unanswerable from this dataset rather than answered by it. That result is what motivated building a multibody simulator where the hitch reaction is exact ground truth.",
      ],
      bullets: [
        "Two-state grey-box model identified from a 242 s instrumented drive — load cell, OBD-II, motor CAN, GPS + DEM at 10 Hz",
        "Least-squares system ID found and fixed an inverted load-cell sign convention producing impossible negative coefficients",
        "Lyapunov proof: solved AᵀP + PA = −I, then verified V̇ < 0 against the full nonlinear dynamics across the operating grid",
        "Robustness sweeps held stability across the full control-gain and trailer-mass ranges tested",
        "Three-state EKF estimates road grade with no grade sensor; exposed a load-cell zero error invisible to the regression",
        "Ran the sensor-free reconstruction as a falsification test and published the negative result",
      ],
      images: [
        { src: "/images/ME583-grade-estimate.png", alt: "EKF-estimated road grade with 2σ confidence band, against DEM ground truth", orient: "landscape" },
        { src: "/images/ME583-ekf-results.png", alt: "Full EKF state estimation — velocity, hitch force, and road grade", orient: "landscape" },
        { src: "/images/ME583-roa-estimation.png", alt: "Lyapunov region-of-attraction estimate", orient: "landscape" },
        { src: "/images/ME583-dynamics-comparison.png", alt: "Identified model against measured drive data", orient: "landscape" },
      ],
      links: [],
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
      date: "Dec 2025",
      specialty: "Controls & dynamical systems",
      notes:
        "Completed coursework a quarter early while founding and running Elementrailer; commencement May 2026. Graduate work in nonlinear control, data-driven dynamical systems, and parallel computing — several final projects fed directly into Elementrailer's control and estimation stack.",
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
