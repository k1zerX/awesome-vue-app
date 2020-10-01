<template>
	<div>
		<v-layout
			v-if="loading"
			justify-center
		>
			<v-progress-circular
				indeterminate
				size="100"
			/>
		</v-layout>
		<div
			v-else
			class="d-flex flex-wrap justify-center"
		>
			<news-article
				v-for="(article, index) in articles"
				:key="`article-${index}`"
				:article="article"
			/>
		</div>
	</div>
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
