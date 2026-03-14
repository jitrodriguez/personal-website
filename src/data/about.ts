export const about = {
    name: 'Juan Rodriguez',
    role: 'SENIOR FRONTEND ENGINEER',
    location: 'Lima, Perú · Globant - Deloitte USA',
    avatar: '👨‍💻',
    bio: 'Frontend engineer passionate about crafting accessible, pixel-perfect interfaces where thoughtful design meets robust engineering. I care about semantics, performance budgets, and usability to build inclusive experiences.',
    stats: [
        { value: '5+', label: 'Years Exp.' },
        { value: '15+', label: 'Teams Supported' },
        { value: '80%', label: 'Test Coverage' },
    ],
    skills: [
        { label: 'React', color: 'blue' },
        { label: 'TypeScript', color: 'blue' },
        { label: 'Next.js', color: 'blue' },
        { label: 'LitElement', color: 'green' },
        { label: 'NestJS', color: 'green' },
        { label: 'Docker', color: 'purple' },
        { label: 'Azure', color: 'purple' },
        { label: 'Python', color: 'default' },
        { label: 'GitHub Actions', color: 'default' },
        { label: 'WCAG 2.1', color: 'default' },
    ] as { label: string; color: 'blue' | 'green' | 'purple' | 'default' }[],
}