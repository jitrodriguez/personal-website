import { useEffect, useRef } from 'react'
import { useOSStore } from '../../store/useOSStore'
import { mobileApps, dockApps, type WindowId } from '../../data/content'
import { useClock } from '../../hooks/useClock'
import { About } from '../sections/About/About'
import { Experience } from '../sections/Experience/Experience'
import { Projects } from '../sections/Projects/Projects'
import { Skills } from '../sections/Skills/Skills'
import { Terminal } from '../sections/Terminal/Terminal'
import { Contact } from '../sections/Contact/Contact'
import styles from './MobileOS.module.css'

import { type ReactElement } from 'react'

const screenContent: Record<string, ReactElement> = {
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    terminal: <Terminal />,
    contact: <Contact />,
}

export function MobileOS() {
    const mobOpen = useOSStore((s) => s.mobOpen)
    const mobClose = useOSStore((s) => s.mobClose)
    const mobileOpen = useOSStore((s) => s.mobileOpen)
    const showNotif = useOSStore((s) => s.showNotif)
    const clock = useClock()

    useEffect(() => {
        const t = setTimeout(() => showNotif('👋', 'Welcome!', 'Tap icons to explore JuanOS'), 700)
        return () => clearTimeout(t)
    }, []) // eslint-disable-line

    // Swipe down to close
    const touchStart = useRef<{ y: number; x: number }>({ y: 0, x: 0 })

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStart.current = { y: e.touches[0].clientY, x: e.touches[0].clientX }
    }
    const handleTouchEnd = (id: string, e: React.TouchEvent) => {
        const dy = e.changedTouches[0].clientY - touchStart.current.y
        const dx = Math.abs(e.changedTouches[0].clientX - touchStart.current.x)
        if (dy > 90 && dx < 60) mobClose(id as WindowId)
    }

    return (
        <div className={styles.os}>
            {/* Status bar */}
            <div className={styles.statusbar}>
                <div className={styles.time}>{clock.mobile}</div>
                <div className={styles.statusIcons}><span>▲▲▲</span><span>WiFi</span><span>🔋</span></div>
            </div>

            {/* Home */}
            <div className={styles.home}>
                <div className={styles.hero}>
                    <div className={styles.heroName}>Juan<br />Rodriguez</div>
                    <div className={styles.heroRole}>SENIOR FRONTEND ENGINEER</div>
                    <div className={styles.heroLoc}>📍 Lima, Perú · Globant - Deloitte USA</div>
                </div>

                <div className={styles.widget}>
                    <div className={styles.widgetTitle}>Quick Stats</div>
                    <div className={styles.widgetStats}>
                        <div><div className={styles.wstatVal}>4+</div><div className={styles.wstatLbl}>Years Exp.</div></div>
                        <div><div className={styles.wstatVal}>95+</div><div className={styles.wstatLbl}>Lighthouse</div></div>
                        <div><div className={styles.wstatVal}>20+</div><div className={styles.wstatLbl}>PRs / mo</div></div>
                    </div>
                </div>

                <div className={styles.appGrid}>
                    {mobileApps.map((app) => (
                        <div
                            key={app.id}
                            className={styles.app}
                            onClick={() =>
                                'href' in app && app.href
                                    ? window.open(app.href as string, '_blank')
                                    : mobOpen(app.id as WindowId)
                            }
                        >
                            <div
                                className={`${styles.appIcon} ${styles[app.colorClass.replace('icon-', '') || 'custom']}`}
                                style={app.id === 'resume' ? { background: 'linear-gradient(135deg,#e74c3c,#922b21)' } : undefined}
                            >
                                {app.emoji}
                            </div>
                            <div className={styles.appLabel}>{app.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.swipeHint}>↓ swipe down inside apps to go back</div>
            </div>

            {/* Dock */}
            <div className={styles.dock}>
                {dockApps.map((app) => (
                    <div
                        key={app.id}
                        className={`${styles.dockIcon} ${styles[app.colorClass.replace('icon-', '')]}`}
                        onClick={() => mobOpen(app.id as WindowId)}
                    >
                        {app.emoji}
                    </div>
                ))}
            </div>

            {/* Full screen views */}
            {Object.keys(screenContent).map((id) => (
                <div
                    key={id}
                    className={`${styles.screen} ${mobileOpen[id as WindowId] ? styles.open : ''}`}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={(e) => handleTouchEnd(id, e)}
                >
                    <div className={styles.screenHeader}>
                        <div className={styles.back} onClick={() => mobClose(id as WindowId)}>←</div>
                        <div className={styles.screenTitle}>
                            {mobileApps.find((a) => a.id === id)?.emoji}{' '}
                            {mobileApps.find((a) => a.id === id)?.label}
                        </div>
                    </div>
                    <div className={styles.screenBody} style={id === 'terminal' ? { padding: 0, display: 'flex', flexDirection: 'column' } : undefined}>
                        {screenContent[id]}
                    </div>
                </div>
            ))}
        </div>
    )
}
