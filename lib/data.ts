export const profile = {
  name: 'Muhammad Azeem',
  role: 'Software Engineer & Automation Developer',
  hook: 'I build polished mobile apps, resilient backend APIs, and automation systems that remove repetitive work.',
  github: 'https://github.com/azeem-flutter',
  githubLabel: 'github.com/azeem-flutter',
  email: 'azeemjamilbsse@gmail.com',
  phone: '+92 324-7618292',
  about:
    "I'm a software engineer from National Textile University focused on building products that feel complete from the first screen to the last backend job. I work across Flutter, FastAPI, and n8n so mobile apps, APIs, and automations stay tightly connected. The goal is always the same: ship systems that are polished for users, dependable under real traffic, and useful long after the demo ends.",
};

export type StackCategory = {
  label: string;
  eyebrow: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    label: 'Mobile Development',
    eyebrow: 'Client',
    items: ['Flutter', 'Dart'],
  },
  {
    label: 'Backend, APIs & Automation',
    eyebrow: 'Server',
    items: ['Python', 'FastAPI', 'REST APIs', 'n8n Workflow Automation'],
  },
  {
    label: 'Databases & Cloud',
    eyebrow: 'Storage',
    items: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'MongoDB', 'Cloudinary', 'Railway'],
  },
  {
    label: 'State Management',
    eyebrow: 'Client',
    items: ['GetX', 'Riverpod'],
  },
  {
    label: 'AI/ML & Tools',
    eyebrow: 'Intelligence',
    items: ['Groq AI', 'LLM Integration', 'NumPy', 'Pandas', 'Scikit-learn', 'Git', 'Postman'],
  },
];

/**
 * A piece of visual proof for a project: a screenshot, an n8n canvas export,
 * or an app screen recording frame.
 *
 * `frame` controls how it's displayed:
 *  - 'browser' → wrapped in a browser-window mockup (n8n canvases, web dashboards, Sheets)
 *  - 'phone'   → wrapped in a phone mockup (Flutter app screens)
 *  - 'plain'   → shown edge-to-edge, no chrome (diagrams, exported images that already look finished)
 *
 * `src` should point at a file you've placed in /public/projects/<project-id>/.
 * Until a real file exists at that path, the gallery shows a clearly-labelled
 * placeholder instead of a broken image — so nothing fake ever ships to a client.
 */
export type Media = {
  src: string;
  alt: string;
  frame: 'browser' | 'phone' | 'plain';
  type?: 'image' | 'video';
  thumbnail?: string;
};

export type ProjectLinks = {
  demo?: string; // live, working app/workflow a client can click into
  video?: string; // Loom / YouTube walkthrough
  repo?: string; // public source code
  caseStudy?: string; // longer write-up, e.g. on Notion or a blog
};

export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  features?: string[];
  status: 'active' | 'shipped' | 'archived';
  highlight?: boolean;
  media: Media[];
  links?: ProjectLinks;
};

