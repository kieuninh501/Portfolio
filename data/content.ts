import type { Locale } from "@/lib/i18n";
import { profile } from "./profile";

type LocalizedString = Record<Locale, string>;

export type Project = {
  slug: string;
  title: string;
  meta: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  year: string;
  image: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
};

export const navigation: Record<Locale, { label: string; href: string }[]> = {
  vi: [
    { label: "Trang chủ", href: "#" },
    { label: "Case Studies", href: "#projects" },
    { label: "Về mình", href: "#experience" },
    { label: "Liên hệ", href: "#contact" },
  ],
  en: [
    { label: "Home", href: "#" },
    { label: "Case Studies", href: "#projects" },
    { label: "About Me", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};

export const copy = {
  vi: {
    eyebrow: "PRODUCT DESIGNER",
    heroIntro: `Mình là ${profile.name}`,
    heroTitleLine1: "Đang học hỏi, xây dựng,",
    heroTitleLine2: "và biến ý tưởng thành",
    heroTitleAccent: "sản phẩm có ý nghĩa.",
    heroLead:
      "Mình luôn tò mò, cập nhật những ý tưởng mới, và biến điều học được thành trải nghiệm số đơn giản, chỉn chu.",
    primaryCta: "Xem Case Study",
    secondaryCta: "Kết nối",
    availability: "Open to full time opportunities",
    headerCta: "Work With Me",
    sections: {
      projects: {
        eyebrow: "CASE STUDY",
        title: "Featured Work",
        description: [
          "Một vài sản phẩm được định hình qua chiến lược,",
          "thiết kế và quá trình học hỏi liên tục.",
        ],
      },
      playground: {
        eyebrow: "LEARNING  PLAYGROUND",
        title: "Thực hành & nghiên cứu hệ thống",
        description: [
          "Bộ sưu tập giao diện tái dựng, nghiên cứu hệ thống",
          "và các thử nghiệm thiết kế tự khởi xướng.",
        ],
        footerTitle: "Luôn học hỏi, luôn xây dựng.",
        footerDescription:
          "Mình tin rằng sản phẩm có ý nghĩa được tạo ra từ sự tò mò, học hỏi liên tục và thiết kế có chủ đích.",
        footerCta: "Xem tất cả trên Behance",
      },
      craft: {
        eyebrow: "BEYOND THE UI",
        title: "Phần thủ công phía sau giao diện",
        description: [
          "Những hệ thống, trạng thái và chi tiết giúp sản phẩm rõ ràng,",
          "nhất quán và sẵn sàng để build.",
        ],
      },
      capabilities: {
        eyebrow: "CORE CAPABILITIES",
        title: ["Từ tư duy sản phẩm", "đến thiết kế sẵn sàng build"],
        description: [
          "Mình không chỉ thiết kế màn hình",
          "Mình kết nối ý tưởng, nhu cầu người dùng, hệ thống và khả năng triển khai",
        ],
      },
      experience: {
        eyebrow: "MY JOURNEY",
        title: "Câu chuyện phía sau công việc của mình",
        description: [
          "Hành trình đến với product design của mình không đi theo một đường thẳng,",
          "nhưng mỗi bước đều định hình cách mình hiểu sản phẩm hôm nay.",
        ],
        cta: "Xem CV của mình",
      },
      workingTogether: {
        eyebrow: "WORKING TOGETHER",
        title: "Làm việc với mình sẽ như thế nào",
        description: [
          "Không chỉ là giao màn hình. Mình thích cộng tác sát,",
          "đặt đúng câu hỏi và biến ý tưởng phức tạp thành sản phẩm thực tế.",
        ],
      },
      callToAction: {
        title: "Cùng xây điều gì đó có ý nghĩa!",
      },
      footer: {
        headline: "Có dự án, ý tưởng, hoặc chỉ muốn kết nối?",
        bio: "Mình luôn mở lòng với những cuộc trò chuyện ý nghĩa và cơ hội mới.",
        getInTouch: "Get in touch",
        availability: "Open to full time opportunities",
        copyright:
          "©  2026 Kieu Ninh. Designed with intention, built with curiosity. All rights reserved.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Cùng xây một sản phẩm tốt hơn.",
        description:
          "Gửi mình brief, Figma hoặc ý tưởng. Mình sẽ giúp biến nó thành giao diện có cấu trúc và chạy được.",
      },
    },
    contactCta: "Gửi email",
  },
  en: {
    eyebrow: "PRODUCT DESIGNER",
    heroIntro: `I’m ${profile.name}`,
    heroTitleLine1: "Who learning, building,",
    heroTitleLine2: "and turning ideas into",
    heroTitleAccent: "meaningful products.",
    heroLead:
      "I stay curious, keep up with new ideas, and turn what I learn into simple, thoughtful digital experiences",
    primaryCta: "View Case Study",
    secondaryCta: "Let Connect",
    availability: "Open to full time opportunities",
    headerCta: "Work With Me",
    sections: {
      projects: {
        eyebrow: "CASE STUDY",
        title: "Featured Work",
        description: [
          "A selection of products shaped through strategy,",
          "design, and continuous learning.",
        ],
      },
      playground: {
        eyebrow: "LEARNING  PLAYGROUND",
        title: "Practice & System Studies",
        description: [
          "A collection of interface recreations,",
          "system studies, and self-initiated design work.",
        ],
        footerTitle: "Always learning, always building.",
        footerDescription:
          "I believe meaningful products are created through curiosity, continuous learning, and thoughtful design.",
        footerCta: "Show All on Behance",
      },
      craft: {
        eyebrow: "BEYOND THE UI",
        title: "The Craft Behind The Interface",
        description: [
          "The systems, states, and details behind",
          "clear, consistent, build-ready products.",
        ],
      },
      capabilities: {
        eyebrow: "CORE CAPABILITIES",
        title: ["From Product Thinking", "To Build Ready Design"],
        description: [
          "I don’t just design screens",
          "I connect ideas, user needs, systems, and execution",
        ],
      },
      experience: {
        eyebrow: "MY JOURNEY",
        title: "The Story Behind My Work",
        description: [
          "My journey into product design wasn’t a straight path,",
          "but each step shaped how I understand products today.",
        ],
        cta: "View My CV",
      },
      workingTogether: {
        eyebrow: "WORKING TOGETHER",
        title: "What It's Like Working With Me",
        description: [
          "More than delivering screens. I enjoy collaborating closely,",
          "asking the right questions, and turning complex ideas into practical products.",
        ],
      },
      callToAction: {
        title: "Let's build something meaningful together!",
      },
      footer: {
        headline: "Have a project, an idea, or just want to connect?",
        bio: "I’m always open to meaningful conversations and new opportunities.",
        getInTouch: "Get in touch",
        availability: "Open to full time opportunities",
        copyright:
          "©  2026 Kieu Ninh. Designed with intention, built with curiosity. All rights reserved.",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s build a better product.",
        description:
          "Send a brief, Figma file, or rough idea. I can help turn it into a structured, working interface.",
      },
    },
    contactCta: "Send email",
  },
} as const;

export const projects: Project[] = [
  {
    slug: "small-jobs",
    title: "Small Jobs",
    meta: {
      vi: "Mobile Product · Product Designer",
      en: "Mobile Product · Product Designer",
    },
    summary: {
      vi: "Nền tảng mobile giúp tìm việc linh hoạt và xây dựng niềm tin qua hồ sơ, đánh giá và lịch sử công việc.",
      en: "A mobile platform for finding flexible work and building trust through profiles, ratings, and job history.",
    },
    description: {
      vi: "Thiết kế trải nghiệm mobile cho sản phẩm tìm việc linh hoạt, tập trung vào độ tin cậy và khả năng ra quyết định nhanh.",
      en: "A mobile experience for flexible work discovery, focused on trust and quick decision-making.",
    },
    year: "2026",
    image: "/assets/sections/project-small-jobs.jpg",
    tech: ["Mobile App", "Product Design", "UX Strategy"],
    featured: true,
  },
  {
    slug: "sona-tarot",
    title: "Sona Tarot",
    meta: {
      vi: "Independent Product · End-to-End Design",
      en: "Independent Product · End-to-End Design",
    },
    summary: {
      vi: "Ứng dụng tarot nhẹ nhàng đưa ra thông điệp phản chiếu, giúp người dùng nhìn lại và hiểu bản thân hơn.",
      en: "A reflective tarot app that offers gentle messages, helping users reflect and better understand themselves.",
    },
    description: {
      vi: "Một sản phẩm độc lập được thiết kế end-to-end, từ định hướng trải nghiệm đến giao diện sản phẩm.",
      en: "An independent product designed end-to-end, from experience direction to product interface.",
    },
    year: "2026",
    image: "/assets/sections/project-sona-tarot.jpg",
    tech: ["Mobile App", "Visual Design", "Product UI"],
    featured: true,
  },
];

export const playgroundStudies = [
  {
    title: "HR Perfomance Platform - UX/UI Case Study",
    image: "/assets/sections/section-4-showcase-hr.jpg",
    size: "large",
    url: "https://www.behance.net/gallery/172247809/UIUX-Hr-Performance-App-case-study",
  },
  {
    title: "E-commerce App Redesign - 150+ Screens & Prototype",
    image: "/assets/sections/section-4-showcase-ecommerce.jpg",
    size: "small",
    url: "https://www.behance.net/gallery/123405413/Case-Study-Copywork-Redesign-Prototype-Lafyuu-App",
  },
  {
    title: "Landing Page Recreation - Responsive Study",
    image: "/assets/sections/section-4-showcase-landing.jpg",
    size: "small",
    url: "https://www.behance.net/gallery/117437743/Copywork-shoutoutso",
  },
  {
    title: "PDF Scanner App - Mobile UI Concept",
    image: "/assets/sections/section-4-showcase-scanner.jpg",
    size: "small",
    url: "https://www.behance.net/gallery/196088121/PDF-Scanner-UI",
  },
  {
    title: "Manga Reader - Freelance Mobile App Design",
    image: "/assets/sections/section-4-showcase-manga.jpg",
    size: "small",
    url: "https://www.behance.net/gallery/253018243/Manga-App",
  },
] as const;

export const craftSteps = [
  {
    number: 1,
    title: {
      vi: "Hiểu vấn đề",
      en: "Understand the Problem",
    },
    description: {
      vi: "Làm rõ mục tiêu, nhu cầu người dùng, yêu cầu và ràng buộc.",
      en: "Clarifying goals, user needs, requirements, and constraints.",
    },
    image: "/assets/sections/section-5-note-1.jpg",
  },
  {
    number: 2,
    title: {
      vi: "Định nghĩa sản phẩm",
      en: "Define the Product",
    },
    description: {
      vi: "Biến ý tưởng thành tính năng, ưu tiên và phạm vi sản phẩm rõ ràng.",
      en: "Turning ideas into clear features, priorities, and product scope.",
    },
    image: "/assets/sections/section-5-note-2.jpg",
  },
  {
    number: 3,
    title: {
      vi: "Cấu trúc trải nghiệm",
      en: "Structure the Experience",
    },
    description: {
      vi: "Sắp xếp thông tin, luồng người dùng và logic tương tác.",
      en: "Organizing information, user flows, and interaction logic.",
    },
    image: "/assets/sections/section-5-note-3.jpg",
  },
  {
    number: 4,
    title: {
      vi: "Thiết kế & hệ thống hóa",
      en: "Design & Systemize",
    },
    description: {
      vi: "Thiết kế giao diện chính và xây dựng hệ thống có thể tái sử dụng.",
      en: "Designing key interfaces and building reusable systems.",
    },
    image: "/assets/sections/section-5-note-4.jpg",
  },
  {
    number: 5,
    title: {
      vi: "Tinh chỉnh cho sử dụng thực tế",
      en: "Refine for Real Use",
    },
    description: {
      vi: "Xem xét phản hồi, edge case, responsive behavior và tính nhất quán.",
      en: "Considering feedback, edge cases, responsive behavior, and consistency.",
    },
    image: "/assets/sections/section-5-note-5.jpg",
  },
  {
    number: 6,
    title: {
      vi: "Tài liệu & handoff",
      en: "Document & Handoff",
    },
    description: {
      vi: "Chuẩn bị spec rõ ràng, ghi chú hành vi và chi tiết triển khai.",
      en: "Preparing clear specs, behavior notes, and implementation details.",
    },
    image: "/assets/sections/section-5-note-6.jpg",
  },
] as const;

export const capabilities = [
  {
    title: {
      vi: "Tư duy sản phẩm",
      en: "Product Thinking",
    },
    description: {
      vi: "Biến ý tưởng thành định hướng sản phẩm tập trung thông qua ưu tiên rõ ràng, kế hoạch có cân nhắc và phạm vi được xác định.",
      en: "Turning ideas into focused product direction through clear priorities, thoughtful planning, and defined scope.",
    },
    items: {
      vi: ["Product Strategy", "Feature Planning", "Prioritization"],
      en: ["Product Strategy", "Feature Planning", "Prioritization"],
    },
  },
  {
    title: {
      vi: "Chiến lược UX",
      en: "UX Strategy",
    },
    description: {
      vi: "Chuyển nhu cầu người dùng thành flow rõ ràng, cấu trúc thông tin mạch lạc và trải nghiệm dễ hiểu.",
      en: "Turning user needs into clear flows, structured information, and intuitive experiences",
    },
    items: {
      vi: ["User Flows", "Information Architecture", "Wireframing"],
      en: ["User Flows", "Information Architecture", "Wireframing"],
    },
  },
  {
    title: {
      vi: "UI & Design Systems",
      en: "UI & Design Systems",
    },
    description: {
      vi: "Tạo giao diện chỉn chu đồng thời xây dựng design system chung, có thể mở rộng cho nhiều sản phẩm.",
      en: "Creating polished interfaces while building a shared, scalable design system for multiple products.",
    },
    items: {
      vi: ["Visual Design", "Component Systems", "Design Tokens"],
      en: ["Visual Design", "Component Systems", "Design Tokens"],
    },
  },
  {
    title: {
      vi: "Xây dựng sản phẩm với AI",
      en: "AI-Assisted Product Building",
    },
    description: {
      vi: "Dùng AI để khám phá ý tưởng, lặp nhanh hơn và biến concept thiết kế thành sản phẩm hoạt động được.",
      en: "Using AI to explore ideas, iterate faster, and turn design concepts into functional products.",
    },
    items: {
      vi: ["AI-Assisted", "Technical Awareness", "Idea Exploration"],
      en: ["AI-Assisted", "Technical Awareness", "Idea Exploration"],
    },
  },
];

export const journeyStories = [
  {
    title: {
      vi: "Nền tảng ban đầu",
      en: "Foundations",
    },
    tags: {
      vi: ["Công nghệ thông tin", "Công cụ thiết kế đồ họa"],
      en: ["Information Technology", "Graphic Design Tools"],
    },
    description: {
      vi: "Sau ba năm học Công nghệ thông tin, mình đổi hướng trước khi hoàn thành chương trình và bắt đầu khám phá Graphic Design cùng các công cụ thị giác.",
      en: "After three years studying Information Technology, I changed direction before completing the degree and began exploring Graphic Design and visual tools.",
    },
  },
  {
    title: {
      vi: "Tìm thấy hướng đi",
      en: "Finding My Direction",
    },
    tags: {
      vi: ["Customer Insight", "Tự học", "Học cùng mentor"],
      en: ["Customer Insight", "Self-learning", "Mentor-led Learning"],
    },
    description: {
      vi: "Telesales giúp mình học cách hiểu nhu cầu khách hàng. Sau đó mình tự tìm hiểu UI/UX và học có định hướng từ một mentor có kinh nghiệm trong ngành.",
      en: "Telesales taught me to understand customer needs. I later explored UI/UX on my own and sought structured guidance from an experienced industry mentor.",
    },
  },
  {
    title: {
      vi: "Xây dựng & phát triển",
      en: "Building & Growing",
    },
    tags: {
      vi: ["Sản phẩm", "Design Systems", "Công nghệ"],
      en: ["Products", "Design Systems", "Technology"],
    },
    description: {
      vi: "Mình áp dụng điều học được qua sản phẩm thương mại và sản phẩm cá nhân, đồng thời tiếp tục khám phá workflow với AI và đào sâu hiểu biết kỹ thuật.",
      en: "I apply what I learn through commercial and personal products while continuing to explore AI-assisted workflows and deepen my technical understanding.",
    },
  },
] as const;

export const workingTogetherCards = [
  {
    title: {
      vi: "Giao tiếp rõ ràng",
      en: "Clear Communication",
    },
    description: {
      vi: ["Mình hỏi sớm để giảm mơ hồ."],
      en: ["I ask questions early to reduce ambiguity."],
    },
    orb: "/assets/sections/section-7-orb-clear-communication.png",
  },
  {
    title: {
      vi: "Tư duy sản phẩm",
      en: "Product Mindset",
    },
    description: {
      vi: ["Mình không chỉ thiết kế màn hình.", "Mình nghĩ xuyên suốt sản phẩm."],
      en: ["I don't just design screens.", "I think through the product."],
    },
    orb: "/assets/sections/section-7-orb-ownership.png",
  },
  {
    title: {
      vi: "Luôn học hỏi",
      en: "Continuous Learning",
    },
    description: {
      vi: ["Mỗi dự án đều dạy mình", "điều mới."],
      en: ["Every project teaches me something new."],
    },
    orb: "/assets/sections/section-7-orb-continuous-learning.png",
  },
  {
    title: {
      vi: "Tư duy triển khai",
      en: "Developer Mindset",
    },
    description: {
      vi: ["Mình thiết kế với khả năng", "build trong đầu."],
      en: ["I design with implementation", "in mind."],
    },
    orb: "/assets/sections/section-7-orb-developer-mindset.png",
  },
] as const;
