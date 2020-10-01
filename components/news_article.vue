<template>
	<a
		:href="article.url"
		style="text-decoration: none;"
	>
		<v-card
			class="pa-2"
			tile
			style="margin: 10px; width: 300px;"
			@click=""
		>
			<v-img
				:src="article.urlToImage"
				max-width="100%"
			/>
			<v-card-title>
				{{article.title}}
			</v-card-title>
			<v-card-subtitle>
				{{article.description}}
			</v-card-subtitle>
		</v-card>
	</a>
</template>

<script>
	export default {
		props: ['article'],
	}
</script>
