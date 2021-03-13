import React from 'react';
import './App.css';
import Feeds from './components/Feeds/Feeds';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
	return (
		<div className='app'>
			{/* Header */}
			<Header />

			{/* App Body */}
			<div className='app__body'>
				{/* Sidebar */}
				<Sidebar />

				{/* Feeds */}
				<Feeds />
				{/* widgets */}
			</div>
		</div>
	);
}

export default App;
