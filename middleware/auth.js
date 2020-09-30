export default async function ({ app: { $cookies }, store, route, redirect }) {
	if (store.state.authenticated)
		return;

	if (!$cookies.get('authenticated'))
		return redirect('/login', { prevPage: route.fullPath });

	await store.commit('LOG_IN', { $cookies });
}
