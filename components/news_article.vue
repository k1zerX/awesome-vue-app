<template>
	<v-list>
		<v-list-item>
			source: {{article.source.id}} | {{article.source.name}}
		</v-list-item>
		<v-list-item>
			author: {{article.author}}
		</v-list-item>
		<v-list-item>
			title: {{article.title}}
		</v-list-item>
		<v-list-item>
			description: {{article.description}}
		</v-list-item>
		<v-list-item>
			url: {{article.url}}
		</v-list-item>
		<v-list-item>
			urlToImage: {{article.urlToImage}}
		</v-list-item>
		<v-list-item>
			publishedAt: {{article.publishedAt}}
		</v-list-item>
		<v-list-item>
			content: {{article.content}}
		</v-list-item>
	</v-list>
</template>

<script>
	export default {
		props: ['article'],
	}
</script>
