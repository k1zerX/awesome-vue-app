export const state = () => ({
	authenticated: false
})

export const mutations = {
	authorize(state, username, password) {
		if (username == 'Admin' && password == '12345')
			state.authenticated = true;
	}
}
