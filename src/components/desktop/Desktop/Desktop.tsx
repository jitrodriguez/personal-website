import { useEffect, type ReactElement } from 'react'
import { useOSStore } from '../../../store/useOSStore'
import type { WindowId } from '../../../data/content'
import { Window } from '../Window/Window'
import { DesktopIcons } from '../DesktopIcons/DesktopIcons'
import { Taskbar } from '../Taskbar/Taskbar'
import { ContextMenu } from '../ContextMenu/ContextMenu'
import { About } from '../../sections/About/About'
import { Experience } from '../../sections/Experience/Experience'
import { Projects } from '../../sections/Projects/Projects'
import { Skills } from '../../sections/Skills/Skills'
import { Terminal } from '../../sections/Terminal/Terminal'
import { Contact } from '../../sections/Contact/Contact'
import styles from './Desktop.module.css'

const sectionMap: Record<WindowId, ReactElement> = {
    about: <About />,
    experience: <Experience />,
    projects: <Projects />,
    skills: <Skills />,
    terminal: <Terminal />,
    contact: <Contact />,
}

export function Desktop() {
    const openWindow = useOSStore((s) => s.openWindow)
    const showNotif = useOSStore((s) => s.showNotif)

    useEffect(() => {
        const t1 = setTimeout(() => openWindow('about'), 400)
        const t2 = setTimeout(() => showNotif('👋', 'Welcome to JuanOS!', 'Click icons or right-click the desktop'), 3200)
        return () => { clearTimeout(t1); clearTimeout(t2) }
    }, [])

    return (
        <div id="juanos-desktop" className={styles.desktop}>
            {/* Welcome banner */}
            <div className={styles.banner}>
                <div className={styles.bannerBig}>Juan Rodriguez</div>
                <div className={styles.bannerSub}>SENIOR FRONTEND ENGINEER · LIMA, PERÚ</div>
                <div className={styles.bannerHint}>↗ Click icons to explore · Right-click the desktop</div>
            </div>

            <DesktopIcons />

            {(Object.keys(sectionMap) as WindowId[]).map((id) => (
                <Window key={id} id={id}>
                    {sectionMap[id]}
                </Window>
            ))}

            <Taskbar />
            <ContextMenu />
        </div>
    )
}
