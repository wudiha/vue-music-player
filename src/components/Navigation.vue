<template>
	<n-menu :options="menuOptions" />
</template>

<script>
import { defineComponent, h } from 'vue';
import { NIcon } from 'naive-ui';
import { RouterLink } from 'vue-router';
import {
	CodeWorkingOutline as WorkIcon,
	MusicalNoteOutline as MusicIcon,
} from '@vicons/ionicons5';

function renderIcon(icon) {
	return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						name: 'Spotify',
					},
				},
				{ default: () => 'Spotify' }
			),
		key: 'go-back-home',
		icon: renderIcon(MusicIcon),
	},
	{
		label: () =>
			h(
				RouterLink,
				{
					to: {
						name: 'Upcoming',
					},
				},
				{ default: () => 'Upcoming' }
			),
		key: 'go-to-work',
		icon: renderIcon(WorkIcon),
	},
];

export default defineComponent({
	setup() {
		return {
			menuOptions,
		};
	},
});
</script>
