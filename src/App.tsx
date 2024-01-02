import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import List from './components/List/List';
import WineDetail from './components/WineDetail/WineDetail';
import { useDarkMode } from './components/DarkModeContext/DarkModeContext';

import './App.css';

const App: React.FC = () => {

	const { darkMode, toggleDarkMode } = useDarkMode();
	
	return (
		<div className={`App ${darkMode ? 'dark-mode' : ''}`}>
			<header className="App-header">
				<button className={`button ${darkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
				{darkMode ? '🌞' : '🌜'}
				</button>
			</header>

			<Router>
				<div>
					<Routes>
						<Route path="/" element={<List />} />
						<Route path="/detail/:id" element={<WineDetail />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
};

export default App;
