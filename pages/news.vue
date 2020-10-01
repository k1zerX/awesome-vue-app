<template>
	<v-container fill-height class="d-flex flex-wrap justify-center">
		<v-progress-circular
			v-if="loading"
			indeterminate
			size="100"
		/>
		<news-article
			v-else
			v-for="(article, index) in articles"
			:key="`article-${index}`"
			:article="article"
		/>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			articles: undefined,
			loading: true,
		}),
		async fetch() {
			const { $store, $axios } = this;

			await $store.dispatch('news/UPDATE_ARTICLES', { $axios });
			
			this.articles = $store.state.news.articles;
			this.loading = false;
		},
	}
</script>
