import Blazy from 'blazy'

(function(){

	/**
	 * Load YouTube iframe when clicking on a placeholder
	 */
	const videos = document.querySelectorAll('.js-video-placeholder');
	videos.forEach(video => {
		video.addEventListener('click', (e) => {
			e.preventDefault();
			const iframe = document.createElement('iframe');
			iframe.setAttribute('src', `//www.youtube.com/embed/${e.target.dataset.mediaid}?autoplay=1&?rel=0&showinfo=0`);
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

	var bLazy = new Blazy({
		selector: '.lazy'
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