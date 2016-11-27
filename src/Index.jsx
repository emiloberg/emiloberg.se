import React from 'react';

import Section from './components/section/section';
import LogoName from './components/logoName/logoName';
import YtVideo from 'components/ytVideo/ytVideo';

import globalStyle from './index.css';

/**
 * decs={['SingleWhiteSlantedBox']}
 * decs="SingleWhiteSlantedBox"
 * decs={[{ type: 'SingleWhiteSlantedBox' }]}
 */


export default () => (
	<div>
		<Section
			decs="SingleWhiteSlantedBox"
			bg="HoneyComb"
			cols="Even"
			padding="Medium"
		>
			<LogoName />
		</Section>
		{/*decs="VideoSingleWhiteSlantedBox"*/}
		<Section
			decs="SingleVideo"
			bg="Blue"
			cols="Even"
			padding="Large"
		>
			<YtVideo
				showViews
				ytId="R98cdsq1qxA"
				title="NativeScript vs. PhoneGap, React, Titanium, Ionic, etc"
			/>
		</Section>
		<Section
			decs="SingleVideo"
			bg="Blue"
			cols="Even"
			padding="Large"
		>
			<YtVideo
				ytId="eWmkBNBTbMM"
				title="Webpack 2 - A full tutorial"
			/>
		</Section>
	</div>
);