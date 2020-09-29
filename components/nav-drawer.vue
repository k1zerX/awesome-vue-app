<template>
	<v-navigation-drawer app>
		<v-list
			dense
			nav
		>
			<v-list-item
				v-for="item in items"
				:key="item.key"
				nuxt
				:to="item.link"
			>
				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	export default {
		data: () => ({
			items: [
				{ key: 'home', title: 'На главную', link: '/' },
				{ key: 'news', title: 'Новости', link: '/news' },
				{ key: 'profile', title: 'Профиль', link: '/profile' },
			],
		})
	}
</script>
