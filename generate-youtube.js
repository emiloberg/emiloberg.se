const fetch = require('node-fetch');
const fs = require('fs');

const APIKEY = 'AIzaSyDiRMDUcnmm_wSVhYLo0vhAekHyGhIzkcw';
const videoIDs = require('./data/ytVideos.json');
const videoURLs = videoIDs.map((id) => (
	'https://www.googleapis.com/youtube/v3/videos?id=' + id + '&key=' + APIKEY + '&part=statistics')
);

function getYouTubeViews() {
	const out = {};
	return Promise.all(videoURLs.map(fetch))
		.then(res => Promise.all(res.map(item => item.text())))
		.then(res => res.map(item => JSON.parse(item)))
		.then(res => res.map(video => {
			out[video.items[0].id] = video.items[0].statistics.viewCount
		}))
		.then(() => out);
}

getYouTubeViews()
	.then(res => {
		fs.writeFileSync('./temp/yt-views.json', JSON.stringify(res));
	});
