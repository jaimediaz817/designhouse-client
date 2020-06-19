require('dotenv').config();

export default {
	mode: 'universal', // or spa
	/*
	** Headers of the page
	*/
	head: {
		title: process.env.npm_package_name || '',
		meta: [{
			charset: 'utf-8'
			},
			{
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
			},
			{
			hid: 'description',
			name: 'description',
			content: process.env.npm_package_description || ''
			}
		],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}],
		script:[
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"},
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"},
			{ src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"},
		]
	},
	/*
	** Customize the progress-bar color
	*/
	loading: {
	color: '#fff'
	},
	/*
	** Global CSS
	*/
	css: [
		'@/assets/scss/main.scss'
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
		'~plugins/vform',
		'~components/_global',
		{ src: '~/plugins/gmaps', ssr: false}
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/router'
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
		// Doc: https://bootstrap-vue.js.org
		'bootstrap-vue/nuxt',
		'@nuxtjs/auth',
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv',
	],







	auth: {
		strategies: {
		  local: {
			endpoints: {
			  login:  { url: '/login', method: 'post', propertyName: 'token' },
			  logout: { url: '/logout', method: 'post' },
			  user:   { url: '/me', method: 'get', propertyName: 'data' }
			},
			//rewriteRedirects: true,		
			// tokenRequired: true,
			// tokenType: 'bearer',
			// globalToken: true,
			// autoFetchUser: true
		  }
		},		

		redirect: {
		// 	login: '/',
	 		logout: '/login',
		// 	user: '/'
		}			
		
	  },

	  router: {
		linkActiveClass: 'active',
		linkExactActiveClass: 'active',
	  },


	/*
	** Axios module configuration
	** See https://axios.nuxtjs.org/options
	*/

	// TODO:add
	axios: {
		baseUrl: process.env.API_URL
	},
	/*
	** Build configuration
	*/
	build: {
		/*
			** You can extend webpack config here
		*/
		extend(config, ctx) {}
	}
}
