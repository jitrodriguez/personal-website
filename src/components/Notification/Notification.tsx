import { useEffect } from 'react'
import { useOSStore } from '../../store/useOSStore'
import styles from './Notification.module.css'

export function Notification() {
    const notif = useOSStore((s) => s.notif)
    const clearNotif = useOSStore((s) => s.clearNotif)

    useEffect(() => {
        if (!notif) return
        const t = setTimeout(clearNotif, 3200)
        return () => clearTimeout(t)
    }, [notif, clearNotif])

    if (!notif) return null

    return (
        <div key={notif.id} className={styles.notif}>
            <div className={styles.icon}>{notif.icon}</div>
            <div>
                <div className={styles.title}>{notif.title}</div>
                <div className={styles.msg}>{notif.msg}</div>
            </div>
        </div>
    )
}
