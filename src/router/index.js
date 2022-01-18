import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import Layout from '../views/Layout.vue';

const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home,
			},
			{
				path: '/list',
				name: 'SongList',
				component: () => import('../views/List.vue'),
			},
			{
				path: '/profile',
				name: 'Profile',
				component: () => import('../views/Profile.vue'),
			},
			{
				path: '/search',
				name: 'Search',
				component: () => import('../views/Search.vue'),
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
