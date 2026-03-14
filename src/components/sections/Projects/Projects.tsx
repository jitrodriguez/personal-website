import { projects } from '../../../data/projects'
import styles from './Projects.module.css'

const tagClass: Record<string, string> = {
    js: styles.tagJs,
    ts: styles.tagTs,
    react: styles.tagReact,
    node: styles.tagNode,
    py: styles.tagPy,
}

export function Projects() {
    return (
        <div className={styles.content}>
            {projects.map((p) => (
                <div
                    key={p.name}
                    className={styles.card}
                    onClick={() => window.open(p.href, '_blank')}
                >
                    <div className={styles.name}>{p.name}</div>
                    <div className={styles.desc}>{p.desc}</div>
                    <div className={styles.tags}>
                        {p.tags.map((t) => (
                            <span key={t.label} className={`${styles.tag} ${tagClass[t.type] ?? ''}`}>
                                {t.label}
                            </span>
                        ))}
                    </div>
                    <div className={styles.link}>→ {p.linkText}</div>
                </div>
            ))}
        </div>
    )
}
