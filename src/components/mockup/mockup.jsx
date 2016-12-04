import React from 'react';

import classnames from 'classnames';
import styles from './mockup.css';

import MOCKUPDATA from './mockup.json';

const images = {
	HubotSlack: require('responsive?placeholder=true&sizes[]=1024,sizes[]=2048!./images/screenshots/hubot-slack.png'),
	iPad: require('responsive?placeholder=true&sizes[]=1024,sizes[]=2048!./images/mockups/ipad.png')
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
			<div
				className={ classnames(styles.jsSource, styles.mockup, 'lazy') }
				data-src={ mockupImage.src + '|' +  mockupImage.images[1].path }
				style={{
					paddingBottom: mockupdata.mockupRatio + '%'
				}}
			/>
			<div
				className={ classnames(styles.jsSource, styles.screenshot, 'lazy') }
				data-src={ screenshotImage.src + '|' +  screenshotImage.images[1].path }
				style={{
					paddingBottom: mockupdata.screenshotRatio + '%',
					...sizeOut
				}}
			/>
			<div className={ classnames(styles.mockup, styles.fallback) }>
				<div
					className={ styles.fallbackMockup }
					style={{
						backgroundImage: `url('${mockupImage.src}?fallback')`,
						paddingBottom: mockupdata.mockupRatio + '%'
					}}
				/>
				<div
					className={ styles.fallbackScreenshot }
					style={{
						backgroundImage: `url('${screenshotImage.src}?fallback')`,
						paddingBottom: mockupdata.screenshotRatio + '%',
						...sizeOut
					}}
				/>
			</div>

		</div>
	);
};