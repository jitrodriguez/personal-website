import { about } from '../../../data/about'
import styles from './About.module.css'

export function About() {
    return (
        <div className={styles.content}>
            <div className={styles.top}>
                <div className={styles.avatar}>{about.avatar}</div>
                <div>
                    <div className={styles.name}>{about.name}</div>
                    <div className={styles.role}>{about.role}</div>
                    <div className={styles.loc}>{about.location}</div>
                </div>
            </div>

            <div className={styles.bio}>{about.bio}</div>

            <div className={styles.stats}>
                {about.stats.map((s) => (
                    <div key={s.label} className={styles.statBox}>
                        <div className={styles.statVal}>{s.value}</div>
                        <div className={styles.statLbl}>{s.label}</div>
                    </div>
                ))}
            </div>

            <div>
                <div className={styles.sectionTitle}>DAILY DRIVERS</div>
                <div className={styles.skills}>
                    {about.skills.map((sk) => (
                        <span key={sk.label} className={`${styles.skillTag} ${styles[sk.color]}`}>
                            {sk.label}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
