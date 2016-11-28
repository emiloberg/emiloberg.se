import React from 'react';

const Heart = require('./svg/heart.svg');
const Play = require('./svg/play.svg');
const YtPlay = require('./svg/ytPlaybarPlay.svg');
const YtVolume = require('./svg/ytPlaybarVolume.svg');
const YtYouTube = require('./svg/ytPlaybarYouTube.svg');
const YtFullScren = require('./svg/ytPlaybarFullScreen.svg');

import classnames from 'classnames';
import styles from './icon.css';

export default ({ icon, center, size, className }) => {
	const cssClasses = {
		[styles.center]: center
	};

	if (size) {
		cssClasses[styles[`size${size}`]] = true;
	}

	if (icon === 'heart') {
		return <Heart className={ classnames(cssClasses, className) }/>;
	} else if (icon === 'play') {
		return <Play className={ classnames(cssClasses, className) }/>;
	} else if (icon === 'ytPlay') {
		return <YtPlay className={ classnames(cssClasses, className) }/>;
	} else if (icon === 'ytVolume') {
		return <YtVolume className={ classnames(cssClasses, className) }/>;
	} else if (icon === 'ytYouTube') {
		return <YtYouTube className={ classnames(cssClasses, className) }/>;
	} else if (icon === 'ytFullScreen') {
		return <YtFullScren className={ classnames(cssClasses, className) }/>;
	}
};
