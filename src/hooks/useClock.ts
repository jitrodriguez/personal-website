import { useState, useEffect } from 'react'

interface ClockState {
    desktop: string
    mobile: string
}

function formatClock(): ClockState {
    const n = new Date()
    return {
        desktop:
            n.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) +
            '  ' +
            n.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        mobile: n.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    }
}

export function useClock() {
    const [clock, setClock] = useState<ClockState>(formatClock)

    useEffect(() => {
        const id = setInterval(() => setClock(formatClock()), 1000)
        return () => clearInterval(id)
    }, [])

    return clock
}
