import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import Home from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import linkedinIcon from '../../icons/linkedin.svg';
import { auth } from '../Firebase/Firebase';
import './Header.css';
import HeaderOptions from './HeaderOption';

function Header() {
	const dispatch = useDispatch();

	const logoutofApp = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className='header'>
			<div className='header__left'>
				<img src={linkedinIcon} alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input type='text' placeholder='Search' className='search_input' />
				</div>
			</div>

			<div className='header__right'>
				<HeaderOptions Icon={Home} title='Home' />
				<HeaderOptions Icon={SuperVisorAccountIcon} title='Network' />
				<HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
				<HeaderOptions Icon={ChatIcon} title='Messaging' />
				<HeaderOptions Icon={NotificationsIcon} title='Notifications' />
				<HeaderOptions  avatar='true' title='Me' onClick={logoutofApp} />
			</div>
		</div>
	);
}

export default Header;
