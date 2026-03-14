import { useState, useEffect } from 'react'

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth < 768)

    useEffect(() => {
        const mql = window.matchMedia('(max-width: 767px)')
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        mql.addEventListener('change', handler)
        return () => mql.removeEventListener('change', handler)
    }, [])

    return isMobile
}
