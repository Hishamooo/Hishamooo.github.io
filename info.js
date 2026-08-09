let info = {
  name: "Hisham Al Hafez",
  logo_name: "Hisham",
  flat_picture: require("./src/assets/profile.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },

  // Hero section
  hero: {
    eyebrow: "Senior Frontend Developer @ SEDIWORK · Madrid, Spain",
    heading: "Building complex SaaS products and AI-enabled user experiences",
    description:
      "I specialise in Vue.js, Nuxt.js and TypeScript, with full-stack experience across Directus, Laravel, REST APIs and relational databases. At SEDIDOC I work on SEDIWORK, a healthcare SaaS platform for hospital workforce and rotation planning, spanning complex frontend workflows, application architecture, backend integrations, automated testing and an LLM-powered assistant built on structured application context and Retrieval-Augmented Generation.",
    actions: {
      primary: { label: "View featured work", anchor: "portfolio" },
      cv: { label: "Download CV", href: "/assets/documents/cv-frontend.pdf" },
      contact: { label: "Contact me", anchor: "contact" }
    }
  },

  links: {
    linkedin: "https://www.linkedin.com/in/hisham-al-hafez/",
    github: "https://github.com/Hishamooo"
  },

  contact: {
    email: "hisham.hafez96@outlook.com",
    phone: "+34 679 288 907",
    location: "Madrid, Spain"
  },

  about: {
    text: "I'm a Senior Frontend Developer based in Madrid, Spain, with 7+ years of experience building production web and mobile applications for international teams. I specialise in Vue.js, Nuxt.js and TypeScript, with full-stack experience across Directus, Laravel, REST APIs and relational databases. At SEDIDOC I work on SEDIWORK, a healthcare SaaS platform for hospital workforce and rotation planning — spanning complex frontend workflows, application architecture, backend integrations, automated testing and an LLM-powered assistant using structured application context and Retrieval-Augmented Generation (RAG). I also work with Angular, Flutter, Firebase, Stripe, Cypress, Vitest, Docker, CI/CD and WordPress, and contribute regularly through code reviews and technical discussions. I enjoy solving complex product problems, improving architecture and building reliable user experiences from idea to production.",
    facts: [
      "Based in Madrid, Spain",
      "7+ years of professional experience",
      "International remote-team experience",
      "Frontend specialist with full-stack capability",
      "Open to opportunities in Spain and Europe"
    ]
  },

  education: [
    {
      name: "Damascus University",
      place: "Damascus, Syria",
      date: "2014 – 2018",
      degree: "Bachelor of Science in Computer Science",
      description: ""
    }
  ],

  certifications: [
    {
      name: "Android Developer Track",
      org: "Professional Development",
      date: "August 2018",
      description: "Verified Certificate of Completion"
    }
  ],

  languages: [
    { name: "English", level: "Full professional proficiency" },
    { name: "Turkish", level: "Intermediate, B1" }
  ],

  experience: [
    {
      name: "SEDIDOC GmbH",
      place: "Germany — Remote",
      date: "June 2022 – Present",
      position: "Full-Stack Developer — Frontend Focus",
      description:
        "Develop and maintain SEDIWORK, a healthcare SaaS platform for hospital workforce and rotation planning, including an integrated LLM-powered assistant and complex scheduling and organisational workflows.",
      bullets: [
        "Build complex planning workflows covering staff assignments, time periods, validation, conflicts, substitutions, notifications, plan publication and interactive clinic structures",
        "Develop an LLM-powered assistant using structured application context, retrieval-augmented generation (RAG), system prompts and typed frontend-backend contracts to provide grounded planning answers",
        "Deliver end-to-end features across Vue 3, Nuxt.js, TypeScript, Pinia, Directus services, custom APIs and PostgreSQL-backed workflows",
        "Develop and maintain Cypress and Vitest coverage, investigate CI-specific failures and race conditions, and validate changes against functional and regression risks",
        "Review pull requests daily across frontend and backend changes, focusing on functionality, architecture, test coverage and maintainability",
        "Maintain SEDIDOC's public WordPress website, including events, company content, SEO, responsive UI improvements and production stability"
      ],
      skills: ["Vue 3", "Nuxt.js", "TypeScript", "Vuetify", "Pinia", "Directus", "PostgreSQL", "Cypress", "Vitest", "Docker", "WordPress"]
    },
    {
      name: "DISHIFY LTD",
      place: "United Kingdom — Remote, Part-Time",
      date: "May 2024 – Present",
      position: "Software Engineer",
      description:
        "Developing an AI-powered meal-planning mobile application delivering personalised recipe and meal experiences.",
      bullets: [
        "Develop a Flutter mobile application for AI-powered meal planning and recipe experiences, with a strong focus on onboarding, animation and responsive mobile UX",
        "Integrate frontend flows with AI services, Firebase authentication, real-time data and REST APIs to deliver personalised and dynamic content",
        "Implement and maintain subscription and payment workflows using Stripe and mobile in-app purchases",
        "Work across application architecture, UI development and third-party service integrations to deliver production-ready mobile features"
      ],
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Stripe", "In-app purchases"],
      partTime: true
    },
    {
      name: "AdviseCampus",
      place: "Istanbul, Turkey — Part-Time",
      date: "September 2023 – January 2025",
      position: "Full-Stack Developer",
      description:
        "International education platform supporting students seeking consultation and admission guidance for higher education abroad.",
      bullets: [
        "Built Angular interfaces with pagination, search, filtering and frontend/backend form validation to improve navigation and submission accuracy",
        "Structured and connected Directus data with frontend features and Laravel services, including transactional email and notification workflows",
        "Integrated Stripe payments and delivered end-to-end features such as a student-loan application flow and an English test with scoring, result emails and personalised certificates",
        "Guided and collaborated with a junior frontend developer, supporting implementation decisions, task delivery and code quality"
      ],
      skills: ["Angular", "Directus", "Laravel", "PHP", "Stripe", "REST APIs"],
      partTime: true
    },
    {
      name: "MIDADTEK",
      place: "Istanbul, Turkey",
      date: "March 2019 – May 2022",
      position: "Software Engineer",
      description:
        "Worked as a Software Engineer building healthcare, education and service platforms for the Turkish market.",
      bullets: [
        "Developed responsive web and mobile applications using Angular and Ionic, building reusable UI components and consistent design patterns across multiple products",
        "Delivered features across healthcare, education and service platforms, including authentication, role-based dashboards, booking, prescriptions, shipment tracking, notifications and search/filter workflows",
        "Integrated Firebase, REST APIs and payment services including Stripe and Iyzico",
        "Developed and maintained WordPress websites with responsive layouts, custom forms, SEO improvements and production support"
      ],
      skills: ["Angular", "Ionic", "TypeScript", "Firebase", "PHP", "Laravel", "MySQL", "WordPress", "Stripe", "Iyzico"]
    },
    {
      name: "Loxiy",
      place: "Istanbul, Turkey — Remote, Part-Time",
      date: "September 2020 – October 2021",
      position: "Software Engineer",
      description:
        "Built and launched the company web presence while collaborating across teams on web and mobile applications, working with Angular, Ionic and Firebase.",
      bullets: [
        "Established and developed the LOXIY website, improving the company's online presence",
        "Utilised Angular and Ionic frameworks to develop responsive and efficient applications",
        "Integrated Firebase for real-time database management and authentication",
        "Collaborated with cross-functional partners to improve web and mobile applications",
        "Presented managerial accomplishments and goals to chief engineers and higher-level management"
      ],
      skills: ["Angular", "Ionic", "Firebase", "JavaScript", "HTML", "CSS"],
      partTime: true
    }
  ],

  skills: [
    {
      title: "Frontend",
      info: ["Vue.js", "Vue 3", "Nuxt.js", "TypeScript", "JavaScript", "Vuetify", "Pinia", "Angular", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Backend & Data",
      info: ["Directus", "Node.js", "PHP", "Laravel", "REST APIs", "PostgreSQL", "MySQL", "Firebase"],
      icon: "fas fa-server"
    },
    {
      title: "AI & Developer Tools",
      info: ["LLM integration", "Retrieval-augmented generation", "Context engineering", "Prompt design", "Claude Code", "AI-assisted development"],
      icon: "fas fa-brain"
    },
    {
      title: "Testing & Delivery",
      info: ["Cypress", "Vitest", "End-to-end testing", "Test automation", "Docker", "Git", "Bitbucket Pipelines", "CI/CD", "Jira", "PR review"],
      icon: "fas fa-shield-alt"
    },
    {
      title: "Mobile, CMS & Payments",
      info: ["Flutter", "Dart", "Ionic", "WordPress", "Elementor", "Stripe", "In-app purchases", "Iyzico", "Figma"],
      icon: "fas fa-mobile-alt"
    }
  ],

  // Featured projects (displayed prominently)
  featuredProjects: [
    {
      slug: "sediwork",
      name: "SEDIWORK",
      tagline: "Healthcare SaaS platform for hospital workforce and rotation planning",
      description:
        "Healthcare SaaS platform for hospital workforce and rotation planning, including complex scheduling workflows and an integrated LLM-powered assistant.",
      role: "Full-Stack Developer — Frontend Focus",
      company: "SEDIDOC GmbH",
      date: "June 2022 – Present",
      technologies: ["Vue 3", "Nuxt.js", "TypeScript", "Vuetify", "Pinia", "Directus", "PostgreSQL", "Cypress", "Vitest", "Docker"],
      contributions: [
        "Build complex planning workflows covering staff assignments, time periods, validation, conflicts, substitutions, notifications, plan publication and interactive clinic structures",
        "Develop an LLM-powered assistant using structured application context, retrieval-augmented generation (RAG), system prompts and typed frontend-backend contracts to provide grounded planning answers",
        "Deliver end-to-end features across Vue 3, Nuxt.js, TypeScript, Pinia, Directus services, custom APIs and PostgreSQL-backed workflows",
        "Develop and maintain Cypress and Vitest coverage, investigate CI-specific failures and race conditions, and validate changes against functional and regression risks",
        "Review pull requests daily across frontend and backend changes, focusing on functionality, architecture, test coverage and maintainability",
        "Maintain SEDIDOC's public WordPress website, including events, company content, SEO, responsive UI improvements and production stability"
      ],
      visit: "",
      ctaLabel: "View case study",
      pictures: [
        { img: require("./src/assets/portfolio/sediworkv2/one.png"), alt: "SEDIWORK hospital rotation-planning interface" },
        { img: require("./src/assets/portfolio/sediworkv2/two.png"), alt: "SEDIWORK scheduling workflow" },
        { img: require("./src/assets/portfolio/sediworkv2/three.png"), alt: "SEDIWORK workforce management view" },
        { img: require("./src/assets/portfolio/sediworkv2/four.png"), alt: "SEDIWORK rotation calendar" },
        { img: require("./src/assets/portfolio/sediworkv2/five.png"), alt: "SEDIWORK substitution management" },
        { img: require("./src/assets/portfolio/sediworkv2/six.png"), alt: "SEDIWORK notifications panel" },
        { img: require("./src/assets/portfolio/sediworkv2/seven.png"), alt: "SEDIWORK planning dashboard" },
        { img: require("./src/assets/portfolio/sediworkv2/eight.png"), alt: "SEDIWORK shift overview" },
        { img: require("./src/assets/portfolio/sediworkv2/nine.png"), alt: "SEDIWORK user management" }
      ]
    },
    {
      slug: "advisecampus",
      name: "AdviseCampus",
      tagline: "International education platform for higher education consultation and admissions",
      description:
        "International education platform supporting students seeking consultation and admission guidance for higher education abroad.",
      role: "Full-Stack Developer — Part-Time",
      company: "AdviseCampus",
      date: "September 2023 – January 2025",
      technologies: ["Angular", "Directus", "Laravel", "PHP", "Stripe", "REST APIs"],
      contributions: [
        "Built Angular interfaces with pagination, search, filtering and frontend/backend form validation to improve navigation and submission accuracy",
        "Structured and connected Directus data with frontend features and Laravel services, including transactional email and notification workflows",
        "Integrated Stripe payments and delivered end-to-end features such as a student-loan application flow and an English test with scoring, result emails and personalised certificates",
        "Guided and collaborated with a junior frontend developer, supporting implementation decisions, task delivery and code quality"
      ],
      visit: "https://www.advisecampus.com",
      ctaLabel: "Visit product",
      pictures: [
        { img: require("./src/assets/portfolio/advisecampus/one.png"), alt: "AdviseCampus student portal homepage" },
        { img: require("./src/assets/portfolio/advisecampus/two.png"), alt: "AdviseCampus university search interface" },
        { img: require("./src/assets/portfolio/advisecampus/three.png"), alt: "AdviseCampus application tracking dashboard" },
        { img: require("./src/assets/portfolio/advisecampus/four.png"), alt: "AdviseCampus consultation booking" },
        { img: require("./src/assets/portfolio/advisecampus/five.png"), alt: "AdviseCampus student profile" },
        { img: require("./src/assets/portfolio/advisecampus/six.png"), alt: "AdviseCampus payment workflow" },
        { img: require("./src/assets/portfolio/advisecampus/seven.png"), alt: "AdviseCampus English test interface" },
        { img: require("./src/assets/portfolio/advisecampus/eight.png"), alt: "AdviseCampus loan application form" },
        { img: require("./src/assets/portfolio/advisecampus/nine.png"), alt: "AdviseCampus advisor dashboard" }
      ]
    },
    {
      slug: "dishify",
      name: "DISHIFY",
      tagline: "AI-powered meal-planning mobile application for personalised recipe experiences",
      description:
        "AI-powered meal-planning mobile application delivering personalised recipe and meal experiences.",
      role: "Software Engineer — Part-Time",
      company: "DISHIFY LTD",
      date: "May 2024 – Present",
      technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Stripe", "In-app purchases"],
      contributions: [
        "Develop a Flutter mobile application for AI-powered meal planning and recipe experiences, with a strong focus on onboarding, animation and responsive mobile UX",
        "Integrate frontend flows with AI services, Firebase authentication, real-time data and REST APIs to deliver personalised and dynamic content",
        "Implement and maintain subscription and payment workflows using Stripe and mobile in-app purchases",
        "Work across application architecture, UI development and third-party service integrations to deliver production-ready mobile features"
      ],
      visit: "https://apps.apple.com/no/app/dishify-ai-recipe-generator/id6739636734?platform=iphone",
      ctaLabel: "View application",
      pictures: [
        { img: require("./src/assets/portfolio/dishify/one.png"), alt: "Dishify meal planning home screen" },
        { img: require("./src/assets/portfolio/dishify/two.png"), alt: "Dishify AI recipe suggestions" },
        { img: require("./src/assets/portfolio/dishify/three.png"), alt: "Dishify recipe detail view" },
        { img: require("./src/assets/portfolio/dishify/four.png"), alt: "Dishify weekly meal planner" },
        { img: require("./src/assets/portfolio/dishify/five.png"), alt: "Dishify subscription and premium features" },
        { img: require("./src/assets/portfolio/dishify/six.png"), alt: "Dishify onboarding screen" }
      ]
    }
  ],

  // Additional projects (compact grid)
  additionalProjects: [
    {
      slug: "asepha",
      name: "ASEPHA",
      tagline: "Healthcare app with appointment booking, prescription management and shipment tracking.",
      description:
        "ASEPHA is a digital healthcare application that provides patients with a comprehensive solution for managing their healthcare journey — from booking appointments and accessing prescriptions to tracking shipments and managing payment cards.",
      role: "Software Engineer",
      company: "SEDIDOC GmbH",
      date: "2022",
      technologies: ["Flutter", "Directus", "DHL", "Stripe"],
      contributions: [
        "Built appointment reservation functionality allowing patients to select preferred doctors, dates and times",
        "Implemented prescription management so patients can view medications, dosages and doctor instructions after visits",
        "Integrated DHL shipment tracking so patients can monitor medication delivery in real time",
        "Developed secure bank card management and payment workflows for medical services and invoice settlement"
      ],
      visit: "https://www.asepha.com/",
      ctaLabel: "View project",
      pictures: [
        { img: require("./src/assets/portfolio/asepha/one.png"), alt: "ASEPHA healthcare app appointment booking" },
        { img: require("./src/assets/portfolio/asepha/two.png"), alt: "ASEPHA prescription management" },
        { img: require("./src/assets/portfolio/asepha/three.png"), alt: "ASEPHA shipment tracking" },
        { img: require("./src/assets/portfolio/asepha/four.png"), alt: "ASEPHA payment card management" },
        { img: require("./src/assets/portfolio/asepha/five.png"), alt: "ASEPHA patient dashboard" },
        { img: require("./src/assets/portfolio/asepha/six.png"), alt: "ASEPHA doctor selection" },
        { img: require("./src/assets/portfolio/asepha/seven.png"), alt: "ASEPHA appointment confirmation" },
        { img: require("./src/assets/portfolio/asepha/eight.png"), alt: "ASEPHA medication details" },
        { img: require("./src/assets/portfolio/asepha/nine.png"), alt: "ASEPHA profile settings" },
        { img: require("./src/assets/portfolio/asepha/ten.png"), alt: "ASEPHA invoice and payment" }
      ]
    },
    {
      slug: "leadersinhealth",
      name: "LEADERS IN HEALTH",
      tagline: "Non-profit network platform for diversity in Germany's healthcare system.",
      description:
        "Leaders in Health is the leading non-profit network for diversity in German healthcare. The platform supports digital events, podcasts, leadership circles, workshops and a doctoral programme for healthcare professionals.",
      role: "Full-Stack Developer",
      company: "SEDIDOC GmbH",
      date: "2022",
      technologies: ["Vue", "Nuxt.js", "Vuetify", "Vuex", "Directus"],
      contributions: [
        "Implemented user registration and members area with secure login, profile management and access to exclusive content",
        "Built the Akademi page presenting events, courses and educational content with structured data organisation",
        "Developed profile information update workflows allowing members to maintain their details",
        "Structured and connected the Directus backend to the frontend for seamless data retrieval and display"
      ],
      visit: "https://www.leadersinhealth.de/",
      ctaLabel: "Visit website",
      pictures: [
        { img: require("./src/assets/portfolio/lih/one.png"), alt: "Leaders in Health network platform homepage" },
        { img: require("./src/assets/portfolio/lih/two.png"), alt: "Leaders in Health members area" },
        { img: require("./src/assets/portfolio/lih/three.png"), alt: "Leaders in Health Akademi page" },
        { img: require("./src/assets/portfolio/lih/four.png"), alt: "Leaders in Health events listing" },
        { img: require("./src/assets/portfolio/lih/five.png"), alt: "Leaders in Health profile page" }
      ]
    },
    {
      slug: "sediwork-v1",
      name: "SEDIWORK",
      tagline: "Earlier version of the SEDIWORK healthcare platform with chat, OTP, Stripe payments and webhooks.",
      description:
        "The first version of SEDIWORK, a healthcare SaaS platform for hospital workforce planning. This version introduced core communication, payment and security features that formed the foundation for the platform.",
      role: "Full-Stack Developer — Frontend Focus",
      company: "SEDIDOC GmbH",
      date: "2022 – 2023",
      technologies: ["Vue", "Vuetify", "Vuex", "Nuxt.js", "Directus", "Cypress"],
      contributions: [
        "Developed workshop management features including creation, scheduling, participant management and notifications",
        "Built the internal chat system supporting one-on-one messaging, group chats and a support centre",
        "Integrated Stripe payment gateway for secure processing of platform service payments",
        "Implemented one-time password (OTP) authentication as a security layer for sensitive operations",
        "Developed a webhook mechanism for real-time updates and notifications from external services",
        "Created server-side endpoints for webhook payload processing and action execution"
      ],
      visit: "",
      ctaLabel: "View case study",
      pictures: [
        { img: require("./src/assets/portfolio/sediwork/one.png"), alt: "SEDIWORK platform interface" },
        { img: require("./src/assets/portfolio/sediwork/two.png"), alt: "SEDIWORK scheduling view" },
        { img: require("./src/assets/portfolio/sediwork/three.png"), alt: "SEDIWORK chat system" },
        { img: require("./src/assets/portfolio/sediwork/four.png"), alt: "SEDIWORK payment workflow" },
        { img: require("./src/assets/portfolio/sediwork/five.png"), alt: "SEDIWORK dashboard" },
        { img: require("./src/assets/portfolio/sediwork/six.png"), alt: "SEDIWORK notifications" }
      ]
    },
    {
      slug: "usta",
      name: "USTA",
      tagline: "Service directory app for the Arab community in Turkey, covering multiple provinces.",
      description:
        "USTA is a comprehensive service directory app for the Arab community in Turkey, providing information on professionals, companies, restaurants and Arabic services across Turkey's provinces. The first communication platform of its kind covering a wide range of service fields.",
      role: "Software Engineer",
      company: "MIDADTEK",
      date: "2019 – 2020",
      technologies: ["Ionic", "Angular", "Firebase", "CoreUI"],
      contributions: [
        "Built the mobile application frontend using the Ionic framework for a cross-platform, responsive user experience",
        "Developed a CoreUI Angular admin panel with CRUD operations and Firebase database connectivity",
        "Designed and implemented the Firebase NoSQL database structure for efficient data storage and synchronisation",
        "Implemented a role-based permission system for secure admin panel access control",
        "Built reporting functionality for usage analytics and key performance monitoring",
        "Integrated push notifications to keep users informed of updates and announcements"
      ],
      visit: "https://apkpure.com/tr/usta/com.midadtek.usta",
      ctaLabel: "View project",
      pictures: [
        { img: require("./src/assets/portfolio/usta/one.jpg"), alt: "USTA service directory app" }
      ]
    },
    {
      slug: "tasks-management",
      name: "Tasks Management App",
      tagline: "Kanban board built with Vue 3 Composition API, Pinia and drag-and-drop task management.",
      description:
        "A task management application built with Vue.js leveraging the Composition API. The app provides an intuitive Kanban experience for managing tasks with due dates, cover images, comments, drag-and-drop reordering and advanced filtering.",
      role: "Frontend Developer",
      company: "Personal project",
      date: "2023",
      technologies: ["Vue 3", "Vuetify", "Pinia", "Vue Draggable"],
      contributions: [
        "Leveraged the Vue 3 Composition API for structured, maintainable and readable component code",
        "Implemented a Pinia store for centralised state management with data persistence strategies",
        "Integrated Vue Draggable for intuitive task reordering and Kanban board customisation",
        "Built advanced filtering options allowing users to sort and search tasks by due date and other criteria",
        "Designed and implemented a dynamic progress bar showing completed task percentage at a glance"
      ],
      visit: "https://tasks.avtech-sys.com/board",
      ctaLabel: "View project",
      pictures: [
        { img: require("./src/assets/portfolio/tasksmanagement/one.png"), alt: "Tasks management Kanban board" },
        { img: require("./src/assets/portfolio/tasksmanagement/two.png"), alt: "Tasks management task detail view" },
        { img: require("./src/assets/portfolio/tasksmanagement/three.png"), alt: "Tasks management filtering and progress" }
      ]
    }
  ],

  // Legacy web/mobile arrays kept for compatibility
  web: [],
  mobile: []
};

export default info;
