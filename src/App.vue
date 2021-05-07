<template>
  <div id="app">
    <header-tag></header-tag>
    <router-view></router-view>
    <footer-tag></footer-tag>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
//import Products from './components/category.vue';
//import Home from './components/home.vue';

export default {
  name: 'App',
  components: {
    'header-tag': Header,
    //'category-tag': Products,
    //'carousel-tag':Carousel,
    'footer-tag':Footer,
  },
  data() {
    return {
      API_HOST: '127.0.0.1:8000/',
      isActive: false,

      errorMsg: 'Unable to retrieve data, please try again later.'
    }
  },
  methods: {
    
  },
}
</script>

<style>

</style>
