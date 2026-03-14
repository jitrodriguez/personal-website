// ── EXPERIENCE ─────────────────────────────────────────────
export interface ExperienceItem {
    color: string
    company: string
    role: string
    date: string
    desc: string
    hasLine: boolean
}

export const experience: ExperienceItem[] = [
    {
        color: '#3fb950',
        company: 'Globant - Deloitte USA',
        role: 'Senior Frontend Engineer',
        date: 'Dec 2025 → Present',
        desc: "Owned reusable UI development for Deloitte USA initiatives, delivering production-grade React components and chatbot entry flows while improving design-system alignment, test coverage, and code maintainability for multi-team adoption.",
        hasLine: true,
    },
    {
        color: '#58a6ff',
        company: 'BBVA Perú',
        role: 'Senior Frontend Engineer / Release Manager',
        date: 'May 2023 → Dec 2025',
        desc: "Build & scale BBVA's frontend platform (React, LitElement/Cells), a11y/performance standards, bank-grade APIs. Led \"Glopilot\" cutting repetitive work ~35%.",
        hasLine: true,
    },
    {
        color: '#ffe600ff',
        company: 'Devsu - Banco Pichincha',
        role: 'Full Stack Developer',
        date: 'Jan 2022 → May 2023',
        desc: 'RPA with UiPath, Power Apps & Power Automate. Cognitive assistants with Azure Bot Services & LUIS. Node.js archetypes with NestJS.',
        hasLine: true,
    },
    {
        color: '#d2a8ff',
        company: 'Distribuidora Inka',
        role: 'Frontend Developer',
        date: 'Dec 2020 → Dec 2021',
        desc: 'Windows Server mgmt, business card generator, real-time vendor tracking with Next.js + React Native, Firebase landing page.',
        hasLine: true,
    },
    {
        color: '#e3b341',
        company: 'VascoTechnologies',
        role: 'System Intern',
        date: 'March 2021 → June 2021',
        desc: 'E-commerce migration to WordPress, PDF quoting app, custom payment plugins for Yape, Plin & Tunki.',
        hasLine: false,
    },
]