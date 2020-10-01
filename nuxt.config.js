export default {
	server: {
		port: process.env.PORT || 3000, // heroku specifies the port using PORT
		host: '0.0.0.0',
	},

	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=2' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	components: true,

	buildModules: [
		'@nuxtjs/vuetify',
	],

	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
		'cookie-universal-nuxt',
	],

	axios: {
		proxy: true,
	},

	proxy: {
		'/api': {
			target: 'http://newsapi.org/v2',
			pathRewrite: {
				'^/api' : '/',
			},
		},
	},

	css: [
		'@/assets/css/main.scss',
	],
}
