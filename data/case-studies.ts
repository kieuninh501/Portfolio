export type CaseStudyDetail = {
  label: string;
  value: string | string[];
};

export type CaseStudyImageLayer = {
  src: string;
  alt: string;
  className: string;
};

export type CaseStudyImageGroup = {
  className?: string;
  layers: CaseStudyImageLayer[];
};

export type CaseStudyListItem = {
  title: string;
  body: string;
};

export type CaseStudyExperience = {
  title: string;
  body: string;
  items: CaseStudyListItem[];
  images?: CaseStudyImageGroup[];
};

export type CaseStudyContentImage = {
  src: string;
  alt: string;
};

export type CaseStudyNumberedItem = {
  title: string;
  body?: string | string[];
  items?: CaseStudyListItem[];
  prompt?: string[];
  images?: CaseStudyContentImage[];
};

export type CaseStudyImageStack = {
  images: CaseStudyContentImage[];
  caption?: string;
};

export type CaseStudySection = {
  id: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  intro?: string | string[];
  numberedVariant?: "overview" | "detail" | "plain";
  numberedItems?: CaseStudyNumberedItem[];
  processText?: string;
  imageStack?: CaseStudyImageStack;
  overviewItems?: CaseStudyListItem[];
  productChallenges?: {
    title: string;
    challenge: string;
    contribution: string | string[];
    outcome: string;
  }[];
  experiences?: CaseStudyExperience[];
  systemItems?: CaseStudyListItem[];
  reflectionItems?: CaseStudyListItem[];
  image?: {
    src: string;
    alt: string;
  };
};

export type CaseStudy = {
  slug: string;
  title: string;
  nav: string[];
  showcase: CaseStudyImageGroup;
  details: CaseStudyDetail[];
  sections: CaseStudySection[];
};

const smallJobsAssetPath = "/assets/case-studies/small-jobs";
const smallJobsKeyExperienceBg = `${smallJobsAssetPath}/smalljobs-key-bg-common.png`;
const sonaTarotAssetPath = "/assets/case-studies/sona-tarot";

const phoneShowcase: CaseStudyImageGroup = {
  layers: [
    {
      src: `${smallJobsAssetPath}/smalljobs-showcase-bg.png`,
      alt: "",
      className: "case-study-showcase__bg",
    },
    {
      src: `${smallJobsAssetPath}/smalljobs-showcase-phone-discover.png`,
      alt: "SmallJobs discovery screen",
      className: "case-study-showcase__phone-discover",
    },
    {
      src: `${smallJobsAssetPath}/smalljobs-showcase-phone-profile.png`,
      alt: "SmallJobs profile screen",
      className: "case-study-showcase__phone-profile",
    },
    {
      src: `${smallJobsAssetPath}/smalljobs-showcase-phone-main.png`,
      alt: "SmallJobs mobile app screens",
      className: "case-study-showcase__phone-main",
    },
  ],
};

