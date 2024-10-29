import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

export default function Navbar() {
	return (
		<nav className={styles.wrapper}>
			<ul className={styles.list}>
				<li className={styles.active}>
					<Link href="/">Преимущества Tele2</Link>
				</li>
				<li>
					<Link href="/">Тарифы</Link>
				</li>
				<li>
					<Link href="/">Акции и спецпредложения</Link>
				</li>
				<li>
					<Link href="/">Промотариф Tele2</Link>
				</li>
				<li>
					<Link href="/">Технология eSIM</Link>
				</li>
				<li>
					<Link href="/">Подключение нового абонента</Link>
				</li>
			</ul>
		</nav>
	);
}
