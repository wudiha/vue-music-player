<template>
	<div class="container">
		<n-button type="success" @click="spotify">Login with Spotify</n-button>

		<!-- <button class="login" @click="spotify">Login with Spotify</button> -->
	</div>
</template>

<script>
export default {
	methods: {
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
