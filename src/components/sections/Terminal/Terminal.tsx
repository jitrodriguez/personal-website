import { useRef, KeyboardEvent, ChangeEvent, useState } from 'react'
import { useTerminal } from '../../../hooks/useTerminal'
import { useOSStore } from '../../../store/useOSStore'
import { useIsMobile } from '../../../hooks/useIsMobile'
import { type WindowId } from '../../../data/content'
import styles from './Terminal.module.css'

export function Terminal() {
    const openWindow = useOSStore((s) => s.openWindow)
    const mobOpen = useOSStore((s) => s.mobOpen)
    const isMobile = useIsMobile()
    const [input, setInput] = useState('')
    const outputRef = useRef<HTMLDivElement>(null)

    const { lines, execCommand, navigateHistory } = useTerminal({
        openWindow: (id) => openWindow(id as WindowId),
        mobOpen: (id) => mobOpen(id as WindowId),
        isMobile,
    })

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            execCommand(input)
            setInput('')
            setTimeout(() => { if (outputRef.current) outputRef.current.scrollTop = 9999 }, 10)
        }
        if (e.key === 'ArrowUp') { e.preventDefault(); setInput(navigateHistory('up')) }
        if (e.key === 'ArrowDown') { e.preventDefault(); setInput(navigateHistory('down')) }
    }

    return (
        <div className={styles.body} onClick={(e) => (e.currentTarget.querySelector('input') as HTMLInputElement)?.focus()}>
            <div className={styles.output} ref={outputRef}>
                {lines.map((l, i) => (
                    <div key={i} className={`${styles.line} ${l.cls ? styles[l.cls] : ''}`} dangerouslySetInnerHTML={{ __html: l.html }} />
                ))}
            </div>
            <div className={styles.inputLine}>
                <span className={styles.prompt}>jitrodriguez@juanOS ~ $</span>
                <input
                    className={styles.input}
                    type="text"
                    value={input}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoComplete="off"
                    spellCheck={false}
                    placeholder="type a command..."
                />
            </div>
        </div>
    )
}
