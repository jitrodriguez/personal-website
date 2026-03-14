import { useEffect, useRef } from 'react'
import { useOSStore } from '../../../store/useOSStore'
import { type WindowId } from '../../../data/content'
import styles from './ContextMenu.module.css'

export function ContextMenu() {
    const openWindow = useOSStore((s) => s.openWindow)
    const closeAll = useOSStore((s) => s.closeAll)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const desktop = document.getElementById('juanos-desktop')
        if (!desktop) return

        const onCtx = (e: MouseEvent) => {
            e.preventDefault()
            const menu = ref.current
            if (!menu) return
            menu.style.display = 'block'
            menu.style.left = Math.min(e.clientX, window.innerWidth - 200) + 'px'
            menu.style.top = Math.min(e.clientY, window.innerHeight - menu.offsetHeight - 60) + 'px'
        }
        const hide = () => { if (ref.current) ref.current.style.display = 'none' }

        desktop.addEventListener('contextmenu', onCtx)
        document.addEventListener('click', hide)
        return () => {
            desktop.removeEventListener('contextmenu', onCtx)
            document.removeEventListener('click', hide)
        }
    }, [])

    const open = (id: WindowId) => {
        openWindow(id)
        if (ref.current) ref.current.style.display = 'none'
    }

    return (
        <div ref={ref} className={styles.menu}>
            <div className={styles.item} onClick={() => open('about')}>👤 About Me</div>
            <div className={styles.item} onClick={() => open('experience')}>💼 Experience</div>
            <div className={styles.item} onClick={() => open('projects')}>🗂 Projects</div>
            <div className={styles.sep} />
            <div className={styles.item} onClick={() => open('terminal')}>⌨️ Open Terminal</div>
            <div className={styles.item} onClick={() => open('contact')}>✉️ Contact</div>
            <div className={styles.sep} />
            <div className={styles.item} onClick={() => { closeAll(); if (ref.current) ref.current.style.display = 'none' }}>✖ Close All</div>
        </div>
    )
}
