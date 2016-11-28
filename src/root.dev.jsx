import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';

const rootEl = document.getElementById('app');
ReactDOM.render(<Index />, rootEl);

if (module.hot) {
	module.hot.accept();
}


(function(){
	const videos = document.querySelectorAll('.js-video-placeholder');
	videos.forEach(video => {
		video.addEventListener('click', (e) => {
			const iframe = document.createElement('iframe');
			iframe.setAttribute('src', `//www.youtube.com/embed/${e.target.dataset.mediaid}?autoplay=1`);
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', '1');
			e.target.parentNode.replaceChild(iframe, e.target);
		});
	});

	const slides = document.querySelectorAll('.js-slideshare-next');
	slides.forEach(slide => {
		slide.addEventListener('click', (e) => {
			const iframe = document.createElement('iframe');
			iframe.setAttribute('src', `//www.slideshare.net/slideshow/embed_code/key/${e.target.dataset.mediaid}?startSlide=2`);
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', '1');

			const toBeReplaced = e.target.parentNode.parentNode.parentNode;

			toBeReplaced.parentNode.replaceChild(iframe, toBeReplaced);
		});
	});
}());