import { About } from './components/About';
import { Experience } from './components/Experience';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import Status from './components/Status';
import { Footer } from './Footer';


function App() {
	return (
		<>
			<Nav />
			<main>
				<About />
				<Projects />
				<Experience />
				<Status />
				<Footer />
			</main>
		</>
	);
}

export default App;
