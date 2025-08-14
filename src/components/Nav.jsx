import { Moon, Sun } from 'lucide-react';
import './nav.css';
import { useState } from 'react';
import { useEffect } from 'react';
export const Nav = () => {
	const navItems = ['projects', 'experience'];
	const [isDark, setIsDark] = useState(false);

	const handleTheme = (e) => {
		e.preventDefault();
		setIsDark((prev) => !prev);
	};

	// Sync theme on mount and when isDark changes

	useEffect(() => {
		const rootElement = document.getElementById('root');
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setIsDark(true);
			rootElement.classList.add('dark');
		} else {
			setIsDark(false);
			rootElement.classList.remove('dark');
		}
	}, []);

	useEffect(() => {
		const rootElement = document.getElementById('root');
		if (isDark) {
			rootElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			rootElement.classList.remove('dark');
			localStorage.setItem('theme', '');
		}
	}, [isDark]);
	return (
		<nav>
			<ul>
				<li key="home"><a href="#root">home</a></li>
				{navItems.map((navItem) => (
					<li key={navItem}>
						<a href={`#${navItem}`}>{navItem}</a>
					</li>
				))}
			</ul>
			<button onClick={handleTheme}>
				{!isDark ? (
					<Moon className="icon" color="indigo" size={17} />
				) : (
					<Sun className="icon" color="orange" size={17} />
				)}
			</button>
		</nav>
	);
};
