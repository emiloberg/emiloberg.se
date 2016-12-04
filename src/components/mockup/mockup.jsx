import React from 'react';

import classnames from 'classnames';
import styles from './mockup.css';

import MOCKUPDATA from './mockup.json';

const images = {
	HubotSlack: require('responsive?placeholder=true&sizes[]=650,sizes[]=1300!./images/screenshots/hubot-slack.png'),
	iPad: require('responsive?placeholder=true&sizes[]=650,sizes[]=1300!./images/mockups/ipad.png')
};

export default ({ mockup }) => {
	const mockupdata = MOCKUPDATA[mockup];
	const screenshotImage = images[mockupdata.screenshot];
	const mockupImage = images[mockupdata.mockup];
	const mockupSize = mockupdata.size;

	const sizeOut = {
		left: mockupSize.left + '%',
		right: mockupSize.right + '%',
		top: mockupSize.top + '%',
		bottom: mockupSize.bottom + '%',
		width: (100 - mockupSize.left - mockupSize.right) + '%'
	};

	return (
		<div className={ styles.mockupWrapper }>
			<img
				className={ classnames(styles.jsSource, styles.mockup, 'lazy') }
				src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
				data-src={ mockupImage.src + '|' +  mockupImage.images[1].path }
			/>
			<img
				className={ classnames(styles.jsSource, styles.screenshot, 'lazy') }
				src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
				style= { sizeOut }
				data-src={ screenshotImage.src + '|' +  screenshotImage.images[1].path }
			/>
			<div className={ classnames(styles.mockup, styles.fallback) }>
				<img src={ mockupImage.src + '?fallbackMockup' } />
			</div>
			<div className={ classnames(styles.screenshot, styles.fallback) } style= { sizeOut }>
				<img src={ screenshotImage.src + '?fallbackMockup' }/>
			</div>
		</div>
	);
};