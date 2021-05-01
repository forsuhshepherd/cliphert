/* Routes handling */
import Dashboard from './components/dashboard.vue';
import Home from './components/home.vue';
import SignIn from './components/signIn.vue';
import Product from './components/productDetail.vue'


export default [
    { path: '/home', name: 'home', component: Home },
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/sign-in', name: 'sign-in', component: SignIn },
    {path: '/sign-up', name: 'sign-up', component: SignIn},
    { path: '/products/:slug/:id', name: 'product', component: Product },
]