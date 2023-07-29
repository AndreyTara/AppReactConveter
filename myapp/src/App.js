import './App.css';
import './fonts.css';
import { Header } from './components/header/Header.js';
import { Main } from './components/main/Main.js';
import { Footer } from './components/footer/Footer.js';
// import { RouterBrouser } from 'react-router-dom';


function App() {
	return (
		// <RouterBrouser>
			<div className="app">
				<div className="app_wrapper">
					<Header />
					{/* <Main />
					<Footer /> */}
				</div>
			</div>
		// </RouterBrouser>
	);
}

export default App;

