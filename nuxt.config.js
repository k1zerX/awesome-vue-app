export default {
	server: {
		port: process.env.PORT || 3000,
		host: process.env.HOST || 'localhost',
	},
	components: true,
	buildModules: [
		'@nuxtjs/vuetify'
	],
	css: [
		'@/assets/css/main.scss'
	],
}
