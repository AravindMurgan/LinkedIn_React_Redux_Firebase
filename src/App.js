import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feeds from './components/Feeds/Feeds';
import Widgets from './components/Feeds/Widgets/Widgets';
import { auth } from './components/Firebase/Firebase';
import Header from './components/header/Header';
import Login from './components/Login&Signup/Login';
import Sidebar from './components/Sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';

function App() {
	const user = useSelector(selectUser);

	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			console.log(userAuth);
			if (userAuth) {
				//user logged in//
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					})
				);
			} else {
				//user logged out//
				dispatch(logout());
			}
		});

		// eslint-disable-next-line
	}, []);

	return (
		<div className='app'>
			{/* Header */}
			<Header />

			{!user ? (
				//Login///
				<Login />
			) : (
				<div className='app__body'>
					{/* Sidebar */}
					<Sidebar />

					{/* Feeds */}
					<Feeds />
					{/* widgets */}
					<Widgets />
				</div>
			)}
		</div>
	);
}

export default App;
