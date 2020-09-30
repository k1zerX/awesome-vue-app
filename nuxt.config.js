export default {
	server: {
		port: process.env.PORT || 3000, // heroku specifies the port using PORT
		host: '0.0.0.0',
	},
	components: true,
	buildModules: [
		'@nuxtjs/vuetify',
	],
	modules: [
		'@nuxtjs/axios',
		'cookie-universal-nuxt',
	],
	css: [
		'@/assets/css/main.scss',
	],
}
