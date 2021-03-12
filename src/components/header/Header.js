import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import linkedinIcon from '../../icons/linkedin.svg';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img src={linkedinIcon} alt='' />

				<div className='header__search'>
					<SearchIcon />
					<input type='text' />
					<p>item3</p>
				</div>
			</div>

			<div className='header__right'>
				<p>	item1</p>
				<p>	item2</p>
				<p>	item3</p>
				<p>	item4</p>
			</div>
		</div>
	);
}

export default Header;
