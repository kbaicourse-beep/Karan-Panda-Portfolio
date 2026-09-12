/* ==========================================================================
   DATA.JS — EVERYTHING ON THE SITE LIVES HERE.
   Change text by editing the quoted strings. Change images by editing the
   "images/xxx.jpg" paths (put your new file in the images/ folder first).
   See README.md for a full walkthrough.
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* SITE — global settings used on every page                              */
/* ---------------------------------------------------------------------- */
const SITE = {
  name: "Karan Panda",
  shortName: "KP.",
  role: "Product Designer",
  email: "kcreate.work@gmail.com",
  resumeFile: "assets/resume.pdf",
  copyrightName: "KARAN PANDA",

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Work", href: "work.html" },
    { label: "About", href: "about.html" },
    { label: "Resume", href: "assets/resume.pdf", external: true, icon: true },
  ],

  // Social links shown in the footer. Swap for your real profile URLs.
  // "readcv" points at your resume PDF (opens it directly) rather than an
  // external read.cv profile — change it to a real read.cv URL any time
  // you set one up.
  links: {
    linkedin: "https://www.linkedin.com/in/karan-panda/",
    behance: "https://www.behance.net/im_karan",
    readcv: "assets/resume.pdf",
  },

  footerTagline: "Rethink. **Redo.** Realize.",
};

/* ---------------------------------------------------------------------- */
/* HOME PAGE                                                              */
/* ---------------------------------------------------------------------- */
const HOME = {
  kicker: "Hi, I'm",
  heroName: "KARAN",
  heroTagline: "aspiring **Product Designer** with a background in **Communication Design**",
  heroCta: "Explore Work",

  // Only UI/UX case studies are featured on the homepage. Branding and
  // illustration work still lives on the Work page — just not spotlighted
  // here. Add ids back to this list any time to bring a project back.
  featuredProjectIds: ["panda-print", "student-budget", "rath-yatra", "grocery-wallet"],

  ctaHeading: "Interested in **seeing more?**",
  ctaButton: "Explore All Works",

  archiveHeading: "Archive",
  archiveTag: "Blogs",
  archive: [
    { title: "Process of Portfolio Building", tag: "[GEN]", image: "images/building-this-site/BUILDING-SITE-00-HOMEPAGE-ARCHIVE-TILE.jpg", href: "archive-post.html?id=building-this-site" },
    { title: "Pattachitra Painting", tag: "[PHOTO]", image: "images/patachitra/PATACHITRA-00-HOMEPAGE-ARCHIVE-TILE.jpg", href: "archive-post.html?id=patachitra" },
  ],
};

/* ---------------------------------------------------------------------- */
/* ABOUT PAGE                                                             */
/* ---------------------------------------------------------------------- */
const ABOUT = {
  eyebrow: "About Me",
  heading: "Products are only one part of who I am.",
  sub: "Everything outside design shapes how I think inside design.",
  portrait: "images/portrait.jpg",
  resumeBtn: "Download Resume ↗",

  intro: {
    hook: "I don't think design moves in a straight line.",
    eyebrow: "About",
    body: "I'm Karan Panda. I care more about why something works than how it looks — why a system quietly falls apart, why someone actually understands a screen versus just seeing it. I don't protect my first idea; I go back, question it, cut what doesn't hold, and rebuild with intention, because that's usually how I get to the better version, not a detour from it. I'm early in this, still learning — by working on real problems, watching people who think more clearly than I do, and getting things wrong somewhere that lets me actually learn from it. I go back before I move forward.",
  },

  lift: {
    heading: "I lift every day",
    body: "Home workouts keep me physically fit, mentally active, and ready for the creative challenges of every day.",
    image: "images/about/ABOUT-02-LIFT-ILLUSTRATION-DIPS.gif",
  },

  games: {
    eyebrow: "My Favorite Games",
    heading: "When I unplug, I play.",
    body: "Games inspire how I think about interaction, feedback, progression and emotion.",
    mobileLabel: "Most played on mobile",
    mobile: [
      { name: "Clash Royale", sub: "Supercell · Strategy & Tactics", icon: "images/game-icon-1.jpg" },
      { name: "Clash of Clans", sub: "Supercell · Strategy & Tactics", icon: "images/game-icon-2.jpg" },
    ],
    // Cover art for third-party games is copyrighted, so these use plain
    // placeholder covers instead of real box art. Swap in your own
    // screenshots any time — see the README for how.
    favorites: [
      { title: "Mortal Kombat 1", cover: "images/game-cover-1.jpg" },
      { title: "Marvel's Spider-Man", cover: "images/game-cover-2.jpg" },
    ],
  },

  art: {
    eyebrow: "Art",
    heading: "I draw at leisure.",
    body: "No user flows, no constraints — just shape, colour and story.",
    pieces: [
      { image: "images/art-wanderer.jpg", caption: "The Wanderer — Vector Serigraph, 2026" },
      { image: "images/art-solitary-drift.jpg", caption: "Solitary Drift — Digital Painting, 2025" },
      { image: "images/art-whispers.jpg", caption: "Whispers — Digital Painting, 2025" },
      { image: "images/art-panda-bloom.jpg", caption: "Organic Alignment — Vector Serigraph, 2026" },
    ],
  },

  honors: {
    eyebrow: "Industry Recognition",
    heading: "Honors & Credentials",
    items: [
      {
        title: "Google UX Design Certificate",
        body: "Completed Google's UX Design program, covering UX research, wireframing, prototyping, and design thinking.",
      },
      {
        title: "Top 10 Finalist — Graphic Design (2023)",
        body: "Recognized among India's Top 10 participants in the National Graphic Design competition.",
      },
      {
        title: "Fine Arts & Painting",
        body: "Awarded across multiple district and national-level painting competitions, building a strong foundation in visual storytelling and artistic expression.",
      },
      {
        title: "Industry Mentor Recognition",
        body: "Recognized by an industry mentor for excellent punctuality, integrity, and strong teamwork during a publishing-design internship.",
      },
    ],
  },

  resumeCtaText: "Looking for a more detailed CV layout?",
  resumeCtaBtn: "Download Full Resume (PDF)",
};

