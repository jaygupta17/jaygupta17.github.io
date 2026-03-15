import { Github, Linkedin, Mail, Database, Cpu, Terminal, Code } from "lucide-react"
import type {
  PersonalInfo,
  SocialLink,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
  EducationItem,
} from "./types"

export const PERSONAL_INFO: PersonalInfo = {
  name: "Jay Gupta",
  tagline:
    "I build and own production backend systems and AI-driven products with",
  highlights: ["correctness", "cost-awareness", "long-term impact"],
  bio: "AI Engineer and builder. I ship production-grade systems fast.",
  motto: "Build software that survives real users and real constraints.",
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/jaygupta17",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/jaygupta17",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:jayajaygupta16@email.com",
  },
]

export const ABOUT_TEXT = `
I'm a Computer Science (Data Science) undergraduate with hands-on experience owning backend systems and AI-heavy features in production.

My work centers on async APIs, ETL pipelines, AI agents, retrieval systems, and automation workflows. I care deeply about system correctness, operational cost, and engineering tradeoffs — especially when building AI-powered products meant to scale beyond demos and hype.
`.trim()

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "AI Engineer",
    company: "Prepairo [Vertune Data Tech.]",
    period: "Dec 2024 – Jan 2026",
    description:
      "Edtech Startup with 100k+ learners",
    achievements: [
      'Owned a daily <highlight>end-to-end ETL system</highlight> combining web scraping, normalization, AI summarization, and structured storage using cron-based automation. Directly contributed to a <highlight>3× increase in app downloads</highlight> and a <highlight>60% increase in daily active users</highlight>.',
      'Architected and shipped a <highlight>production-grade GRE AI Tutor</highlight> using <tech>Pydantic-AI</tech>, with schema-validated outputs, tool-based reasoning, persistent user context, and performance tracking.',
      'Built the complete async backend for GRE Quant, Verbal, and Vocabulary modules using <tech>FastAPI</tech>, <tech>async SQLAlchemy</tech>, <tech>asyncpg</tech>, and PostgreSQL, focusing on predictable latency and clean domain separation.',
      'Engineered subscription and access-control infrastructure using <tech>Razorpay</tech>, including free trials, international payments, secure webhook verification, idempotency handling, and real-time entitlement checks.',
      'Reduced AI infrastructure costs by approximately <highlight>50%</highlight> through batch inference, prompt restructuring, token optimization, and deliberate model selection based on cost–quality tradeoffs.',
      'Built scalable OCR and document-ingestion pipelines using <tech>GOT OCR 2.0</tech> and <tech>Gemini 2.5 Pro</tech> to digitize and structure physical and scanned educational content.',
      'Developed internal automation systems including AI-assisted video generation workflows using <tech>n8n</tech> and custom <tech>MoviePy</tech> pipelines, significantly reducing manual content operations.',
      'Prototyped early-stage <highlight>realtime voice-to-voice agent</highlight> for interactive use cases, exploring latency, streaming responses, and conversational state management.',
    ],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: "SketchPen",
    subtitle: "AI Whiteboard Video Generator",
    description:
      "Script in, voiceover added, animated whiteboard video out in minutes. Custom rendering engine built from scratch. Full API access at every pricing tier. $0.70 per standard video. Solo-built in 7 effective days across 21 strict iterations, feature parity with a YC-funded competitor.",
    href: "https://sketchpen.app",
    technologies: [
      "Next.js",
      "FastAPI",
      "Pydantic-AI",
      "MoviePy",
      "ElevenLabs",
      "Neon PostgreSQL",
      "Cloudflare R2",
    ],
  },
  {
    title: "Apex",
    subtitle: "AI Desktop Assistant",
    description:
      "Initial Versions of NotebookLM frustrated me. no chat history, no streaming, bad memory, hard-to-read fonts. So I built Apex: a Cursor-like desktop AI assistant with persistent local notes, document uploads, font customization, type-safe agents, Rust-powered filesystem service, and full MCP support. The AI environment I actually wanted to use.",
    href: "https://github.com/jaygupta17",
    technologies: [
      "Tauri v2",
      "React 19",
      "TanStack Query",
      "Zustand",
      "shadcn",
      "FastAPI",
      "Pydantic-AI",
      "ChromaDB",
      "Rust",
    ],
  },
]

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend & Systems",
    icon: Database,
    iconColor: "text-portfolio-teal/70",
    skills: [
      { name: "FastAPI, SQLAlchemy" },
      { name: "PostgreSQL, asyncpg, Alembic" },
      { name: "Docker, Nginx, Linux" },
      { name: "AWS, Cron-based Automation" },
    ],
  },
  {
    title: "AI & Retrieval Systems",
    icon: Cpu,
    iconColor: "text-portfolio-violet/70",
    skills: [
      { name: "Pydantic-AI, LangChain, LangGraph" },
      { name: "MCP, MultiAgents, Agent Skills" },
      { name: "RAG Pipelines" },
      { name: "TTS, OCR, Voice Assistants" },
      { name: "Transformers, PyTorch" },
    ],
  },
  {
    title: "Languages",
    icon: Terminal,
    iconColor: "text-portfolio-emerald/70",
    skills: [
      { name: "Python", badge: "Primary" },
      { name: "TypeScript" },
      { name: "Rust" },
      { name: "SQL" },
    ],
  },
  {
    title: "Client & Desktop",
    icon: Code,
    iconColor: "text-portfolio-blue/70",
    skills: [
      { name: "React, Tailwind CSS" },
      { name: "Tauri v2", badge: "Native Apps" },
      { name: "Next.js" },
    ],
  },
]

export const EDUCATION: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering (Data Science)",
    institution:
      "Shri Ramdeobaba College of Engineering and Management, Nagpur",
    period: "2023 – Present",
    gpa: "CGPA: 8.08",
  },
]

export const SECTION_TITLES = {
  about: "About",
  experience: "Experience",
  projects: "Selected Work",
  skills: "Technical Focus",
  education: "Education",
}
