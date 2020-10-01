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

		await new Promise(resolve => setTimeout(resolve, 2000));

		$axios.onRequest(config => {
			console.log('onRequest: ' + config);
		});
		$axios.onResponse(response => {
			console.log('onResponse: ' + response);
		});
		$axios.onError(error => {
			console.log('onError: ' + error);
		});
		$axios.onRequestError(error => {
			console.log('onRequestError: ' + error);
		});
		$axios.onResponseError(error => {
			console.log('onResponseError: ' + error);
		});

		let { articles } = await $axios.$get('/api/top-headlines', { params });

		commit('UPDATE_ARTICLES', { articles });
	},
}
