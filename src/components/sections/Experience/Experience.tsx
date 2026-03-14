import { experience } from '../../../data/experience'
import styles from './Experience.module.css'

export function Experience() {
    return (
        <div className={styles.content}>
            {experience.map((item, i) => (
                <div key={i} className={styles.item}>
                    <div className={styles.line}>
                        <div className={styles.dot} style={{ background: item.color }} />
                        {item.hasLine && <div className={styles.vline} />}
                    </div>
                    <div className={styles.info}>
                        <div className={styles.company}>{item.company}</div>
                        <div className={styles.role}>{item.role}</div>
                        <div className={styles.date}>{item.date}</div>
                        <div className={styles.desc}>{item.desc}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
