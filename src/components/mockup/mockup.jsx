import React from 'react';

import classnames from 'classnames';
import styles from './mockup.css';

import MOCKUPDATA from './mockup.json';

const images = {
	HubotSlack: require('responsive?placeholder=true&sizes[]=1024,sizes[]=2048!./images/screenshots/hubot-slack.png'),
	RekListan: require('responsive?placeholder=true&sizes[]=1024,sizes[]=1025!./images/screenshots/reklistan.png'),
	iPad: require('responsive?placeholder=true&sizes[]=1024,sizes[]=2048!./images/mockups/ipad.png'),
	iPhone: require('responsive?placeholder=true&sizes[]=1024,sizes[]=2048!./images/mockups/iphone.png')
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

	console.log('mockupImage', mockupImage);

	const mockupLazyImage = mockupImage.images.length > 1
		? mockupImage.src + '|' +  mockupImage.images[1].path
		: mockupImage.src;

	const screenshotLazyImage = screenshotImage.images.length > 1
		? screenshotImage.src + '|' +  screenshotImage.images[1].path
		: screenshotImage.src;

	return (
		<div className={ styles.mockupWrapper }>
			<div
				className={ classnames(styles.jsSource, styles.mockup, 'lazy') }
				data-src={ mockupLazyImage }
				style={{
					paddingBottom: mockupdata.mockupRatio + '%'
				}}
			/>
			<div
				className={ classnames(styles.jsSource, styles.screenshot, 'lazy') }
				data-src={ screenshotLazyImage }
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