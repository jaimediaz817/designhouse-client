


### INSTALACIÓN DE NUXT.

- Se cargan plantilas HTML dentro de pages, se define un layout, se agrega
configuración y cargue de scripts en el fichero de configuración específico
dentro de nuxt.config.

- @nuxt/router
[COMANDO]:
npm i @nuxtjs/router --save

- Se registra el complemento en nuxt.config.js:
[SOURCE]:
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		'@nuxtjs/router'
	],

## JWT
- Instalar auth.nuxtjs:
[COMANDO]:
npm install @nuxtjs/auth @nuxtjs/axios


- En el fichero nuxt.config.js agregamos este código:
	auth: {
		strategies: {
		  local: {
			endpoints: {
			  login:  { url: '/auth/login', method: 'post', propertyName: 'token' },
			  logout: { url: '/auth/logout', method: 'post' },
			  user:   { url: '/me', method: 'get', propertyName: 'data' }
			},
			// tokenRequired: true,
			// tokenType: 'bearer',
			// globalToken: true,
			// autoFetchUser: true
		  }
		}
	  },

- tomado de:
[LINK]:
https://auth.nuxtjs.org/schemes/local.html#usage
SECCIÓN Shemes--> Usage


## FORMULARIOS EN VUE:
cretueusebiu/vform
[COMANDO]
npm i vform --save

- Posteriormente crearemos un fichero dentro de la carpeta plugins:
vform.js


## LEER PARAMETROS GET desde la URL:



### SLIM IMAGE CROPPER - SUBIR IMAGENES vue COMPONENTE

- URL:
[URL]:
https://pqina.nl/slim/

- Creamos una carpeta dentro de components:
slim


- Instalar el siguiente paquete:
[COMANDO]:
npm install --save better-vue-input-tag


## INSTALAR MAPAS:

- accedera  la consola para tener la API KEY:
[URL]:
https://developers.google.com/maps/documentation/javascript/get-api-key
https://www.npmjs.com/package/vue2-google-maps
https://github.com/xkjyeah/vue-google-maps#readme

- Instalación:
[COMANDO]:
npm i vue2-google-maps-withscopedautocomp --save

- Creamos Luego dentro de la carpeta PLUGINS:  [GMAPS]

