import React from 'react';


import styles from './ytVideo.css';

//import Icon from 'components/icon/icon';

// formatThousands

import { formatThousands } from 'shared/formatNumber';

export default ({ ytId, title, showViews }) => {
	const embedURL = `https://www.youtube-nocookie.com/embed/${ytId}?showinfo=0`;
	const views = DATA.youTubeViews[ytId];
	const ytURL = `https://www.youtube.com/watch?v=${ytId}`;

	const Views = (
		<div className={ styles.viewsWrapper }>
			<div className={ styles.views }>
				{ formatThousands(views, 0) }+<br />views
			</div>
		</div>
	);

	return (
		<div className={ styles.videoWrapper }>
			<div>
				<div className={ styles.midWrapper }>
					<div className={ styles.video }>
						<iframe src={embedURL} frameBorder="0" allowFullScreen></iframe>
					</div>
				</div>
			</div>
			<div className={ styles.descriptionWrapper }>
				{/*<div className={ styles.heart }>*/}
					{/*<Icon icon="heart" />*/}
				{/*</div>*/}
				<div className={ styles.description }>
					<div>
						<a href={ytURL} rel="noopener"><h2>{ title }</h2></a>
					</div>
					{showViews && Views}
				</div>
			</div>
		</div>
	);
};




// https://www.youtube.com/watch?v=R98cdsq1qxA&t=568s
