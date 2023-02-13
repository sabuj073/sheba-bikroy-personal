import React from 'react';

const Title = ({ title }) => {
	return (
		<div className='col-lg-12'>
			<div className='section__top'>
				<h2 className='section__title'> {title} </h2>
			</div>
		</div>
	);
};

export default Title;
