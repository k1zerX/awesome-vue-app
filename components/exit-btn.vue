<template>
	<v-btn
		icon
		@click="logout"
		:loading="loading"
		:disabled="loading"
	>
		<v-icon>mdi-exit-to-app</v-icon>
	</v-btn>
</template>

<script>
	export default {
		data: () => ({
			loading: false,
		}),
		methods: {
			async logout() {
				this.loading = true;

				const { $store, $cookies, $router, $route } = this;

				await $store.commit('logout', { $cookies });
				if ($route.fullPath == '/profile')
					$router.push('/login');

				this.loading = false;
			},
		},
	}
</script>
