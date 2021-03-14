import calendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import CreateIcon from '@material-ui/icons/Create';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcons from '@material-ui/icons/Subscriptions';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { db } from '../Firebase/Firebase';
import './Feeds.css';
import InputOptions from './InputOptions/InputOption';
import Posts from './Posts/Posts';

const Feeds = () => {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	///Updating db with realtime event listener using useEffect//
	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			name: 'Aravind Murugan',
			description: 'this is a test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<div className='feed'>
			<div className='feed__inputcontainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							type='text'
						/>
						<button type='submit' onClick={sendPost}>
							Send
						</button>
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

			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Posts
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
		</div>
	);
};

export default Feeds;
