export const state = () => ({
	authenticated: false
})

export const mutations = {
	login(state, { $cookies }) {
		state.authenticated = true;
		$cookies.set('authenticated', state.authenticated, {
			path: '/',
		});
	},
	logout(state, { $cookies }) {
		state.authenticated = false;
		$cookies.set('authenticated', state.authenticated, {
			path: '/',
		});
	}
}
