import { useEffect, useRef } from 'react'
import { useOSStore } from '../../store/useOSStore'
import { bootLines } from '../../data/content'
import { useIsMobile } from '../../hooks/useIsMobile'
import styles from './BootScreen.module.css'

export function BootScreen() {
    const setBooted = useOSStore((s) => s.setBooted)
    const showNotif = useOSStore((s) => s.showNotif)
    const isMobile = useIsMobile()
    const logRef = useRef<HTMLDivElement>(null)
    const barRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timers: ReturnType<typeof setTimeout>[] = []

        const lines = [...bootLines]
        if (isMobile) {
            lines[lines.length - 1] = { ...lines[lines.length - 1], t: '<span class="ok">[  OK  ]</span> Mobile OS ready.' }
        }

        lines.forEach((l, i) => {
            const t = setTimeout(() => {
                if (logRef.current) {
                    const d = document.createElement('div')
                    d.className = styles.line
                    d.innerHTML = l.t
                    logRef.current.appendChild(d)
                }
                if (barRef.current) {
                    barRef.current.style.width = ((i + 1) / lines.length * 100) + '%'
                }
            }, l.d)
            timers.push(t)
        })

        const done = setTimeout(() => {
            setBooted()
            setTimeout(() => {
                if (isMobile) showNotif('👋', 'Welcome!', 'Tap icons to explore JuanOS')
                else showNotif('👋', 'Welcome to JuanOS!', 'Click icons or right-click the desktop')
            }, 700)
        }, 3000)
        timers.push(done)

        return () => timers.forEach(clearTimeout)
    }, [])

    return (
        <div className={styles.boot}>
            <div className={styles.logo}>Juan<span className={styles.os}>OS</span></div>
            <div className={styles.version}>VERSION 5.2.0 — LIMA, PERÚ</div>
            <div className={styles.log} ref={logRef} />
            <div className={styles.barWrap}>
                <div className={styles.bar} ref={barRef} />
            </div>
        </div>
    )
}
