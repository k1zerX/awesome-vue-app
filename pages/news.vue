<template>
	<v-list>
		<h1>News Page</h1>
		<v-list-item
			v-for="(article, index) in articles"
			:key="`article-${index}`"
		>
			<news-article :article="article" />
		</v-list-item>
	</v-list>
</template>

<script>
	export default {
		data: () => ({
			articles: [
				{
					source: { id: 'id', name: 'Name'},
					author: 'Author',
					title: 'Title',
					description: 'Description',
					url: 'url',
					urlToImage: 'urlToImage',
					publishedAt: '2020-09-30T15:14:00Z',
					content: 'content',
				}
			],
		}),
		async asyncData({ app: { $axios }, store }) {
			await store.dispatch('news/UPDATE_ARTICLES', { $axios });
			console.log(store.state.news.articles);
			return {
				articles: store.state.news.articles,
			};
		},
	}
</script>
