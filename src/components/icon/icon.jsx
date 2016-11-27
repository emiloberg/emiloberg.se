import React from 'react';

const Icon = require('./svg/heart.svg')

export default ({ icon }) => {
	if (icon === 'heart') {
		return <Icon className='normal'/>;
	}
};
