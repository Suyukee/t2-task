'use client';

import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import { usePathname } from 'next/navigation';

export default function Navbar() {
	const pathname = usePathname();
	return (
		<nav className={styles.wrapper}>
			<ul className={styles.list}>
				<li className={`${pathname === '/' && styles.active}`}>
					<Link href="/">Преимущества Tele2</Link>
				</li>
				<li className={`${pathname === '/tariffs' && styles.active}`}>
					<Link href="/tariffs">Тарифы</Link>
				</li>
				<li className={`${pathname === '/sales' && styles.active}`}>
					<Link href="/sales">Акции и спецпредложения</Link>
				</li>
				<li className={`${pathname === '/promotariff' && styles.active}`}>
					<Link href="/promotariff">Промотариф Tele2</Link>
				</li>
				<li className={`${pathname === '/esim' && styles.active}`}>
					<Link href="/esim">Технология eSIM</Link>
				</li>
				<li className={`${pathname === '/newsubscriber' && styles.active}`}>
					<Link href="/newsubscriber">Подключение нового абонента</Link>
				</li>
			</ul>
		</nav>
	);
}
