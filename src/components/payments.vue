<template>
  <div>
    <div v-if="errored">
      <span class="text-center text-info"> {{ fetch_error_msg }} </span>
    </div>
    <div v-else>
      <div v-if="loading">
        <p class="text-center">Loading...</p>
      </div>
      <div v-else>
        <div v-if="getPaymentMethods() && getPaymentMethods().length">
          <div v-for="method in getPaymentMethods()" :key="method.id">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <router-link class="card-title" to="/order">
                  <img src="" class="card-img" alt="preview" />
                  <p>{{ method.title }}</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //props: {showModal: {type: Boolean, default: false}},
  data() {
    return {
      paymentMethods: [],
      errored: false,
      loading: true,

      fetch_error_msg: "Unable to retrieve data, please try again later.",
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/payment_methods/")
      .then((res) => {
        this.paymentMethods = res.data;
      })
      .catch((err) => {
        this.fetch_error_msg = err;
        this.errored = true;
        console.log(err);
      })
      .finally(() => (this.loading = false));
  },
  methods: {
    getPaymentMethods() {
      return this.paymentMethods;
    },
  },
};
</script>

<style lang="scss" scoped></style>
