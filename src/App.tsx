import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import List from './components/List/List';
import WineDetail from './components/WineDetail/WineDetail';
import './App.css';

const App: React.FC = () => {

	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  	const toggleDarkMode = () => {
    	setIsDarkMode((prevMode) => !prevMode);
  	};

	return (
		<div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
		<header className="App-header">
		<button onClick={toggleDarkMode}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
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
