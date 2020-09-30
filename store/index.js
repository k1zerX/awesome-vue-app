export const state = () => ({
	authenticated: false
})

export const mutations = {
	async login(state) {
		state.authenticated = true;
	},
	async logout(state) { // TODO may be async, check if $cookies.set() is async
		state.authenticated = false;
	}
}
