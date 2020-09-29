<template>
	<v-app>
		<v-navigation-drawer app>
			<v-container>
				<nav-drawer />
			</v-container>
		</v-navigation-drawer>

		<v-app-bar app></v-app-bar>

		<v-main>
			<v-container fluid>
				<nuxt />
			</v-container>
		</v-main>

		<v-footer app></v-footer>
	</v-app>
</template>
