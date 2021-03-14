import { Avatar } from '@material-ui/core';
import React from 'react';
import InputOption from '../InputOptions/InputOption';
import './Posts.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Posts = ({ name, description, photoUrl, message }) => {

	

	return (
		<div>
			<div className='post'>
				<div className='post__header'>
					<Avatar />
					<div className='post__info'>
						<h3> {name} </h3>
						<p> {description} </p>
					</div>
				</div>
				<div className='post__body'>
					<p> {message} </p>
				</div>

				<div className='post__buttons'>
					<InputOption
						Icon={ThumbUpAltOutlinedIcon}
						title='Like'
						color='gray'
					/>
					<InputOption Icon={ChatOutlinedIcon} title='Comment' color='gray' />
					<InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
					<InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
				</div>
			</div>
		</div>
	);
};

export default Posts;
