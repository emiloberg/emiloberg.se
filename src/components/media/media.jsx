import React from 'react';


import ContentBox from 'components/contentbox/contentbox';

import styles from './media.css'

const MEDIADATA = require('../../../data/media.json');

export default ({ type, mediaId, no, showTitle = true, showDesc = true }) => {
	let titleURL;

	let embedURL;
	let mediaType;
	let mainMedia;
	if (type === 'yt') {
		mediaType = 'video';
		embedURL = `https://www.youtube-nocookie.com/embed/${mediaId}?showinfo=0`;
		const views = DATA.youTubeViews[mediaId];
		titleURL = `https://www.youtube.com/watch?v=${mediaId}`;
		mainMedia = (<iframe src={embedURL} frameBorder="0" allowFullScreen />);
	} else if (type === 'slideshare') {
		mediaType = 'slideshare';
		embedURL = `//www.slideshare.net/slideshow/embed_code/key/${mediaId}`;
		mainMedia = (<iframe src={ embedURL } frameBorder="0" allowFullScreen />)
	}

	const description = showDesc && MEDIADATA[type][mediaId].desc ? MEDIADATA[type][mediaId].desc : null;
	const wrappedDescription = showDesc
		? 	 <div className={ styles.description } dangerouslySetInnerHTML={{ __html: description }}></div>
		: 	null;

	const wrappedTitle = showTitle
		?	titleURL
				? <a href={ titleURL } rel="noopener"><h3>{ MEDIADATA[type][mediaId].title }</h3></a>
				: <h3>{ MEDIADATA[type][mediaId].title }</h3>
		:	null;

	const text = wrappedTitle
		? 	<div className={ styles.description }>
				{ wrappedTitle }
				{ wrappedDescription }
			</div>
		: null;

	return (
		<ContentBox no={no} >
			<div className={ styles.media }>
				<div className={ styles[mediaType] }>
					{ mainMedia }
				</div>
			</div>
			{ text }
		</ContentBox>
	)
}