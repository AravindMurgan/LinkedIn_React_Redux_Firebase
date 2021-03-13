import { Avatar } from '@material-ui/core';
import React from 'react';
import './Posts.css';

const Posts = ({ name, description, photoUrl, message }) => {
	return (
		<div>
			<div className='post'>
				<div className='post__header'>
					<Avatar />
					<h3>Aravind Murugan</h3>
					<p>Description</p>
				</div>
				<div className='post__body'>
                    <p>This is post body</p>
                </div>
			</div>
		</div>
	);
};

export default Posts;
