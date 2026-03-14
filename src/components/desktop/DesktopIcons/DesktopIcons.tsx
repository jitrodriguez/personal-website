import { useOSStore } from '../../../store/useOSStore'
import { desktopIcons, type WindowId } from '../../../data/content'
import styles from './DesktopIcons.module.css'

export function DesktopIcons() {
    const openWindow = useOSStore((s) => s.openWindow)

    return (
        <nav className={styles.icons} aria-label="Desktop applications">
            {desktopIcons.map((ic) => (
                <button
                    key={ic.id}
                    className={styles.icon}
                    onClick={() => openWindow(ic.id as WindowId)}
                    aria-label={`Open ${ic.label}`}
                >
                    <div className={`${styles.iconImg} ${styles[ic.colorClass.replace('icon-', '')]}`} aria-hidden="true">
                        {ic.emoji}
                    </div>
                    <div className={styles.iconLabel}>{ic.label}</div>
                </button>
            ))}
        </nav>
    )
}
