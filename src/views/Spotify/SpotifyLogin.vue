<template>
	<loginview />
</template>

<script>
// import login from '../../api/login';
import loginview from './SpotifyLoginView.vue';
export default {
	components: {
		loginview,
	},
	created() {
		// this.$api.getMusicList().then((res) => console.log(res));
	},
};
</script>

<style></style>
