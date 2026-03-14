
// ── SKILLS ─────────────────────────────────────────────────
export interface SkillGroup {
    title: string
    items: { name: string; pct: number; gradient: string }[]
}

export const skillGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        items: [
            { name: 'React', pct: 95, gradient: 'linear-gradient(90deg,#58a6ff,#388bfd)' },
            { name: 'TypeScript', pct: 90, gradient: 'linear-gradient(90deg,#3178c6,#1a4d9c)' },
            { name: 'Next.js', pct: 88, gradient: 'linear-gradient(90deg,#eee,#aaa)' },
            { name: 'LitElement', pct: 85, gradient: 'linear-gradient(90deg,#d2a8ff,#8b5cf6)' },
        ],
    },
    {
        title: 'Backend & DevOps',
        items: [
            { name: 'NestJS', pct: 80, gradient: 'linear-gradient(90deg,#e0234e,#a01035)' },
            { name: 'Docker', pct: 75, gradient: 'linear-gradient(90deg,#2496ed,#0d6cb0)' },
            { name: 'Azure', pct: 72, gradient: 'linear-gradient(90deg,#0078d4,#005a9e)' },
            { name: 'CI/CD', pct: 78, gradient: 'linear-gradient(90deg,#3fb950,#237a2e)' },
        ],
    },
    {
        title: 'Engineering',
        items: [
            { name: 'Python', pct: 70, gradient: 'linear-gradient(90deg,#f7c948,#c49b0c)' },
            { name: 'WCAG 2.1', pct: 92, gradient: 'linear-gradient(90deg,#f78166,#c43022)' },
        ],
    },
]

// ── DESKTOP ICONS ──────────────────────────────────────────
export const desktopIcons = [
    { id: 'about', emoji: '👤', label: 'About Me', colorClass: 'icon-blue' },
    { id: 'experience', emoji: '💼', label: 'Experience', colorClass: 'icon-green' },
    { id: 'projects', emoji: '🗂', label: 'Projects', colorClass: 'icon-purple' },
    { id: 'skills', emoji: '⚡', label: 'Skills', colorClass: 'icon-orange' },
    { id: 'terminal', emoji: '⌨️', label: 'Terminal', colorClass: 'icon-dark' },
    { id: 'contact', emoji: '✉️', label: 'Contact', colorClass: 'icon-red' },
]

export const mobileApps = [
    ...desktopIcons,
    { id: 'resume', emoji: '📄', label: 'Resume', colorClass: '', href: 'https://juanrodriguez.netlify.app/cv_Juan_Rodriguez.pdf' },
    { id: 'github', emoji: '🐙', label: 'GitHub', colorClass: 'icon-dark', href: 'https://github.com/jitrodriguez' },
]

export const dockApps = [
    { id: 'about', emoji: '👤', colorClass: 'icon-blue' },
    { id: 'projects', emoji: '🗂', colorClass: 'icon-purple' },
    { id: 'terminal', emoji: '⌨️', colorClass: 'icon-dark' },
    { id: 'contact', emoji: '✉️', colorClass: 'icon-red' },
]

export const bootLines = [
    { t: 'Initializing JuanOS v5.2.0...', d: 0 },
    { t: '<span class="ok">[  OK  ]</span> Loading Juan Rodriguez', d: 280 },
    { t: '<span class="ok">[  OK  ]</span> Importing 5+ years of experience', d: 560 },
    { t: '<span class="ok">[  OK  ]</span> Mounting frontend platform', d: 840 },
    { t: '<span class="ok">[  OK  ]</span> React · TypeScript · LitElement: ready', d: 1060 },
    { t: '<span class="ok">[  OK  ]</span> WCAG 2.1 AA compliance: active', d: 1240 },
    { t: '<span class="warn">[ WARN ]</span> Pizza levels low — proceeding anyway', d: 1400 },
    { t: '<span class="ok">[  OK  ]</span> Desktop ready.', d: 1600 },
]

export type WindowId = 'about' | 'experience' | 'projects' | 'skills' | 'terminal' | 'contact'

export const windowTitles: Record<WindowId, string> = {
    about: 'About Me.app',
    experience: 'Experience.log',
    projects: '~/projects',
    skills: 'skills --list',
    terminal: 'terminal — bash',
    contact: 'Contact.vcf',
}

export const windowDefaults: Record<WindowId, { width: number; height: number; top: number; left: number }> = {
    about: { width: 480, height: 460, top: 60, left: 80 },
    experience: { width: 440, height: 480, top: 80, left: 200 },
    projects: { width: 460, height: 500, top: 100, left: 320 },
    skills: { width: 380, height: 440, top: 120, left: 440 },
    terminal: { width: 520, height: 360, top: 140, left: 140 },
    contact: { width: 360, height: 320, top: 160, left: 280 },
}
