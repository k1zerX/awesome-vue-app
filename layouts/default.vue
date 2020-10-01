<template>
	<v-app>
		<v-navigation-drawer
			v-model="showDrawer"
			app
		>
			<nav-drawer-content />
		</v-navigation-drawer>

		<v-app-bar app>
			<v-app-bar-nav-icon
				@click="showDrawer = !showDrawer"
			/>
			<v-spacer />
			<exit-btn />
		</v-app-bar>

		<v-main>
			<nuxt />
		</v-main>

		<v-footer app></v-footer>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			showDrawer: false,
		}),
	}
</script>
