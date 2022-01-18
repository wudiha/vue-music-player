import axios from 'axios';

const api = {
	getMusicList() {
		return axios.get('https://covidtracking.com/api/states');
	},
};

export default api;
