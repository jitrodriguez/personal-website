import { useState, useCallback, useRef } from 'react'
import { buildCommands } from '../data/terminalCommands'

export interface TermLine {
    html: string
    cls: string
}

const INITIAL_LINES: TermLine[] = [
    { html: 'JuanOS v5.2.0 — Type <b>help</b> to get started.', cls: 'info' },
    { html: ' ', cls: '' },
]

interface UseTerminalOptions {
    openWindow: (id: string) => void
    mobOpen: (id: string) => void
    isMobile: boolean
}

export function useTerminal({ openWindow, mobOpen, isMobile }: UseTerminalOptions) {
    const [lines, setLines] = useState<TermLine[]>(INITIAL_LINES)
    const historyRef = useRef<string[]>([])
    const hiRef = useRef<number>(-1)

    const execCommand = useCallback(
        (raw: string) => {
            const cmd = raw.trim().toLowerCase()
            if (!cmd) return { handled: false }

            historyRef.current.unshift(cmd)
            hiRef.current = -1

            if (cmd === 'clear') {
                setLines([])
                return { handled: true, clear: true }
            }

            const commands = buildCommands(openWindow, mobOpen, isMobile)
            const fn = commands[cmd]

            const newLines: TermLine[] = [{ html: `juan ~ $ ${cmd}`, cls: 'cmd' }]

            if (fn) {
                fn().forEach((l) => newLines.push({ html: l, cls: '' }))
            } else {
                newLines.push({ html: `command not found: ${cmd} — try "help"`, cls: 'err' })
            }

            setLines((prev) => [...prev, ...newLines])
            return { handled: true }
        },
        [openWindow, mobOpen, isMobile],
    )

    const navigateHistory = useCallback((direction: 'up' | 'down'): string => {
        const hist = historyRef.current
        if (direction === 'up') {
            hiRef.current = Math.min(hiRef.current + 1, hist.length - 1)
        } else {
            hiRef.current = Math.max(hiRef.current - 1, -1)
        }
        return hiRef.current >= 0 ? hist[hiRef.current] : ''
    }, [])

    return { lines, execCommand, navigateHistory }
}
