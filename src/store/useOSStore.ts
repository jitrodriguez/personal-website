import { create } from 'zustand'
import { type WindowId } from '../data/content'

type WindowState = 'open' | 'minimized'

interface WindowInfo {
    state: WindowState
    zIndex: number
    savedPos?: { left: string; top: string; width: string; height: string }
}

interface OSStore {
    // Boot
    booted: boolean
    setBooted: () => void

    // Windows
    windows: Partial<Record<WindowId, WindowInfo>>
    zTop: number
    openWindow: (id: WindowId) => void
    closeWindow: (id: WindowId) => void
    minimizeWindow: (id: WindowId) => void
    toggleMaximize: (id: WindowId, savedPos: WindowInfo['savedPos']) => WindowInfo['savedPos'] | null
    bringToFront: (id: WindowId) => void
    closeAll: () => void

    // Mobile screens
    mobileOpen: Partial<Record<WindowId, boolean>>
    mobOpen: (id: WindowId) => void
    mobClose: (id: WindowId) => void

    // Notifications
    showNotif: (icon: string, title: string, msg: string) => void
    notif: { icon: string; title: string; msg: string; id: number } | null
    clearNotif: () => void
}

export const useOSStore = create<OSStore>((set, get) => ({
    // Boot
    booted: false,
    setBooted: () => set({ booted: true }),

    // Windows
    windows: {},
    zTop: 10,

    openWindow: (id) => {
        const { zTop, windows } = get()
        const newZ = zTop + 1
        set({
            zTop: newZ,
            windows: {
                ...windows,
                [id]: { state: 'open', zIndex: newZ },
            },
        })
    },

    closeWindow: (id) => {
        const { windows } = get()
        const next = { ...windows }
        delete next[id]
        set({ windows: next })
    },

    minimizeWindow: (id) => {
        const { windows } = get()
        if (!windows[id]) return
        set({
            windows: {
                ...windows,
                [id]: { ...windows[id]!, state: 'minimized' },
            },
        })
    },

    toggleMaximize: (id, savedPos) => {
        const { windows, zTop } = get()
        if (!windows[id]) return null
        const win = windows[id]!

        if (win.savedPos) {
            // Restore
            set({
                windows: { ...windows, [id]: { ...win, savedPos: undefined } },
            })
            return null
        } else {
            // Save and maximize
            set({
                zTop: zTop + 1,
                windows: { ...windows, [id]: { ...win, zIndex: zTop + 1, savedPos } },
            })
            return savedPos
        }
    },

    bringToFront: (id) => {
        const { zTop, windows } = get()
        const win = windows[id]
        if (!win) return
        const newZ = zTop + 1
        set({
            zTop: newZ,
            windows: {
                ...windows,
                [id]: { ...win, state: 'open', zIndex: newZ },
            },
        })
    },

    closeAll: () => set({ windows: {} }),

    // Mobile
    mobileOpen: {},
    mobOpen: (id) => set((s) => ({ mobileOpen: { ...s.mobileOpen, [id]: true } })),
    mobClose: (id) => set((s) => ({ mobileOpen: { ...s.mobileOpen, [id]: false } })),

    // Notifications
    notif: null,
    clearNotif: () => set({ notif: null }),
    showNotif: (icon, title, msg) => {
        const id = Date.now()
        set({ notif: { icon, title, msg, id } })
        setTimeout(() => {
            if (get().notif?.id === id) set({ notif: null })
        }, 3200)
    },
}))
