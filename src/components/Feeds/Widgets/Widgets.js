import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InfoIcon from '@material-ui/icons/Info';
import React from 'react';
import './Widgets.css';

const Widgets = () => {
	const newsArticle = (heading, subtitle) => {
		return (
			<div className='widgets__article'>
				<div className='widgets__articleleft'>
					<FiberManualRecordIcon />
				</div>

				<div className='widgets__articleright'>
					<h4>{heading} </h4>
					<p>{subtitle} </p>
				</div>
			</div>
		);
	};

	return (
		<div className='widgets'>
			<div className='widgets__header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>

			{newsArticle('Coronavirus: India updates', 'Top news - 3899 readers')}
			{newsArticle(
				'We are about to zoom past Zoom fatigue',
				'Top news - 3531 readers'
			)}
			{newsArticle(
				`Accenture's gender-neutral push`,
				'Top news - 3311 readers'
			)}
			{newsArticle(
				`How to embrace big career changes`,
				'Top news - 3258 readers'
			)}
			{newsArticle(
				`Maths, Physics not must for engg:AICTE`,
				'Top news - 2514 readers'
			)}
		</div>
	);
};

export default Widgets;
