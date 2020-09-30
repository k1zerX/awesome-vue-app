export const state = () => ({
	authenticated: false,
})

export const mutations = {
	LOG_IN: (state, { $cookies }) => {
		state.authenticated = true;
		$cookies.set('authenticated', state.authenticated, {
			path: '/',
		});
	},
	LOG_OUT: (state, { $cookies }) => {
		state.authenticated = false;
		$cookies.set('authenticated', state.authenticated, {
			path: '/',
		});
	},
}
