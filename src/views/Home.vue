<template>
  <div class="home">
    <Header />
    <Carousel />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
import Carousel from "@/components/carousel.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Carousel,
  },
};
</script>
