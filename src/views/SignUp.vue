<template>
  <div class="sign-up">
    <Header />
    <SignUp />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from "@/components/signUp.vue";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";

export default {
  name: "Home",
  components: {
    SignUp,
    Header,
    Footer,
  },
};
</script>
