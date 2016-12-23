import Blazy from 'blazy'

import VOID from './vendor/particles.min';

import particlesConfig from './particles.conf.json';


(function(){

	/**
	 * Load YouTube iframe when clicking on a placeholder
	 */
	const videos = document.querySelectorAll('.js-video-placeholder');
	videos.forEach(video => {
		video.addEventListener('click', (e) => {
			e.preventDefault();
			const iframe = document.createElement('iframe');
			iframe.setAttribute('src', `//www.youtube.com/embed/${e.target.dataset.mediaid}?autoplay=1&?rel=0&showinfo=0&iv_load_policy=3`);
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', '1');
			e.target.parentNode.replaceChild(iframe, e.target);
		});
	});

	/**
	 * Load Slideshare iframe when clicking on a placeholder
	 */
	const slides = document.querySelectorAll('.js-slideshare-next');
	slides.forEach(slide => {
		slide.addEventListener('click', (e) => {
			e.preventDefault();
			const iframe = document.createElement('iframe');
			iframe.setAttribute('src', `//www.slideshare.net/slideshow/embed_code/key/${e.target.dataset.mediaid}?startSlide=2`);
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allowfullscreen', '1');

			const toBeReplaced = e.target.parentNode.parentNode.parentNode;

			toBeReplaced.parentNode.replaceChild(iframe, toBeReplaced);
		});
	});

	/**
	 * Without Javascript clicking on a video/slide/etc
	 * will take the user to YouTube/SlideShare/etc
	 *
	 * Disable those links for users with JS (as we then load the
	 * content on the page)
	 *
	 */
	const jsDisabledLinks = document.querySelectorAll('.js-disabled');
	jsDisabledLinks.forEach(link => {
		link.addEventListener('click', (e) => { e.preventDefault(); })
	});

	/**
	 * Init Lazy Load
	 */
	var bLazy = new Blazy({
		selector: '.lazy',
		successClass: 'loaded'
	});

	// var bLazy = new Blazy({
	// 	breakpoints: [{
	// 		width: 420 // Max-width
	// 		, src: 'data-src-small'
	// 	}]
	// 	, success: function(element){
	// 		setTimeout(function(){
	// 			// We want to remove the loader gif now.
	// 			// First we find the parent container
	// 			// then we remove the "loading" class which holds the loader image
	// 			var parent = element.parentNode;
	// 			parent.className = parent.className.replace(/\bloading\b/,'');
	// 		}, 200);
	// 	}
	// });
}());

(function(){
	// particlesJS('particles', particlesConfig);
}());

(function(){
	/**
	 * Ask YouTube for the latest view count and update ui if found
 	 */
	setTimeout(() => {
		try {
			const cacheTimeMinutes = 10;
			const storedViewsString = localStorage.getItem('views');
			if (!!storedViewsString) {
				const storedViews = JSON.parse(storedViewsString);
				const minutesAgo = (Date.now() - storedViews.timestamp) / 1000 / 60;
				if (minutesAgo < cacheTimeMinutes) {
					storedViews.views.forEach((i) => { updateViews(i.id, i.views); });
				} else {
					getYtViews();
				}
			} else {
				getYtViews();
			}
		} catch(e) {
			getYtViews();
		}
	}, 3000);

	function getYtViews() {
		const APIKEY = require('./../ytPublicApiKey.json').key;
		const elsYtViews = document.querySelectorAll('.js-yt-views');
		const ids = [];
		elsYtViews.forEach(el => { ids.push(el.dataset.mediaid); });
		const idsString = ids.join('%2C');
		var xhr = new XMLHttpRequest();
		const saveToStorage = {
			timestamp: Date.now(),
			views: []
		};
		xhr.open('GET', 'https://www.googleapis.com/youtube/v3/videos?id=' + idsString + '&key=' + APIKEY + '&part=statistics');
		xhr.onload = function() {
			if (xhr.status === 200) {
				try {
					const data = JSON.parse(xhr.responseText);
					data.items.forEach(item => {
						updateViews(item.id, item.statistics.viewCount);
						saveToStorage.views.push({
							id:    item.id,
							views: item.statistics.viewCount
						});
					});
					localStorage.setItem('views', JSON.stringify(saveToStorage));
				} catch(e) {
					// Silently fail
				}
			}
		};
		xhr.send();
	}

	function updateViews(id, views) {
		const elCur = document.querySelector(".js-yt-views[data-mediaid='" + id + "']");
		elCur.style.opacity = 0;
		setTimeout(() => {
			elCur.style.opacity = 1;
			elCur.innerHTML = views;
		}, 500); // Same timeout as css transition time
	}

}());