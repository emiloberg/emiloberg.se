import React from 'react';

import classnames from 'classnames';
import styles from './mockup.css';

import MOCKUPDATA from './mockup.json';

const images = {
	HubotSlack: require('responsive?placeholder=true&sizes[]=650,sizes[]=1300&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!./images/screenshots/hubot-slack.png'),
	RekListan: require('responsive?placeholder=true&sizes[]=190,sizes[]=380&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!./images/screenshots/reklistan.png'),
	iPad: require('responsive?placeholder=true&sizes[]=650,sizes[]=1300&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!./images/mockups/ipad.png'),
	iPhone: require('responsive?placeholder=true&sizes[]=190,sizes[]=380&name=res/resp/[hash:8]-[width].&publicPath=res/resp/!./images/mockups/iphone.png')
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
							backgroundImage: `url('${mockupImage.src}')`,
							paddingBottom: mockupdata.mockupRatio + '%'
						}}
					/>
					<div
						className={ styles.fallbackScreenshot }
						style={{
							backgroundImage: `url('${screenshotImage.src}')`,
							paddingBottom: mockupdata.screenshotRatio + '%',
							...sizeOut
						}}
					/>
				</div>
				<div
					className={ classnames(styles.mockup, styles.shadow) }
					style={{
						paddingBottom: mockupdata.mockupRatio + '%',
						borderRadius: mockupdata.radius + 'px'
					}}
				/>
			</div>
	);
};
