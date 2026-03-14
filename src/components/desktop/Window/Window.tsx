import { useRef, useEffect, useCallback, type ReactNode, useLayoutEffect } from 'react'
import { useOSStore } from '../../../store/useOSStore'
import { type WindowId, windowTitles, windowDefaults } from '../../../data/content'
import styles from './Window.module.css'

interface WindowProps {
    id: WindowId
    children: ReactNode
}

export function Window({ id, children }: WindowProps) {
    const win = useOSStore((s) => s.windows[id])
    const bringToFront = useOSStore((s) => s.bringToFront)
    const closeWindow = useOSStore((s) => s.closeWindow)
    const minimizeWindow = useOSStore((s) => s.minimizeWindow)

    const wRef = useRef<HTMLDivElement>(null)
    const drag = useRef({ active: false, ox: 0, oy: 0 })
    const resize = useRef({ active: false, sx: 0, sy: 0, sw: 0, sh: 0 })
    const isMaxRef = useRef(false)
    const savedPos = useRef<{ left: string; top: string; width: string; height: string } | null>(null)
    const defaults = windowDefaults[id]

    /* ── Set initial position/size on mount ──────────────────────────────
       The div is ALWAYS in the DOM (we don't return null early), so
       wRef.current is guaranteed to exist here. */
    useLayoutEffect(() => {
        const el = wRef.current
        if (!el) return
        el.style.left = defaults.left + 'px'
        el.style.top = defaults.top + 'px'
        el.style.width = defaults.width + 'px'
        el.style.height = defaults.height + 'px'
    }, [])

    /* ── Global mousemove / mouseup for drag & resize ──────────────────── */
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            const el = wRef.current
            if (!el) return
            if (drag.current.active) {
                el.style.left = (e.clientX - drag.current.ox) + 'px'
                el.style.top = Math.max(0, e.clientY - drag.current.oy) + 'px'
            }
            if (resize.current.active) {
                el.style.width = Math.max(300, resize.current.sw + e.clientX - resize.current.sx) + 'px'
                el.style.height = Math.max(200, resize.current.sh + e.clientY - resize.current.sy) + 'px'
            }
        }
        const onUp = () => {
            drag.current.active = false
            resize.current.active = false
        }
        window.addEventListener('mousemove', onMove)
        window.addEventListener('mouseup', onUp)
        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
        }
    }, [])

    /* ── Header drag ────────────────────────────────────────────────────── */
    const onHeaderMouseDown = useCallback((e: React.MouseEvent) => {
        const t = e.target as HTMLElement
        if (t.dataset.btn) return
        const el = wRef.current
        if (!el) return
        const r = el.getBoundingClientRect()
        drag.current = { active: true, ox: e.clientX - r.left, oy: e.clientY - r.top }
        bringToFront(id)
        e.preventDefault()
    }, [id, bringToFront])

    /* ── Resize handle ──────────────────────────────────────────────────── */
    const onResizeMouseDown = useCallback((e: React.MouseEvent) => {
        const el = wRef.current
        if (!el) return
        resize.current = { active: true, sx: e.clientX, sy: e.clientY, sw: el.offsetWidth, sh: el.offsetHeight }
        bringToFront(id)
        e.preventDefault()
        e.stopPropagation()
    }, [id, bringToFront])

    /* ── Maximize / restore ─────────────────────────────────────────────── */
    const handleMax = useCallback(() => {
        const el = wRef.current
        if (!el) return
        if (isMaxRef.current) {
            const s = savedPos.current
            if (s) {
                el.style.left = s.left
                el.style.top = s.top
                el.style.width = s.width
                el.style.height = s.height
            }
            isMaxRef.current = false
            savedPos.current = null
        } else {
            savedPos.current = {
                left: el.style.left,
                top: el.style.top,
                width: el.style.width,
                height: el.style.height,
            }
            el.style.left = '0'
            el.style.top = '0'
            el.style.width = '100vw'
            el.style.height = 'calc(100vh - 48px)'
            isMaxRef.current = true
        }
    }, [])

    /* ── Visibility ─────────────────────────────────────────────────────── */
    // We always render the div so wRef is available from the start.
    // Visibility is controlled entirely via display style.
    const isVisible = win && win.state === 'open'
    const isActive = win?.state === 'open'

    return (
        <div
            ref={wRef}
            role="dialog"
            aria-label={windowTitles[id]}
            aria-hidden={!isVisible}
            className={`${styles.window} ${isActive ? styles.active : ''}`}
            style={{
                zIndex: win?.zIndex ?? 0,
                display: isVisible ? 'flex' : 'none',
            }}
            onMouseDown={() => { if (win) bringToFront(id) }}
        >
            {/* Header — drag target */}
            <div className={styles.header} onMouseDown={onHeaderMouseDown}>
                <button className={`${styles.btn} ${styles.close}`} data-btn="close" aria-label={`Close ${windowTitles[id]}`} onClick={() => closeWindow(id)} />
                <button className={`${styles.btn} ${styles.min}`} data-btn="min" aria-label={`Minimize ${windowTitles[id]}`} onClick={() => minimizeWindow(id)} />
                <button className={`${styles.btn} ${styles.max}`} data-btn="max" aria-label={`Maximize ${windowTitles[id]}`} onClick={handleMax} />
                <div className={styles.title} aria-hidden="true">{windowTitles[id]}</div>
            </div>

            {/* Body */}
            <div className={`${styles.body} ${id === 'terminal' ? styles.terminalBody : ''}`}>
                {children}
            </div>

            {/* Resize handle */}
            <div className={styles.resizeHandle} aria-hidden="true" onMouseDown={onResizeMouseDown} />
        </div>
    )
}