const keyExperienceImages = {
  opportunityA: {
    className: "case-study-image-group--half",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-1a-home-3.png`,
        alt: "SmallJobs recruitment discovery screen",
        className: "case-study-key-image__phone case-study-key-image__phone--left",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-1a-home-5.png`,
        alt: "SmallJobs hire me discovery screen",
        className: "case-study-key-image__phone case-study-key-image__phone--right",
      },
    ],
  },
  opportunityB: {
    className: "case-study-image-group--half",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-1b-detail.png`,
        alt: "SmallJobs recruitment detail screen",
        className: "case-study-key-image__phone case-study-key-image__phone--left",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-1b-hire-me.png`,
        alt: "SmallJobs hire me detail screen",
        className: "case-study-key-image__phone case-study-key-image__phone--right-narrow",
      },
    ],
  },
  recruitmentA: {
    className: "case-study-image-group--half",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-2a-work.png`,
        alt: "SmallJobs work management screen",
        className: "case-study-key-image__phone case-study-key-image__phone--trio-left",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-2a-step.png`,
        alt: "SmallJobs recruitment step screen",
        className: "case-study-key-image__phone case-study-key-image__phone--trio-center",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-2a-candidates.png`,
        alt: "SmallJobs candidate list screen",
        className: "case-study-key-image__phone case-study-key-image__phone--trio-right",
      },
    ],
  },
  recruitmentB: {
    className: "case-study-image-group--half",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-2b-work.png`,
        alt: "SmallJobs employer work screen",
        className: "case-study-key-image__phone case-study-key-image__phone--left-narrow",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-2b-manage.png`,
        alt: "SmallJobs recruitment management screen",
        className: "case-study-key-image__phone case-study-key-image__phone--right-narrow",
      },
    ],
  },
  hireMeA: {
    className: "case-study-image-group--half",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-3a-no.png`,
        alt: "SmallJobs request state screen",
        className: "case-study-key-image__phone case-study-key-image__phone--trio-left",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-3a-hire-me.png`,
        alt: "SmallJobs hire me post screen",
        className: "case-study-key-image__phone case-study-key-image__phone--trio-center",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-3a-invite.png`,
        alt: "SmallJobs hire me invitation screen",
        className: "case-study-key-image__phone case-study-key-image__phone--trio-right",
      },
    ],
  },
  hireMeB: {
    className: "case-study-image-group--half",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-3b-invite.png`,
        alt: "SmallJobs invitation management screen",
        className: "case-study-key-image__phone case-study-key-image__phone--single",
      },
    ],
  },
  profile: {
    className: "case-study-image-group--wide",
    layers: [
      {
        src: smallJobsKeyExperienceBg,
        alt: "",
        className: "case-study-key-image__bg",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-4-profile-1.png`,
        alt: "SmallJobs profile overview screen",
        className: "case-study-key-image__phone case-study-key-image__phone--wide-left",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-4-profile-2.png`,
        alt: "SmallJobs profile work score screen",
        className: "case-study-key-image__phone case-study-key-image__phone--wide-center",
      },
      {
        src: `${smallJobsAssetPath}/smalljobs-key-4-profile-3.png`,
        alt: "SmallJobs profile recruitment score screen",
        className: "case-study-key-image__phone case-study-key-image__phone--wide-right",
      },
    ],
  },
} satisfies Record<string, CaseStudyImageGroup>;

const sonaTarotShowcase: CaseStudyImageGroup = {
  className: "case-study-showcase--flat",
  layers: [
    {
      src: `${sonaTarotAssetPath}/sonatarot-showcase.png`,
      alt: "SonaTarot mobile app showcase",
      className: "case-study-showcase__flat-image",
    },
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "small-jobs",
    title: "SmallJobs",
    nav: ["Overview", "Product Thinking", "Key Experiences", "Design System", "Collaboration", "Reflection"],
    showcase: phoneShowcase,
    details: [
      { label: "ROLE", value: "Product Designer" },
      {
        label: "CONTRIBUTION",
        value: [
          "Feature discussions & product logic",
          "Recruitment & direct-hiring flows",
          "User journeys & wireframes",
          "UX/UI Design",
          "Design System",
          "Feature organization & supporting notes",
        ],
      },
      {
        label: "PRODUCT AREAS",
        value: [
          "Job Discovery & Applications",
          "Recruitment & Candidate Management",
          "Hire Me & Direct Hiring",
          "Profiles & Reputation",
          "Rewards & Engagement",
        ],
      },
      { label: "STATUS", value: "Released · Currently operating" },
      { label: "TOOLS", value: "Figma · FigJam · Notion · Jira" },
      { label: "PLATFORM", value: "iOS & Android" },
    ],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        eyebrow: "OVERVIEW",
        title: "A connected two-sided marketplace",
        overviewItems: [
          {
            title: "1. ABOUT SMALLJOBS",
            body: "SmallJobs connects people seeking flexible work with those looking to hire. Each account can act as both a job seeker and an employer.",
          },
          {
            title: "2. PROJECT CONTEXT",
            body: "I joined during the early startup stage and helped turn evolving ideas into feature structures, two-sided flows, wireframes, interfaces, a design system, and supporting notes.",
          },
          {
            title: "3. THE CORE CHALLENGE",
            body: "The dual-role model required users to distinguish Recruitment from Hire Me, manage activities across both roles, and understand each flow's statuses and available actions.",
          },
        ],
      },
      {
        id: "product-thinking",
        navLabel: "Product Thinking",
        eyebrow: "PRODUCT THINKING",
        title: "Turning product directions into clear, connected experiences",
        intro:
          "Working from stakeholder-defined feature directions, I clarified how each idea should work, mapped roles, states, dependencies, and edge cases, explored alternatives, and translated the agreed direction into connected user flows and interfaces.",
        productChallenges: [
          {
            title: "One Account, Two Roles",
            challenge:
              "A single account could both recruit others and offer services, making roles, content, and available actions easy to confuse.",
            contribution: [
              "I clarified how the agreed dual-role model should appear across key touchpoints:",
              "Create Post: Clarified the choice between Recruitment and Hire Me.",
              "Discover: Separated both content types for easier browsing.",
              "Manage: Organize work by post type, status, and available action.",
              "Profile: Displayed work and recruitment experience separately.",
            ],
            outcome:
              "The resulting design kept both roles accessible within one account while clearly distinguishing their content, activities, and reputation.",
          },
          {
            title: "One Recruitment Post, Two Perspectives",
            challenge:
              "A Recruitment post created two connected experiences: employers managed applicants and hiring decisions, while job seekers applied and followed their application progress. Each action from one side affected the status and available actions shown to the other.",
            contribution: [
              "I mapped both perspectives and defined the initial status framework for the recruitment flow.",
              "Post: Structured how employers published jobs and candidates applied.",
              "Review: Connected applicant management with application tracking.",
              "Select: Clarified how hiring decisions changed the status and actions shown to both sides.",
              "Complete: Mapped the relevant work, completion, and review states for each role.",
            ],
            outcome: "The resulting flow kept statuses and next actions aligned across both perspectives.",
          },
          {
            title: "Direct Hiring Through Hire Me",
            challenge:
              "Unlike the Recruitment flow, Hire Me allowed job seekers to publish their skills and employers to initiate the hiring request. Reusing the recruitment logic could confuse role ownership, statuses, and available actions.",
            contribution: [
              "I structured the stakeholder-defined feature as a separate direct-hiring flow:",
              "Publish: Structured how job seekers created and managed Hire Me posts.",
              "Request: Clarified how employers sent a direct hiring request.",
              "Respond: Defined the required responses and next actions for the post owner.",
              "Manage: Separated Hire Me statuses and actions from Recruitment.",
            ],
            outcome:
              "The resulting flow distinguished who initiated the work, which process was being managed, and what action came next.",
          },
          {
            title: "Two Roles, Two Experience Scores",
            challenge:
              "A user's performance as a worker did not necessarily reflect their reliability as an employer. Using one shared score could make reputation unclear or misleading.",
            contribution: [
              "I clarified how the agreed scoring model should be represented by role:",
              "Work: Show experience gained as a worker.",
              "Recruitment: Show experience gained as an employer.",
              "Context: Keep each score tied to the relevant role.",
              "Display: Present both scores clearly on the same profile.",
            ],
            outcome:
              "The profile communicated credibility by context without combining two different types of experience into one score.",
          },
          {
            title: "Translating Product Rules into Clear User States",
            challenge:
              "Features such as verification, points, and reporting required clear rules for user states, eligibility, actions, and edge cases.",
            contribution: [
              "I worked with stakeholders to clarify and translate the agreed rules into product behavior:",
              "Verification: Distinguished verified, unverified, pending, and failed states.",
              "Points: Mapped earning, usage, eligibility, limits, and transaction states.",
              "Reporting: Structured reasons, outcomes, and follow-up states.",
              "Edge Cases: Defined restrictions and system feedback.",
            ],
            outcome:
              "The resulting designs represented complex product rules more consistently across different flows and user states.",
          },
        ],
      },
      {
        id: "key-experiences",
        navLabel: "Key Experiences",
        eyebrow: "KEY EXPERIENCES",
        title: "Designing the core experiences across both sides of the marketplace",
        intro: [
          "The following sections highlight a selection of the core and supporting experiences I worked on across the product. Some were part of the released app, while others were designed for planned product iterations.",
          "I designed the end-to-end flows for Recruitment, Hire Me, and direct job invitations, alongside several supporting product experiences.",
        ],
        experiences: [
          {
            title: "Helping Users Navigate Two Types of Opportunities",
            body: "SmallJobs supported two discovery paths: job seekers explored Recruitment posts, while employers browsed Hire Me posts. I structured the browsing experience to keep both content types accessible while clearly distinguishing their purpose, information, and next actions.",
            items: [
              { title: "Access", body: "Make both content types available from the main discovery experience." },
              { title: "Explore", body: "Separate Recruitment and Hire Me by purpose." },
              { title: "Evaluate", body: "Prioritize information relevant to each audience." },
              { title: "Act", body: "Lead users toward applying or sending a hire request." },
            ],
            images: [keyExperienceImages.opportunityA, keyExperienceImages.opportunityB],
          },
          {
            title: "Applying and Managing Recruitment",
            body: "A Recruitment post created a one-to-many hiring experience: job seekers applied and tracked their progress, while employers reviewed and managed multiple candidates within the same post. I mapped and designed the end-to-end recruitment flow, including the initial status logic and completed-work details. The work-management screens were later visually refined by another designer.",
            items: [
              { title: "Apply", body: "Designed how job seekers submitted applications." },
              { title: "Track", body: "Defined the initial statuses and next actions for both sides." },
              { title: "Review", body: "Structured how employers reviewed and managed multiple candidates." },
              { title: "Align", body: "Designed the final work states and completed-work details." },
            ],
            images: [keyExperienceImages.recruitmentA, keyExperienceImages.recruitmentB],
          },
          {
            title: "Direct Hiring Through Hire Me",
            body: "Unlike the one-to-many Recruitment flow, Hire Me created a one-to-one hiring experience. Job seekers published their skills, while an employer sent a direct request to a specific person. Based on the agreed feature direction, I designed the flow from viewing a post and sending a request to responding, managing the work, and completing it.",
            items: [
              { title: "Publish", body: "Structured how job seekers created and managed Hire Me posts." },
              { title: "Request", body: "Designed how an employer sent a request to a specific user." },
              { title: "Respond", body: "Clarified how the post owner accepted or declined the request." },
              { title: "Complete", body: "Mapped the relevant work states, actions, and completion flow." },
            ],
            images: [keyExperienceImages.hireMeA, keyExperienceImages.hireMeB],
          },
          {
            title: "Building Trust Through Role-Based Profiles",
            body: "Because one account could act as both a worker and an employer, credibility needed to reflect each role separately. I designed how profiles presented verification, work and recruitment experience, ratings, and activity to help users evaluate others in the relevant context.",
            items: [
              { title: "Verify", body: "Showed whether a user had completed identity verification." },
              { title: "Differentiate", body: "Separated work experience from recruitment experience." },
              { title: "Evaluate", body: "Presented ratings, reviews, and completed activities." },
              { title: "Build Trust", body: "Combined key credibility signals within one profile." },
            ],
            images: [keyExperienceImages.profile],
          },
          {
            title: "Additional Product Flows",
            body: "Beyond the core marketplace experiences, I also designed additional flows and worked with stakeholders to clarify their rules, states, edge cases, and expected system behavior.",
            items: [
              { title: "Job Invitations", body: "" },
              { title: "eKYC & Identity Verification", body: "" },
              { title: "Verified and Unverified User States", body: "" },
              { title: "Payments & Transactions", body: "" },
              { title: "Points Earning and Usage Rules", body: "" },
              { title: "Attendance & QR Scanning", body: "" },
              { title: "Reporting Policies & Safety Flows", body: "" },
              { title: "Rewards & Redemption", body: "" },
              { title: "Notifications & System States", body: "" },
            ],
          },
        ],
      },
      {
        id: "design-system",
        navLabel: "Design System",
        eyebrow: "DESIGN SYSTEM",
        title: "Structuring a Reusable System",
        intro:
          "I organized the design system using an Atomic Design approach, moving from foundational styles to reusable components and larger product patterns. The examples below represent only a selection of the broader system.",
        systemItems: [
          { title: "FOUNDATION", body: "Color · Typography · Grid · Effects · Spacing · Radius" },
          { title: "ATOMS", body: "Avatar · Badge · Button · Icon · Input · Chip" },
          { title: "MOLECULES", body: "Search Bar · Top Bar · Navigation Bar · User Info Group · Rating · Toast" },
          { title: "PRODUCT PATTERNS", body: "Job Posting · Payment · Attendance · Profile · Work Completion · Reviews" },
          {
            title: "REFINING THE TOKEN STRUCTURE",
            body: "I later revisited the original foundation and rebuilt the token structure with clearer primitive, semantic, and component layers, alongside shared typography, spacing, radius, and sizing scales.",
          },
        ],
        image: {
          src: `${smallJobsAssetPath}/smalljobs-token-structure.png`,
          alt: "SmallJobs token structure diagram",
        },
      },
      {
        id: "collaboration",
        navLabel: "Collaboration",
        eyebrow: "COLLABORATION",
        title: "Turning evolving ideas into shared clarity",
        intro:
          "I worked closely with stakeholders to clarify evolving feature ideas, discuss alternative approaches, and translate the agreed direction into structured flows, interfaces, and supporting documentation.",
        reflectionItems: [
          {
            title: "Clarifying requirements",
            body: "I asked questions around user roles, rules, states, dependencies, and edge cases before moving into design.",
          },
          {
            title: "Aligning product logic",
            body: "I compared different perspectives across the marketplace, explored possible approaches, and discussed their trade-offs before implementing the agreed direction.",
          },
          {
            title: "Documentation & continuity",
            body: "I documented feature structures, key rules, and design notes in ClickUp to support development, handoff, and further refinement by the team.",
          },
          {
            title: "Closing",
            body: "This experience strengthened my ability to work through ambiguity, communicate product logic, and keep complex decisions understandable across the team.",
          },
        ],
      },
      {
        id: "reflection",
        navLabel: "Reflection",
        eyebrow: "REFLECTION",
        title: "Learning beyond the interface",
        intro:
          "SmallJobs changed how I approached product design. I learned to look beyond individual screens and consider how roles, rules, states, and feature decisions connected across the wider product.",
        reflectionItems: [
          {
            title: "What I learned",
            body: "I became more confident clarifying ambiguous requirements, comparing multiple user perspectives, and translating stakeholder directions into structured experiences. I also learned that clear ownership and communication are essential, because even small design changes can affect connected flows, product rules, documentation, and development effort.",
          },
          {
            title: "What I would improve",
            body: "I would establish clearer product ownership, communication checkpoints, and decision-making criteria earlier. Important directions should be evaluated against user needs, research, product goals, affected flows, and implementation effort before changes are made.",
          },
          {
            title: "What I took forward",
            body: "The project strengthened my ability to work through ambiguity, communicate the impact of design decisions, structure complex experiences, and advocate for a more intentional and user-centered product process.",
          },
        ],
      },
    ],
  },
  {
    slug: "sona-tarot",
    title: "SonaTarot",
    nav: [
      "Overview",
      "Product Direction",
      "Content System",
      "AI Art Direction",
      "Product Documentation",
      "AI-Assisted Build",
      "Reflection",
    ],
    showcase: sonaTarotShowcase,
    details: [
      {
        label: "ROLE",
        value: ["Independent Product Designer", "End-to-end ownership from concept to implementation."],
      },
      {
        label: "CONTRIBUTION",
        value: [
          "Product direction & MVP planning",
          "Content principles & experience strategy",
          "AI-assisted art direction",
          "UX/UI and visual design",
          "Design system foundations",
          "Product documentation & decision tracking",
          "Technical research & system planning",
          "AI-assisted product development",
        ],
      },
      {
        label: "CASE STUDY FOCUS",
        value: [
          "Job Discovery & Applications",
          "Recruitment & Candidate Management",
          "Hire Me & Direct Hiring",
          "Profiles & Reputation",
          "Rewards & Engagement",
        ],
      },
      { label: "STATUS", value: "In development · Personal product" },
      { label: "TOOLS", value: "Figma · FigJam · Lark · React Native · Supabase · ChatOpenAI · Codex" },
      { label: "PLATFORM", value: "iOS & Android" },
    ],
    sections: [
      {
        id: "overview",
        navLabel: "Overview",
        eyebrow: "OVERVIEW",
        title: "Shaping SonaTarot: From Idea to a Structured Product",
        numberedVariant: "overview",
        numberedItems: [
          {
            title: "ABOUT SONATAROT",
            body: "SonaTarot is a reflective tarot app that offers gentle messages, helping users explore and better understand themselves.",
          },
          {
            title: "PROJECT CONTEXT",
            body: "I started SonaTarot as a personal product exploration, with the goal of creating a tarot experience focused more on reflection than prediction. As the project grew, I shaped its direction across content, design, system thinking, and AI-assisted workflows.",
          },
          {
            title: "THE CORE CHALLENGE",
            body: "The challenge was not only to design the interface, but also to build a thoughtful product foundation — shaping the right tone, structuring meaningful content, creating a cohesive visual world, and using AI as a guided support tool rather than letting it define the product.",
          },
        ],
      },
      {
        id: "product-direction",
        navLabel: "Product Direction",
        eyebrow: "PRODUCT DIRECTION",
        title: "Designing for reflection, not prediction",
        intro:
          "I began by defining what SonaTarot should stand for — a reflective experience that offers perspective without predicting outcomes or making decisions for the user.",
        numberedVariant: "detail",
        numberedItems: [
          {
            title: "The Observation",
            body: "Many tarot experiences focus on prediction, definitive answers, or emotionally intense messages. This can make users rely on the reading instead of using it as a moment to understand their own thoughts and feelings.",
          },
          {
            title: "The Diection",
            body: "I positioned SonaTarot as a reflective experience rather than a tool for predicting outcomes. Each message is designed to offer a perspective, invite self-reflection, and leave the final interpretation and decision with the user.",
          },
          {
            title: "Product Principles",
            items: [
              { title: "Reflection over prediction", body: "Offer perspectives without presenting them as certain outcomes." },
              { title: "Gentle, grounded language", body: "Avoid fear-based, judgmental, or overly dramatic messages." },
              { title: "Preserve user agency", body: "Help users reflect without making choices on their behalf." },
              { title: "Emotion with clarity", body: "Create an evocative experience while keeping the content clear and readable." },
            ],
          },
        ],
      },
      {
        id: "content-system",
        navLabel: "Content System",
        eyebrow: "CONTENT SYSTEM",
        title: "Structuring meaningful, human-directed content",
        intro: [
          "Rather than letting AI define the messages, I established the meanings, intended takeaways, tone, and content boundaries first. This helped every message remain aligned with SonaTarot’s reflective direction.",
          "AI could support wording exploration, but the meaning, communication rules, review, and final message remained human-directed.",
        ],
        numberedVariant: "detail",
        numberedItems: [
          {
            title: "Define the content foundation",
            body: "I defined each card’s core meaning, the reflection it should invite, and what the message should never claim.",
          },
          {
            title: "Establish communication rules",
            items: [
              { title: "Offer perspective, not certainty", body: "Avoid presenting an interpretation as a fixed outcome." },
              { title: "Encourage reflection", body: "Help users connect the message with their own experience." },
              { title: "Use gentle, grounded language", body: "Avoid fear-based, judgmental, or overly dramatic wording." },
              { title: "Preserve user agency", body: "Never make choices or conclusions on the user’s behalf." },
            ],
          },
          {
            title: "Content workflow",
            body: "Define the meaning → Shape the takeaway → Set communication rules → Explore phrasing → Review, rewrite, and finalize",
          },
          {
            title: "Keyword & message mapping",
            body: "I mapped each card’s keywords to an intended message direction and clear boundaries, creating a consistent foundation for writing and reviewing content.",
            images: [
              {
                src: `${sonaTarotAssetPath}/content-keyword-message-mapping.png`,
                alt: "SonaTarot keyword and message mapping table",
              },
            ],
          },
        ],
      },
      {
        id: "ai-art-direction",
        navLabel: "AI Art Direction",
        eyebrow: "AI ART DIRECTION",
        title: "Building a cohesive visual world with AI",
        intro:
          "To keep the tarot deck, illustrations, and interface within the same visual world, I defined the characters, color language, lighting, composition, and style rules, then worked iteratively with AI to generate, review, and refine the visuals. AI supported production, while the visual direction and final decisions remained mine.",
        numberedVariant: "detail",
        numberedItems: [
          {
            title: "Define shared visual rules",
            body: "I first established consistent character traits, color language, lighting, illustration style, and visual boundaries.",
          },
          {
            title: "Translate rules into prompts",
            body: "I converted these directions into reusable prompt structures, combining fixed style rules with the specific purpose, scene, and symbolism of each asset.",
          },
          {
            title: "Review and refine",
            body: "I compared each output against the visual system, tested it within the interface, and refined the prompts whenever the character, palette, mood, or readability felt inconsistent.",
          },
          {
            title: "Prompt sample - The Star",
            body: "The original working prompt was more detailed. This version has been shortened to highlight the structure and decision-making behind the visual direction.",
            prompt: [
              "Reference use:",
              "Color palette, lighting, brushwork, costume language only.",
              "",
              "Style:",
              "2D painterly, medium–high contrast, simplified forms, soft clear lighting.",
              "",
              "Deck consistency:",
              "Same world as The Fool — soft layered clothing, gentle rendering, warm lower-right light.",
              "",
              "Card direction:",
              "A calm young woman kneeling between land and water, pouring water from two vessels.",
              "",
              "Symbols:",
              "One large star, several smaller stars, simple reflective setting.",
              "",
              "Boundaries:",
              "No nudity, no sexualized pose, no realism, no dramatic motion, no visual overload.",
            ],
            images: [
              { src: `${sonaTarotAssetPath}/card-fool.png`, alt: "The Fool tarot card illustration" },
              { src: `${sonaTarotAssetPath}/card-lovers.png`, alt: "The Lovers tarot card illustration" },
              { src: `${sonaTarotAssetPath}/card-star.png`, alt: "The Star tarot card illustration" },
            ],
          },
        ],
      },
      {
        id: "product-documentation",
        navLabel: "Product Documentation",
        eyebrow: "PRODUCT DOCUMENTATION",
        title: "Structuring a solo product for growth",
        intro:
          "Although I was building SonaTarot independently, I did not want the product to rely on scattered files or memory. As the project evolved, I gradually connected features, screens, components, tasks, decisions, and implementation reviews in Lark to make the work easier to maintain, revisit, and scale when needed.",
        numberedVariant: "detail",
        numberedItems: [
          {
            title: "Organize the work",
            body: "Connected product records to keep features, screens, components, and tasks aligned.",
          },
          {
            title: "Preserve context",
            body: "Documented key decisions and their reasoning instead of relying on memory.",
          },
          {
            title: "Improve over time",
            body: "Added review logs, improvement tracking, and new templates based on gaps discovered during the build.",
          },
        ],
        imageStack: {
          images: [
            { src: `${sonaTarotAssetPath}/documentation-feature-table.png`, alt: "SonaTarot feature documentation table" },
            { src: `${sonaTarotAssetPath}/documentation-review-table.png`, alt: "SonaTarot review documentation table" },
            { src: `${sonaTarotAssetPath}/documentation-ui-review-table.png`, alt: "SonaTarot UI review table" },
          ],
        },
      },
      {
        id: "ai-assisted-build",
        navLabel: "AI-Assisted Build",
        eyebrow: "AI-ASSISTED BUILD",
        title: "Guiding an AI-assisted build",
        intro:
          "I used AI coding tools to turn structured product requirements and design specifications into a working build. My role was to define the logic, research suitable technical approaches, provide clear context, and review each iteration against the intended experience.",
        numberedVariant: "detail",
        numberedItems: [
          {
            title: "Research the foundation",
            body: "I explored Supabase, authentication, data structure, permissions, and scalability to make more informed product and system decisions.",
          },
          {
            title: "Prepare clear implementation context",
            body: "I translated features, screens, components, states, and edge cases into smaller tasks that AI could implement more consistently.",
          },
          {
            title: "Test and refine",
            body: "I tested the generated build, documented UI and logic issues, and guided further iterations until the result better matched the design and product requirements.",
          },
        ],
        processText: "Research → Define requirements → Break into tasks → AI-generated build → Test & refine",
        imageStack: {
          images: [
            { src: `${sonaTarotAssetPath}/supabase-content-structure.png`, alt: "SonaTarot Supabase content structure" },
          ],
          caption: "Supabase content structure - Structured for multilingual tarot content and future expansion.",
        },
      },
      {
        id: "reflection",
        navLabel: "Reflection",
        eyebrow: "REFLECTION",
        title: "What I learned from building SonaTarot independently",
        intro:
          "Building SonaTarot independently taught me that a personal product still needs clear direction, structured decisions, and continuous review. The more areas I explored, the more important it became to keep content, design, technology, and AI workflows aligned around the same product purpose.",
        numberedVariant: "plain",
        numberedItems: [
          {
            title: "Design for users, not personal preference",
            body: "A personal idea should still be shaped around what users need, rather than only what I want to create.",
          },
          {
            title: "AI works best with clear direction",
            body: "AI helped accelerate visual production and implementation, but consistency depended on well-defined rules, context, testing, and human judgment.",
          },
          {
            title: "Structure supports growth",
            body: "Documentation, reusable systems, and technical research helped me maintain context and prepare the product for future expansion.",
          },
        ],
        processText:
          "SonaTarot strengthened my ability to turn an early idea into a more structured, maintainable, and buildable product.",
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
