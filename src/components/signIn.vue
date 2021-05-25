<template>
  <div id="sign-in">
    <div class="content-form">
      <header class="content-form-header">
        <h4>Sign In</h4>
      </header>
      <div class="content-form-body">
        <div>
          <form action="" method="post">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="username"
                placeholder="Username or Email"
                id="username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                id="password"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="remember-me"
              />
              <label for="remember-me" class="form-check-label"
                >Remember me</label
              >
            </div>

            <div class="form-group">
              <a href="#" class="">Forgot your password?</a>
            </div>
            <input
              type="submit"
              value="Sign In"
              class="form-control btn btn-secondary"
            />
          </form>
          <div class="p-3 form-text">
            Have an Account?<router-link to="/accounts/sign-up">
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"></style>
