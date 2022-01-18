<template>
	<musicview />
</template>

<script>
import musicview from './MusicListView.vue';
import api from '../../api';

export default {
	components: { musicview },
	created() {
		api.getMusicList().then((res) => console.log(res));
	},
};
</script>

<style></style>
