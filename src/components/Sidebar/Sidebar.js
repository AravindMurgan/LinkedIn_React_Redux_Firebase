import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
	const recentItem = (topic) => (
		<div className='sidebar__recentitem'>
			<span className='sidebar__hash'>#</span>
			<p> {topic} </p>
		</div>
	);

	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<img
					src='https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
					alt=''
				/>

				<Avatar className='sidebar__avatar' />

				<h2>Aravind Murugan </h2>
				<h4>UI Developer @Microsoft </h4>
			</div>
			<div className='sidebar__stats'>
				<div className='sidebar__stat'>
					<p>Connections</p>
					<p className='sidebar__statnumber'>94</p>
				</div>
				<div className='sidebar__stat'>
					<p>Who viewed your profile</p>
					<p className='sidebar__statnumber'>15</p>
				</div>
			</div>

			<div className='sidebar__bottom'>
				<h3>Recent</h3>

				{recentItem('reactjs')}
				{recentItem('nodejs')}
				{recentItem('mongoDB')}
				{recentItem('firebase')}
			</div>
		</div>
	);
};

export default Sidebar;
