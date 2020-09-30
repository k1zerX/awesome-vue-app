<template>
	<v-list
		nav
	>
	<div style="width: 150px; height: 150px; margin: auto; background: red">Here should be some kitty</div>
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
