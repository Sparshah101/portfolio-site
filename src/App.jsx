import { About } from './components/About';
import { Experience } from './components/Experience';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Footer } from './Footer';

function App() {
	return (
		<>
			<Nav />
			<main>
				<About />
				<Projects />
				<Experience />
				<Footer />
			</main>
		</>
	);
}

export default App;
