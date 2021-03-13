import calendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcons from '@material-ui/icons/Subscriptions';
import React from 'react';
import './Feeds.css';
import InputOptions from './InputOptions/InputOption';
import Posts from './Posts/Posts';

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
				<div className='feed__inputoptions'>
					<InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOptions
						Icon={SubscriptionsIcons}
						title='Video'
						color='#E7A33E'
					/>
					<InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOptions
						Icon={calendarViewDayIcon}
						title='Write article'
						color='37FC15E'
					/>
				</div>
			</div>

			<Posts
				name='Aravind Murugan'
				description='test description'
				message='this is a test message'
				photoUrl=''
			/>
		</div>
	);
};

export default Feeds;
