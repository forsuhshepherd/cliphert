import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Routes from './routes';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'D:/MY-PROJECTS/Tutorials/fontawesome-free-5.15.3-web/css/all.min.css';
import './assets/app.css';

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

Vue.config.productionTip = false


// Filters
/* Capitalize first letter of every new word. */
Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1)
})

/* Convert to uppercase */
Vue.filter('uppercase', function(value) {
    return value.toUpperCase();
})

/*  Truncates a string to a specified number of characters.
    Argument: the number of characters to truncate to.    
*/
Vue.filter('truncatechars', function(value, arg1) {
    return value.slice(0, arg1) + '. . .'
})

/*  Truncates a string to a specified number of words. 
    Argument: the number of words to truncate after.
*/
Vue.filter('truncatewords', function() {
    return
})

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
}).$mount('#app')