export default function ({ app, store, redirect }) {
	app.$cookies.set('authenticated', state.authenticated, {
		path: '/',
	});
	if (!store.state.authenticated)
		return redirect('/login');
}
