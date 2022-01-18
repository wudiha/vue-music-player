import { createRouter, createWebHistory } from 'vue-router';
import Spotify from '../views/Spotify';
import Layout from '../views/Layout.vue';

const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'Spotify',
				component: Spotify,
			},
			{
				path: '/upcoming',
				name: 'Upcoming',
				component: () => import('../views/Upcoming.vue'),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: 'active',
});

export default router;
