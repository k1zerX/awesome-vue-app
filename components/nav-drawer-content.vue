<template>
	<v-list
		nav
	>
		<v-layout
			justify-center
		>
			<v-avatar
				size="150"
			>
				<v-icon
					size="150"
				>
					mdi-account-circle
				</v-icon>
			</v-avatar>
		</v-layout>
	<v-divider style="margin-top:10px;margin-bottom:10px" />
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
</template>

<script>
	export default {
		data: () => ({
			items: [
				{ key: 'home', title: 'На главную', link: '/' },
				{ key: 'news', title: 'Новости', link: '/news' },
				{ key: 'profile', title: 'Профиль', link: '/profile' },
			],
		}),
	}
</script>
