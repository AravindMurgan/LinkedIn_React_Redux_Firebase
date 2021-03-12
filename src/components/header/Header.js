import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import linkedinIcon from '../../icons/linkedin.svg';
import './Header.css';
import HeaderOptions from './HeaderOption';
import Home from '@material-ui/icons/Home';
import SuperVisorAccountIcon from '@material-ui/icons/SupervisorAccount';
function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src={linkedinIcon} alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
				</div>
			</div>

			<div className='header__right'>
				<HeaderOptions Icon={Home}  title='Home' />
				<HeaderOptions Icon={SuperVisorAccountIcon} title='My Network'  />
			</div>
		</div>
	);
}

export default Header;
