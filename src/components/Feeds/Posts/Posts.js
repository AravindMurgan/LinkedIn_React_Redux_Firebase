import { Avatar } from '@material-ui/core';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import React,{forwardRef} from 'react';
import InputOption from '../InputOptions/InputOption';
import './Posts.css';

const Posts = forwardRef( ({ name, description, photoUrl, message,email },ref) => {
	return (
		<div>
			<div  ref={ref} className='post'>
				<div className='post__header'>
					<Avatar src={photoUrl}> {description[0]} </Avatar>
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
});

export default Posts;
