import React from 'react';
import './App.css';
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
				<Sidebar  />
				{/* widgets */}
				{/* Feeds */}
			</div>
		</div>
	);
}

export default App;
