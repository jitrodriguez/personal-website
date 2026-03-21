export interface ProjectTag {
    label: string
    type: 'js' | 'ts' | 'react' | 'node' | 'py'
}

export interface ProjectItem {
    name: string
    desc: string
    tags: ProjectTag[]
    href: string
    linkText: string
    umamiEvent?: string
}

export const projects: ProjectItem[] = [
    {
        name: '🔥 Uy Qué Heavy',
        desc: 'Preguntas que conectan. Conversaciones que importan. Interactive HTML demo.',
        tags: [
            { label: 'HTML', type: 'js' },
            { label: 'JS', type: 'js' },
            { label: 'CSS', type: 'js' },
        ],
        href: '/demos/uy-que-heavy',
        linkText: 'Play Demo',
        umamiEvent: 'uy-que-heavy-link',
    },
    {
        name: '🔌 vscode-chat-langchain-bridge',
        desc: 'npm package integrating LangChain into VSCode — AI-driven code editor functionalities.',
        tags: [
            { label: 'TypeScript', type: 'ts' },
            { label: 'Node.js', type: 'node' },
        ],
        href: 'https://www.npmjs.com/package/vscode-chat-langchain-bridge',
        linkText: 'View on npm',
        umamiEvent: 'npm-vscode-chat-langchain-bridge-link',
    },
    {
        name: '🌐 Personal Website',
        desc: 'Portfolio built with React and Gatsby for optimal performance and SEO.',
        tags: [
            { label: 'React', type: 'react' },
            { label: 'Gatsby', type: 'js' },
        ],
        href: 'https://juanrodriguez.netlify.app',
        linkText: 'View site',
        umamiEvent: 'personal-website-link',
    },
    {
        name: '⚡ Pokédex',
        desc: 'Search and view Pokémon data. HTML, CSS, JavaScript + Tailwind.',
        tags: [{ label: 'JavaScript', type: 'js' }],
        href: 'https://pokedex-launchxlatam.netlify.app/',
        linkText: 'View live',
        umamiEvent: 'pokedex-link',
    },
    {
        name: '📈 ECG Signal Analysis',
        desc: 'Extraction of electrocardiographic parameters using Pandas, NumPy, Scipy, Scikit-learn.',
        tags: [{ label: 'Python', type: 'py' }],
        href: 'https://github.com/jitrodriguez',
        linkText: 'GitHub',
        umamiEvent: 'github-ecg-link',
    },
]
