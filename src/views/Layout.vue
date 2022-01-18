<template>
	<Nav />
	<router-view></router-view>
</template>

<script>
import Nav from '../components/Navigation.vue';
export default {
	components: {
		Nav,
	},
};
</script>

<style></style>
