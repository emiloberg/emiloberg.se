import React from 'react';

export default () => (
	<svg height="0" xmlns="http://www.w3.org/2000/svg">
		<filter id="dropShadow">
			<feGaussianBlur in="SourceAlpha" stdDeviation="50"/>
			<feOffset dx="0" dy="0" result="offsetblur"/>
			<feComposite in2="offsetblur" operator="in"/>
			<feMerge>
				<feMergeNode/>
				<feMergeNode in="SourceGraphic"/>
			</feMerge>
		</filter>
	</svg>
);
