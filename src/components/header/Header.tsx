'use client';

import { useState } from 'react';

import Link from 'next/link';
import InboxBell from '@/components/inbox-bell';
import Logo from '@/icons/Logo';
import LocationIcon from '@/icons/LocationIcon';
import HumburgerIcon from '@/icons/HumburgerIcon';
import styles from '@/styles/header.module.css';
import Navbar from '../navbar';
import CloseIcon from '@/icons/CloseIcon';

const location = 'Москва и область';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<header className={styles.wrapper}>
				<div className={styles.menu}>
					<Link href="/">
						<Logo />
					</Link>
					<div className={styles.description}>
						<button className={`${styles.button} ${styles.location} ${isOpen && styles.isOpen}`}>
							<LocationIcon />
							{location}
						</button>
						<button className={`${styles.button} ${styles.bell}`}>
							{!isOpen && <InboxBell />}
						</button>
						<button className={`${styles.button} ${styles.humburger}`} onClick={handleOpenMenu}>
							{!isOpen && <HumburgerIcon />}
							{isOpen && <CloseIcon />}
						</button>
					</div>
				</div>
			</header>

			<div className={`${styles.navbar} ${isOpen && styles.isOpen}`}>
				<Navbar />
			</div>
		</div>
	);
}
