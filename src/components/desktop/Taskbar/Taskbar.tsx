import { useOSStore } from '../../../store/useOSStore'
import { useClock } from '../../../hooks/useClock'
import { type WindowId, windowTitles } from '../../../data/content'
import styles from './Taskbar.module.css'

export function Taskbar() {
    const windows = useOSStore((s) => s.windows)
    const openWindow = useOSStore((s) => s.openWindow)
    const bringToFront = useOSStore((s) => s.bringToFront)
    const clock = useClock()

    const ids = Object.keys(windows) as WindowId[]

    return (
        <footer className={styles.taskbar} role="toolbar" aria-label="Taskbar">
            <button
                className={styles.start}
                onClick={() => openWindow('about')}
                aria-label="JuanOS — open About Me"
            >
                ⚡ JuanOS
            </button>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.tasks} role="group" aria-label="Open windows">
                {ids.map((id) => {
                    const state = windows[id]?.state
                    return (
                        <button
                            key={id}
                            className={`${styles.task} ${state === 'open' ? styles.active : ''}`}
                            onClick={() => {
                                if (state === 'minimized') openWindow(id)
                                else bringToFront(id)
                            }}
                            aria-pressed={state === 'open'}
                            aria-label={`${windowTitles[id] ?? id}${state === 'minimized' ? ' (minimized)' : ''}`}
                        >
                            {windowTitles[id] ?? id}
                        </button>
                    )
                })}
            </div>

            <time className={styles.clock} aria-live="off">{clock.desktop}</time>
        </footer>
    )
}
