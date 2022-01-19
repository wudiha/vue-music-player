<template>
	<div class="container" v-if="code == null">
		<n-button type="success" @click="spotify">Login with Spotify</n-button>
		<!-- <button class="login" @click="spotify">Login with Spotify</button> -->
	</div>
	<div class="container" v-if="code != null">
		<n-button type="success" @click="testing">Testing</n-button>
	</div>
	{{ count }} <br />
	{{ code }}
	{{ state }}
</template>

<script>
import { reactive } from '@vue/reactivity';
import { watch, toRefs, inject } from 'vue';
// import { withHooks, useState, useEffect } from 'vue-hooks';
const code = new URLSearchParams(window.location.search).get('code');
var count = 0;

// const accessToken = withHooks(() => {
// 	/* eslint-disable no-unused-vars */
// 	const [accessToken, setAccessToken] = useState();
// 	const [refreshToken, setRefreshToken] = useState();
// 	const [expireIn, setExpireIn] = useState();
// 	/* eslint-enable no-unused-vars */
// 	console.log('hook');

// 	useEffect(() => {}, [code]);
// });

export default {
	setup() {
		let axios = inject('$axios');
		const state = reactive({
			count: count,
			code: code,
		});
		watch(state, () => {
			axios
				.post('http://localhost:8082/login', {
					code,
				})
				.then((res) => {
					console.log(res.data);
				})
				.catch(() => {
					console.log('ERROR');
				});
		});
		return {
			...toRefs(state),
		};
	},

	data() {
		return {
			code: code,
			count: count,
		};
	},
	methods: {
		testing() {
			this.count++;
		},
		spotify() {
			window.location.href = this.$api.login();
		},
	},
};
</script>

<style>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 80vh;
}
</style>
