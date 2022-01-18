<template>
	<div class="container">
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
.login {
	font-size: 30px;
	background-color: aliceblue;
	padding: 30px;
	color: green;
	border-radius: 6px;
}

.login:hover {
	background-color: green;
	color: aliceblue;
}
</style>
