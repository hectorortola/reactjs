import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from './components/List/List';
import WineDetail from './components/WineDetail/WineDetail';

const App: React.FC = () => {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<List />} />
					<Route path="/detail/:id" element={<WineDetail />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
