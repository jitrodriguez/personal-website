import { contact } from '../../../data/contact'
import styles from './Contact.module.css'

export function Contact() {
    return (
        <div className={styles.content}>
            {contact.map((item) =>
                item.href ? (
                    <a data-umami-event={item.umamiEvent} key={item.label} className={styles.item} href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                        <div className={styles.icon} style={{ background: item.bg }}>{item.icon}</div>
                        <div>
                            <div className={styles.label}>{item.label}</div>
                            <div className={styles.value}>{item.value}</div>
                        </div>
                    </a>
                ) : (
                    <div key={item.label} className={styles.item}>
                        <div className={styles.icon} style={{ background: item.bg }}>{item.icon}</div>
                        <div>
                            <div className={styles.label}>{item.label}</div>
                            <div className={styles.value}>{item.value}</div>
                        </div>
                    </div>
                ),
            )}
        </div>
    )
}
