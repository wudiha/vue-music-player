import axios from 'axios';

const api = {
	login() {
		return 'https://accounts.spotify.com/authorize?client_id=3f6dec98d9e44b9ea256675711d16ba8&response_type=code&redirect_uri=http://localhost:8080&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';
	},
	getMusicList() {
		return axios.get('https://covidtracking.com/api/states');
	},
};

export default api;
