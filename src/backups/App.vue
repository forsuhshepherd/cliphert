<template>
  <div id="app">
    <header-tag></header-tag>
    <carousel-tag></carousel-tag>
    <div class="container container">
      <category-tag></category-tag>
    </div>
    <footer-tag></footer-tag>
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Products from './components/category.vue';
import Carousel from './components/carousel.vue';

export default {
  name: 'App',
  components: {
    'header-tag': Header,
    'category-tag': Products,
    'carousel-tag':Carousel,
    'footer-tag':Footer,
  }
}
</script>

<style>

</style>
