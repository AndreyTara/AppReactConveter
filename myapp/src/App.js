import './App.css';
import './fonts.css';
import { Header } from './components/header/Header.js';
import { Main } from './components/main/Main.js';
import { Footer } from './components/footer/Footer.js';

function App() {
	return (
		<div className="app">
			<div className="app_wrapper">
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;

