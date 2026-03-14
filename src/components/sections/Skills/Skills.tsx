import { useEffect, useRef } from 'react'
import { skillGroups } from '../../../data/content'
import styles from './Skills.module.css'

export function Skills() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            ref.current?.querySelectorAll<HTMLElement>('[data-pct]').forEach((bar) => {
                bar.style.width = bar.dataset.pct + '%'
            })
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={styles.content} ref={ref}>
            {skillGroups.map((group) => (
                <div key={group.title}>
                    <div className={styles.groupTitle}>{group.title}</div>
                    <div className={styles.bars}>
                        {group.items.map((item) => (
                            <div key={item.name} className={styles.barItem}>
                                <div className={styles.barName}>{item.name}</div>
                                <div className={styles.barTrack}>
                                    <div
                                        className={styles.barFill}
                                        data-pct={item.pct}
                                        style={{ width: '0%', background: item.gradient }}
                                    />
                                </div>
                                {/* <div className={styles.barPct}>{item.pct}%</div> */}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
