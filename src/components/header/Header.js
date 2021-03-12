import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import Home from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import React from 'react';
import linkedinIcon from '../../icons/linkedin.svg';
import './Header.css';
import HeaderOptions from './HeaderOption';


function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src={linkedinIcon} alt='' />

				<div className='header__search'>
					<SearchIcon  />
					<input type='text' placeholder='Search'className='search_input' />
				</div>
			</div>

			<div className='header__right'>
				<HeaderOptions Icon={Home}  title='Home' />
				<HeaderOptions Icon={SuperVisorAccountIcon} title='Network'  />
				<HeaderOptions Icon={BusinessCenterIcon} title='Jobs'  />
				<HeaderOptions Icon={ChatIcon} title='Messaging'  />
				<HeaderOptions Icon={NotificationsIcon} title='Notifications'  />
				<HeaderOptions avatar='https://media-exp1.licdn.com/dms/image/C5635AQFpJE8CnvwVXA/profile-framedphoto-shrink_100_100/0/1610194948440?e=1615626000&v=beta&t=VVAFvsdg1Jlg7zez7nhnPczELZgSjXdZkx5s7XebMz4' title='Me' />
			</div>
		</div>
	);
}

export default Header;
