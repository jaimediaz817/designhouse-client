import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
    load: {        
        key: 'AIzaSyC_loKsi0XJpBQFulvOJC1PEriHtOuQeU0',
        libraries: 'places'
    }
});