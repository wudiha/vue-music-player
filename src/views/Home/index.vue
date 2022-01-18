<template>
	<div class="home"></div>
	<MusicList />
</template>

<script>
// @ is an alias to /src
import MusicList from '../Home/MusicList.vue';
export default {
	name: 'Home',
	components: {
		MusicList,
	},
};
</script>
