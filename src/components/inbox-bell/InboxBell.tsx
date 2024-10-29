import InboxBellIcon from '@/icons/InboxBellIcon';
import styles from '@/styles/inbox-bell.module.css';

export default function InboxBell() {
	return (
		<div className={styles.box}>
			<div className={styles.bell}>
				<InboxBellIcon />
			</div>
			<div className={styles.notificationBox}>
				<div className={styles.notification}></div>
			</div>
		</div>
	);
}
