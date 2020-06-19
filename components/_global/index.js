import Vue from 'vue';
import upperForst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// require all components in the current directory and subdirectories
const requireComponent = require.context(
    '.',
    true,
    /_base-[\w-]+\.vue$/
    );

    // base-button
    // _base-input-field.vue

    requireComponent.keys().forEach(fileName => {
        // get the component´s configuration
        const componentConfig = requireComponent(fileName);
        const fn = fileName.split('/').pop().replace(/\.\w+$/, '');
        const componentName = upperForst(camelCase(fn));
        Vue.component(componentName, componentConfig.default || componentConfig);
        console.log(componentConfig);
    });
    

    //console.log(requireComponent.keys())
