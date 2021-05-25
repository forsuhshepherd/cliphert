<template>
  <div class="sign-in">
    <header class="header">
      <div class="container">
        <h1 class="logo">
          <router-link to="/" class="navbar-brand nav-logo" exact>
            <span class="logo-icon-wrapper"
              ><img class="logo-icon" src=""
            /></span>
            <span class="text"><span class="highlight">CLIPHERT</span></span>
          </router-link>
        </h1>
        <!-- Logo -->
      </div>
    </header>
    <SignIn />
  </div>
</template>

<script>
// @ is an alias to /src
import SignIn from "@/components/signIn.vue";

export default {
  name: "Home",
  components: {
    SignIn,
  },
};
</script>
