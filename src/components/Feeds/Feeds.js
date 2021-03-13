import CreateIcon from '@material-ui/icons/Create';
import React from 'react';
import './Feeds.css';
const Feeds = () => {
	return (
		<div className='feed'>
			<div className='feed__inputcontainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form action=''>
						<input type='text' />
						<button type='submit'>Send</button>
                        
					</form>
				</div>
			</div>
		</div>
	);
};

export default Feeds;
