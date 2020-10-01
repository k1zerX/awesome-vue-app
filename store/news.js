export const state = () => ({
	articles: [],
})

export const mutations = {
	UPDATE_ARTICLES: (state, { articles }) => {
		state.articles = articles;
	}
}

export const actions = {
	UPDATE_ARTICLES: async ({ commit, state }, { $axios }) => {
		const params = {
			country: 'ru',
			apiKey: '0858b890f7314566960189b70c08669c',
		};

		if (state.articles.length)
			return;

		let { articles } = await $axios.$get('/api/top-headlines', { params });

		commit('UPDATE_ARTICLES', { articles });
	},
}
