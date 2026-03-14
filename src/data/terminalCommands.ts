export type CommandResult = string[]

export type CommandMap = Record<string, () => CommandResult>

export const buildCommands = (
    openWindow: (id: string) => void,
    mobOpen: (id: string) => void,
    isMobile: boolean,
): CommandMap => ({
    help: () => [
        '<span style="color:var(--os-accent)">Commands:</span>',
        '  <b>whoami</b>       → About Juan',
        '  <b>skills</b>       → List skills',
        '  <b>experience</b>   → Work history',
        '  <b>projects</b>     → Open projects',
        '  <b>contact</b>      → Contact info',
        '  <b>clear</b>        → Clear terminal',
        '  <b>easter</b>       → 🤫',
    ],
    whoami: () => [
        '<span style="color:var(--os-accent2)">Juan Rodriguez</span> — Senior Frontend Engineer',
        'Lima, Perú · BBVA · 4+ yrs · 95+ Lighthouse',
    ],
    skills: () => [
        '<span style="color:var(--os-accent)">── Frontend ──</span>',
        '  React · TypeScript · Next.js · LitElement',
        '<span style="color:var(--os-accent)">── Backend ──</span>',
        '  NestJS · Node.js · Python',
        '<span style="color:var(--os-accent)">── DevOps ──</span>',
        '  Docker · Azure · GitHub Actions · CI/CD',
    ],
    experience: () => {
        isMobile ? mobOpen('experience') : openWindow('experience')
        return ['Opening Experience...']
    },
    projects: () => {
        isMobile ? mobOpen('projects') : openWindow('projects')
        return ['Opening Projects...']
    },
    contact: () => {
        isMobile ? mobOpen('contact') : openWindow('contact')
        return ['Email: jitrodriguez@hotmail.com']
    },
    easter: () => [
        '🥚 <span style="color:var(--os-accent4)">Found it!</span>',
        '"The best code is no code at all."',
        'But if you must, make it beautiful ✨',
    ],
})
