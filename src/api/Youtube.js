import axios from 'axios';

const KEY = 'AIzaSyCwHQMhVN4xPp2DAh0xMhC6RogjzBSaqgw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 25,
		key: KEY,
	},
});
