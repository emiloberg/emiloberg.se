import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index';

const rootEl = document.getElementById('app');
ReactDOM.render(<Index />, rootEl);

if (module.hot) {
	module.hot.accept();
}


(function(){
	const videos = document.querySelectorAll(".js-video-placeholder");
	videos.forEach(video => {
		video.addEventListener('click', (e) => {
			const iframe = document.createElement('iframe');
			const embed = 'https://www.youtube.com/embed/ID?autoplay=1';
			iframe.setAttribute('src', embed.replace('ID', e.target.dataset.mediaid));
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', '1');
			console.log('e.target', e.target);
			e.target.innerHTML = '';
			e.target.appendChild(iframe);
			e.target.classList.remove('js-video-placeholder');
			e.target.removeEventListener('click');
		});
	});
}());