/* ---------------------------------------------------------------------- */
/* PROJECTS — the Work grid + every case study.                          */
/* Add a project: copy a whole { ... } block, give it a new unique "id",  */
/* and add that id to HOME.featuredProjectIds if you want it on the      */
/* homepage too. Remove a project: delete its whole block. Reorder:       */
/* cut/paste blocks up or down.                                          */
/* ---------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "student-budget",
    title: "Student Budget",
    category: "Product Design / UX", // controls which filter pill it appears under
    badge: "Case Study",
    comingSoon: true, // disables the link everywhere this card renders (home, work grid, carousel) and shows a "Coming Soon" badge instead — overview text stays visible
    eyebrow: "Financial Wellness App",
    description: "Designed an intuitive budget tracking system improving student financial adherence by 65% through behavioral UX patterns.",
    thumbnail: "images/student-budget/STUDENT-BUDGET-01-THUMBNAIL.jpg",
    year: "2025",
    tall: false,
    // Shown in the homepage featured row only.
    homeOutcome: { label: "Outcome", stat: "92%", text: "of test users felt more in control of their finances after two weeks of use." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[01]",
      tagline: "An adaptive budgeting app built around irregular student income, not against it.",
      heroImage: "images/student-budget/STUDENT-BUDGET-02-HERO.jpg",
      meta: [
        { label: "Role", val: "Product Designer" },
        { label: "Tools", val: "Figma, Google Sheets" },
        { label: "Duration", val: "3 Weeks" },
        { label: "Platform", val: "iOS & Android" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          navLabel: "Context",
          navTime: "01",
          heading: "Overview",
          body: "Student Budget (in-app name: Panda) started with a simple observation — every budgeting app I tried assumed a steady paycheck. Students don't have that. Income arrives in bursts: a part-time shift, an allowance transfer, financial aid. Spending has to stretch unevenly across the month.\n\nI set out to design a budgeting experience built around that irregularity instead of fighting it.",
        },
        {
          type: "statGrid",
          heading: "Key Insights",
          stats: [
            { value: "75%", label: "of students had no consistent budgeting method" },
            { value: "25%", label: "said their current app felt built for them" },
            { value: "66%", label: "wanted shared or group expense splitting" },
            { value: "3.6/5", label: "average satisfaction with existing tools" },
          ],
        },
        {
          type: "hmw",
          heading: "Understanding the Problem",
          items: [
            "Adaptive rolling balances — the budget recalculates around irregular income instead of resetting on a fixed date.",
            "Micro-incentive badges — small, non-naggy rewards for staying within a category.",
            "Seamless group bill-splitting — splitting a grocery run or rent with roommates in two taps, not a spreadsheet.",
          ],
        },
        {
          type: "personaGrid",
          heading: "Meet the Users",
          people: [
            { name: "Ananya Rao", role: "Design Student", bio: "Freelances between classes; income lands in unpredictable chunks. Wants to see, at a glance, what's actually safe to spend." },
            { name: "Priya Nair", role: "Part-time Barista & Student", bio: "Paid weekly, spends daily. Wants the app to keep up with her pace instead of asking her to plan a month ahead." },
            { name: "Suresh Patel", role: "Postgraduate, Scholarship-funded", bio: "Budgets around a single lump sum each semester and needs to see it stretched across 16 weeks at a glance." },
          ],
        },
        {
          type: "hmw",
          heading: "How Might We",
          items: [
            "How might we design a budget that adapts to income instead of assuming it?",
            "How might we make saving feel rewarding without being preachy?",
            "How might we make splitting shared costs painless enough that people actually do it?",
          ],
        },
        {
          type: "evolution",
          heading: "Design Evolution",
          stages: [
            { title: "Monochrome Wireframe", body: "Structure first — information hierarchy tested before a single colour was chosen." },
            { title: "Mid-Fidelity Dark UI", body: "Introduced the dark theme and the rolling-balance visualisation, tested with 6 students." },
            { title: "High-Fidelity UI", body: "Refined the type scale and contrast, and added the group bill-split flow." },
            { title: "Editorial Polish", body: "Final pass on spacing, iconography and micro-copy for a calmer, less 'financial app' tone." },
          ],
        },
        {
          type: "statGrid",
          heading: "Measurable Improvement in Financial Habits",
          stats: [
            { value: "+65%", label: "adherence to weekly budget" },
            { value: "14d", label: "average time to build a saving habit" },
            { value: "92%", label: "felt more in control after two weeks" },
            { value: "2.4x", label: "more likely to split a shared bill in-app" },
          ],
        },
        {
          type: "quote",
          text: "The biggest opportunity wasn't adding features — it was removing friction.",
        },
      ],
    },
  },

  {
    id: "panda-print",
    title: "PANDA",
    category: "Product Design / UX",
    badge: "Case Study",
    eyebrow: "Campus Print Coordination Portal",
    description: "A print-coordination product for Indian college campuses — designed, completed as a native app, then audited and rebuilt as a portal after twenty structured interviews.",
    thumbnail: "images/panda-print/PANDA-01-THUMBNAIL.jpg",
    year: "2026",
    tall: false,
    homeOutcome: { label: "What Changed", stat: null, text: "Went from a native app nobody wanted to install to a web portal built around what students and vendors actually said." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[02]",
      tagline: "The shop said yes. It couldn't.",
      heroImage: "images/panda-print/PANDA-02-HERO.jpg",
      meta: [
        { label: "Role", val: "UX Research · Product Strategy · UI Design" },
        { label: "Team", val: "Solo" },
        { label: "Timeline", val: "6 Weeks, Part-Time" },
        { label: "Platform", val: "Native App → Responsive Web Portal" },
        { label: "Research", val: "20 Participants, Two Rounds" },
      ],
      blocks: [
        {
          type: "statGrid",
          stats: [
            { value: "2", label: "Full versions designed — app, then portal" },
            { value: "20", label: "People interviewed, every number traceable to one" },
            { value: "40+", label: "Ideas generated, 11 survived the evidence" },
            { value: "2/12", label: "Students who could explain a basic print spec" },
          ],
        },
        {
          type: "cardGrid",
          heading: "What The First Version Kept Running Into",
          cols: 3,
          items: [
            { title: "Wasted A Trip On A Mismatch", body: "3 of 12 students" },
            { title: "Errors Blamed On Lost Info", body: "4 of 4 vendors" },
            { title: "Could Explain A Basic Spec", body: "2 of 12 students" },
          ],
        },
        {
          type: "quote",
          text: "I want to know BEFORE I leave my hostel room whether a shop can actually do what I need. I don't want to gamble with a cab ride.",
        },
        {
          type: "textBlock",
          lede: true,
          body: "That's Ananya, an architecture student, describing something that had already happened to her twice. I didn't open Figma first. I'd watched people arrive at a jury review late, holding a print still warm from the machine, and everyone kept calling it bad luck — wrong shop, wrong day. Nobody was saying this keeps happening for the same reason. So I started asking whether it did.\n\nThat one line from Ananya is the actual reason this project exists. Not a market gap I'd read about somewhere. A person describing a gamble she shouldn't have had to take, every submission week.",
        },
        {
          type: "textBlock",
          body: "Four friends want to watch a movie tonight. They open a booking app. If seats are available, they book. If the show is sold out, the app doesn't just say \"no seats\" and leave them stuck — it shows the next showtime, or a nearby theatre, or they regroup and get food instead. The app's actual job was never \"sell tickets.\" It was to tell them the truth early enough that they still had a good evening either way.\n\nPANDA had the same job. Just with a print job instead of a movie ticket. My first version never learned to say that.",
        },
        { type: "image", src: "images/panda-print/PANDA-03-HERO-VISUAL-APP-PORTAL.jpg", placeholder: "Hero visual — the app and the portal, side by side" },

        {
          type: "twoColText",
          index: "01 / Overview",
          navLabel: "Overview",
          navTime: "01",
          heading: "What This Project Is",
          body: "PANDA connects students and print vendors on Indian college campuses into one system. I designed it solo, over six weeks, around coursework and an internship — not a full-time sprint, and that constraint shows up later in a couple of the decisions I made.\n\nThere are two complete versions inside this case study, and that's deliberate: a native app I actually built and completed, and the portal that replaced it. I'm not hiding the first one behind the second, better one. The pivot only makes sense if you can see what it was a pivot away from.",
        },

        {
          type: "twoColText",
          index: "02 / Notice",
          navLabel: "Notice",
          navTime: "02",
          heading: "It Isn't An Architecture-Student Problem.",
          body: "Printing failure isn't specific to design students, or to any one department. Across every department in the research sample — Architecture, Civil and Mechanical Engineering, MBA, B.Com, M.Tech CS, and M.Sc Biotechnology — students run into the same three walls: they can't verify a vendor's real capability before committing time and transport; they can't describe what they need in technical terms, regardless of what they study; and once a job is accepted, they have no way to confirm quality before a full, sometimes costly, batch runs.\n\nWhat changes by department is only the shape of the deadline — a jury board, a case submission, a lab report. The underlying friction doesn't move.",
        },
        {
          type: "cardGrid",
          heading: "Who This Impacts, And How They Live With It Today",
          cols: 2,
          items: [
            { title: "Transport-Dependent Students", body: "Call a shop, get a verbal \"ho jayega,\" travel on faith, find out on arrival. 9 of 12 students interviewed live in a hostel or PG and depend on booked transport for every print run — a wasted trip isn't just wasted time, it's a wasted booking." },
            { title: "Students, Any Department", body: "Re-explain the same spec at every visit, in whatever vocabulary they happen to have — because nobody in the sample, technical background or not, could reliably use a vendor's own terms." },
            { title: "Vendors", body: "Take orders by paper token and parallel WhatsApp threads, all concentrated into the same rush windows every submission week, with no low-cost way to even try a more structured system." },
            { title: "Faculty (Scope Parked)", body: "See the downstream effect — late or wrong submissions — without visibility into why. I kept their interviews in the research bank for a future phase. They're out of scope for this build." },
          ],
        },
        {
          type: "cardGrid",
          heading: "If This Stays Broken vs. If It Gets Fixed",
          cols: 2,
          items: [
            { title: "If This Stays Broken", body: "The same trip gets wasted, every submission week, for a slightly different student. The transport tax stays theirs. The self-blame for a spec nobody taught them stays theirs. Vendors keep losing orders to information lost in a rush-hour thread — not to a lack of skill." },
            { title: "If It Gets Fixed", body: "Students stop gambling a cab ride on a guess. Vendors stop losing orders to their own memory. And the failure faculty currently see only as \"a late submission\" gets a traceable cause — even if acting on that cause is a later phase, not this one." },
          ],
        },

        {
          type: "cardGrid",
          navLabel: "Alternatives",
          navTime: "03",
          heading: "None Of These Were Built For This Handoff",
          intro: "Drawn from a short market-landscape pass alongside the interviews, not from the 20-person sample itself.",
          cols: 2,
          items: [
            { title: "WhatsApp + Phone + Walk-In (Status Quo)", body: "Free, familiar, zero setup — and the actual failure mode this project exists to fix. Specs, files, and confirmations all live in unstructured chat with no shared record. It's the real competitor. But it's inertia, not a rival product." },
            { title: "Campus Print-Management Software (Pharos, PaperCut)", body: "Manages institution-owned printers and cost-recovery quotas, and does it well on organised campuses. A different job entirely — neither has a concept of an independent, off-campus vendor network." },
            { title: "On-Demand Print Platforms (Printo, PrintStop, Vistaprint)", body: "Consumer and business print-and-ship e-commerce, built for a multi-day, ship-to-door timeline. The wrong shape entirely for a same-day, jury-deadline print." },
            { title: "Hyperlocal Commission Marketplaces (Dunzo-Style)", body: "Not print-specific, and not built for capability verification — but the closest existing mental model students already trust. That's exactly why PANDA borrows its shape instead of inventing a new one. Ananya said as much before I'd designed anything: \"Like food delivery apps — show me what's available before I order.\"" },
          ],
        },
        { type: "image", src: "images/panda-print/PANDA-04-MARKET-LANDSCAPE-VISUAL-COMPETITOR.jpg", placeholder: "Market-landscape visual — competitor tiers, positioning map" },

        {
          type: "twoColText",
          index: "04 / Research",
          navLabel: "Research",
          navTime: "04",
          heading: "Twenty Interviews, Not One Survey.",
          body: "Twenty structured interviews. Every number in this case study traces back to a specific person, not a survey I ran once and rounded up: twelve students across seven departments, four print vendors near campus, and four faculty — whose data I kept, but whose scope I parked for this build.",
        },
        {
          type: "hmw",
          heading: "What I Actually Asked — Students",
          items: [
            "Walk me through the last time you got something printed for a submission, start to finish.",
            "Has a shop ever told you it could do something, and then couldn't? What did you do next?",
            "What actually decides which print shop you go to?",
            "Which of these do you know — DPI, GSM, CMYK — and what do you think each one means?",
            "Tell me about a time printing became stressful right before a deadline.",
            "If you could know one thing about a vendor before leaving to visit them, what would it be?",
            "What would make you trust a shop you'd never used before?",
          ],
        },
        {
          type: "hmw",
          heading: "What I Actually Asked — Vendors",
          items: [
            "Walk me through a typical rush-hour day, start to finish.",
            "Think of a recent mistake on an order — what actually caused it?",
            "How do you currently keep track of multiple orders at once?",
            "What information do you wish arrived with the order automatically, instead of you having to ask?",
            "What would make submission-week rush hours easier to manage?",
          ],
        },
        { type: "noteBox", label: "A Few Follow-Ups Came Up Naturally", text: "Four faculty interviews ran in parallel, focused on how printing failures show up in grading. That data stays in the research bank — it's out of scope for this build." },

        {
          type: "twoColText",
          index: "05 / Insight",
          navLabel: "Insight",
          navTime: "05",
          heading: "I Was Chasing The Wrong Failure.",
          body: "Key findings as fractions — twelve and four people is a real sample, not a statistic.",
        },
        {
          type: "statGrid",
          stats: [
            { value: "3/12", label: "students wasted a trip on a vendor that couldn't do the job — confirmed independently by 2 of 4 vendors" },
            { value: "4/4", label: "vendors blamed lost information during rush hour, unprompted — not their own skill" },
            { value: "2/12", label: "students could explain a basic print spec term and were actually familiar with what it meant" },
            { value: "6/12", label: "named plain delay, not capability mismatch, as their single most common complaint" },
          ],
        },
        {
          type: "defList",
          heading: "Mistake Types Students Actually Reported",
          items: [
            { label: "Delay — 6/12", value: "The single most common complaint, and the finding that reshaped the whole project's priorities." },
            { label: "Missing Pages — 5/12", value: "File-version mix-ups, pages dropped between upload and print." },
            { label: "Wrong Copy Count — 5/12", value: "Miscommunication, mostly during rush-hour verbal orders." },
            { label: "Wrong Colour — 4/12", value: "Whole-file colour assumptions when only specific pages needed it." },
            { label: "Wrong Orientation — 3/12", value: "Landscape printed portrait." },
            { label: "Wrong Paper — 3/12", value: "Paper-finish assumptions gone wrong." },
            { label: "Wrong Binding — 1/12", value: "Rare, but disproportionately high-stakes when a hard cutoff is involved." },
          ],
        },
        { type: "noteBox", label: "The Surprise", text: "I started this project assuming capability mismatch — the wasted-trip story — was the core problem. The research said delay was more common, and trust mattered to students more than pre-visibility alone. The product needed to reduce uncertainty and build trust, not just speed up matching." },

        {
          type: "cardGrid",
          heading: "What I Actually Heard, Grouped",
          cols: 3,
          items: [
            { title: "Core Desires", body: "Know before travelling. Specs that travel with the order, so nobody re-explains them. Reputation and social proof. A preview before commit. One visible queue, not tokens." },
            { title: "Deep Friction Points", body: "Trust asymmetry — you can't verify anything until you've already travelled. The DPI/CMYK/GSM vocabulary gap. A repetition tax at every visit. A transport tax specific to hostel and PG students. Self-blame for spec failures that were never theirs to own." },
            { title: "Mental Models Already In Their Heads", body: "\"Like food delivery apps — show me what's available before I order\" (Ananya). \"Reviews from other students, like Zomato ratings, but for print shops\" (Vikram). A sticky note reading \"ALL PAGES COLOUR\" in capital letters (Divya) — the analog workaround people had already built, for a problem that didn't have a digital one yet." },
          ],
        },
        {
          type: "hmw",
          heading: "How Might We",
          items: [
            "Let students confirm a vendor's real-time capability before they leave campus, so they never travel speculatively?",
            "Give vendors a simple way to broadcast equipment downtime or capacity limits instantly?",
            "Translate technical print requirements into plain language, for students without a design background?",
            "Replace verbal, repeated spec explanations with something that travels automatically with the order?",
            "Give vendors a single organised queue, replacing paper tokens and scattered WhatsApp threads?",
            "Cleanly separate individual orders within a shared group print job?",
          ],
        },

        {
          type: "personaGrid",
          heading: "Meet The People Behind The Data",
          people: [
            { name: "Ananya Rao", role: "Hostel · Architecture · 3rd Year", bio: "Design-fluent, print-spec-illiterate, no personal transport, tight windows between classes. Wants to know a vendor can deliver on size, paper, orientation, and binding before she ever leaves her room, so a printing crisis never gets to overshadow how her work is judged. \"As a student, I want to see a shop's real capability for my exact job before I travel, so I never gamble a cab ride on a guess again.\"" },
            { name: "Priya Nair", role: "PG · MBA · 1st Year", bio: "Budget- and time-conscious, unfamiliar with binding and paper terms, working against a hard faculty cutoff. Wants written, real-time confirmation of capability before she commits a ride and an evening. \"I need it confirmed in writing, not a 'ho jayega' over the phone.\"" },
            { name: "Suresh Patel", role: "Vendor · Owner, Campus Gate Shop", bio: "Experienced, high-volume, managing rush hour with paper tokens and scattered chats. Wants every order — file, specs, copies, payment — in one visible queue instead of memory and handwriting. \"Rush hour is where all my mistakes come from — not lack of skill.\"" },
          ],
        },
        { type: "image", src: "images/panda-print/PANDA-05-PERSONA-MOOD-BOARD-PHOTO.jpg", placeholder: "Persona mood-board — photo cards for Ananya, Priya, and Suresh" },

        {
          type: "cardGrid",
          heading: "Pain Points → Design Direction",
          cols: 2,
          items: [
            { title: "Capability Mismatch → A Way To Check Before Travelling", body: "The highest-corroborated failure in the dataset needed a pre-trip answer, not a post-trip apology." },
            { title: "Spec Illiteracy → A Way To Specify Without Jargon", body: "Just 2 of 12 students could name a basic spec term and knew what it meant — the interface needed to ask questions in their language, not print vocabulary." },
            { title: "Lost Information → A Structured Order Record", body: "Four of four vendors blamed rush-hour chaos on lost information — the fix had to replace memory and paper, not add another chat." },
            { title: "Coordination Chaos → Individual Tracking Inside Shared Orders", body: "Group print runs kept producing formatting fights and copy-count disputes — a structural problem, not a \"communicate better\" problem." },
          ],
        },
        { type: "bigStatement", text: "This is the version that didn't survive contact with real people." },

        {
          type: "twoColText",
          index: "06 / Build",
          navLabel: "Build",
          navTime: "06",
          heading: "Why It Was An App.",
          body: "I built a native app called PANDA: a home screen led by \"Flash Printing — upload and print your documents in seconds,\" a live list of active orders, and a nearby-shop list showing distance, open/closed status, a speed-or-quality tag, and a star rating.\n\nIt went live with its own research behind it — most students reporting deadline stress, over half citing miscommunication, most wanting something more structured. Those numbers travelled with the app everywhere I presented it. What didn't travel with them was a participant count or a method. That gap — not the app itself — is where the real audit eventually starts.",
        },
        { type: "image", src: "images/panda-print/PANDA-06-V1-FLASH-PRINTING-HOME.jpg", placeholder: "V1 — \"Flash Printing\" home screen, live order list, nearby-shop list with ratings" },
        {
          type: "twoColText",
          index: "06.1",
          heading: "Why An App, Specifically — Not Gut Feeling",
          body: "The honest first-order reason was pattern-matching: this was the exact interaction shape every food-delivery app had already trained students to expect. But there was one real, non-cosmetic constraint too. The flow depended on an order-ready notification reaching the student in time to plan their next hour, and at the time, browser push on iOS Safari was unreliable enough that a native app felt like the only dependable way to guarantee that alert landed.\n\nThat constraint mattered less than I assumed it would. Students needed certainty before they committed to travel, not a notification after the fact. But it's the one V1 decision that came from an actual trade-off, not a copied pattern — worth saying plainly, since not every early decision in this project holds up equally well under audit.",
        },

        {
          type: "twoColText",
          index: "07 / Process",
          navLabel: "Process",
          navTime: "07",
          heading: "The Low-Fidelity Pass Missed Something.",
          body: "Early screens got mapped flow-first — upload, shop list, order confirmation — before any visual design touched them, to pressure-test the sequence on its own.",
        },
        { type: "image", src: "images/panda-print/PANDA-07-PAPER-PROTOTYPE-EARLY-SKETCHES.jpg", placeholder: "Paper prototype — early sketches of the upload, shop-list, and confirmation flow" },
        {
          type: "twoColText",
          index: "07.1",
          heading: "Digital Wireframes",
          body: "That sketch logic moved into low-fidelity digital wireframes: shop cards with distance and rating, an order form, a status screen.",
        },
        { type: "image", src: "images/panda-print/PANDA-08-LOW-FIDELITY-WIREFRAMES-SHOP.jpg", placeholder: "Low-fidelity wireframes — shop cards, order form, status screen" },
        {
          type: "textBlock",
          body: "What the low-fidelity pass missed: at wireframe stage, the shop list still had no way to show whether a vendor could actually do the job. That gap stayed invisible until real people tried to use it.\n\nMoving to high-fidelity, the visual layer got polished — colour, type, the \"Flash Printing\" framing — before that underlying capability gap had actually been fixed. That sequencing, more than any single screen, turned out to be the mistake.",
        },

        {
          type: "twoColText",
          index: "07.2",
          heading: "The Complete App Prototype",
          body: "Before the audit, before the pivot — this is V1 in full, every core screen exactly as it was completed. Drop your own screens into each slot below (each sized for a 393×852 mobile screen).",
        },
        {
          type: "imageGrid",
          cols: 3,
          aspect: "393/852",
          images: [
            { src: "images/panda-print/PANDA-09-V1-APP-HOME-FLASH.jpg", placeholder: "V1 App — Home / Flash Printing" },
            { src: "images/panda-print/PANDA-10-V1-APP-NEARBY-SHOP.jpg", placeholder: "V1 App — Nearby Shop List" },
            { src: "images/panda-print/PANDA-11-V1-APP-ORDER-UPLOAD.jpg", placeholder: "V1 App — Order Upload" },
            { src: "images/panda-print/PANDA-12-V1-APP-ORDER-CONFIRMATION.jpg", placeholder: "V1 App — Order Confirmation" },
            { src: "images/panda-print/PANDA-13-V1-APP-LIVE-ORDER.jpg", placeholder: "V1 App — Live Order Status" },
            { src: "images/panda-print/PANDA-14-V1-APP-SHOP-PROFILE.jpg", placeholder: "V1 App — Shop Profile" },
          ],
        },
        {
          type: "image",
          src: "images/panda-print/PANDA-26-V1-APP-FULL-WALKTHROUGH.gif",
          placeholder: "Full walkthrough — every V1 app screen, in motion, start to finish",
          aspect: "393/852",
          maxWidth: 340,
        },

        {
          type: "twoColText",
          index: "08 / Testing",
          navLabel: "Testing",
          navTime: "08",
          heading: "The Most Useful Thing Here Wasn't A Formal Study.",
          body: "Informal walkthroughs on the finished V1 app — faculty, friends, and a handful of student users — asked to complete the core order loop and think out loud. Not a structured study with a recruited sample. Still the single most useful thing that happened in this project.",
        },
        {
          type: "challenges",
          heading: "What Testers Actually Said",
          items: [
            { label: "Finding 01", q: "\"Why would I download an entire app for something I need a few weeks a year?\"", a: "Printing has a season, not a daily rhythm. Without a clear benefit or a felt sense of security, an install is a real cost for something used this rarely. This is the finding that eventually triggered the App → Portal decision." },
            { label: "Finding 02", q: "\"How do I know I can actually trust this?\"", a: "Trust wasn't assumed just because the app existed. Testers wanted some signal — reviews, past work, a track record — before committing a file and a trip to it." },
            { label: "Finding 03", q: "\"I'm not sure what's happening while I upload this.\"", a: "Gaps showed up specifically in the upload-and-confirm sequence. Testers weren't confident their file, spec, and shop choice were actually locked in correctly." },
            { label: "Finding 04", q: "\"Can I see a test print before the full batch runs?\"", a: "Several testers, especially for bulk or pre-booked jobs, explicitly wanted a test print option — a real feature gap V1 didn't have at all, and a direct seed for the Test Print Gate I built later." },
          ],
        },

        {
          type: "twoColText",
          index: "09 / Undo",
          navLabel: "Undo",
          navTime: "09",
          heading: "Going Back To Something I'd Already Completed.",
          body: "The audit didn't start because V1 failed publicly. It started because I kept re-reading my own launch numbers and couldn't find where they'd come from. This is where I found out why it had actually failed.",
        },
        {
          type: "hmw",
          heading: "What The Audit Found",
          items: [
            "The shop list never answered the one question that mattered. Distance, rating, a speed tag — never whether that shop could actually do this job.",
            "\"Upload and print in seconds\" skipped the one thing nobody could actually do. Only 2 of 12 students could explain a basic print spec term and knew what it meant — and V1 had no plain-language spec step at all.",
            "The launch stats were round, soft, and unsourced. No participant count, no method — numbers I'd trusted more than I'd earned the right to.",
            "It was a native app for a few-weeks-a-semester habit. A separate install, once per campus, for something that would only ever work at one college.",
          ],
        },
        { type: "bigStatement", text: "Going back wasn't the opposite of progress. It was part of it." },

        {
          type: "twoColText",
          index: "10 / Rebuild",
          navLabel: "Rebuild",
          navTime: "10",
          heading: "Decision By Decision.",
          body: "Not just the final answer — the options I actually weighed, and why one won.",
        },
        {
          type: "challenges",
          heading: "Every Option I Actually Weighed",
          items: [
            { label: "Should This Even Stay An App?", q: "Weighed: a redesigned native app vs. a responsive web portal (PWA).", a: "Chosen: the portal. Will a student install a whole app for something they need three weeks a semester, at one college only? The platform was never the actual point of the problem, so I picked whichever option got out of the way fastest." },
            { label: "Bring Back WhatsApp For Notifications?", q: "Weighed: WhatsApp Business API vs. institutional email identity plus native push.", a: "Chosen: email and push, WhatsApp kept out of the core loop. The original failure mode was WhatsApp. Bringing it back as the live channel would have rebuilt the exact thing I was trying to remove, just with a cleaner interface sitting on top of it." },
            { label: "How Should \"Urgent\" Actually Work?", q: "Weighed: a free toggle anyone can flip vs. a paid tier the vendor has to accept.", a: "Chosen: the vendor-accepted paid tier. If everyone marks their order urgent under deadline stress, the word stops meaning anything. Price and vendor acceptance keep it honest." },
            { label: "Can Every Paper Type Just Be A Dropdown?", q: "Weighed: digitising every paper type vs. keeping standard jobs digital and reserving complex ones for an in-person conversation.", a: "Chosen: the honest split. A screen genuinely cannot tell you what handmade paper feels like. Better to promise something narrower and keep it true." },
          ],
        },

        {
          type: "twoColText",
          index: "11 / Select",
          navLabel: "Select",
          navTime: "11",
          heading: "Every Idea Had To Survive The Interviews.",
          body: "Roughly forty ideas came out of the pivot. Most weren't kept — not because they were bad, but because nothing in twenty conversations had actually asked for them.\n\nKept doesn't mean perfect. It means it survived the evidence I actually had. Eleven ideas built the portal below — and this is why it's the version that worked.",
        },

        {
          type: "defList",
          navLabel: "Voice",
          navTime: "12",
          heading: "Certain. Calm. Plain. Institutional.",
          items: [
            { label: "Certain", value: "\"Can do this\" or \"can't today.\" Never \"probably.\"" },
            { label: "Calm", value: "Doesn't perform the user's panic back at them." },
            { label: "Plain", value: "Explains consequences. Never leads with jargon." },
            { label: "Institutional", value: "Feels like it belongs to the university, not a startup." },
          ],
        },
        {
          type: "cardGrid",
          heading: "Kept vs. Parked",
          cols: 3,
          items: [
            { title: "Capability Finder", note: "KEPT", body: "The shop-list ambiguity every V1 screen failed to fix; the number-one desire in the affinity map." },
            { title: "Vendor Order Queue", note: "KEPT", body: "Traced directly to four of four vendors, unprompted." },
            { title: "Test Print Gate", note: "KEPT", body: "Traced directly to the usability-study finding — testers wanted proof before a full batch ran, and V1 had no way to offer it." },
            { title: "Reference Gallery", note: "KEPT", body: "A screen can't show what paper feels like; approved, peer-shared past work stands in as a partial substitute." },
            { title: "Reverse-Auction Bidding", note: "PARKED", body: "Interesting on its own. Nothing in twenty interviews asked for it." },
            { title: "Gamified Reprint Streaks, Courier Delivery", note: "PARKED", body: "Logged, not built. No evidence base to justify either yet." },
          ],
        },
        {
          type: "cardGrid",
          heading: "Voice, Before And After",
          cols: 2,
          items: [
            { title: "Bad File Quality", body: "Don't: \"Image resolution below threshold: 96 DPI.\"\n\nSay: \"This looks compressed and may print blurry.\"" },
            { title: "No Capable Shops Nearby", body: "Don't: \"No results found.\"\n\nSay: \"3 of 5 shops nearby can't do this today — here's who can.\"" },
            { title: "Disabled / Unfulfillable Shop", body: "Don't: \"Can't fulfil this spec.\"\n\nSay: \"Can't fulfil this spec — no plotter today.\"" },
            { title: "Joining After Group Deadline", body: "Don't: leave it unhandled.\n\nSay: \"This batch closed at 6:00 PM. Ask [initiator] to start a new one.\"" },
          ],
        },

        {
          type: "twoColText",
          index: "13 / System",
          navLabel: "System",
          navTime: "13",
          heading: "Colour Drawn From The University, Not A Template.",
          body: "",
        },
        {
          type: "swatchGrid",
          swatches: [
            { hex: "#1B4F9C", name: "Primary Blue", label: "Core brand, primary actions" },
            { hex: "#0F3568", name: "Blue Deep", label: "Depth, hierarchy, dark surfaces" },
            { hex: "#C8202B", name: "Red", label: "Can't fulfil, blocked states" },
            { hex: "#B8862E", name: "Gold", label: "Caution, adjusted for AA contrast" },
            { hex: "#1E9A63", name: "Green", label: "Capable, confirmed, ready" },
          ],
        },
        {
          type: "defList",
          heading: "Typography",
          items: [
            { label: "Space Grotesk", value: "Carries the logo and headings only." },
            { label: "IBM Plex Sans", value: "Carries every line of UI copy." },
            { label: "IBM Plex Mono", value: "Carries data — prices, timestamps, specs." },
          ],
        },
        { type: "noteBox", text: "The wordmark itself stays lowercase and icon-free, deliberately, so it never has to compete with the product's own status badges for meaning." },

        {
          type: "twoColText",
          index: "14 / Flow",
          navLabel: "Flow",
          navTime: "14",
          heading: "Four Steps, In A Different Order Than V1.",
          body: "",
        },
        {
          type: "evolution",
          stages: [
            { title: "Upload First", body: "The system reads the file itself — page count, size, whether it's already in colour — instead of asking. Corrects V1's shop-first ordering." },
            { title: "Plain-Language Spec", body: "A guided wizard, never a raw technical field. Every option explains itself and shows its price as you go." },
            { title: "Capability Match", body: "Shops ranked by whether they can actually do the job, and how long the queue is. Not just distance." },
            { title: "Confirm & Track", body: "A simple Received → Test Print → Printing → Ready status, so nothing depends on a phone call to check." },
          ],
        },

        {
          type: "twoColText",
          index: "15 / Screens",
          navLabel: "Screens",
          navTime: "15",
          heading: "Each Screen Traces Back To A Specific Answer.",
          body: "",
        },
        {
          type: "cardGrid",
          cols: 2,
          items: [
            { src: "images/panda-print/PANDA-16-CAPABILITY-FINDER-HIGH-FIDELITY.jpg", placeholder: "Capability Finder — high-fidelity screen", title: "Capability Finder", body: "Every shop shows a live yes-or-no badge before any commitment." },
            { src: "images/panda-print/PANDA-17-PLAIN-LANGUAGE-ORDER-WIZARD.jpg", placeholder: "Plain-Language Order Wizard — high-fidelity screen", title: "Plain-Language Order Wizard", body: "Never surfaces DPI, CMYK, or GSM without an inline explanation next to it." },
            { src: "images/panda-print/PANDA-18-VENDOR-QUEUE-EQUIPMENT-TOGGLE.jpg", placeholder: "Vendor Queue + Equipment Toggle — high-fidelity screen", title: "Vendor Queue + Equipment Toggle", body: "Replaces paper tokens and scattered WhatsApp threads with one structured, visible queue." },
            { src: "images/panda-print/PANDA-19-TEST-PRINT-GATE-HIGH.jpg", placeholder: "Test Print Gate — high-fidelity screen", title: "Test Print Gate", body: "A direct response to what usability testers actually asked for: proof before a full run, not after." },
          ],
        },
        { type: "bigStatement", text: "This is the version that held up — because every screen answers a question a real person actually asked." },

        {
          type: "twoColText",
          index: "16 / Limit",
          navLabel: "Limit",
          navTime: "16",
          heading: "A Screen Can't Tell You What Handmade Paper Feels Like.",
          body: "GSM, finish, and grain change how a print looks and feels in ways no dropdown can fully capture. Standard jobs stay fully digital, end to end. Complex or specialty-paper jobs shift from \"confirm the exact spec\" to \"confirm the equipment and stock exist, and reserve a time.\" An honest half-solution, instead of a false promise.",
        },

        {
          type: "twoColText",
          index: "17 / Evidence",
          navLabel: "Evidence",
          navTime: "17",
          heading: "I'd Rather Say What I Don't Know Yet.",
          body: "What's real: twenty named interviews behind the redesign, and an informal usability pass on the finished V1 app. What hasn't happened yet: a formal, task-based usability test of the portal itself, with a documented sample and recorded outcomes.\n\nI'm not going to dress that gap up as a metric it isn't. What I can point to instead is traceability — every screen in this case study, the capability badge, the queue, the test print gate, all four pivot decisions, ties back to a specific person's answer, not a hunch of mine. That's the confidence I'm willing to claim before the portal gets tested the same way V1 was.\n\nTwo research rounds are already written and ready to run: a full-evening onsite observation at a partner vendor during a real submission-week rush, and a deeper vendor follow-up on pricing, capacity, and test-print economics.",
        },

        {
          type: "hmw",
          navLabel: "Reflect",
          navTime: "18",
          heading: "The Most Useful Thing I Did Wasn't A Screen",
          items: [
            "My own first version's numbers should have been questioned before a single screen got built. Round percentages with no method are a warning sign, not a green light.",
            "Reducing uncertainty mattered more than adding features. The highest-leverage screens in this whole project — the capability badge, the queue — are also the simplest ones.",
            "The most useful thing I did on this project wasn't a screen. It was going back to something I'd already completed and asking whether it actually held up.",
          ],
        },

        {
          type: "twoColText",
          index: "19 / Forward",
          navLabel: "Forward",
          navTime: "19",
          heading: "The UI Waits Until The Research Runs.",
          body: "Run the two pending research rounds before touching the UI again. Beyond that: live equipment availability at scale, campus-wide authentication across more than one institution, and a tested compensation policy for when a bad batch gets discovered after pickup.",
        },

        {
          type: "twoColText",
          index: "19.1",
          heading: "The Complete Portal Prototype",
          body: "Every core screen of the rebuilt portal, end to end — this is the version that's still standing.",
        },
        {
          type: "videoPlaceholder",
          src: "images/panda-print/PANDA-27-PORTAL-FULL-WALKTHROUGH-VIDEO.mp4",
          aspect: "1900/800",
          maxWidth: 1900,
          label: "Full walkthrough video — every portal screen, in motion, start to finish",
        },

        {
          type: "textBlock",
          body: "I set out to build something that printed faster. I ended up rebuilding the one moment before that — whether someone should get in the cab at all.",
        },
        {
          type: "quote",
          text: "PANDA stopped being an app that helped you print faster, and became a portal that tells you, honestly, what's actually possible before you commit to anything.",
        },
      ],
    },
  },
  {
    id: "rath-yatra",
    title: "Rath Yatra Wayfinding",
    category: "Product Design / UX",
    badge: "Case Study",
    eyebrow: "Pedestrian Wayfinding & Signage System",
    description: "A temporary wayfinding system for fifteen lakh pedestrians at Puri's Rath Yatra — the layer underneath the AI cameras and traffic alerts, designed for someone on foot with a dead phone.",
    thumbnail: "images/rath-yatra/RATH-YATRA-01-THUMBNAIL.jpg",
    year: "2026",
    tall: false,
    homeOutcome: { label: "Outcome", stat: null, text: "25 sign & banner types across 5 priority tiers, 3 map formats, 25 custom pictograms, 201+ physical installs specified." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[03]",
      tagline: "Grand Road already had a wayfinding system. It just wasn't for anyone walking.",
      heroImage: "images/rath-yatra/RATH-YATRA-25-HERO.jpg",
      meta: [
        { label: "Role", val: "Wayfinding & Signage System Design" },
        { label: "Duration", val: "Multi-Phase, Iterative" },
        { label: "Scope", val: "Sign Family, Map System, Brochure, Banners" },
        { label: "Tools", val: "Illustrator, Print & Fabrication Spec" },
        { label: "Outcome", val: "25 Sign Types · 201+ Installs Specified" },
      ],
      blocks: [
        { type: "quote", text: "The obvious brief was \u201cdesign signage for a crowded festival.\u201d The real one turned out to be narrower and harder: design for someone who can't read the language, can't get a signal, and can't afford to be wrong about which way to walk." },
        {
          type: "textBlock",
          lede: true,
          body: "I didn't start by designing a sign. I started by reading what already exists for this event, because I wanted to know exactly what gap I was actually filling — not the gap I assumed was there.",
        },
        {
          type: "statGrid",
          stats: [
            { value: "10-13L", label: "Pilgrims on the main chariot day" },
            { value: "25L", label: "Total attendance across 9 festival days" },
            { value: "3km", label: "Grand Road procession route" },
            { value: "10,000", label: "Security personnel deployed" },
          ],
        },

        {
          type: "twoColText",
          navLabel: "Notice",
          navTime: "01",
          index: "01 / Notice",
          heading: "The Problem Wasn't Signage. It Was Who Signage Was For.",
          body: "I started by reading what already existed for Rath Yatra, not by listing what was missing. Puri already runs 275+ AI-enabled cameras, drone surveillance, an integrated command centre, and a bulk-SMS alert system for traffic. On paper, that looks like a well-managed event.\n\nNone of that infrastructure is built for a pedestrian. It's built to watch the crowd, route vehicles, and push alerts to phones that mostly don't have signal once the crowd gets dense enough to need them. Someone on foot, inside 10–13 lakh other people on the main day alone, has no equivalent system telling them where they are or where to go.\n\nI didn't take that gap on faith. I mapped the actual walking route myself — parking nodes, named chakas, shuttle stops — before I designed a single sign.",
        },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-02-EARLY-FIELD-MAPPED-WALKING.jpg", placeholder: "Early field-mapped walking route, hand-annotated" },
        {
          type: "colorBand",
          eyebrow: "The Safety Reality",
          heading: "This Isn't A Hypothetical Risk To Design Around.",
          image: "images/rath-yatra/RATH-YATRA-03-COMPLETE-WALKING-ROUTE-MAP-FINAL.jpg",
          body: "Crowd-crush incidents with fatalities and mass injuries have occurred in multiple recent years near Marichikota / Marichikund Chhak — the same junction independently flagged during field mapping. National disaster-management data indicates a large majority of stampede events in India happen specifically at religious gatherings.\n\nI'd flagged Marchikote Chaka as a confusing junction, without knowing why it felt that way. Cross-referencing it against public incident records afterward showed it has a real, recorded history of crowd-crush injuries. I hadn't designed around a hypothetical risk. I'd independently rediscovered a real one.",
        },
        { type: "bigStatement", text: "That coincidence is the reason safety sits above everything else in the system's priority order — not a principle I adopted because it sounded responsible." },

        {
          type: "twoColText",
          index: "01.1",
          heading: "Existing Wayfinding — What's There, What's Missing",
          body: "",
        },
        {
          type: "defList",
          items: [
            { label: "26 designated \"safe zones\" along Grand Road, tied to nearby landmarks", value: "Operationally designated, not physically sign-posted" },
            { label: "Reunion centres for separated children", value: "No visible icon or standing signage pointing toward them" },
            { label: "Multi-language PA announcements (Odia, Hindi, Telugu, Bengali)", value: "Audio-only — unusable out of earshot or in crowd noise" },
            { label: "Bulk SMS + LED displays for real-time updates", value: "Built for vehicle traffic, not someone on foot" },
          ],
        },
        { type: "noteBox", text: "Every gap above is a real, evidence-backed brief for a specific sign type — not a generic call for \"more signage.\"" },

        {
          type: "twoColText",
          navLabel: "Question",
          navTime: "02",
          index: "02 / Question",
          heading: "What Does \"Wayfinding\" Even Mean At Thirteen Lakh People?",
          body: "Every wayfinding reference I studied — a convocation campus, a nature park, a zoo — was calm, permanent, and low-stakes. I could borrow their structure: a brief-to-ethos narrative, a disciplined sign schedule, a real icon library. I couldn't borrow their content. None of them had to answer what happens if a sign is illegible from thirty metres away in a crowd that's already anxious.\n\nAll three references are calm, permanent, low-stakes environments. Rath Yatra is none of those things — the references supplied structure; the content had to be built from scratch.",
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { src: "images/rath-yatra/RATH-YATRA-04-NID-CONVOCATION.jpg", title: "NID Convocation", body: "Brief → problem → ethos storytelling; bilingual type pairing; viewing-distance diagram." },
            { src: "images/rath-yatra/RATH-YATRA-05-CEDAR-HOLLOW.jpg", title: "Cedar Hollow", body: "Disciplined sign schedule; technical spec drawings; staged 3D context mockups." },
            { src: "images/rath-yatra/RATH-YATRA-06-HANOI-ZOO.jpg", title: "Hanoi Zoo", body: "Complete, consistent icon library; full guideline-document packaging." },
          ],
        },
        {
          type: "textBlock",
          body: "So I built two people to design against, not a generic \"user.\" They needed almost opposite things — landmark-anchored reassurance versus fast, icon-only decisions. That tension is what forced the system to carry both, instead of optimising for one and calling it done.",
        },
        {
          type: "personaGrid",
          people: [
            { name: "Bijay — The Returning Pilgrim", role: "~50, With Family", bio: "Visited Puri often as a child in the 1980s–90s; hasn't been back in over a decade. The city he remembers doesn't match what's in front of him — new parking zones, diverted roads, barricades that make no sense to his old mental map. Needs landmark-anchored cues, clear \"you-are-here\" orientation, visible reunification points, a marked accessible route. \"I used to know this road with my eyes closed. Now I don't trust what I remember — I need something to tell me I'm still going the right way.\"" },
            { name: "Aakash — The First-Timer", role: "~23, With Friends", bio: "First visit to Puri, tech-comfortable, travelling with three college friends. His phone is nearly useless in the dense crowd — network overload, no single official map. Needs fast, icon-led decisions at junctions, a lightweight offline/SMS backup, signage that treats him as an explorer, not just a devotee. \"I don't need a lecture, I just need to know if I turn left here or keep going.\"" },
          ],
        },
        { type: "bigStatement", text: "Six principles came out of that, and I kept returning to them whenever a design choice started to feel arbitrary." },
        {
          type: "evolution",
          heading: "Design Principles",
          stages: [
            { title: "Safety Before Amenity", body: "Validated by recorded crowd-crush incidents." },
            { title: "Legible Without Literacy", body: "Icon-first for a multi-state pilgrim base." },
            { title: "Landmark-Anchored", body: "Not just distance — serves outdated mental maps." },
            { title: "Works Offline", body: "Physical & SMS-based over app-dependent." },
            { title: "Fast To Deploy & Strike", body: "Nothing that needs excavation." },
            { title: "Visible Day And Night", body: "Retroreflective or lit for evening events." },
          ],
        },
        { type: "noteBox", label: "On The Palette", text: "I almost kept the references' colour and type systems as-is. The more I sat with them, the less convincing that felt — a nature park's forest green has no reason to exist in a festival built around Jagannath's own traditional colours. I kept their discipline. I rejected their palette." },

        {
          type: "twoColText",
          index: "02.1",
          heading: "Critiquing The Initial Concepts",
          body: "The project began with two hand-built sign concepts already in progress. Rather than starting over, these were critiqued and extended into the full system.",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/rath-yatra/RATH-YATRA-07-INITIAL-CONCEPT-DIRECTIONAL-SIGN-BUG.jpg", tag: "The bug" },
            { src: "images/rath-yatra/RATH-YATRA-08-INITIAL-CONCEPT-ACCESSIBLE-ROUTE-SIGN.jpg", tag: "The fix" },
          ],
        },
        {
          type: "hmw",
          heading: "What Worked, What Needed Fixing, What Was A Real Bug",
          items: [
            "What worked: cream-on-brown contrast already passed accessibility checks; a second colour (teal) for a different sign category was a legitimate wayfinding technique, not an inconsistency.",
            "What needed fixing: the accessible-route sign's supporting text sat in low-contrast pale teal on teal — ironic on a sign meant to serve people who may already have low vision. Corrected to full cream.",
            "A real bug caught in review: the directional sign showed identical Odia text under two different English labels (\"Grand Road\" and \"Railway Station\") — a leftover copy-paste error.",
          ],
        },

        {
          type: "twoColText",
          navLabel: "Undo",
          navTime: "03",
          index: "03 / Undo",
          heading: "The First Map Was Correct. It Still Felt Wrong.",
          body: "The first map I built was a single straight line with four labelled junctions and research data — footfall percentages, timing notes — printed directly onto it. Technically accurate. I could defend every number on it.\n\nIt didn't survive review. The feedback was blunt: information was missing, and I hadn't looked hard enough. So I went the other way — cut it to two junctions, stripped the annotations, made the type bigger. Cleaner, and worse. In simplifying it, I'd deleted real route information along with the visual noise.",
        },
        { type: "bigStatement", text: "Neither version was actually wrong. Both were solving for the wrong thing." },
        {
          type: "textBlock",
          body: "The first optimised for completeness. The second optimised for clarity. The map needed both at once, and the fix wasn't a compromise between them — it was a different structure entirely.\n\nFive distinguishable route types carry the navigation layer. A numbered \"field notes\" strip along the bottom carries every piece of local knowledge, cross-referenced to small markers on the map itself — the same logic as a footnote. Nothing from the original got deleted. It stopped competing for the same visual space.",
        },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-09-MAP-V1-CLUTTERED-DATA.jpg", placeholder: "Map V1 — cluttered, data printed directly onto the map" },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-10-MAP-V2-OVER-SIMPLIFIED.jpg", placeholder: "Map V2 — over-simplified, real route information lost" },
        { type: "noteBox", label: "A Printed Map's Oldest Limitation", text: "I made the same call again for a printed map's oldest limitation: it can't show a live dot. Instead of pretending it could, I gave it a grid reference — A to F, one to five — so a location can be described without GPS, plus a \"you are here\" marker that's explicitly reprinted per install site, not faked as universal. This one stayed. It's the version every later map format — the brochure insert, the installed board, the locator chip on individual signs — was built from." },

        {
          type: "twoColText",
          navLabel: "Rebuild",
          navTime: "04",
          index: "04 / Rebuild",
          heading: "A System, Not A Sign.",
          body: "Once the map logic held, I stopped designing individual signs and started designing a system that twenty-five of them could belong to: one colour and icon tier for emergency, one for directional, one for accessibility, one for amenity, one for regulatory. The same red that marks a safe zone on a ground sign marks it on the overhead flag, the map legend, and the brochure. Learn it once at any single sign, and it already applies everywhere else.",
        },
        {
          type: "evolution",
          heading: "The Five-Tier Colour System",
          stages: [
            { marker: "1", title: "Emergency & Safety", body: "Help points, medical, lost-and-found, evacuation." },
            { marker: "2", title: "Directional", body: "Route arrows, distances, junction ID, gantries." },
            { marker: "3", title: "Accessibility", body: "Accessible routes, senior/PwD assistance." },
            { marker: "4", title: "Amenity", body: "Water, food, toilets, luggage, phone charging." },
            { marker: "5", title: "Regulatory", body: "Rules, closures, no-entry, restricted zones." },
          ],
        },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-11-25-CUSTOM-PICTOGRAMS-SEVERAL.jpg", tag: "25 custom pictograms — several with no equivalent in generic icon sets" },
        {
          type: "textBlock",
          body: "Two decisions from that phase are worth keeping in the story, for different reasons. The first was a design call I got wrong before I got it right: my first police icon was a generic badge-and-star — legible on its own, but close enough to the general \"help point\" symbol that it didn't actually read as police at a glance. I redrew it as a peaked cap instead. Smaller decision than it sounds: the whole icon set only works if each symbol is unmistakable from the others at a distance, and \"correct\" is a much lower bar than \"unmistakable.\"",
        },
        {
          type: "noteBox",
          label: "The Second Wasn't A Design Decision At All",
          text: "It was a bug, and it taught me something a design decision couldn't have. A batch of sign files quietly failed to open in Illustrator. The cause was one unescaped ampersand in a line of body text — \"First aid & ambulance point\" — which is invalid XML, and any strict parser rejects it outright. I didn't patch the individual files. I fixed the text-generation function itself, so every string in the system now passes through one escaping rule, and regenerated the entire library in a single pass. A one-line bug in a shared function is cheaper to fix once, at the source, than twenty times downstream.",
        },

        {
          type: "sizingCalculator",
          index: "04.1",
          heading: "Sizing Methodology",
          body: "A widely used wayfinding rule of thumb: work backward from how far a sign needs to be read, then size the lettering to match. Drag the slider — a junction sign read from 12m needs ~40mm caps; a beacon sign spotted from 30m needs ~100mm.",
          min: 3,
          max: 30,
          start: 12,
          factor: 0.3,
        },
        { type: "noteBox", label: "Rule 2 — Crowd Clearance", text: "In a dense standing crowd, sightlines below ~2.1m get blocked by the people themselves. Every standing sign keeps its readable face between 1.6m and 2.9m above ground — high enough to clear heads, low enough to stay human-scaled." },

        {
          type: "twoColText",
          index: "04.2",
          heading: "The Complete Sign Family",
          body: "20 sign types across all five tiers, each designed once as a reusable template — 201+ physical installs come from printing the same file at real mapped locations.",
        },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-12-COMPLETE-SIGN-FAMILY-ALL-TIERS.jpg" },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/rath-yatra/RATH-YATRA-13-SAFE-ZONE-MARKER-TIER.jpg", tag: "Safe Zone Marker — Tier 1, sited at real recorded crowd-crush locations" },
            { src: "images/rath-yatra/RATH-YATRA-14-ACCESSIBLE-ROUTE-TIER-3.jpg", tag: "Accessible Route — Tier 3, contrast-corrected" },
          ],
        },
        {
          type: "textBlock",
          body: "Overhead & dense-crowd formats, built for visibility above head height: a Safety Beacon Flag (700×2000mm on a 4.5m pole), a Chaka Gate Banner (2500×700mm, overhead), and a Welcome & Safety Banner (3000×900mm at entry points).",
        },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-15-OVERHEAD-BANNERS-ALL-THREE.jpg" },
        {
          type: "textBlock",
          body: "Shuttle service sits in Tier 2 — Directional, built out into a full transit family: stop markers, auto stands, terminal signage, and a route/schedule board.",
        },
        { type: "image", src: "images/rath-yatra/RATH-YATRA-16-TRANSIT-SIGNAGE-FAMILY.jpg" },
        {
          type: "textBlock",
          body: "The brochure: an A3 sheet, trifold with a secondary half-fold. Side A carries the map at a 2:1 ratio against its legend; Side B carries eight image-forward content panels.",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/rath-yatra/RATH-YATRA-17-SIDE-MAP-LEGEND.jpg", tag: "Side A — Map + Legend" },
            { src: "images/rath-yatra/RATH-YATRA-18-SIDE-B-CONTENT-GRID.jpg", tag: "Side B — Content Grid" },
          ],
        },

        {
          type: "twoColText",
          navLabel: "Prove",
          navTime: "05",
          index: "05 / Prove",
          heading: "Testing It Against A Real Street.",
          body: "A sign that only exists on a clean cream background hasn't actually been tested. I placed the Rules & Guidelines board — the sign carrying the most text in the whole system — into two real Puri street photographs: one quiet approach road, and one actual dense crowd at a temple gate.\n\nThe quiet version looked fine. That was never the real test. The dense-crowd version is the one that mattered, because that's the exact condition the sign was designed for, and the condition where most wayfinding quietly fails — legible type competing with real signage clutter, real people, real light. It held up. That's the closest thing this project has to proof, short of an actual installation.",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/rath-yatra/RATH-YATRA-19-QUIET-STREET.jpg", tag: "Quiet street" },
            { src: "images/rath-yatra/RATH-YATRA-20-DENSE-CROWD-TEMPLE-GATE.jpg", tag: "Dense crowd, temple gate" },
          ],
        },
        {
          type: "textBlock",
          body: "More mockups in context: the shuttle service at a roundabout and at the actual bus terminal alongside real coaches, a junction directional post mounted on an existing municipal lamp post (no new infrastructure needed), and the map board tested at two different real intersections.",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/rath-yatra/RATH-YATRA-21-MOCKUP-SHUTTLE-SERVICE-ROUNDABOUT.jpg" },
            { src: "images/rath-yatra/RATH-YATRA-22-MOCKUP-SHUTTLE-SERVICE-BUS-TERMINAL.jpg" },
            { src: "images/rath-yatra/RATH-YATRA-23-MOCKUP-DIRECTIONAL-POST-LAMP-POST.jpg" },
            { src: "images/rath-yatra/RATH-YATRA-24-MOCKUP-MAP-BOARD-COMMERCIAL-JUNCTION.jpg" },
          ],
        },
        {
          type: "statGrid",
          stats: [
            { value: "25", label: "Sign & banner types" },
            { value: "201+", label: "Physical installs specified" },
            { value: "5", label: "Priority colour tiers" },
            { value: "25", label: "Custom pictograms" },
            { value: "3", label: "Map formats" },
            { value: "1", label: "Brochure, 8 panels" },
          ],
        },

        {
          type: "twoColText",
          navLabel: "Move Forward",
          navTime: "06",
          index: "06 / Move Forward",
          heading: "What I'd Still Question.",
          body: "I'd still question the Odia translations. Every line of local-language copy in this system is marked draft, on purpose — written in good faith, but I'm not a native speaker, and a wrong word on real signage isn't a small mistake. That's not a gap I'm comfortable rounding up from.\n\nI'd also still question whether the pedestrian-volume model holds against a real headcount, and whether the chaka positions match this year's actual barricade plan rather than last year's. A model built from public advisories is a reasonable starting assumption. It isn't a substitute for walking the route again, closer to the date.",
        },
        { type: "bigStatement", text: "What changed most over the course of this project wasn't the visual system. It was how much of the work turned out to be about deciding what to say no to." },
        {
          type: "hmw",
          heading: "Next Steps",
          items: [
            "Real Odia verification — every file is marked draft; a native speaker or local vendor needs to review before fabrication.",
            "On-the-ground validation — the pedestrian volume model, chaka positions, and sign quantities should be checked against current-year advisories.",
            "Installation/elevation diagram — one drawing showing pole, banner, and flag side-by-side with the height call-outs already established.",
            "Further context mockups — more real-street placements, especially at the highest-risk junctions identified in research.",
          ],
        },
        { type: "quote", text: "A map that says less to say more. An icon redrawn because \u201ccorrect\u201d wasn't the same as \u201cunmistakable.\u201d A system built to be reprinted and repositioned, not treated as finished. I went back more times than I moved forward in a straight line. I'd still call that the more honest way to build something this many people are going to rely on — on foot, in a crowd, without a signal." },
      ],
    },
  },


  {
    id: "grocery-wallet",
    title: "Grocery Shopping As A System",
    category: "Product Design / UX",
    badge: "Systems Thinking",
    eyebrow: "Systems Thinking Coursework",
    description: "A systems-thinking study of how customers, stores, platforms, supply chains, and logistics hold up something as ordinary as buying groceries — six frameworks, a physical giga-map, and one proposed direction still to be continued.",
    thumbnail: "images/grocery-wallet/GROCERY-WALLET-01-THUMBNAIL.jpg",
    year: "2026",
    tall: true,
    homeOutcome: { label: "Outcome", stat: null, text: "Mapped grocery shopping as a system across seven dimensions and surfaced the leverage points worth designing for next." },
    caseStudy: {
      tag: "Systems Thinking",
      indexLabel: "[07]",
      tagline: "It looked like an errand. It behaved like a system.",
      heroImage: "images/grocery-wallet/GROCERY-WALLET-02-HERO.jpg",
      heroImagePosition: "center top",
      meta: [
        { label: "Role", val: "Research & Systems Mapping" },
        { label: "Type", val: "Systems Thinking Coursework" },
        { label: "Team", val: "Group 04 — 9 Members" },
        { label: "Frameworks", val: "5 Whys · Causal Loop · Iceberg · Bullwhip · Giga Map" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Notice",
          navLabel: "Notice",
          navTime: "01",
          heading: "Why An Errand Deserved A System Diagram",
          body: "Grocery shopping seemed too ordinary to study. That was exactly why we picked it. It isn't a single activity — a digital order still depends on physical inventory, workers, packaging and delivery, connecting customers, stores, platforms, suppliers, pickers and delivery partners in one motion most people finish in under ten minutes and never think about again.\n\nI noticed something else, too — I wasn't observing this system from outside it. I was inside it. Kirana for a small top-up. Supermarket for the monthly run. Quick commerce when I forgot something an hour before guests arrived. Same person, four different behaviours, switching on time, urgency, price and quantity, sometimes within the same week. If the same person behaves this differently depending on context, grocery shopping isn't a habit. It's a system responding to conditions — worth taking apart properly.",
        },
        {
          type: "tagPills",
          heading: "Four Formats, One Shopper, Depending On The Day",
          tags: ["Kirana", "Supermarket", "Quick Commerce", "Monthly Bulk Buy"],
        },

        {
          type: "twoColText",
          index: "02 / Toolkit",
          navLabel: "Toolkit",
          navTime: "02",
          heading: "How We Took It Apart",
          body: "Systems thinking gives you instruments, not answers. We used six of them, each built to catch a different kind of blindness. None gave us the system on their own — used together, they gave us enough of it to stop guessing.",
        },
        {
          type: "defList",
          items: [
            { label: "5 Whys", value: "Pushes past the first explanation to the structural one underneath it." },
            { label: "Causal Loop Diagram", value: "Shows what reinforces itself, and what would balance it out." },
            { label: "Connection Circle", value: "Traces how the far end of a system loops back to its beginning." },
            { label: "Iceberg Model", value: "Separates the event you can see from the belief system underneath it." },
            { label: "Bullwhip Check", value: "Tests how a small signal gets louder as it travels down a chain." },
            { label: "Giga Map", value: "Holds the whole system on one surface, instead of one slide at a time." },
          ],
        },

        {
          type: "twoColText",
          index: "03 / Research",
          navLabel: "Research",
          navTime: "03",
          heading: "Before The Map, The Visit",
          body: "The first draft of our understanding didn't come from a slide template. It came from walking into dark stores and asking questions we didn't already have tidy answers for — then pulling in a solo UX case study on dark-store operations as a check against what we were seeing first-hand. It described dark stores as micro-fulfilment hubs built for picking and dispatching rather than browsing, and it surfaced real complaints about undisclosed expiry dates — a useful sign that what we were noticing wasn't specific to one platform. It was structural to the format.\n\nOnce the questions were on the table, the synthesis happened on a wall, not a screen — stickies colour-coded by theme, physically moved until threads appeared. That wall became the seed for the giga map that closes this study.",
        },
        {
          type: "hmw",
          heading: "Questions We Didn't Have Tidy Answers For",
          items: [
            "Why do people still choose kirana stores over supermarkets and quick commerce?",
            "Why do delivery partners choose to work for a ten-minute-delivery platform?",
            "Why do quick-commerce companies still lose money while completing deliveries on time?",
            "How does a dark store decide which few thousand SKUs to stock?",
            "What happens to stock that expires before anyone buys it?",
          ],
        },
        { type: "noteBox", label: "Secondary Reference", text: "\u201cDark-store unlocked: A UX case study in driving sales through smart operations,\u201d Medium — Design Bootcamp, 2025." },

        {
          type: "twoColText",
          index: "04 / 5 Whys",
          navLabel: "5 Whys",
          navTime: "04",
          heading: "Why Is The Fastest Way To Shop The Hardest Way To Budget?",
          body: "We picked this question over the others because it was the only one that implicated both sides of the transaction — customer and platform — at the same time.",
        },
        {
          type: "evolution",
          heading: "Customer Side",
          stages: [
            { title: "Instant Order", body: "Almost no friction between wanting something and buying it." },
            { title: "No Pause", body: "Low friction removes the pause where a plan would normally form." },
            { title: "Unplanned Purchase", body: "Becomes the default setting, not the exception." },
            { title: "Impulsive Buying", body: "Repeated often enough, unplanned purchase becomes habit." },
            { title: "Budget Imbalance", body: "Not from one purchase, but from many small ones never weighed against each other." },
          ],
        },
        {
          type: "evolution",
          heading: "Platform Side",
          stages: [
            { title: "No Regular Pattern", body: "Orders arrive small and frequent instead of planned and consolidated." },
            { title: "Weak Demand Signal", body: "Lower customer-order-frequency signals worth planning around." },
            { title: "Fixed Cost Per Delivery", body: "A small order and a large one cost roughly the same to fulfil." },
            { title: "More Picking, Packing, Runs", body: "For the same or lower revenue per trip." },
            { title: "Operational Burnout", body: "The load shows up downstream, on the fulfilment side of the same system." },
          ],
        },
        {
          type: "bigStatement",
          text: "The interface that makes buying effortless is also the one that removes the moment where budgeting would normally happen. One convenience, two costs, on opposite ends of the same transaction.",
        },

        {
          type: "twoColText",
          index: "05 / Causal Loop",
          navLabel: "Causal Loop",
          navTime: "05",
          heading: "Convenience Feeds Itself. So Does The Pressure Behind It.",
          body: "Two reinforcing loops, drawn from the giga-map board — and they don't agree with each other.",
        },
        {
          type: "defList",
          heading: "Loop R1 — Speed Pressure",
          items: [
            { label: "Convenience \u2192", value: "More small, frequent orders" },
            { label: "More small, frequent orders \u2192", value: "More delivery activity" },
            { label: "More delivery activity \u2192", value: "More picking & packing" },
            { label: "More picking & packing \u2192", value: "Operational pressure \u2192 (which platforms answer with still more convenience, restarting the loop)" },
          ],
        },
        {
          type: "defList",
          heading: "Loop R2 — Planning Economics",
          items: [
            { label: "Household commits to a plan \u2192", value: "Consolidated order" },
            { label: "Consolidated order \u2192", value: "Order value rises" },
            { label: "Order value rises \u2192", value: "Unit economics improve" },
            { label: "Unit economics improve \u2192", value: "Funds the bonuses & offers that nudge the next household to plan" },
          ],
        },
        {
          type: "textBlock",
          body: "Neither loop is good or bad by itself. What the diagram showed us is that the system currently runs almost entirely on the first loop, and barely touches the second — planning isn't the opposite of convenience, it's what quietly pays for it.",
        },

        {
          type: "twoColText",
          index: "06 / Iceberg Model",
          navLabel: "Iceberg Model",
          navTime: "06",
          heading: "The Delivery Takes Ten Minutes. The Belief Took Longer.",
          body: "We went in expecting to study a delivery format. What we found underneath it was a belief about time — that waiting, even briefly, has become the failure state worth engineering away at almost any cost.",
        },
        {
          type: "defList",
          items: [
            { label: "Events", value: "A trending item sells out within hours. A delivery runs late. A checkout shows an item just gone out of stock." },
            { label: "Patterns", value: "The same categories run out first — fast snacks, dairy, anything trending that week. Basket sizes stay small across repeat customers." },
            { label: "Structure", value: "A curated few thousand SKUs per dark store. Fixed per-delivery cost regardless of order size. Layouts built for picking speed, not browsing." },
            { label: "Mental Models", value: "Fast is treated as the same thing as good. Waiting, even briefly, is the failure state. Price and availability are someone else's problem to track." },
          ],
        },

        {
          type: "twoColText",
          index: "07 / Bullwhip Check",
          navLabel: "Bullwhip Check",
          navTime: "07",
          heading: "A Small Spike, Shouted Down The Chain",
          body: "Grocery quick commerce is a near-perfect host for the bullwhip pattern — a small demand signal getting amplified at every stage it passes through. We didn't have sales data to prove this happens at scale. What we had was the structural precondition: no buffer layer between a viral spike and a live reorder decision. That's enough to flag it as a real fault line, not a hypothetical one.",
        },
        {
          type: "evolution",
          stages: [
            { title: "Trending Post", body: "One recipe, one influencer, one viral moment." },
            { title: "Consumer Demand", body: "A spike for one SKU at nearby dark stores." },
            { title: "Store Reorder", body: "Restocking requests jump past what the trend needs." },
            { title: "Supplier Production", body: "A demand curve read as structural, not temporary." },
          ],
        },

        {
          type: "twoColText",
          index: "08 / Findings",
          navLabel: "Findings",
          navTime: "08",
          heading: "What The Map Actually Taught Us",
          body: "",
        },
        {
          type: "hmw",
          items: [
            "Convenience and planning pull in opposite directions — the system rewards speed over foresight, and that gap is where both budget imbalance and food waste start.",
            "Speed for the customer becomes pressure somewhere else in the system — pickers, delivery partners and inventory teams absorb what the interface removes.",
            "Demand has almost no shock absorber — a single viral moment can move through the chain with very little to slow it down.",
            "Trust is thinner than it looks — hidden expiry dates and dismissive support are the system's operational opacity becoming visible one customer at a time.",
            "The system is built around the transaction, not the relationship — almost none of the seven dimensions we mapped are designed around a customer who plans and returns.",
          ],
        },

        {
          type: "twoColText",
          index: "09 / Business Lens",
          navLabel: "Business Lens",
          navTime: "09",
          heading: "The Map Isn't A Product. It's Where One Could Stand.",
          body: "We stopped at the giga map on purpose — the point of this project was never to design the fix, it was to understand the system well enough that a fix, if we ever built one, wouldn't be guessing. But a systems view like this is also, quietly, a business view.",
        },
        {
          type: "cardGrid",
          cols: 2,
          items: [
            { title: "Planning Is A Retention Lever, Not A Friction Reducer", body: "Getting customers to commit to a plan, even loosely, earns predictability — which shows up as margin, not just satisfaction." },
            { title: "Consolidation Is A Margin Lever", body: "Since delivery cost stays roughly fixed regardless of basket size, nudging baskets larger turns the same fleet into a higher-margin one." },
            { title: "Transparency Is A Differentiation Lever", body: "Every platform races on the same ten-minute promise. Almost none race on trust — visible expiry, honest stock, accountable quality." },
            { title: "Demand Amplification Is A Risk You Can Price For", body: "Once a system is known to have no shock absorber, a business can build one — buffer stock, flexible contracts, faster reorder logic." },
          ],
        },

        {
          type: "twoColText",
          index: "10 / Proposed Direction",
          navLabel: "Proposed Direction",
          navTime: "10",
          heading: "One Leverage Point, Sketched — Not Solved",
          body: "We picked the moment just before purchase as the one leverage point worth sketching further: a planning-and-budget layer, loosely explored as a \u201cGrocery Wallet\u201d concept, that lets a household commit to a monthly budget once instead of deciding, and second-guessing, on every single order.\n\nThis is a proposed direction, not a finished product. The screens exist to make one idea concrete enough to argue with — they haven't been tested, and the interaction details are still open questions. What's here is a starting sketch to be continued, not a shipped answer.",
        },
        {
          type: "image",
          src: "images/grocery-wallet/GROCERY-WALLET-03-GROCERY-WALLET-INTRO.jpg",
          placeholder: "Grocery Wallet — an early, unvalidated sketch of a monthly budget-and-category layer",
        },
        {
          type: "noteBox",
          label: "To Be Continued",
          text: "Validating this against real order-history data, usability-testing the preload moment, and designing for the edge cases that break a wallet model (refunds, partial cancellations, shared households) are all still open — this is where the next pass would start.",
        },

        {
          type: "twoColText",
          index: "11 / Giga Map",
          navLabel: "Giga Map",
          navTime: "11",
          heading: "Seven Dimensions. One Purchase.",
          body: "A causal loop shows you a mechanism. An iceberg shows you a depth. Neither shows you the whole shape — for that, we needed everything on one surface at once. This is the actual output of the project: the physical board every finding above was pulled from.",
        },
        {
          type: "cardGrid",
          cols: 4,
          items: [
            { title: "Customer", body: "Needs, habits, impulse, budget." },
            { title: "Store", body: "Assortment, layout, inventory." },
            { title: "Platform", body: "Discovery, pricing, convenience." },
            { title: "Supply Chain", body: "Supplier, manufacturer, replenishment." },
            { title: "Logistics", body: "Picking, packing, delivery." },
            { title: "Economics", body: "Basket size, cost, margins." },
            { title: "Technology & Infrastructure", body: "App, data, dark stores, roads." },
          ],
        },
        {
          type: "image",
          src: "images/grocery-wallet/GROCERY-WALLET-09-GIGAMAP-MIDBUILD.jpg",
          placeholder: "The full giga-map board — stickies colour-coded by dimension, connected by hand-drawn threads",
        },
        {
          type: "image",
          src: "images/grocery-wallet/GROCERY-WALLET-11-GIGAMAP-DETAIL.jpg",
          placeholder: "Giga-map detail — one section of the board, close up",
        },
        {
          type: "textBlock",
          body: "The board looked chaotic before it looked useful, and it stayed chaotic for a while. That was the point — a giga map that resolves too quickly usually means someone stopped looking for connections too early.",
        },

        {
          type: "quote",
          text: "I went into this project expecting to study an app category. I came out having studied a belief system about time, wrapped around a purchase most people make without thinking.",
        },
        {
          type: "noteBox",
          label: "Group 04 — Under The Guidance Of Prof. Dhaval Joshi, Prof. Chaitanya P., Prof. Ajay Goyal",
          text: "Vedanshi Joshi, Harshita Bhagtani, Karan Panda, Stuti Roy, Aarya Yenpure, Hitanshi Deliwala, Priyanshi Kalaria, Rency Patel, and Kalgi Ruparelia.",
        },
      ],
    },
  },


  {
    id: "pushpaj",
    title: "Pushpaj",
    category: "Branding",
    badge: "Branding",
    eyebrow: "Dairy & Ice Cream Brand Identity",
    description: "A brand development project reviving a third-generation Rajpipla dairy — a dot-based visual system carried across six packaging formats, from strategy to shelf-ready artwork.",
    thumbnail: "images/pushpaj/PUSHPAJ-01-THUMBNAIL.jpg",
    year: "2026",
    tall: true,
    homeOutcome: { label: "What I Owned", stat: null, text: "The visual language logic and the full packaging system end to end — six SKUs, print-ready, on a ten-person brand team." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[07]",
      tagline: "The dot wasn't decoration. It was the whole system, scaled down.",
      heroImage: "images/pushpaj/PUSHPAJ-02-HERO.jpg",
      meta: [
        { label: "Role", val: "Visual Designer & Packaging Lead" },
        { label: "Type", val: "Group Project · Brand Identity" },
        { label: "Year", val: "2026" },
        { label: "Team", val: "10 Designers" },
      ],
      // navLabel / navTime tag a block as a stop on the left-hand jump
      // rail (see js/case-study.js) — the same timeline feature used on
      // the PANDA case study.
      blocks: [
        {
          type: "twoColText",
          navLabel: "Overview",
          navTime: "01",
          index: "01 / Overview",
          heading: "Never Serve What You Wouldn't Eat Yourself.",
          body: "Pushpaj carries the legacy of Ganesh Cold Drinks in Rajpipla, built on one rule the family kept for three generations: never serve what you wouldn't eat yourself. Fresh, local milk, no shortcuts, no preservatives — and decades of trust inside one town.\n\nOutside that town, the brand barely existed. The brief wasn't to invent a personality from nothing. It was to rebuild recognition and give three generations of trust a visual language strong enough to hold its own on a shelf full of louder, newer competitors.",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-03-ARCHIVAL-PHOTO-GANESH-COLD.jpg", placeholder: "Archival Photo — Ganesh Cold Drinks, the founder's original shop front" },
        {
          type: "tagPills",
          heading: "Brand Personality — Everyman · Caregiver · Innocent",
          tags: ["Fresh", "Traditional", "Clean", "Honest", "Approachable", "Caring"],
        },
        { type: "noteBox", label: "Name Origin", text: "Founded by grandparents Pushpa and Jash, the name \"Pushpaj\" is an amalgamation of their names — the family legacy built directly into the word on every pack." },

        {
          type: "twoColText",
          navLabel: "My Focus",
          navTime: "02",
          index: "02 / My Focus",
          heading: "What Was Mine, On A Team Of Ten.",
          body: "Ten people worked on Pushpaj — strategy, illustration, packaging, and digital, split across the team. My part was narrower: the visual language logic, and the packaging system end to end, from structural layout studies to print-ready artwork across six SKUs — the Cassata box, cups, family pack, roll cut, cone, and candy bar.",
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { title: "Visual Language", body: "Illustration logic and layout grammar — translating a Bhil-inspired art direction into a repeatable system of primary, secondary, and ingredient-level graphics." },
            { title: "Packaging System", body: "Layout architecture for six formats, balancing brand consistency against the real constraints of each pack — from a small cup to a family tub." },
            { title: "Production Detail", body: "Nutrition panels, ingredient lists, FSSAI marks, barcodes — so every pack was shelf-ready and regulation-accurate, not just good-looking." },
          ],
        },

        {
          type: "twoColText",
          navLabel: "Strategy",
          navTime: "03",
          index: "03 / Strategy",
          heading: "One Dot, Doing Every Job.",
          body: "The ambition: turn a local Rajpipla name into a brand recognisable well beyond it — playful, fresh, trustworthy, vibrant — without losing the Rajwada elegance and Bhil-community warmth the family had always carried.\n\nThat warmth needed one visual anchor small enough to work everywhere: as a logo core, a bullet, a background texture, a wordmark accent — without ever being redrawn for the job. The dot became that anchor, the simplest unit in Bhil art, standing in for growth and for a story built with intention.",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-06-BHIL-COMMUNITY-ATTIRE-ART.jpg", placeholder: "Bhil Community Attire & Art — the reference the dot-based visual language grew out of" },

        {
          type: "twoColText",
          navLabel: "Identity",
          navTime: "04",
          index: "04 / Identity",
          heading: "One Mark, Three Jobs.",
          body: "",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-08-PRIMARY-LOGO-FULL-CIRCLE.jpg", placeholder: "Primary Logo — Full Circle" },
        {
          type: "defList",
          heading: "Three Usage Tiers",
          items: [
            { label: "Primary Logo (Full Circle)", value: "The go-to version for websites, posters, icons, and stationery." },
            { label: "Compact Logo (Half Circle)", value: "Used when space is limited, built for social media and narrow layouts." },
            { label: "Packaging Mark (¾ Circle)", value: "Exclusive to product packaging." },
          ],
        },
        {
          type: "textBlock",
          body: "Colour-coded logo variants extend the identity across categories — blue for dairy, pink for ice cream, orange for sweets — keeping every category distinct while staying unmistakably Pushpaj.",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-40-COLOUR-CODED-LOGO-VARIANTS.jpg", placeholder: "Colour-Coded Logo Variants — dairy (blue), ice cream (pink), sweets (orange)" },

        {
          type: "twoColText",
          navLabel: "System",
          navTime: "05",
          index: "05 / System",
          heading: "Typography & Colour.",
          body: "",
        },
        {
          type: "defList",
          items: [
            { label: "Primary Typeface", value: "Bricolage Grotesque" },
            { label: "Body Typeface", value: "Outfit" },
          ],
        },
        {
          type: "swatchGrid",
          heading: "Core Palette",
          swatches: [
            { hex: "#71B35B", name: "Green" },
            { hex: "#FAEAB7", name: "Cream" },
            { hex: "#2A54A2", name: "Blue" },
          ],
        },
        { type: "noteBox", label: "Extended Visual-Language Palette", text: "A wider, muted palette drawn from Rajpipla's textiles, murals, and landscape — used across illustration and packaging accents rather than in the core mark itself." },

        {
          type: "twoColText",
          navLabel: "Language",
          navTime: "06",
          index: "06 / Language",
          heading: "Three Layers, One Lens.",
          body: "The visual language is organised into three layers, each telling the Pushpaj story through a Bhil-inspired lens. Building the logic and hierarchy of this system was part of my core contribution.",
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { title: "Primary Elements", body: "The core of the brand — the dairy process itself, used almost everywhere for consistency." },
            { title: "Secondary Elements", body: "Supporting graphics — Rajpipla monuments and traditional dairy tools that add place and context." },
            { title: "Ingredient Elements", body: "Stylised fruits, nuts, and natural flavours, used on packaging and flavour-specific posters." },
          ],
        },

        {
          type: "twoColText",
          navLabel: "The Packaging Problem",
          navTime: "07",
          index: "07 / The Packaging Problem",
          heading: "Six Formats Couldn't Mean Six Different Brands.",
          body: "A cup, a family tub, and a candy-bar wrapper are three completely different shapes to design for. Every pack needed to feel familiar yet refreshed — which meant building one layout architecture that could flex across all six, while keeping the logo, flavour name, tagline, and trust icons consistent no matter the shape underneath them.",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-15-PACKAGING-LAYOUT-GRID-WIREFRAME.jpg", placeholder: "Packaging Layout Grid — the wireframe sheet the shared hierarchy was built from" },
        {
          type: "hmw",
          heading: "Design Principles",
          items: [
            "A clean, repeatable hierarchy: logo → flavour name → tagline → hero product shot → trust icons.",
            "Solid, flavour-coded backgrounds — no gradients or busy textures — for shelf clarity.",
            "Consistent placement of regulatory information: nutrition panel, ingredients, FSSAI mark, barcode.",
          ],
        },
        { type: "noteBox", label: "The One Deliberate Exception", text: "Every other format shared the same hierarchy. Cassata broke it on purpose — \"Every Slice Feels Special\" needed to read as its own moment, not another SKU falling in line, so it got a standalone diagonal-slice hero instead of the shared grammar." },

        {
          type: "twoColText",
          navLabel: "Six Formats, One Grammar",
          navTime: "08",
          index: "08 / Six Formats, One Grammar",
          heading: "Every Shape, The Same Logic Applied Differently.",
          body: "",
        },
        {
          type: "colorBand",
          eyebrow: "Cassata",
          heading: "\"Every Slice Feels Special\"",
          image: "images/pushpaj/PUSHPAJ-16-CASSATA-PACK-FRONT-FACE.jpg",
          imagePlaceholder: "Cassata Pack — Front Face",
          body: "A standalone design, using a diagonal slice illustration as the hero visual to communicate the layered, indulgent nature of the product.",
        },
        {
          type: "colorBand",
          reverse: true,
          eyebrow: "Small & Big Cups",
          heading: "A Scoop-Forward Layout",
          image: "images/pushpaj/PUSHPAJ-19-STRAWBERRY-CUP-FLAT-ARTWORK.jpg",
          imagePlaceholder: "Strawberry Cup — Flat Artwork",
          body: "The flavour name large and centred, supported by trust icons along the edge.",
        },
        {
          type: "colorBand",
          eyebrow: "Family Pack",
          heading: "A Double-Scoop Hero, Scaled Up",
          image: "images/pushpaj/PUSHPAJ-22-MANGO-FAMILY-PACK-FLAT-ARTWORK.jpg",
          imagePlaceholder: "Mango Family Pack — Flat Artwork",
          body: "The same double-scoop hero shot, scaled for the larger tub — keeping the cups' visual grammar for shelf consistency.",
        },
        {
          type: "colorBand",
          reverse: true,
          eyebrow: "Roll Cut — Sitafal",
          heading: "\"A Timeless Indian Favourite\"",
          image: "images/pushpaj/PUSHPAJ-24-SITAFAL-ROLL-CUT-FLAT-ARTWORK.jpg",
          imagePlaceholder: "Sitafal Roll Cut — Flat Artwork",
          body: "Laid out as a wraparound band, net volume and icons anchored to the logo circle.",
        },
        {
          type: "colorBand",
          eyebrow: "Cone",
          heading: "A Radial Layout For A Fan-Shaped Wrapper",
          image: "images/pushpaj/PUSHPAJ-27-CHOCOLATE-CONE-FULL-WRAPPER.jpg",
          imagePlaceholder: "Chocolate Cone — Full Wrapper",
          body: "Nutrition and barcode information running along the tapering edge.",
        },
        {
          type: "colorBand",
          reverse: true,
          eyebrow: "Candy Bar",
          heading: "A Vertical Layout, Two Marks Balanced",
          image: "images/pushpaj/PUSHPAJ-28-MANGO-DOLLY-CANDY-FULL-WRAPPER.jpg",
          imagePlaceholder: "Mango Dolly Candy — Full Wrapper",
          body: "A vertical layout balancing two logo marks against the candy illustration and the full nutritional panel.",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-29-FULL-PACKAGING-FAMILY-FLAT.jpg", placeholder: "Full Packaging Family — flat lay / hero shot of all six SKUs together" },
        { type: "bigStatement", text: "Six formats, one consistent visual system — designed to sit together confidently on shelf while giving each flavour its own moment." },

        {
          type: "twoColText",
          navLabel: "Applications",
          navTime: "09",
          index: "09 / Applications",
          heading: "Past The Shelf.",
          body: "Every social post and poster uses a solid colour background — no gradients or busy textures — so the feed stays as clean and consistent as the packaging. The same dot motif and colour language carried into out-of-home, digital, and retail moments beyond the shelf itself.",
        },
        { type: "image", src: "images/pushpaj/PUSHPAJ-41-SOCIAL-AND-POSTER-APPLICATIONS.jpg", placeholder: "Social Posts & Posters — flavour-led layouts built for shelf-level readability at a glance" },
        { type: "image", src: "images/pushpaj/PUSHPAJ-42-EXTENDED-TOUCHPOINTS.jpg", placeholder: "Extended Touchpoints — billboard, website, retail merchandise, and delivery-van signage" },

        {
          type: "twoColText",
          navLabel: "Reflection",
          navTime: "10",
          index: "10 / Reflection",
          heading: "The Flex Was The Hard Part.",
          body: "Working on Pushpaj as packaging lead and visual designer meant translating a strategic brand story into physical, shelf-ready material — balancing regulatory detail with warmth and craft. It sharpened how I think about layout systems that need to flex across many formats without losing one recognisable identity. A logo that only works at one size, on one background, on one pack, isn't a system yet. Six formats later, this one was.",
        },
        {
          type: "videoPlaceholder",
          src: "images/pushpaj/PUSHPAJ-43-PACKAGING-TURNAROUND-VIDEO.mp4",
          aspect: "16/9",
          label: "Packaging turnaround — a full 360° video of the six-SKU family, in motion",
        },
        {
          type: "noteBox",
          label: "Project Credits — A Group Project, Batch 2023",
          text: "Created by Karan Panda, Unnati Jain, Aditya Khamkar, Jainil Shukla, Bhumika Jain, Prachi Prajapati, Laksh Bhatia, Naisha Oza, Harshita Bhagtani, Sanyarose Palliyil, Sanjana Apuri, Rishab Agrawal, Sejal Madhave, Keisha Jain, and Dhatri Patel.",
        },
        { type: "quote", text: "Follow our trail of dots to create the world of Pushpaj." },
      ],
    },
  },


  {
    id: "chilika-dairy",
    title: "Chilika Dairy",
    category: "Branding",
    badge: "Branding",
    eyebrow: "Artisanal Brand Identity",
    description: "Complete brand identity for an artisanal dairy, capturing heritage and craft through restrained visual language.",
    thumbnail: "images/chilika-dairy/CHILIKA-DAIRY-01-THUMBNAIL.jpg",
    year: "2025",
    tall: true,
    homeOutcome: { label: "Description", stat: null, text: "A contemporary dairy identity inspired by the culture and heritage of Manikpatna." },
    // Shown on the homepage instead of a single feat-media image — a tall
    // product shot beside two stacked brand-mark tiles.
    mediaGroup: ["images/chilika-dairy/CHILIKA-DAIRY-02-CHILIKA-DAIRY-PRODUCT.jpg", "images/chilika-dairy/CHILIKA-DAIRY-03-CHILIKA-DAIRY-MARK.jpg", "images/chilika-dairy/CHILIKA-DAIRY-04-CHILIKA-DAIRY-LOCKUP.jpg"],
    caseStudy: {
      tag: "Branding",
      indexLabel: "[04]",
      tagline: "Building a dairy brand around a lake, a legend, and a bowl of dahi.",
      heroImage: "images/chilika-dairy/CHILIKA-DAIRY-22-HERO.jpg",
      meta: [
        { label: "Where", val: "Chilika Lake, Odisha, India" },
        { label: "Category", val: "Dairy & Dahi (Curd)" },
        { label: "Scope", val: "Strategy, Identity, Packaging, Illustration" },
        { label: "Role", val: "Brand Strategist & Designer" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          navLabel: "Context",
          navTime: "01",
          heading: "Overview",
          body: "I gave myself this brief the way I'd want a client to give it to me: one real place, one real tension, and total creative freedom to solve it.\n\nThe place is Chilika Lake — Asia's largest brackish water lagoon, running along the Odisha coast, and one of the last homes of the Irrawaddy dolphin. The tension is something I'd noticed for years without quite being able to name it: almost every regional dairy brand reaches for the same three ingredients — a cow, a green field, a sunrise — regardless of where the milk actually comes from. None of it is specific. None of it is Chilika.\n\nThere's a story that gets told around the lake, about a devotee named Manik whose simple offering of dahi to Lord Jagannath became a symbol of purity and devotion still spoken of today. I wanted to build a brand that could hold the ecology of the lake and the folklore of the region at the same time, without turning either one into a costume.\n\nSo: a purpose-led dairy brand, rooted in Chilika — the kind that could plausibly be run by, and for, the buffalo farmers who've worked its banks for generations.",
        },
        {
          type: "twoColText",
          index: "02 / Strategy",
          navLabel: "Strategy",
          navTime: "02",
          heading: "Before The First Sketch",
          body: "Every brand exercise I run starts with the unglamorous part — the part it's tempting to skip when there's no client waiting on a strategy deck. I made myself sit through it anyway, because every design decision later in this case study traces back to something here.\n\nChilika Dairy, in short: a purpose-led dairy initiative rooted in the ecological and cultural landscape of Chilika. It exists to revive local dahi-making traditions and strengthen the livelihoods of the region's buffalo farmers, combining heritage, sustainability and responsible sourcing into something that tastes, in theory, like the balance of the lake itself.",
        },
        { type: "tagPills", heading: "Brand Values", tags: ["Authenticity", "Sustainability", "Purity & Quality", "Community Upliftment", "Cultural Preservation", "Balance"] },
        { type: "bigStatement", eyebrow: "Brand Mission", text: "&ldquo;To become Odisha's most culturally authentic and socially responsible dairy brand — known for preserving heritage, empowering farmers, and celebrating the spirit of Chilika.&rdquo;" },
        { type: "textBlock", body: "Then I mapped personality — less as a mood board, more as a set of guardrails for every decision that followed." },
        {
          type: "defList",
          heading: "Personality Spectrum",
          items: [
            { label: "Affordable \u2014 Premium", value: "Leans Affordable" },
            { label: "Fun / Easy-going \u2014 Serious / Strict", value: "Evenly balanced between the two" },
            { label: "Modern \u2014 Traditional", value: "Leans Traditional" },
            { label: "Youthful \u2014 Mature / Grown-up", value: "Leans Youthful" },
            { label: "Casual \u2014 Corporate", value: "Strongly leans Casual" },
          ],
        },
        { type: "tagPills", tags: ["Rooted", "Devotional", "Grounded", "Responsible", "Helpful", "Humble", "Auspicious", "Cultural", "Trustworthy"] },
        { type: "textBlock", body: "Two of those calls mattered more than the rest once I got to the logo stage. Leaning traditional over modern meant the identity could afford to feel handcrafted rather than tech-startup clean. And leaning casual over corporate meant illustration and warmth could do real work in the system, instead of sitting in a guideline PDF as an afterthought." },

        {
          type: "colorBand",
          eyebrow: "[03] — Concept One",
          heading: "Reading The Water",
          image: "images/chilika-dairy/CHILIKA-DAIRY-20-READING-THE-WATER-CONCEPT-ONE.jpg",
          body: "My first instinct was to design from the ecology outward. Chilika's whole identity is built on balance — freshwater meeting seawater, land meeting lagoon, a rare dolphin surviving quietly in the middle of it. I wanted a mark that carried that balance structurally, not just as a colour story.",
        },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-21-LOGOMARK-FORMULA-CONCEPT-ONE.jpg", tag: "Logomark formula" },
        { type: "textBlock", body: "The logomark is a monogram of C and D — Chilika and Dairy — built as one continuous rounded form. The outer curve reads as the C, holding its shape the way the lake's own coastline holds its water. Inside it, the negative space resolves into the tail of an Irrawaddy dolphin, which does two jobs at once: it's the brand's most literal nod to the lake's ecology, and it quietly turns the C into a D, so the mark can never be separated from the name it stands for." },
        {
          type: "challenges",
          heading: "Key Decisions",
          sub: "What the mark had to get right",
          items: [
            { label: "Decision 01", q: "Rounded geometry, no sharp terminals anywhere.", a: "Sharp corners read as industrial. Everything here needed to read as dairy first — soft, creamy, something you'd trust with a spoon." },
            { label: "Decision 02", q: "A dual-tone gradient instead of a flat fill.", a: "Chilika is defined by two kinds of water meeting inside one body. A gradient was the only honest way to represent that without bolting on a second shape." },
            { label: "Decision 03", q: "Dolphin as negative space, never as a mascot.", a: "An illustrated dolphin on a milk carton would have dated the brand within a year. Hiding it inside the mark's construction lets it read as heritage rather than decoration." },
          ],
        },
        { type: "textBlock", body: "For type, I paired Montserrat Alternates for the wordmark — its soft terminals and curved strokes echo the same water-flow logic as the mark itself — with Cormorant Garamond for anything that needed to sound like heritage rather than product spec, and Noto Sans for the unglamorous jobs: ingredients, nutrition tables, addresses." },
        { type: "textBlock", body: "Colour followed the same brief. #01ac8b and #104c99 for the mark's gradient — freshwater meeting brackish water, quite literally — #192955 as an anchor navy for trust and shelf presence, and a warm off-white, #f8f5f0, standing in for milk without resorting to a pure, clinical white." },
        {
          type: "swatchGrid",
          swatches: [
            { hex: "#01ac8b", name: "Lagoon Teal" },
            { hex: "#104c99", name: "Brackish Blue" },
            { hex: "#192955", name: "Anchor Navy" },
            { hex: "#3a9bbb", name: "Mid Water" },
            { hex: "#f8f5f0", name: "Milk White" },
          ],
        },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-08-FOUR-COLOURWAY-GRID-REVERSE.jpg", placeholder: "Four-colourway grid — reverse, tint, and single-colour use", tag: "Built for reverse, tint & single-colour use" },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-09-DELIVERY-TRUCK-SIGNAGE-PHOTO.jpg", placeholder: "Delivery-truck signage photo, full-bleed", tag: "Signage & vehicle branding" },

        {
          type: "twoColText",
          index: "04 / Concept Two",
          navLabel: "Concept Two",
          navTime: "04",
          heading: "Reading The Script",
          body: "The second direction started from a different question: what if the brand's most distinctive asset wasn't the lake, but the language spoken around it?",
        },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-10-LOGOMARK-FORMULA-CONCEPT-TWO.jpg", placeholder: "Logomark formula, Concept Two", tag: "Logomark formula" },
        { type: "textBlock", body: "Odia is the language of the region, and its letterforms show up in Indian dairy branding far less often than you'd expect. This mark takes the Odia letter ଚ (cha) — the first sound in Chilika — and rebuilds it as a clean, modern ring. The outer circle reads as containment and origin; the inner void reads, depending how long you look at it, as a drop of milk or a bowl of dahi sitting at the centre of the brand." },
        {
          type: "calloutMedia",
          eyebrow: "The Mark, Explained",
          heading: "Concept Two Anatomy",
          media: "images/chilika-dairy/CHILIKA-DAIRY-23-CONCEPT-TWO-ANATOMY-DIAGRAM.jpg",
          mediaPlaceholder: "Annotated rationale diagram — the Odia letterform ring construction",
          left: [{ n: "01. Odia Letterform", b: "Built from ଚ (cha) — the first sound in Chilika." }],
          right: [{ n: "02. Inner Void", b: "Reads as a drop of milk, or a bowl of dahi." }],
        },
        { type: "textBlock", body: "I paired it with Figtree for the wordmark — quieter and more editorial than Montserrat Alternates — the same Cormorant Garamond for heritage voice, and Noto Sans again for utility copy. Colour moved away from water entirely: a deep navy, a warm gold, and two supporting teals. Gold doesn't show up in dairy branding often, and that was the point — it reads closer to a heritage sweet shop than a supermarket chiller." },
        {
          type: "swatchGrid",
          swatches: [
            { hex: "#133154", name: "Deep Navy" },
            { hex: "#f8d236", name: "Warm Gold" },
            { hex: "#008998", name: "Teal" },
            { hex: "#84d0d6", name: "Pale Teal" },
            { hex: "#fafdfd", name: "Off White" },
          ],
        },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-11-ILLUMINATED-STOREFRONT-SIGNAGE-PHOTO.jpg", placeholder: "Illuminated storefront signage photo, full-bleed", tag: "Storefront signage" },
        { type: "textBlock", body: "It's the more sophisticated mark of the two, and for a while it was the one I was sure I'd ship." },

        {
          type: "twoColText",
          index: "05 / The Decision",
          navLabel: "The Decision",
          navTime: "05",
          heading: "Choosing A Direction",
          body: "I sat with both directions for longer than I'm usually patient enough to.\n\nConcept Two is the better piece of typography, and I still think it's the stronger logo in isolation — on a business card, on a letterhead, in a brand book. But a business card isn't where a dairy brand actually lives. A dairy brand lives on a shelf, at nine in the morning, competing for a two-second glance from someone who's already half-decided which curd they're buying.\n\nWhen I shrank both marks down to the size they'd actually appear on a 9 cm cup lid and put them side by side, Concept One won without much of a contest. It held its shape at small sizes, it read warm instead of corporate, and it carried the lake story in a way someone could feel even without knowing anything about Chilika or the Irrawaddy dolphin. Concept Two, at that size, just read as \"a nice ring.\"\n\nSo Concept One — the dolphin mark — is the one I carried into packaging and the rest of the system.",
        },
        { type: "bigStatement", text: "&ldquo;It's never love at first sight. The mark I was initially less sure about is the one that actually did the job.&rdquo;" },

        {
          type: "twoColText",
          index: "06 / Execution",
          navLabel: "Execution",
          navTime: "06",
          heading: "Packaging For A Real Shelf",
          body: "I didn't want to design packaging in a vacuum, so before sketching anything I picked up a cup of Amul Masti Dahi — the market leader most Chilika Dairy customers would already have sitting in their fridge — and measured it.",
        },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-12-AMUL-MASTI-DAHI-BENCHMARK.jpg", placeholder: "Amul Masti Dahi benchmark photo, product-only crop", tag: "Benchmark: Amul Masti Dahi" },
        {
          type: "defList",
          items: [
            { label: "Top Diameter", value: "9 cm" },
            { label: "Bottom Diameter", value: "7 cm" },
            { label: "Height", value: "3.5 cm" },
            { label: "Top Circumference", value: "28.27 cm" },
            { label: "Bottom Circumference", value: "21.99 cm" },
          ],
        },
        { type: "textBlock", body: "Those numbers weren't a starting point I was free to ignore — they're close to an industry-standard thermoformed cup size, which meant Chilika Dairy could plausibly use the same manufacturing lines and sealing equipment as everyone else on the shelf, rather than needing a custom mould before it had sold a single cup." },
        {
          type: "imageGrid",
          cols: 2,
          gap: 0,
          images: [
            { src: "images/chilika-dairy/CHILIKA-DAIRY-13-EARLY-STRUCTURAL-SKETCHES.jpg", placeholder: "Early structural sketches", tag: "Early structural sketches" },
            { src: "images/chilika-dairy/CHILIKA-DAIRY-14-FINAL-CARRIER-RENDERED.jpg", placeholder: "Final carrier, rendered", tag: "Final carrier, rendered" },
          ],
        },
        { type: "textBlock", body: "Structurally, the multipack sleeve does two jobs at once: it's a carrier with a built-in handle for the walk from the fridge to the counter, and — with its die-cut window — a shelf display that shows the product through the packaging instead of hiding it behind a printed photo of itself.\n\nThe wordmark sits reversed in white on the navy carrier band, which was a deliberate contrast call. Everywhere else in the system, navy is a supporting colour. On the shelf, next to a wall of yellow, green and red competitor packaging, it needed to be the loudest thing in the fridge." },

        {
          type: "twoColText",
          index: "07 / Sub-Brand",
          navLabel: "Sub-Brand",
          navTime: "07",
          heading: "Manikpatna Dahi",
          body: "Every brand needs at least one product that proves the story isn't just decoration. For Chilika Dairy, that's Manikpatna Dahi.\n\nManikpatna is a real fishing village on the Chilika shoreline. I borrowed the name deliberately, tying the product to both a specific place and the legend of Manik from the brand's origin story. The illustration style leans into that heritage rather than away from it: a devotee's hands cupping a bowl of dahi, a bangled arm reaching to receive it — the same gesture the legend describes, rendered as packaging art instead of temple art.",
        },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-15-ILLUSTRATION-STYLE-SHEET-CLAY.jpg", placeholder: "Illustration style sheet — clay matka pot, bejewelled arm, ceremonial horse, devotee figure", tag: "Illustration system — pattachitra-inspired" },
        {
          type: "calloutMedia",
          eyebrow: "The Illustration, Revealed",
          heading: "Manikpatna Dahi",
          media: "images/chilika-dairy/CHILIKA-DAIRY-18-MANIKPATNA-DAHI-ILLUSTRATION.jpg",
          left: [
            { n: "01. Heritage", b: "Bold outlines and jewel tones, drawn from Odisha's pattachitra tradition." },
            { n: "02. Gesture", b: "Hands cupping dahi, echoing the Manik legend directly." },
            { n: "03. Name", b: "Manikpatna ties the product to a real place on the lake." },
          ],
          right: [
            { n: "04. Case", b: "Lowercase and playful, distinct from the formal master brand." },
            { n: "05. Colour", b: "Red and cyan, loud enough to stand apart on shelf." },
            { n: "06. Hierarchy", b: "The Chilika Dairy mark stays small, vouching rather than competing." },
          ],
        },
        { type: "textBlock", body: "The wordmark treatment is deliberately less formal than the primary Chilika Dairy identity. It's meant to read as a specific product with its own personality, not just a flavour variant buried in a shelf of identical cups.\n\nWherever Manikpatna Dahi shows up, the small Chilika Dairy mark stays quietly in the corner. The master brand's job here is to vouch for the product, not compete with it." },
        { type: "image", src: "images/chilika-dairy/CHILIKA-DAIRY-16-WORDMARK-LOCKUP-OPTIONS.jpg", placeholder: "Wordmark lockup options", tag: "Wordmark options" },
        {
          type: "cardGrid",
          heading: "The Full Set",
          cols: 2,
          items: [
            { src: "images/chilika-dairy/CHILIKA-DAIRY-19-FINAL-CUP-CARD.jpg", title: "Final Cup", body: "Lid, wall, base" },
            { src: "images/chilika-dairy/CHILIKA-DAIRY-17-BILLBOARD-ENVIRONMENTAL-MOCKUP.jpg", placeholder: "Billboard / environmental mockup", title: "Out In The World", body: "Environmental & signage mockup" },
          ],
        },

        { type: "bigStatement", eyebrow: "[08] — Reflection", text: "&ldquo;It's never love at first sight.&rdquo;", cite: "— Karan Panda" },
        { type: "textBlock", body: "If I'm honest about what this project actually taught me, it's less about dolphins or Odia letterforms and more about sequencing: strategy before symbolism, benchmarking before sketching, two real options on the table before committing to either.\n\nConcept Two is still, technically, the better piece of type design. I don't regret the time spent on it — without it, I wouldn't have trusted Concept One nearly as much. That's usually how it goes." },
      ],
    },
  },

  {
    id: "last-benthrite",
    title: "The Last Benthrite",
    category: "Illustrations",
    badge: "Game Jam",
    eyebrow: "Game Art & Development",
    description: "A 2D vertical-platformer game jam prototype about a small, vulnerable deep-sea creature racing a rising toxic gas — built in three weeks with a two-person team.",
    thumbnail: "images/last-benthrite/BENTHRITE-00-THUMBNAIL.jpg",
    year: "2025",
    tall: true,
    homeOutcome: { label: "Outcome", stat: "3 Wks", text: "from a single jam theme to a complete, submitted, playable first draft." },
    caseStudy: {
      tag: "Game Jam · 2D Vertical Platformer",
      indexLabel: "[01]",
      tagline: "I didn't design a monster. I designed something too small to survive what was chasing it — and worked backward from there.",
      heroImage: "images/last-benthrite/BENTHRITE-01-HERO-KEY-ART.jpg",
      heroImagePosition: "center top",
      meta: [
        { label: "Type", val: "Game Jam · 2D Vertical Platformer" },
        { label: "Duration", val: "3 Weeks" },
        { label: "My Role", val: "Visual Designer & Illustrator" },
        { label: "Collaborator", val: "Aditya Das \u2014 Game Developer" },
      ],
      blocks: [
        {
          type: "statGrid",
          stats: [
            { value: "3", label: "Weeks, start to submission" },
            { value: "2", label: "People on the team" },
            { value: "1", label: "Jam theme: \u201cTo The Top\u201d" },
          ],
        },
        {
          type: "twoColText",
          index: "01 / Notice",
          navLabel: "Notice",
          navTime: "01",
          heading: "The Clock Starts Before The Idea Does",
          body: "We had a theme, a deadline, and no game. That order matters \u2014 it decides how you're allowed to think.\n\nThis was our first game jam as a team. Three weeks, working around everything else in our lives, to take one word \u2014 \u201cTo the Top\u201d \u2014 and turn it into something a stranger could pick up and play. Not a polished product. A complete, honest first draft.\n\nI knew how to research platformers, pull references, and pick apart how storytelling reinforces gameplay. What I didn't know \u2014 what neither of us knew yet \u2014 was how to scope a game for a hard deadline, or how much two people could actually finish in three weeks without lying to ourselves about it.",
        },
        {
          type: "defList",
          heading: "What The Constraint Forced Us To Think About",
          items: [
            { label: "What We Already Knew", value: "How to research platformers, gather references, and read how storytelling reinforces gameplay." },
            { label: "What We Didn't", value: "How to scope a game for a hard deadline, or how much content two people could realistically ship in three weeks." },
          ],
        },
        {
          type: "ctaLink",
          href: "games/burgs-ascent.html",
          label: "Play The Last Benthrite \u2197",
          sub: "Playable right in the browser \u2014 same as The Masked Murders.",
        },
        {
          type: "gameEmbed",
          src: "games/burgs-ascent.html",
          title: "The Last Benthrite — Burg's Ascent",
          caption: "Playable right here — pull back and release to launch Burg from platform to platform.",
        },
        {
          type: "twoColText",
          index: "02 / Question",
          navLabel: "Question",
          navTime: "02",
          heading: "What Does \u201cTo The Top\u201d Actually Mean?",
          body: "We had a theme, not a game. The theme could have meant almost anything \u2014 and that ambiguity was the first thing we had to solve, before a single sprite got drawn.\n\nI laid out three honest readings of the word and made myself sit with all three instead of grabbing the first one that felt right.",
        },
        {
          type: "imageGrid",
          cols: 3,
          images: [
            { src: "images/last-benthrite/BENTHRITE-20-INSPIRATION-REFERENCE-1.jpg", placeholder: "Inspiration reference 1 \u2014 a game we studied while interpreting the theme" },
            { src: "images/last-benthrite/BENTHRITE-21-INSPIRATION-REFERENCE-2.jpg", placeholder: "Inspiration reference 2 \u2014 a game we studied while interpreting the theme" },
            { src: "images/last-benthrite/BENTHRITE-22-INSPIRATION-REFERENCE-GAMEPLAY.gif", placeholder: "Inspiration reference \u2014 gameplay GIF of a game that shaped our thinking" },
          ],
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { title: "Direction A \u2014 Literal Vertical Climb", body: "A physical ascent \u2014 the player moves upward through a space, level by level." },
            { title: "Direction B \u2014 Abstract Progression", body: "Climbing as a stand-in for status, skill, or mastery rather than a literal direction." },
            { title: "Direction C \u2014 Narrative \u201cTop\u201d", body: "Reaching \u201cthe top\u201d as an emotional or story beat \u2014 freedom, escape, survival." },
          ],
        },
        {
          type: "noteBox",
          label: "What We Weighed",
          text: "Development feasibility, time required, gameplay potential, achievable content volume, relationship to theme, fun factor, visual opportunity, team skill fit.",
        },
        {
          type: "textBlock",
          body: "Direction A won because it made the theme the mechanic \u2014 not just the setting. A literal climb gave us a system we could prototype fast, and a story we could build around it.",
        },
        {
          type: "quote",
          text: "I almost kept Direction C \u2014 the more \u201cdesigned\u201d answer. But a three-week jam doesn't reward the answer that sounds good. It rewards the one you can actually build and still have time to make feel right.",
        },
        {
          type: "twoColText",
          index: "03 / Ideation",
          navLabel: "Ideation",
          navTime: "03",
          heading: "Three Sketches. One Survivor.",
          body: "I didn't need twenty directions. I needed to know which single idea could carry the whole game.",
        },
        {
          type: "evolution",
          heading: "Concept Exploration",
          stages: [
            { title: "Concept 1 \u2014 Ocean Depths", body: "A vertical platformer set in the deepest region of an unknown ocean \u2014 the most direct reading of the theme. It survived because the mechanics were feasible in code, and buoyant movement fit the theme without forcing it." },
            { title: "Concept 2 \u2014 Stacked Progression", body: "A more mechanically ambitious idea, combining a stacked-progression system with the climb. It didn't win." },
            { title: "Concept 3 \u2014 Fragment Collection", body: "A third direction exploring reward-based ascent \u2014 collecting fragments to progress. It didn't become the game on its own, but the fragment-collection idea carried over into the final concept." },
          ],
        },
        { type: "image", src: "images/last-benthrite/zzzz.jpg", placeholder: "Concept sketches \u2014 ocean depths / stacked progression / fragment-collection ascent." },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "What specifically made Concept 2 riskier or slower to build \u2014 a code complexity issue, a scoping issue, or a team-vote call? A sentence of the real reason would make this decision land harder.",
        },
        {
          type: "quote",
          text: "The strongest idea in the room isn't always the one that wins outright. Sometimes it wins by donating its best part to the idea that does.",
        },
        {
          type: "twoColText",
          index: "04 / Undo",
          navLabel: "Undo",
          navTime: "04",
          heading: "The First Prototype Worked. It Didn't Feel Like Climbing.",
          body: "Grey boxes, jump, land, repeat. Technically correct. Emotionally nothing.\n\nThe first playable build let the player climb upward. It ran fine. But there was no sense of danger, no reason to keep going, no feedback telling the player they were actually making progress. I'd built the mechanic and skipped the reason for it to exist.",
        },
        { type: "image", src: "images/last-benthrite/BENTHRITE-02-EARLY-PROTOTYPE-SCREENSHOT.jpg", placeholder: "Grey-box climbing test \u2014 no art, raw movement and collision only." },
        {
          type: "bigStatement",
          text: "What was missing was stakes. A climb without a reason to rush isn't tense \u2014 it's just repetition.",
        },
        {
          type: "twoColText",
          index: "05 / Rebuild",
          navLabel: "Core Loop",
          navTime: "05",
          heading: "The Core Loop",
          body: "That gap is where the toxic-gas pursuit and the fragment-collection story came from \u2014 not as decoration on top of the mechanic, but as the thing that gave the vertical movement a reason to matter.\n\nMove \u2192 Jump \u2192 Avoid Toxic Gas \u2192 Land \u2192 Collect Fragment \u2192 Climb Higher \u2192 Repeat",
        },
        {
          type: "defList",
          items: [
            { label: "Objective", value: "Escape the rising toxic gas by climbing, while recovering fragments of Burg's lost power to survive the ascent and eventually free the other Benthrites." },
            { label: "Challenge & Reward", value: "Challenge comes from platform variety and the rising hazard below. Reward comes from power-ups \u2014 Ghost, Feather, Super Jump \u2014 that change how the player can move." },
          ],
        },
        {
          type: "twoColText",
          index: "06 / Decision",
          navLabel: "Scope Decisions",
          navTime: "06",
          heading: "Deciding What Belonged In The Game",
          body: "A three-week jam means every mechanic has to earn its place. We didn't remove a mechanic because it was bad \u2014 we removed it because it wasn't worth the development time against what it added to the experience.",
        },
        {
          type: "challenges",
          heading: "Tuning Questions",
          items: [
            { q: "How should movement feel?", a: "Predictable or floaty, how much air control, what happens on a missed jump \u2014 weighed directly against player skill and level length." },
            { q: "How difficult should the climb be?", a: "Weighed against failure frequency and how forgiving recovery should be after a fall." },
          ],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "What the final tuning decisions actually were on both of these, and what testing changed about them \u2014 this is one of the strongest decision-making sections in the whole case study once it's specific.",
        },
        {
          type: "twoColText",
          index: "07 / Research",
          navLabel: "Research",
          navTime: "07",
          heading: "Reference, Not Homework",
          body: "Research stayed practical rather than academic. I wasn't cataloguing what other games did \u2014 I was deciding what to borrow, reject, or reinterpret.",
        },
        {
          type: "cardGrid",
          cols: 2,
          items: [
            { title: "Platformers & Movement Systems", body: "Studied progression mechanics and how vertical level design paces difficulty over time." },
            { title: "Environmental Storytelling", body: "Looked at how storytelling could reinforce gameplay instead of sitting separate from it \u2014 this directly shaped the toxic-gas-as-antagonist idea." },
            { title: "Character & Game Feel", body: "Looked at how small, expressive characters read at mobile scale \u2014 this is where the large-eyes, simple-silhouette direction started." },
            { title: "UI Conventions", body: "Reviewed generic mobile-game UI to identify what felt disconnected from a hand-drawn world \u2014 which led to the organic button system." },
          ],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "The specific games or references actually pulled from, and what got borrowed versus rejected \u2014 even two or three named references makes this section unmistakably yours.",
        },
        {
          type: "twoColText",
          index: "08 / Visual Direction",
          navLabel: "Visual Direction",
          navTime: "08",
          heading: "What Should This Game Feel Like?",
          body: "Because vertical traversal is the whole experience, the environment had to communicate depth and upward progress without making the platforms hard to read.",
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { title: "World \u2014 Mysterious", body: "Deep blues, darkness, depth and isolation." },
            { title: "Danger \u2014 Toxic", body: "Acid green, bioluminescent glow, visual danger." },
            { title: "Character \u2014 Vulnerable", body: "Soft shapes, large eyes, nervous expressions, imperfect form." },
          ],
        },
        { type: "image", src: "images/last-benthrite/BENTHRITE-03-MOODBOARD.jpg", placeholder: "Illustration style references gathered before establishing the final visual tone." },
        {
          type: "bigStatement",
          text: "I wasn't trying to make the world look pretty. I was trying to make three things instantly separable at a glance \u2014 where you are, what's chasing you, and who you are \u2014 before the player reads a single line of anything.",
        },
        {
          type: "twoColText",
          index: "09 / Character",
          navLabel: "Character",
          navTime: "09",
          heading: "Who Is The Benthrite?",
          body: "Not a hero. A small, vulnerable deep-sea creature \u2014 slightly strange, nervous, fragile \u2014 so the climb would feel dangerous rather than heroic.\n\nBrief \u2192 Sketches \u2192 Silhouettes \u2192 Expressions \u2192 Final",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/last-benthrite/BENTHRITE-04-SILHOUETTE-EXPLORATION-01-TOO-DETAILED.jpg", placeholder: "Exploration 01 \u2014 too detailed. Taller silhouette with organic surface strands; weak readability at small scale." },
            { src: "images/last-benthrite/BENTHRITE-05-SILHOUETTE-EXPLORATION-02-FINAL-DIRECTION.jpg", placeholder: "Exploration 02 \u2014 got direction. Simplified, compact silhouette, recognisable even in pure silhouette." },
          ],
        },
        {
          type: "quote",
          text: "I wasn't trying to make the character look simpler. I was trying to make the character read faster than the danger around it. Exploration 01 looked better on its own \u2014 it also would have fallen apart the second it was thirty pixels tall on a phone screen, moving.",
        },
        {
          type: "twoColText",
          index: "10 / Decision",
          navLabel: "Final Character",
          navTime: "10",
          heading: "Why The Final Character Works",
          body: "Four decisions, each doing one specific job.",
        },
        {
          type: "calloutMedia",
          eyebrow: "The Hero, Annotated",
          heading: "Final Character Design",
          media: "images/last-benthrite/BENTHRITE-06-FINAL-CHARACTER-ANNOTATED.jpg",
          left: [
            { n: "01. Large Eyes", b: "Oversized lime-green eyes create the strongest focal point \u2014 fear and vulnerability, immediately." },
            { n: "02. Simple Silhouette", b: "A rectangular organic body stays recognisable even at small scale." },
          ],
          right: [
            { n: "03. Limited Palette", b: "Purple separates the character from the blue environment; toxic green ties it to the danger." },
            { n: "04. Exaggerated Expression", b: "Large eyebrows, wide eyes, and an open mouth keep emotion readable mid-gameplay." },
          ],
        },
        {
          type: "twoColText",
          index: "11 / Environment",
          navLabel: "Environment",
          navTime: "11",
          heading: "What Does The World Look Like As You Climb?",
          body: "More detail is not the same as more atmosphere. I learned that the wrong way first.\n\nEarly exploration used detailed rocks, vegetation, and glowing organisms \u2014 it looked richer, but reduced the visual separation between character, platforms, and hazards. The final direction uses large flat shapes, layered blue values, and minimal surface detail, trading detail for gameplay clarity.",
        },
        { type: "image", src: "images/last-benthrite/BENTHRITE-07-ENVIRONMENT-LAYERS.jpg", placeholder: "Environment layers \u2014 Depth Layer 1 \u00b7 Depth Layer 2 \u00b7 Landmark Asset \u00b7 Atmospheric FX." },
        {
          type: "bigStatement",
          text: "This was less, but more deliberate. Not less effort \u2014 less noise between the player's eye and the thing that could kill them.",
        },
        {
          type: "twoColText",
          index: "12 / Level Design",
          navLabel: "Level Design",
          navTime: "12",
          heading: "Turning A Mechanic Into A Level",
          body: "The loop is a promise. A level is where you have to keep it.",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/last-benthrite/BENTHRITE-08-LEVEL-BLOCKOUT.jpg", placeholder: "Level sketch / blockout \u2014 platform layout and vertical pacing plan." },
            { src: "images/last-benthrite/BENTHRITE-09-LEVEL-FINAL-SCREENSHOT.jpg", placeholder: "Final level screenshot \u2014 in-engine ascent with platforms, hazards and fragments." },
          ],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "Intent, the actual playtest problem hit, and the change made in response \u2014 even one described before/after (difficulty progression, checkpoint placement, obstacle spacing) turns this from a diagram into a decision.",
        },
        {
          type: "twoColText",
          index: "13 / Challenges",
          navLabel: "Challenges",
          navTime: "13",
          heading: "Problem \u2192 Options \u2192 Decision \u2192 Result",
          body: "Four specific problems that don't show up in a mood board \u2014 only in the actual playing of the game.",
        },
        {
          type: "challenges",
          items: [
            { label: "Atmosphere Without Visual Noise", q: "How does a deep-sea world feel atmospheric without becoming busy?", a: "Solved with large flat shapes and layered blue values instead of surface detail." },
            { label: "Readable At Mobile Scale", q: "How does the character stay readable when small?", a: "Solved by simplifying the silhouette and enlarging the eyes as the single strongest focal point." },
            { label: "Platform Behaviour Without Text", q: "How do platforms communicate what they do before the player touches them?", a: "Solved through material and shape language." },
            { label: "UI Belonging To The Same World", q: "Generic glossy mobile buttons felt disconnected from a hand-drawn character.", a: "Solved with an organic button system based on bioluminescent forms." },
          ],
        },
        {
          type: "twoColText",
          index: "14 / System",
          navLabel: "Platform System",
          navTime: "14",
          heading: "Platforms Had To Explain Themselves",
          body: "Instead of making every platform look the same, each one uses material and shape to suggest what it does \u2014 before the player finds out the hard way. I didn't want to add a legend. I wanted the platform to look like what it did.",
        },
        {
          type: "cardGrid",
          cols: 4,
          items: [
            { title: "Sea Grass", body: "Dense soft vegetation \u2192 high friction, slower movement." },
            { title: "Shell Tile", body: "Heavy shell construction \u2192 stable and permanent." },
            { title: "Bubble Tile", body: "Transparent, clustered bubbles \u2192 temporary platform." },
            { title: "Living Tile", body: "Organic, creature-like surface \u2192 moving platform." },
          ],
        },
        {
          type: "twoColText",
          index: "15 / Danger & Power",
          navLabel: "Danger & Power",
          navTime: "15",
          heading: "A Danger That Reads Without A Word Of Text",
          body: "Green = danger. Organic, curling shapes = unstable movement. Upward pressure = the gas is rising and so are the stakes.\n\nBlue = World  /  Purple = Character  /  Green = Danger & Energy",
        },
        { type: "image", src: "images/last-benthrite/BENTHRITE-10-TOXIC-GAS-ASSET.jpg", placeholder: "Toxic gas asset \u2014 rising hazard, glowing acid green against the deep blue environment." },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { src: "images/last-benthrite/BENTHRITE-11-POWERUP-GHOST-MODE.jpg", placeholder: "Ghost Mode icon", title: "Ghost Mode", body: "Transparent form, soft glow \u2014 temporary intangibility." },
            { src: "images/last-benthrite/BENTHRITE-12-POWERUP-FEATHER-MODE.jpg", placeholder: "Feather Mode icon", title: "Feather Mode", body: "Lightweight feather symbol \u2014 floating, slower falling." },
            { src: "images/last-benthrite/BENTHRITE-13-POWERUP-SUPER-JUMP.jpg", placeholder: "Super Jump icon", title: "Super Jump", body: "Strong upward forms \u2014 increased vertical movement." },
          ],
        },
        {
          type: "twoColText",
          index: "16 / Game UI",
          navLabel: "Game UI",
          navTime: "16",
          heading: "Why The Button Looks Clickable",
          body: "Early UI exploration used generic glossy mobile-game buttons. They worked \u2014 they also didn't belong to this game. The final system is built from the game's own bioluminescent visual language instead of a default mobile-UI kit.",
        },
        {
          type: "defList",
          items: [
            { label: "Contrast", value: "Strong contrast separates the CTA from the dark environment." },
            { label: "Hierarchy", value: "A large central label establishes immediate hierarchy." },
            { label: "Familiarity", value: "A rounded, horizontal shape follows familiar mobile CTA conventions." },
            { label: "Feedback", value: "A bright active outline communicates interaction; distinct default, pressed, disabled and locked states give clear feedback." },
          ],
        },
        { type: "image", src: "images/last-benthrite/BENTHRITE-14-UI-BUTTON-STATES.jpg", placeholder: "UI button system \u2014 default, pressed, disabled, and locked states." },
        {
          type: "twoColText",
          index: "17 / Animation",
          navLabel: "Animation",
          navTime: "17",
          heading: "What Makes The Character Feel Alive?",
          body: "Not everything needed animating. Only the states that show up constantly, and directly affect how the game feels to play.\n\nIdle \u2192 Jump \u2192 Fall \u2192 Landing",
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "Which animation states got planned but cut for time \u2014 a death animation, transition frames, a secondary idle variation. Naming what got cut is as useful here as naming what got kept.",
        },
        {
          type: "twoColText",
          index: "18 / Development",
          navLabel: "Development",
          navTime: "18",
          heading: "From Concept To Playable Game",
          body: "Two people, two very different jobs, one build.\n\nConcept \u2192 Prototype \u2192 Systems \u2192 Integration \u2192 Playable Game",
        },
        {
          type: "defList",
          items: [
            { label: "My Contribution", value: "Character sprites, environment layers, platform assets, power-up icons, and UI elements \u2014 sized and organised for the engine." },
            { label: "Aditya's Contribution", value: "The movement system, collision, platform behaviours, level structure, and integrating every art asset into a working build." },
          ],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "Any technical constraints that shaped the art directly \u2014 sprite sheet limits, engine, resolution targets \u2014 and one concrete \u201cI designed it one way, the engine needed it another\u201d moment.",
        },
        {
          type: "twoColText",
          index: "19 / Timeline",
          navLabel: "Timeline",
          navTime: "19",
          heading: "Discover. Build. Integrate.",
          body: "Three weeks, roughly one job per week \u2014 though it never stayed that clean in practice.",
        },
        {
          type: "evolution",
          stages: [
            { title: "Week 01 \u2014 Discover + Prototype", body: "Theme interpretation, game concept selection, core mechanic defined, initial sketches, first prototype." },
            { title: "Week 02 \u2014 Build + Explore", body: "Character design finalised, environment art, level design, UI system, asset production." },
            { title: "Week 03 \u2014 Integrate + Polish", body: "Full integration, playtesting, bug fixing, animation and visual polish, final build." },
          ],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "The real week-by-week breakdown if it differed from this \u2014 dates, and any milestone that landed early or late.",
        },
        {
          type: "twoColText",
          index: "20 / Playtest",
          navLabel: "Playtest",
          navTime: "20",
          heading: "What We Expected. What Actually Happened.",
          body: "This is the section that turns a design into a tested design \u2014 and it's the one to fill in first.",
        },
        {
          type: "defList",
          items: [
            { label: "We Expected", value: "e.g. \u201cPlayers would immediately understand the toxic gas was a threat to avoid.\u201d" },
            { label: "We Observed", value: "What players actually did instead." },
            { label: "This Revealed \u2192 So We Changed", value: "The real underlying problem, and the resulting design change." },
          ],
        },
        { type: "image", src: "images/last-benthrite/BENTHRITE-15-PLAYTEST-PHOTO.jpg", placeholder: "Playtest photo / screen-recording still." },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "Who tested it, how many people, which build, and what task they were given. If testing was informal \u2014 friends, classmates, five minutes on a laptop \u2014 say so plainly. That's a normal, credible part of a jam process, not something to dress up.",
        },
        {
          type: "twoColText",
          index: "21 / Iteration",
          navLabel: "Iteration",
          navTime: "21",
          heading: "Before \u2192 Feedback \u2192 Interpretation \u2192 Change \u2192 After",
          body: "What actually went wrong, and what changed my mind about why.",
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "e.g. \u201cPlayers repeatedly missed the intended route. I first read this as a level-design problem. Watching a few playthroughs, I realised it was visual hierarchy \u2014 the correct path didn't stand out enough against the background.\u201d One real example like this is worth more than four vague ones.",
        },
        {
          type: "defList",
          items: [
            { label: "Design", value: "[a mechanic that was fun in isolation but didn't fit the whole game]" },
            { label: "Technical", value: "[an implementation that caused an unexpected problem]" },
            { label: "Art", value: "[where good-looking art actually hurt gameplay readability]" },
            { label: "Time", value: "[a feature too expensive for the three-week window]" },
          ],
        },
        {
          type: "twoColText",
          index: "22 / System Overview",
          navLabel: "System Overview",
          navTime: "22",
          heading: "The Whole Game, At A Glance",
          body: "The complete player journey:\n\nLaunch \u2192 Menu \u2192 Start \u2192 Climb \u2192 Challenge \u2192 Fail / Recover \u2192 Collect Fragment \u2192 Progress \u2192 Final Moment \u2192 Completion",
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { title: "Character", body: "Burg + states. Final design, palette, expressions." },
            { title: "Environment", body: "World layers. Visual language and depth system." },
            { title: "Gameplay", body: "Core loop \u2014 Move \u2192 Jump \u2192 Avoid \u2192 Collect \u2192 Climb." },
            { title: "UI", body: "Menus + HUD. Organic button system." },
            { title: "Animation", body: "Key states \u2014 Idle, jump, fall, land." },
            { title: "Technical", body: "[engine / tools / implementation notes]" },
          ],
        },
        {
          type: "twoColText",
          index: "23 / Resolution",
          navLabel: "Resolution",
          navTime: "23",
          heading: "Did We Solve The Problem We Started With?",
          body: "An honest answer here matters more than a clean one. If something stayed unresolved by submission \u2014 balance, a level, a feature \u2014 name it. That's not a weaker ending. It's a more believable one.",
        },
        {
          type: "defList",
          items: [
            { label: "A theme without a game \u2192", value: "A playable interpretation of \u201cTo the Top.\u201d" },
            { label: "Two people who'd never shipped a jam game \u2192", value: "A complete, submitted first draft in three weeks." },
            { label: "A creature with no visual identity \u2192", value: "A readable, expressive character built for mobile scale." },
            { label: "An empty ocean setting \u2192", value: "A layered world where blue, purple, and green each carry meaning." },
          ],
        },
        {
          type: "twoColText",
          index: "24 / Account",
          navLabel: "Honest Account",
          navTime: "24",
          heading: "An Honest Account",
          body: "What worked, and what didn't.",
        },
        {
          type: "cardGrid",
          cols: 3,
          items: [
            { title: "Visual Direction", body: "Established a clear sense of depth and danger." },
            { title: "Character Design", body: "The large-eyes, simple-silhouette character stayed readable at every scale tested." },
            { title: "Platform System", body: "Communicated behaviour without any text, using material alone." },
          ],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "What didn't work: another point playtesting confirmed, which mechanic stayed underdeveloped, which level needed more iteration, any visual inconsistency, and what the three-week window prevented.",
        },
        {
          type: "twoColText",
          index: "25 / Beyond",
          navLabel: "Beyond The Jam",
          navTime: "25",
          heading: "Beyond The Jam",
          body: "What I'd explore next, if the three-week clock stopped mattering.",
        },
        {
          type: "defList",
          items: [
            { label: "My Role", value: "Character design, environment art, UI visuals, animation, visual direction." },
            { label: "Aditya's Role", value: "Programming, game systems, implementation." },
            { label: "Shared", value: "Concept, game design, playtesting, iteration." },
          ],
        },
        {
          type: "tagPills",
          tags: ["More levels and progression", "Environmental storytelling", "Audio design", "Difficulty balancing"],
        },
        {
          type: "noteBox",
          label: "Worth Filling In",
          text: "One real example: \u201cI designed X, but implementing it revealed Y, so we changed Z.\u201d A concrete moment of design meeting engineering constraint says more than the role list above it.",
        },
        {
          type: "twoColText",
          index: "26 / Reflection",
          navLabel: "Reflection",
          navTime: "26",
          heading: "What The Project Changed In My Thinking",
          body: "I went into this jam thinking the biggest challenge would be producing enough artwork. It turned out the harder problem was deciding what deserved to exist in the first place.",
        },
        {
          type: "hmw",
          heading: "Lessons",
          items: [
            "Constraints don't limit creativity. They force clarity about what actually matters.",
            "Readability at small scale changes how every design decision gets made \u2014 from silhouette to colour.",
            "A visual system \u2014 blue for world, purple for character, green for danger \u2014 does more communicative work than any single asset.",
          ],
        },
        {
          type: "quote",
          text: "What actually makes a game addictive, and another forgettable, isn't something I've solved — it's something I'm still chasing. I don't think that question ever fully closes. It's just the one I keep building toward an answer to, one project at a time.",
        },
        {
          type: "ctaLink",
          href: "games/burgs-ascent.html",
          label: "Try The Game \u2197",
          sub: "Playable right in the browser \u2014 same as The Masked Murders.",
        },
      ],
    },
  },

  {
    id: "masked-murders",
    title: "The Masked Murders",
    category: "Illustrations",
    badge: "Game Jam",
    eyebrow: "Narrative Deduction Minigame",
    description: "A detective deduction minigame made for Global Game Jam Kolkata 2025 — every demon mask maps to a motive, and the goal is predicting who dies next, not catching the killer.",
    thumbnail: "images/masked-murders/MASKED-MURDERS-01-THUMBNAIL.jpg",
    year: "2025",
    tall: false,
    homeOutcome: { label: "What I Owned", stat: null, text: "Turned a team's mythology into a visual system — four masks, a full relationship web, and every sprite the village needed to run." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[06]",
      tagline: "The masks weren't decoration. They were clues.",
      heroImage: "images/masked-murders/MASKED-MURDERS-02-HERO.jpg",
      meta: [
        { label: "Role", val: "Principal Game Artist" },
        { label: "Event", val: "Global Game Jam Kolkata 2025" },
        { label: "Timeline", val: "48-Hour Jam + 3-Day Rebuild" },
        { label: "Team", val: "3 — Multiple Owners" },
        { label: "Engines", val: "Unity 2D → GDevelop 5" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Overview",
          navLabel: "Overview",
          navTime: "01",
          heading: "A Detective Game Where The Mask Is The Clue.",
          body: "The Masked Murders is a narrative deduction minigame made for Global Game Jam Kolkata 2025, on the theme Mask. You play a Japanese detective investigating a string of murders — the goal isn't to catch the killer, it's to predict who dies next, before it happens.\n\nIt was a three-person jam team. I wasn't the designer or the developer on this one — I was the Principal Game Artist. This case study covers the project honestly from that seat: the concept as the team defined it, and then the part I actually owned — turning a mythology into a visual system the game could be played with.",
        },
        {
          type: "defList",
          heading: "The Team",
          items: [
            { label: "Designer, Developer & Art Director", value: "Aditya Das" },
            { label: "Co-Developer", value: "Vijay Anand" },
            { label: "Principal Game Artist", value: "Karan Panda" },
            { label: "Format", value: "Digital Minigame — Pixel, Puzzle, Mystery" },
            { label: "Tools", value: "Piskel, Figma" },
          ],
        },
        {
          type: "ctaLink",
          href: "https://gd.games/games/4db53808-49fe-4de8-8bb9-3b60cc055f2a",
          label: "Play The Beta Build ↗",
          sub: "Made in GDevelop — playable in-browser, no download needed.",
        },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-09-HERO-TITLE-SCREEN-INLINE.jpg", placeholder: "Hero — Torii Gate At Night. The game's title screen: a detective figure standing before a torii gate, pixel-art village behind it." },

        {
          type: "twoColText",
          index: "02 / Notice",
          navLabel: "Notice",
          navTime: "02",
          heading: "The Theme Was Mask.",
          body: "The concept the team built explores Shintoism in Japanese culture — the belief that humans are fundamentally good, and evil actions are caused by evil spirits, with a motive sitting behind every act.\n\nOut of that came the brief: a detective mystery where the goal isn't to catch the killer, but to predict the next victim. You play as a Japanese detective investigating a series of murders, each marked by a symbolic demon mask representing an emotion — fear, envy, deceit. By exploring crime scenes, reading subtle clues, and studying relationships between villagers, you piece together motives and anticipate who gets targeted next. Every correct prediction brings you closer to stopping the killer. Every mistake leads to another death.",
        },
        { type: "bigStatement", text: "A narrative-driven deduction game about patterns, emotions, and the cost of being one step behind." },

        {
          type: "twoColText",
          index: "03 / Research",
          navLabel: "Research",
          navTime: "03",
          heading: "What A Mask Game Needed To Actually Look Like.",
          body: "Before anything got drawn, the reference gathering split into three buckets — the pixel-art language the game would be built in, the specific masks and dress the mystery hangs on, and the domestic Japanese architecture the whole village would sit inside.",
        },
        {
          type: "textBlock",
          body: "Style and elements: top-down RPG-style pixel art as the base language — sprite sheets, tile-based interiors, town-map layouts — plus a set of flat Japanese cultural iconography (torii gates, daruma dolls, fans, lucky cats) to keep the UI and incidental detail consistent with the world instead of generic.",
        },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-03-MOODBOARD-PIXEL-STYLE-REFERENCES.jpg", placeholder: "Moodboard — Pixel Style References. Top-down RPG sprite sheets and tile-based town layouts used to anchor the art direction." },
        {
          type: "textBlock",
          body: "Characters and masks: the four masks — Oni, Hannya, Kitsune, Tengu — pulled from real Noh and festival mask photography, alongside reference photography of traditional dress (kimono, detective coat silhouettes) to keep the cast readable at a glance.",
        },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-04-MOODBOARD-MASKS-TRADITIONAL-DRESS.jpg", placeholder: "Moodboard — Masks & Traditional Dress. Oni, Hannya, Kitsune, and Noh mask reference photography, plus kimono and detective-coat references." },
        {
          type: "textBlock",
          body: "Culture and environment: Gassho-zukuri-style thatched-roof houses and tatami-floored interiors, used to keep every exterior and interior tile grounded in an actual regional building style rather than a generic \"Japanese village\" look.",
        },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-05-MOODBOARD-VILLAGE-ARCHITECTURE-INTERIORS.jpg", placeholder: "Moodboard — Village Architecture & Interiors. Thatched-roof house references and tatami-room interiors used for the exterior and interior tile sets." },

        {
          type: "twoColText",
          index: "04 / The Decision",
          navLabel: "The Decision",
          navTime: "04",
          heading: "A Mask Couldn't Just Be A Costume Piece.",
          body: "The theme was Mask, and it would have been easy to let that stay decorative — masks on walls, masks on villagers, nothing riding on them. That felt like the wrong use of a 48-hour constraint on exactly this theme. If a mask showed up at a crime scene, it needed to tell the player something they could actually act on.\n\nSo each of the four demon masks got mapped to a specific motive category, before a single crime-scene layout was drawn:",
        },
        {
          type: "cardGrid",
          cols: 4,
          items: [
            { title: "Hannya — Jealousy", body: "Hatred for someone, obsession, possessions, luxury, popularity." },
            { title: "Kitsune — Treachery", body: "Cheating, fraud, using someone, leaked secrets." },
            { title: "Oni — Fear", body: "Blackmail, bullying, threats." },
            { title: "Tengu — Pride", body: "Arrogance, insult, ignorance, disregard." },
          ],
        },
        {
          type: "textBlock",
          body: "Underneath that sat a full relationship web — every villager connected to every other by something worth hiding: affairs, debts, old friendships gone sour, secrets sent as gifts. The masks were the surface language. The web was what they were actually pointing at.",
        },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-06-RELATIONSHIP-MAP-FULL-VILLAGER.jpg", placeholder: "Relationship Map. The full villager relationship web — affairs, debts, friendships, and the secrets connecting them." },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-07-CHARACTER-PROFILE-CARDS-PER.jpg", placeholder: "Character Profile Cards. Per-character cards — relationships, motive, and murder-suspect profile — for Detective, Akira, Daichi, Dan, Akio, The Priest, Akane, Izumi, and Hideki." },
        { type: "quote", text: "My job on this one wasn't to design the mystery. It was to make sure the mask you found actually told you something, before you'd read a single line of dialogue." },

        {
          type: "twoColText",
          index: "05 / Asset Library",
          navLabel: "Asset Library",
          navTime: "05",
          heading: "Building The Village, One Tile At A Time.",
          body: "Once the mask system and the moodboards were settled, the rest was volume — turning a style direction into every sprite the game actually needed to run.",
        },
        {
          type: "tagPills",
          heading: "Clues",
          tags: ["Tengu Mask", "Hannya Mask", "Kitsune Mask", "Oni Mask", "Scratched Image I", "Scratched Image II", "Letter", "Hair Strands"],
        },
        {
          type: "tagPills",
          heading: "Exteriors",
          tags: ["Road Tile", "Grass Tile", "Village Fence", "Torii Gate", "Large House I", "Large House II", "Small House I", "Small House II"],
        },
        {
          type: "tagPills",
          heading: "Interiors",
          tags: ["Wooden Floor Tile", "Beds", "Daruma Doll", "Sacred Scrolls", "Table And Mats", "Almirahs", "Side Table", "Side Table With Vase", "Vase", "Table With Basin"],
        },
        {
          type: "tagPills",
          heading: "Characters",
          tags: ["Daichi", "Dan", "Akio", "Akira", "Izumi", "Akane", "Hideki", "Detective", "Priest", "Murderer"],
        },
        {
          type: "tagPills",
          heading: "UI Icons",
          tags: ["Interact", "Mask Inventory", "Exit / Quit", "Death Count"],
        },
        { type: "image", src: "images/masked-murders/MASKED-MURDERS-08-FULL-ASSET-SHEET-CLUES.jpg", placeholder: "Full Asset Sheet. Clues, exteriors, interiors, characters, and UI icons laid out as one reference sheet." },
        {
          type: "videoPlaceholder",
          src: "images/masked-murders/MASKED-MURDERS-10-CHARACTER-MOVEMENT-DEVELOPMENT-CAPTURE.mp4",
          aspect: "16/9",
          label: "Character movement, mid-development — the detective sprite's walk cycle being tested against the village tileset before the build was locked.",
        },

        {
          type: "twoColText",
          index: "06 / Rebuild",
          navLabel: "Rebuild",
          navTime: "06",
          heading: "The 48 Hours Didn't End When The Prototype Did.",
          body: "The jam's 48 hours went into a first playable prototype in Unity 2D. That wasn't the end of it — the three days after went into rebuilding the same game in GDevelop 5. Why exactly is a question for Aditya and Vijay, who owned that call; from the art side, it meant re-checking every sprite and tile once a different engine was actually the one rendering them, rather than assuming what worked in Unity would carry over untouched.\n\nRedoing the build wasn't wasted time on a jam clock that had already run out. It was the same rule as everything else here — you don't fully know if something holds until you see it running.",
        },

        {
          type: "twoColText",
          index: "07 / Prove",
          navLabel: "Prove",
          navTime: "07",
          heading: "What's Actually Playable.",
          body: "Two builds exist: an initial prototype made in Unity, and a beta build rebuilt in GDevelop. Both are linked directly from the project page rather than described secondhand.\n\nThis is a 48-hour jam project, published on Behance under multiple owners. I'm not going to inflate what that means — it's a jam entry, not a shipped title, and the honest evidence here is the two playable builds themselves, not a metric.",
        },
        {
          type: "defList",
          items: [
            { label: "Prototype", value: "Initial prototype — built in Unity 2D (link pending)" },
            { label: "Beta", value: "Beta build — built in GDevelop 5, playable now via the link above" },
          ],
        },

        {
          type: "twoColText",
          index: "08 / Move Forward",
          navLabel: "Move Forward",
          navTime: "08",
          heading: "What The Jam Clock Didn't Leave Room For.",
          body: "The team's own future-scope list, as it stands. From where I sit, the asset library is built for exactly this kind of extension — the mask-to-motive system was designed to scale past four suspects, not just hold four for the length of a jam build.",
        },
        {
          type: "hmw",
          items: [
            "Interactive NPCs.",
            "More characters and relationships.",
            "Multiple ending cutscenes.",
            "Polishing assets and UI.",
            "Inventory management, plus more puzzles and difficulty levels.",
          ],
        },

        { type: "quote", text: "A narrative-driven deduction game about patterns, emotions, and the cost of being one step behind." },
        { type: "textBlock", body: "The Masked Murders — Global Game Jam Kolkata 2025. Principal Game Artist: Karan Panda." },
        {
          type: "ctaLink",
          href: "https://gd.games/games/4db53808-49fe-4de8-8bb9-3b60cc055f2a",
          label: "Try The Game ↗",
          sub: "Playable in-browser, made in GDevelop.",
        },
      ],
    },
  },


  ];

  /* ---------------------------------------------------------------------- */
  /* ARCHIVE_POSTS — long-form Archive/blog content (the "Archive" strip    */
  /* on the homepage). Same block system as case studies — see the         */
  /* reference list at the bottom of this file. Add a post: copy a whole    */
  /* { ... } block, give it a unique "id", then point a HOME.archive item   */
  /* at it via `href: "archive-post.html?id=your-id"`.                      */
  /* ---------------------------------------------------------------------- */
  const ARCHIVE_POSTS = [
  {
    id: "patachitra",
    title: "Patachitra: A Story Painted In Cloth",
    tag: "Craft Documentation",
    indexLabel: "[01]",
    tagline: "How an old sari becomes a canvas trusted to stand in for a god.",
    heroImage: "images/patachitra/PATACHITRA-20-HERO.jpg",
    meta: [
      { label: "Role", val: "Writer & Photographer" },
      { label: "Craft", val: "Patachitra, Ananta Gurukul Ashram" },
      { label: "Duration", val: "—" },
      { label: "Location", val: "Puri, Odisha" },
    ],
    blocks: [
      { type: "image", src: "images/patachitra/PATACHITRA-21-HERO-FULL-PAINTING-KRISHNA.jpg", placeholder: "Full painting — blue flute-playing Krishna, red background" },
      {
        type: "textBlock",
        body: "For fifteen days every year, the wooden idols inside the Jagannath temple in Puri disappear from public view, sent into seclusion for their annual repainting. In their place, a painting stands in — not a photograph, not a statue, but a hand-painted length of cloth trusted to carry the same reverence as the deity itself.",
      },

      {
        type: "twoColText",
        index: "01 — Overview",
        navLabel: "Overview",
        navTime: "01",
        heading: "The Brief",
        body: "That painting is called Patachitra. Patta means cloth, chitra means picture — literally, a picture on cloth. The tradition goes back to the founding of the Jagannath temple in the eleventh century, and for most of its history, it wasn't decoration. It was devotion.\n\nI spent time with the Chitrakar community at Ananta Gurukul Ashram, an artisan craft village built around this exact art form, learning how an old, repurposed sari becomes a surface worthy of that trust. Here's how it unfolds: the history first, then the craft, then the people who keep it going — and a few things I made along the way.",
      },

      {
        type: "cardGrid",
        heading: "Five Moments That Shaped It",
        intro: "Patachitra didn't start as a painting. It started as a page.",
        cols: 3,
        items: [
          { src: "images/patachitra/PATACHITRA-01-MANUSCRIPT-STACK-INSCRIBED-CLOSE.jpg", placeholder: "Manuscript stack + inscribed close-up", title: "Palm Leaf, First", body: "The Puranas and Pothi manuscripts were etched onto treated palm leaves with a stylus, preserving myth and memory for generations. Text eventually gave way to illustration — arguably the earliest form this tradition took." },
          { src: "images/patachitra/PATACHITRA-02-PAINTED-DOORWAY-MURAL.jpg", placeholder: "Painted doorway mural", title: "Onto The Palace Walls", body: "As the craft grew, it moved onto the walls of royal palaces, seen only by the court. Kings housed the Chitrakaras and paid them in food, coconuts, rice, and wheat — enough to sustain a family for months." },
          { src: "images/patachitra/PATACHITRA-03-BHAGABATA-PAINTING.jpg", placeholder: "Bhagabata painting", title: "Out In Public", body: "Kings began commissioning Bhagabata Purana scenes — Krishna's birth, Narasimha's incarnation — for public spaces, first on tree bark, later cut and used as canvas. For the first time, ordinary people could see the work." },
          { src: "images/patachitra/PATACHITRA-04-ANASARA-PATI-PAINTING.jpg", placeholder: "Anasara Pati painting", title: "Standing In For The Deity", body: "After Snana Purnima, the annual bathing ritual, the three deities are secluded for fifteen days. During this Anasara period, Chitrakaras painted Vishnu as Jagannath, Ananta Vasudeva as Balabhadra, and Bhubaneswari as Subhadra — and devotees worshipped these paintings in the deities' place." },
          { src: "images/patachitra/PATACHITRA-05-JATRI-PATI-TREE-PAINTING.jpg", placeholder: "Jatri Pati tree painting", title: "Becoming A Livelihood", body: "Commercialisation came through Jatri Pati, paintings made for pilgrims. Many Chitrakars worked as sevaks, temple servants, and sold their work at fairs and melas — still the backbone of how most Chitrakars earn a living today." },
        ],
      },

      {
        type: "twoColText",
        index: "02 — The Workshop",
        navLabel: "The Workshop",
        navTime: "02",
        heading: "Making The Canvas",
        body: "",
      },
      {
        type: "cardGrid",
        cols: 3,
        heading: "From Sari To Surface",
        items: [
          { src: "images/patachitra/PATACHITRA-23-CANVAS-WASHED-GLUED-LAYERS.jpg", title: "Washed & Glued", body: "Old cotton sari, washed and dried, then two layers bound together with Manja Atha — ground tamarind seed gum." },
          { src: "images/patachitra/PATACHITRA-24-CANVAS-SUN-DRIED.jpg", title: "Sun-Dried", body: "Dried flat in direct sun." },
          { src: "images/patachitra/PATACHITRA-25-CANVAS-STONE-POWDER-COATED.jpg", title: "Coated", body: "Stone powder and gum, rubbed on with a cotton puff." },
          { src: "images/patachitra/PATACHITRA-26-CANVAS-SMOOTHED-STEEL-EDGE.jpg", title: "Smoothed", body: "Levelled with a steel edge." },
          { src: "images/patachitra/PATACHITRA-27-CANVAS-BURNISHED-PEBBLE.jpg", title: "Burnished", body: "Polished with pebbles (Pataastra) until glossy and waterproof." },
          { src: "images/patachitra/PATACHITRA-28-CANVAS-CUT-TO-SIZE.jpg", title: "Cut To Size", body: "Set sizes, 6×4 in up to 40×24 in." },
        ],
      },
      { type: "textBlock", body: "In the late nineteenth century, this same canvas was prepared with cow dung and black earth instead of gum. The materials have modernised. The patience it demands hasn't." },
      { type: "noteBox", label: "Every Inch Is Accounted For", text: "Sheets are cut to set, repeatable sizes — from 6×4 in up to 40×24 in — so nothing is wasted once the surface is finally ready." },

      {
        type: "twoColText",
        index: "03 — The Workshop",
        navLabel: "The Workshop",
        navTime: "03",
        heading: "Making The Colour",
        body: "Traditionally, Patachitra used five colours, and none of them came from a shop. White from ground conch shell. Red from Hingula, a mineral stone. Yellow from Haritala, or orpiment. Blue from Ramaraja, a form of indigo. Black — the only one made rather than mined — from soot.",
      },
      {
        type: "swatchGrid",
        swatches: [
          { hex: "#EFEDE6", name: "White", label: "Ground conch shell" },
          { hex: "#B23A2E", name: "Red", label: "Hingula (mineral stone)" },
          { hex: "#D9A62E", name: "Yellow", label: "Haritala (orpiment)" },
          { hex: "#2B4C7E", name: "Blue", label: "Ramaraja (indigo)" },
          { hex: "#1C1B18", name: "Black", label: "Soot — the only made pigment" },
        ],
      },
      { type: "textBlock", body: "Making black is its own small ritual. A cotton wick soaked in ghee burns steadily, collecting soot on a raised steel plate. The soot is gathered, then worked between the fingers with a small tool called a koitha, for an hour or two, until it turns glossy enough to paint with. I made a batch myself under the artisans' supervision — it takes longer than it sounds.\n\nOnce ground, every pigment is shaped into a tablet and stored in a coconut shell. A few drops of water bring it back to life whenever it's time to paint." },
      { type: "imageGrid", cols: 2, images: [{ src: "images/patachitra/PATACHITRA-09-SELF-MADE-BLACK-PIGMENT.jpg", placeholder: "Self-made black pigment, in a coconut-shell bowl", tag: "Made this batch myself" }, { src: "images/patachitra/PATACHITRA-10-RAW-HINGULA-CONCH-SHELL.jpg", placeholder: "Raw Hingula, conch shell, Ramaraja", tag: "Five colours, all from the ground" }] },

      {
        type: "twoColText",
        index: "04",
        navLabel: "Before Cloth, There Was Leaf",
        navTime: "04",
        heading: "Before Cloth, There Was Leaf",
        body: "The palm leaf tradition that started it all is still alive. Leaves are twisted and boiled for days in water infused with turmeric and neem — natural preservatives that also give the leaf its golden tint. Once dried and smoothed, an artist inscribes the drawing with a stylus, not a brush, then rubs pigment into the grooves. Finished sheets are bound into pothis with thread or bamboo — durable enough to resist moisture and fire for centuries.\n\nI processed a set of leaves myself, start to finish, and made a small piece of my own.",
      },
      { type: "image", src: "images/patachitra/PATACHITRA-11-LEAF-PROCESSING-SELF-MADE.jpg", placeholder: "Leaf processing + self-made piece", tag: "Leaf to line, made by hand" },

      {
        type: "twoColText",
        index: "05",
        navLabel: "What The Paintings Show",
        navTime: "05",
        heading: "What The Paintings Show",
        body: "Most Patachitra work circles back to Jagannath and the Vaishnav tradition — his ceremonial Vesas, and scenes from Krishna's life: his birth, his childhood, festivals like Rath Yatra and Dola Yatra. Nature runs through nearly every composition too, all held inside dense floral borders painted with as much care as the figures at the centre.",
      },
      {
        type: "challenges",
        heading: "Recurring Motifs",
        sub: "What nature stands in for",
        items: [
          { label: "Motif", q: "The Lotus", a: "Purity." },
          { label: "Motif", q: "The Peacock", a: "Beauty." },
          { label: "Motif", q: "The Elephant", a: "Strength." },
        ],
      },
      { type: "image", src: "images/patachitra/PATACHITRA-12-FLORAL-BORDER-DETAIL.jpg", placeholder: "Floral border detail" },

      {
        type: "colorBand",
        eyebrow: "06 — The People",
        heading: "The People Behind The Paint",
        image: "images/patachitra/PATACHITRA-22-ARTISAN-PORTRAIT-AT-WORK.jpg",
        imagePlaceholder: "Portrait — artisan at work",
        body: "The Chitrakars I spent time with were Odia-speaking families, aged 26 to 60, for whom painting is still the main source of income. Sitting with them meant hearing not just techniques passed down through generations, but the everyday reality of keeping a craft like this alive. Training still follows Guru-Shishya Parampara — a child learns from a teacher, not a classroom. What's changed is when that starts.",
      },
      {
        type: "evolution",
        heading: "How Training Has Shifted",
        stages: [
          { marker: "Age 5", title: "Chali Catasal", body: "School always begins on Saraswati Puja — Odia language, the Puranas, the Gita." },
          { marker: "Age 12–15", title: "Formal Lessons Begin (Traditionally)", body: "A fish, a swan, a kalasha, a cow — then human forms and faces." },
          { marker: "Today", title: "Often After Class 10", body: "With regular school taking up most of a child's day, formal training now often starts later." },
        ],
      },
      { type: "textBlock", body: "Women in these households paint too, contributing income alongside the men. Most families also work across other crafts — palm leaf engraving, coconut shell and betel nut painting, papier-mâché — through the year." },
      { type: "noteBox", text: "One of the artists at Ananta Gurukul Ashram, Bibhu Maharana, won a national award in 2003 for his Patachitra piece \"Krishna Leela\" — painted, like most traditional work, with brushes made from fine rat fur." },
      { type: "image", src: "images/patachitra/PATACHITRA-13-BIBHU-MAHARANA-PORTRAIT-ASHRAM.jpg", placeholder: "Bibhu Maharana portrait + ashram signage" },

      {
        type: "twoColText",
        index: "07",
        navLabel: "Where It's Headed",
        navTime: "07",
        heading: "Where It's Headed",
        body: "For most of its history, Patachitra worked with five colours and one surface. That's changed. The same artists now paint on textiles, home décor, dining tables, decorative frames — some have taken the craft digital, teaching and painting online. What hasn't changed is the core of it: the same rituals, the same themes, applied to a wider canvas.",
      },
      { type: "image", src: "images/patachitra/PATACHITRA-14-PAINTED-WOODEN-KRISHNA-FIGURINE.jpg", placeholder: "Painted wooden Krishna figurine" },

      {
        type: "cardGrid",
        heading: "What I Made Along The Way",
        intro: "Some of this came from watching. Some came from doing. Under the Chitrakaras' supervision, I:",
        cols: 3,
        items: [
          { src: "images/patachitra/PATACHITRA-15-COMMISSIONED-PIECE-PROGRESS.jpg", placeholder: "Commissioned piece, in progress", title: "Commissioned Piece", body: "Painted figures onto an actual commissioned Patachitra piece." },
          { src: "images/patachitra/PATACHITRA-16-SELF-MADE-BLACK-PIGMENT.jpg", placeholder: "Self-made black pigment", title: "Handmade Black", body: "Made my own batch of black colour." },
          { src: "images/patachitra/PATACHITRA-17-PROCESSED-PALM-LEAF-PIECE.jpg", placeholder: "Processed palm leaf piece", title: "Palm Leaf, Processed", body: "Processed palm leaves from scratch, and made a piece of my own." },
          { src: "images/patachitra/PATACHITRA-18-FULL-COMPOSITION-PREPARED-CANVAS.jpg", placeholder: "Full composition, on prepared canvas", title: "A Full Composition", body: "Painted a full composition on a properly prepared canvas." },
          { src: "images/patachitra/PATACHITRA-19-DIGITAL-REINTERPRETATION-NAVAGUNJARA-NAR.jpg", placeholder: "Tala Patra style — Navagunjara, engraved on palm leaf", title: "Tala Patra, Engraved", body: "Palm-leaf art, drawn with a pointed iron tool — used to engrave the outline into the leaf itself before filling it in with colour." },
        ],
      },
      { type: "textBlock", body: "Not everything made it in. Some techniques and moments the artisans preferred to keep private, and that's been respected throughout." },

      { type: "image", src: "images/patachitra/PATACHITRA-29-ME-PAINTING-ON-PREPARED-CLOTH.jpg", placeholder: "Me, painting on a cloth I prepared myself" },
      {
        type: "cardGrid",
        heading: "A Krishna Painting, Start To Finish",
        cols: 3,
        items: [
          { src: "images/patachitra/PATACHITRA-30-LINE-WORK-SKETCH.jpg", title: "Line Work", body: "Pose sketched first, on a canvas I prepared myself." },
          { src: "images/patachitra/PATACHITRA-31-FILL-COLOUR-IN-PROGRESS.jpg", title: "Fill Colour", body: "Blue and yellow first, block by block. Red comes last." },
          { src: "images/patachitra/PATACHITRA-32-FINAL-PIECE-KRISHNA.jpg", title: "Final Piece", body: "Finished — Krishna, red background, start to end." },
        ],
      },

      {
        type: "twoColText",
        index: "08 — Closing",
        navLabel: "Closing",
        navTime: "08",
        heading: "A Thousand Years, One Surface At A Time",
        body: "Every stage of this process — the canvas, the colour, the leaf — has technically stayed the same for generations. What's changed is what it's made for. Cloth once reserved for temple offerings is now just as likely to be a dupatta, a bed sheet, or a piece on someone's wall.\n\nThat's the real reason Patachitra has lasted a thousand years. It never stopped being useful to the people who made it.",
      },
      { type: "bigStatement", text: "&ldquo;Every stage of this process — the canvas, the colour, the leaf — has technically stayed the same for generations. What's changed is what it's made for.&rdquo;" },
    ],
  },

  {
    id: "building-this-site",
    title: "Building — And Rebuilding — My Portfolio",
    tag: "Case Study Documentation",
    indexLabel: "[02]",
    tagline: "Almost none of it survived the first version.",
    heroImage: "images/building-this-site/BUILDING-SITE-11-HERO.jpg",
    meta: [
      { label: "Role", val: "Design Student — Communication → Product" },
      { label: "Format", val: "Personal Portfolio Website" },
      { label: "Status", val: "v2, Still Moving" },
      { label: "Duration", val: "Ongoing" },
      { label: "Tools", val: "Figma (Layout) · Claude (Build, Ship, Motion)" },
    ],
    // navLabel / navTime on a block turns it into a stop on the left-hand
    // jump rail (see js/archive-post.js) — leave both off any block you
    // don't want listed there.
    blocks: [
      {
        type: "textBlock",
        lede: true,
        body: "Almost none of my portfolio survived its first version — not the layout, not the case-study format, not even the logo. This is the account of how it got here, redo by redo.",
      },

      {
        type: "twoColText",
        navLabel: "Overview",
        navTime: "01",
        index: "01 / Overview",
        navLabel: "Overview",
        navTime: "01",
        heading: "Redo, By Redo.",
        body: "",
      },
      {
        type: "defList",
        items: [
          { label: "Role", value: "Design Student — Communication → Product" },
          { label: "Format", value: "Personal Portfolio Website" },
          { label: "Status", value: "v2, still moving" },
          { label: "Duration", value: "Ongoing" },
          { label: "Tools", value: "Figma (layout) · Claude (build, ship, motion)" },
        ],
      },

      {
        type: "twoColText",
        navLabel: "Notice",
        navTime: "02",
        index: "02 / Notice",
        navLabel: "Notice",
        navTime: "02",
        heading: "Why A Website, Not A PDF.",
        body: "Every brief I've worked on so far starts the same way: notice the actual problem before reaching for a solution. My own portfolio was the one project I hadn't pointed that habit at.\n\nI had a folder of PDFs, a Behance link nobody opened all the way through, and a resume that flattened two years of decisions into bullet points. None of it showed how I actually work — the audits, the wrong turns, the reasons I picked one option over another. A website felt like the only format built to hold that kind of thinking without cutting it short.\n\nI'm still a design student. My portfolio doesn't need to prove ten years of practice — it needs to prove I can think out loud, in public, without editing out the messy part.",
      },
      {
        type: "cardGrid",
        heading: "What I Wanted Out Of It",
        cols: 3,
        items: [
          { title: "One Place", body: "Everything a recruiter needs, without five separate links to keep track of." },
          { title: "My Own Structure", body: "A story I control, not a template someone else already decided for me." },
          { title: "Room For The Redo", body: "Space to show the second attempt, not just the final screen." },
        ],
      },

      {
        type: "twoColText",
        navLabel: "First Attempt",
        navTime: "03",
        index: "03 / First Attempt",
        navLabel: "First Attempt",
        navTime: "03",
        heading: "The First Draft Went Up Over A Weekend.",
        body: "Mostly out of fear that if I planned it too long, I'd never publish anything at all. It had a long homepage, a paragraph explaining my process before a single project was visible, and a colour I'd picked because it looked good on my screen at midnight — not because it meant anything.\n\nIt worked, in the sense that it existed. It didn't work in the sense that almost nobody scrolled past the second section.",
      },
      { type: "image", src: "images/building-this-site/BUILDING-SITE-01-FIRST-HOMEPAGE-DRAFT-FULL.jpg", placeholder: "First Homepage Draft — full-length screenshot of v1, before any of the cuts described below" },
      { type: "quote", text: "I don't need three paragraphs to trust you. Show me one decision you're proud of, and one you'd take back." },
      { type: "noteBox", label: "A Senior I Showed The Site To", text: "That line stuck with me longer than I expected." },

      {
        type: "twoColText",
        navLabel: "Question",
        navTime: "04",
        index: "04 / Question",
        navLabel: "Question",
        navTime: "04",
        heading: "I Read My Own Homepage Like A Stranger Would.",
        body: "I went back and read my own homepage like a stranger would. Once I stopped defending it, the problems were obvious.",
      },
      {
        type: "hmw",
        heading: "Three Things I Had To Undo",
        items: [
          "The homepage talked too much. Three paragraphs before a single project showed up. I rewrote it down to two lines.",
          "Case studies hid the mess. Every one read like it went right on the first try. None of them actually did.",
          "The identity wasn't mine. A safe, borrowed layout with my name typed into it — not a mark that said anything about how I think.",
        ],
      },

      {
        type: "colorBand",
        navLabel: "Undo",
        navTime: "05",
        eyebrow: "05 / Undo — Stage One: The Identity",
        heading: "A Mark Where Going Back Is Part Of The Idea.",
        image: "images/building-this-site/BUILDING-SITE-12-EARLY-MONOGRAM-SKETCHES.jpg",
        imagePlaceholder: "Early K + P Monogram Sketches — the first-round explorations, before the arrow moved into the negative space",
        body: "The third point took the longest to fix, because it meant starting from a blank page instead of editing an existing one. I didn't want a monogram that just spelled out my initials — plenty of those already exist. I wanted a mark that said something about how I actually design: that I go back on purpose, not by accident.\n\nSo the brief I gave myself was narrower than \"make a logo.\" It was: build a mark where going backward is visibly part of the idea, not something bolted on after.",
      },
      {
        type: "imageGrid",
        cols: 2,
        aspect: "1/1",
        images: [
          { src: "images/building-this-site/BUILDING-SITE-02-NEGATIVE-SPACE-EXPLORATION-ARROW.jpg", placeholder: "Negative-Space Exploration — the arrow between K and P, worked as negative space rather than an added glyph" },
          { src: "images/building-this-site/BUILDING-SITE-03-FINAL-MARK-RETHINK-REDO.jpg", placeholder: "Final Mark — Rethink. Redo. Realize. — the direction that shipped" },
        ],
      },
      {
        type: "textBlock",
        body: "Most directions failed for the same reason — the arrow felt added on, sitting beside the letters instead of inside them. The one that worked treated the gap between K and P as the arrow itself. First glance, it's a monogram. Look again, and it's pointing back.",
      },
      { type: "quote", text: "Going back isn't going backward. Sometimes it's how the work moves forward." },
      { type: "noteBox", text: "The line I kept coming back to." },

      {
        type: "calloutMedia",
        eyebrow: "The Selected Direction",
        heading: "The Mark I Chose, And Why",
        media: "images/building-this-site/BUILDING-SITE-10-SELECTED-MARK-CLOSEUP.jpg",
        left: [
          { n: "01. The Letters", b: "K and P — my initials, built as one continuous form instead of two letters placed side by side." },
          { n: "02. The Negative Space", b: "The empty space inside doesn't read as a hole. It reads as a path — forward, stop, turn back, reconsider. That turn is the Rethink, created entirely by how K, P, and the gap between them sit together." },
        ],
        right: [
          { n: "03. Not A Software Icon", b: "A generic ↩ says \u201cundo.\u201d This mark says \u201ci rethink what i make\u201d — a design philosophy, not an action. The letters give it personal ownership; the turn gives it meaning." },
          { n: "04. What It Stands For", b: "K → Karan. P → Panda. The return path → Rethink. The loop → Redo. The forward motion → Realize." },
        ],
      },
      { type: "quote", text: "I go back, not because I failed, but because I found something worth improving." },
      {
        type: "tagPills",
        heading: "The Personality It Had To Have",
        tags: ["Structured, not rigid", "Minimal, not empty", "Formal, with an idea hidden inside", "Confident, not loud", "Progressive"],
      },

      {
        type: "twoColText",
        navLabel: "Rebuild",
        navTime: "06",
        index: "06 / Rebuild",
        navLabel: "Rebuild",
        navTime: "06",
        heading: "\"Research → Design → Prototype\" Flattered A Line I Never Walked.",
        body: "Fixing the identity was the visible half. The other half was fixing how I wrote about my work — a sharper logo sitting on top of the same old reports wouldn't have changed anything.\n\nI stopped writing case studies as Research → Design → Prototype, mostly because that order flatters a straight line I never actually walked. What I do more consistently is question my first answer before I trust it. So that became the shape of every case study now — Stage Two: The Case-Study Framework.",
      },
      {
        type: "evolution",
        heading: "How Every Case Study Is Structured Now",
        stages: [
          { title: "Notice", body: "What did I actually observe — not what I assumed going in?" },
          { title: "Question", body: "What assumption was the design resting on, and was it even true?" },
          { title: "Undo", body: "What did I get wrong in the first pass?" },
          { title: "Rebuild", body: "What changed, and why that version specifically?" },
          { title: "Prove", body: "What happened once it was tested against real use?" },
          { title: "Move Forward", body: "What's still open, and what would I change next?" },
        ],
      },
      { type: "noteBox", label: "Where This Actually Came From", text: "The same audit I ran on my PANDA case study — going back through the original research before trusting any of my earlier decisions. Once I noticed I already worked that way, I just stopped hiding it on this site." },

      {
        type: "twoColText",
        navLabel: "Ship",
        navTime: "07",
        index: "07 / Ship",
        navLabel: "Ship",
        navTime: "07",
        heading: "The Layout Was The Easy Half.",
        body: "Figma handled the layout — every screen, spacing decision, and type pairing happened there first. Getting it into something that actually ran in a browser was a different problem, and Stage Three: Figma To A Live Site. I used Claude for that half: turning static screens into working code, chasing down the glitches that only show up once a site is actually live, and building in the motion — the loader, the section reveals, the small transitions between states — that a static file never shows you.\n\nDesign decided what the site should feel like. Getting it to actually behave that way, consistently, across every page, was its own separate job — and one I couldn't fully see the shape of until it was running.",
      },
      {
        type: "cardGrid",
        heading: "What Actually Shipped",
        cols: 2,
        items: [
          { title: "A Loader That's Part Of The Mark", body: "The site opens on the K+P mark drawing itself in on a loop, rather than a blank screen or a spinner — the \"redo\" idea showing up before a single word of copy does." },
          { title: "A Homepage You Can Actually Use", body: "Instead of describing PANDA, the homepage embeds a live, tappable demo of it — Upload, Printing, Ready — so a recruiter can move through an actual product flow instead of reading about one." },
          { title: "A Work Page Built To Be Skimmed And Filtered", body: "A horizontal project carousel up top, then a filterable grid below it — built for someone deciding in ten seconds whether to keep reading, not for someone committed to scrolling everything." },
          { title: "Case Studies As Modular Blocks, Not One Fixed Template", body: "Every case study is assembled from reusable content blocks instead of a single rigid page — so a research-heavy project and a visually-heavy one don't have to force themselves into the same shape." },
          { title: "An About Page Built Around An Actual Person", body: "Games, art, honours — sections that exist because they're true, not because a template expected an \"About\" page to have a paragraph and a headshot." },
        ],
      },
      {
        type: "imageGrid",
        cols: 2,
        images: [
          { src: "images/building-this-site/BUILDING-SITE-04-SITE-LOADER-K-P.jpg", placeholder: "Site Loader — the K+P mark animating into place on load" },
          { src: "images/building-this-site/BUILDING-SITE-05-HOMEPAGE-HERO-TAPPABLE-PHONE.jpg", placeholder: "Homepage Hero — the tappable phone mockup cycling Upload / Printing / Ready" },
          { src: "images/building-this-site/BUILDING-SITE-06-WORK-PAGE-SCROLLABLE-PROJECT.jpg", placeholder: "Work Page — the scrollable project carousel above the filter pills and grid" },
          { src: "images/building-this-site/BUILDING-SITE-07-ABOUT-PAGE-GAMES-ART.jpg", placeholder: "About Page — games, art, and honours, laid out beneath the portrait" },
        ],
      },
      {
        type: "textBlock",
        body: "Type stayed simple, on purpose. One display face for anything loud, one plain sans for everything you actually read, one mono face for anything structural — labels, indexes, metadata. Bricolage Grotesque for headlines, Manrope for body copy, JetBrains Mono for the small functional text. Three faces, used consistently, rather than a different one every time something needed to feel important.",
      },

      {
        type: "twoColText",
        navLabel: "Prove",
        navTime: "08",
        index: "08 / Prove",
        navLabel: "Prove",
        navTime: "08",
        heading: "I Don't Have A Dashboard For This Yet.",
        body: "The clearest signal I got wasn't a metric. It was one line from a senior I trust, and how fast it stuck once I stopped defending the homepage instead of reading it honestly.\n\nI don't have analytics or a recruiter funnel to point to the way a shipped product might. What I have is smaller and more honest: a handful of people I showed this to, and enough agreement between them to know which three things actually had to go. That's thinner evidence than I'd like. I'm not going to dress it up as more than it is.",
      },
      { type: "image", src: "images/building-this-site/BUILDING-SITE-08-EARLY-FEEDBACK-CONVERSATION-THAT.jpg", placeholder: "Early Feedback — the conversation that started the rebuild" },

      {
        type: "noteBox",
        label: "One More Pass — Toning It Down",
        text: "A later round of feedback was simpler: the type scale, buttons, and section spacing were louder than they needed to be — everything competing for attention at once. I brought the whole system down by about 20%, resized CTAs and frames to match, and left more breathing room between sections instead of packing them edge to edge.",
      },

      {
        type: "twoColText",
        navLabel: "Move Forward",
        navTime: "09",
        index: "09 / Move Forward",
        navLabel: "Move Forward",
        navTime: "09",
        heading: "It Probably Shouldn't Ever Call Itself Finished.",
        body: "This version still isn't final — a portfolio that's meant to show how I redo things probably shouldn't ever call itself finished. A couple of sections are lighter than I'd like, and the identity system has more to define than a mark and a colour.\n\nBut the difference between this version and the first one isn't polish. It's that this one is honest about being a work in progress — which, for a designer who's still early in this, might be the more accurate thing to show anyway.",
      },
      {
        type: "cardGrid",
        heading: "V1, Next To Where It Stands Now",
        cols: 2,
        items: [
          { title: "V1", body: "Three paragraphs before a single project. Case studies with no visible mess. A borrowed layout with my name on it. A midnight colour choice, no meaning behind it." },
          { title: "V2", body: "Two lines, then straight into the work. Every case study built on Notice → Question → Undo → Rebuild → Prove → Move Forward. A mark where the redo is the idea, not decoration. A live PANDA demo, a filterable work grid, a real About page." },
        ],
      },
      { type: "image", src: "images/building-this-site/BUILDING-SITE-09-SITE-AS-IT-STANDS.jpg", placeholder: "The Site As It Stands — current homepage, work page, and a case-study page, side by side" },

      { type: "bigStatement", text: "I don't need the portfolio to look finished. I need it to look like I know how to finish things properly." },
      { type: "noteBox", label: "Where I've Landed, For Now", text: "There's a Mail Me button in the nav for exactly this. I read all of it, even the blunt ones." },
    ],
  },
];
/* ---------------------------------------------------------------------- */
/* BLOCK REFERENCE — used by both case studies (PROJECTS) and Archive     */
/* posts (ARCHIVE_POSTS). Copy/paste into any blocks[] array and edit.    */
/* Every block that takes an image also accepts a "placeholder" string    */
/* instead of "src" — that shows a labelled dashed box so you can lay out */
/* a whole page before you have the real image. Swap "placeholder" for    */
/* "src" (or just add "src") once you upload the file to images/.         */
/* ---------------------------------------------------------------------- */
// { type: "twoColText", index: "01 / Context", heading: "Overview", body: "Paragraph one.\n\nParagraph two." }
// { type: "textBlock", body: "A connective paragraph with no new heading — continues the section above it." }
// { type: "image", src: "images/x.jpg", placeholder: "What this image will be", caption: "Optional caption", tag: "Optional corner-pill label instead of a caption" }
// { type: "imageGrid", cols: 2, gap: 20, images: [{ src: "images/a.jpg" }, { src: "images/b.jpg", placeholder: "Second image" }] }
// { type: "quote", text: "A short pull-quote." }
// { type: "bigStatement", eyebrow: "Optional label", text: "A big, bold, centred accent-coloured statement.", cite: "Optional — Citation" }
// { type: "noteBox", label: "Optional label", text: "One highlighted, noteworthy fact." }
// { type: "statGrid", heading: "Optional heading", stats: [{ value: "65%", label: "Improvement" }] }
// { type: "defList", heading: "Optional heading", items: [{ label: "Height", value: "3.5 cm" }] }
// { type: "swatchGrid", heading: "Optional heading", swatches: [{ hex: "#00E5FF", name: "Accent", label: "Optional note" }] }
// { type: "tagPills", heading: "Optional label", tags: ["Word", "Word"] }
// { type: "sliderRow", heading: "Optional heading", sliders: [{ left: "Casual", right: "Corporate", value: 30 }] } // value 0-100
// { type: "cardGrid", heading: "Optional heading", intro: "Optional intro line", cols: 3, items: [{ src: "images/x.jpg", placeholder: "...", title: "Card title", body: "Card body", note: "Optional small accent label", noteBody: "Optional note detail" }] }
// { type: "personaGrid", heading: "Meet our users", people: [{ name: "Ananya Rao", role: "Design Student", bio: "..." }] }
// { type: "hmw", heading: "HMW", items: ["How might we...", "How might we..."] }
// { type: "evolution", heading: "Design Evolution", stages: [{ marker: "Optional — defaults to 01, 02...", title: "Wireframe", body: "..." }] }
// { type: "challenges", heading: "Visual Challenges", sub: "optional sub", items: [{ label: "Optional — defaults to Challenge 01", q: "Question?", a: "Answer." }] }
// { type: "calloutMedia", eyebrow: "", heading: "", media: "images/x.jpg", mediaPlaceholder: "...", left: [{n,b}], right: [{n,b}] }
// { type: "colorBand", eyebrow: "", heading: "", body: "...", image: "images/x.jpg", imagePlaceholder: "...", reverse: false, note: "optional small callout below the text", noteLabel: "optional" }
// { type: "placeholder", label: "A standalone pending image, not tied to any other block" }