export const projects: Project[] = [
  {
    id: 'n8n-ecosystem',
    title: 'n8n Automation Workflows & Backend Ecosystem',
    category: 'Automation',
    tagline: 'A library of autonomous pipelines doing the work a team used to do by hand.',
    description:
      'Designed and deployed a set of production n8n workflows that integrate third-party APIs, generate AI-personalized content, and move data between services without a human in the loop. Includes a lead outreach agent that drafts and sends cold emails from a live Google Sheet, a research-grounded LinkedIn content engine that writes, illustrates, and publishes posts end-to-end, a RAG knowledge assistant backed by Supabase pgvector, a WhatsApp support agent wired into Meta\u2019s Business API, a customer service agent with automatic human escalation, and an invoice pipeline that reads PDFs out of Google Drive straight into a billing sheet.',
    tech: ['n8n', 'Webhooks', 'REST APIs', 'FastAPI', 'Python', 'Google Gemini', 'OpenAI'],
    features: [
      'Lead outreach agent: polls Google Sheets, drafts personalized cold emails with Gemini, writes status back to the sheet',
      'LinkedIn content engine: live web research \u2192 grounded post \u2192 matching image prompt \u2192 auto-publish',
      'RAG knowledge assistant: Google Drive \u2192 chunked \u2192 embedded into Supabase pgvector \u2192 conversational retrieval with Postgres memory',
      'WhatsApp support agent: Meta webhook verification + Gemini-powered real-time replies',
      'Customer service agent: FAQ-grounded replies with automatic escalation to a human inbox when confidence is low',
      'Invoice pipeline: Drive-triggered PDF extraction \u2192 structured data \u2192 Sheets database \u2192 billing team notification',
    ],
    status: 'active',
    highlight: true,
    media: [
      { src: '/projects/n8n-ecosystem/linkedin-post-generator.mp4', alt: 'OpenAI LinkedIn Post Generator — end-to-end workflow demo', frame: 'browser', type: 'video', thumbnail: '/projects/n8n-ecosystem/linkedin-thumbnail.png' },
      { src: '/projects/n8n-ecosystem/1.png', alt: 'Lead outreach agent canvas in n8n', frame: 'browser' },
      { src: '/projects/n8n-ecosystem/2.png', alt: 'Customer service agent workflow in n8n', frame: 'browser' },
      { src: '/projects/n8n-ecosystem/3.png', alt: 'Invoice processing workflow in n8n', frame: 'browser' },
    ],
    links: {
      // demo: 'https://your-n8n-instance.com/workflow/xxxx',
      // video: 'https://loom.com/share/xxxx',
    },
  },
  {
    id: 'skillguide-ai',
    title: 'SkillGuide AI',
    category: 'Final Year Project',
    tagline: 'Smart job matching and interview prep, powered by vector search and LLMs.',
    description:
      'A cross-platform mobile app that matches candidates to jobs using AI-based vector similarity, generates ATS-friendly resumes that refresh automatically as a profile changes, and runs a voice-based mock interview that scores technical knowledge, tone, and communication.',
    tech: ['Flutter', 'FastAPI', 'Python', 'Firebase', 'Groq AI', 'MongoDB', 'Railway'],
    features: [
      'Vector similarity matching between candidate profiles and aggregated job postings',
      'FastAPI backend on Railway with Firebase Auth and daily job aggregation from startup portals',
      'LLM-generated, ATS-friendly resumes that auto-refresh on profile updates',
      'AI quiz + voice-based interview simulation evaluating technical depth, tone, and communication',
    ],
    status: 'shipped',
    media: [
      { src: '/projects/skillguide-ai/skillguide-ai-demo.mp4', alt: 'SkillGuide AI — app demo', frame: 'browser', type: 'video', thumbnail: '/projects/skillguide-ai/skillguide-ai-thumbnail.png' },
      { src: '/projects/skillguide-ai/1.jpeg', alt: 'SkillGuide AI home screen', frame: 'phone' },
      { src: '/projects/skillguide-ai/2.jpeg', alt: 'SkillGuide AI job matching screen', frame: 'phone' },
      { src: '/projects/skillguide-ai/3.jpeg', alt: 'SkillGuide AI resume generator screen', frame: 'phone' },
      { src: '/projects/skillguide-ai/4.jpeg', alt: 'SkillGuide AI mock interview screen', frame: 'phone' },
    ],
    links: {},
  },
  {
    id: 'trailmate',
    title: 'TrailMate',
    category: 'Mobile App',
    tagline: 'A camping and outdoor adventure planner with AI-assisted packing lists.',
    description:
      'Full-stack adventure planning app handling trip data and media end-to-end, with AI-assisted packing lists and survival guidance delivered through REST APIs.',
    tech: ['Flutter', 'Firebase', 'REST APIs', 'GetX', 'Cloudinary'],
    features: [
      'AI-assisted packing lists and survival guidance via REST APIs',
      'Full-stack trip data and media management with Cloudinary storage',
    ],
    status: 'shipped',
    media: [
      { src: '/projects/trailmate/1.jpeg', alt: 'TrailMate home screen', frame: 'phone' },
      { src: '/projects/trailmate/2.jpeg', alt: 'TrailMate trip planner screen', frame: 'phone' },
    ],
    links: {},
  },
  {
    id: 'college-alert',
    title: 'College Alert',
    category: 'Android App',
    tagline: 'Real-time campus event tracking that students actually check.',
    description:
      'Android event management app that tracks campus events in real time, grouped into Today, Upcoming, and Important, with in-app reminders and validated submission forms.',
    tech: ['Flutter', 'Firebase Cloud Firestore'],
    features: [
      'Real-time event tracking grouped into Today / Upcoming / Important',
      'In-app reminders and form validation for event submissions',
    ],
    status: 'shipped',
    media: [],
    links: {},
  },
  {
    id: 'arthub',
    title: 'ArtHub',
    category: 'Mobile App',
    tagline: 'A digital art gallery with real-time likes, comments, and views.',
    description:
      'Digital art gallery app with optimized media storage and artwork screens carrying real-time interactive features — likes, comments, and view counts.',
    tech: ['Flutter', 'Firebase', 'Cloudinary'],
    features: [
      'Media storage optimization for fast-loading galleries',
      'Real-time likes, comments, and view counts on artwork screens',
    ],
    status: 'shipped',
    media: [
      { src: '/projects/arthub/1.jpeg', alt: 'ArtHub gallery screen', frame: 'phone' },
      { src: '/projects/arthub/2.jpeg', alt: 'ArtHub artwork detail screen', frame: 'phone' },
      { src: '/projects/arthub/3.jpeg', alt: 'ArtHub artwork upload screen', frame: 'phone' },
      { src: '/projects/arthub/4.jpeg', alt: 'ArtHub profile screen', frame: 'phone' },
      { src: '/projects/arthub/5.jpeg', alt: 'ArtHub explore screen', frame: 'phone' },
      { src: '/projects/arthub/6.jpeg', alt: 'ArtHub artwork view screen', frame: 'phone' },
    ],
    links: {},
  },
];

// Real, derived numbers — never hand-typed, so they can't drift from the data above.
export const stats = [
  {
    value: String(projects.length),
    label: 'Projects shipped',
  },
  {
    value: String(projects.find((p) => p.id === 'n8n-ecosystem')?.features?.length ?? 0),
    label: 'Production n8n workflows',
  },
  {
    value: String(stack.reduce((sum, c) => sum + c.items.length, 0)),
    label: 'Tools in active use',
  },
];