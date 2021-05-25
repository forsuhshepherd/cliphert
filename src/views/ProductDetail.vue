<template>
  <div>
    <Header />
    <div id="product">
      <main class="container">
        <div class="row">
          <div
            class="
              col-xl-9 col-lg-9 col-md-10 col-sm-12 col-xs-12
              border-secondary
              row
              pb-4
            "
          >
            <div
              class="
                product-pics
                col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12
              "
            >
              <div id="primary-pic" class="card">
                <img
                  src="..\assets\media\sales-and-marketing-1974353-1663836.png"
                  width="300"
                  height="400"
                  alt="preview"
                />
              </div>
              <div id="more-pics" class="card">
                <img
                  src="..\assets\media\sales-and-marketing-1974353-1663836.png"
                  width="50"
                  height="80"
                  alt="preview"
                />
                <img
                  src="..\assets\media\sales-and-marketing-1974353-1663836.png"
                  width="50"
                  height="80"
                  alt="preview"
                />
                <img
                  src="..\assets\media\sales-and-marketing-1974353-1663836.png"
                  width="50"
                  height="80"
                  alt="preview"
                />
                <img
                  src="..\assets\media\sales-and-marketing-1974353-1663836.png"
                  width="0"
                  height="80"
                  alt="preview"
                />
              </div>
            </div>

            <div v-if="errored">
              <p class="pt-5 pb-5 text-center text-info">{{ errorMsg }}</p>
            </div>

            <aside
              v-else
              class="
                product-details
                col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12
              "
            >
              <div v-if="loading" class="loading-icon">
                <img
                  loading="lazy"
                  class="img-fluid"
                  src="../assets/YCZH.gif"
                  alt="loading"
                />
              </div>
              <div v-bind:class="{ 'd-none': loading }">
                <header>
                  <h4>{{ product.title }}</h4>
                  <i
                    v-bind:class="{
                      'text-primary': !isActive,
                      'text-danger': isActive,
                    }"
                    >{{ product.status }}</i
                  >
                </header>
                <div class="d-flex justify-content-between flex-wrap pb-2">
                  <i>Seller: {{ product.seller }}</i>
                  <i>Price: {{ product.price }} XAF</i>
                  <i>Posted on: {{ product.timestamp }}</i>
                </div>
                <p>{{ product.description }}</p>
                <div class="mt-5 d-flex justify-content-between flex-wrap">
                  <a href="#" type="button" class="btn btn-secondary"
                    ><i class="fas fa-shopping-cart"></i> Add to Cart</a
                  >
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="showModal = true"
                  >
                    <i class="fas fa-business-time"></i> Buy
                  </button>
                </div>
              </div>
            </aside>
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-xs-12"></div>
          </div>
        </div>
        <article class="extras">
          <h5>Similar Products</h5>
        </article>
      </main>
      <modal v-show="showModal" @close="showModal = false">
        <template v-slot:heading>
          <h5>Please select a payment method.</h5>
        </template>
        <template v-slot:body>
          <payments></payments>
        </template>
      </modal>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Modal from "../components/modal.vue";
import Payments from "../components/payments.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Header,
    Footer,
    modal: Modal,
    payments: Payments,
  },
  props: { isActive: { type: Boolean }, errorMsg: { type: String } },
  data() {
    return {
      id: this.$route.params.id,
      slug: this.$route.params.slug,
      product: [],
      errored: false,
      loading: true,
      similarProducts: [],
      showModal: false,
      //paymentMethods: [],
    };
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/product/" + this.id)
      .then((res) => {
        this.product = res.data;
      })
      .catch((err) => {
        console.log(err);
        this.errored = true;
        this.errorMsg = err;
      })
      .finally(() => (this.loading = false));
  },
  /*methods: {
        getPaymentMethods() {
            if (this.showModal == true) {
                axios.get('http://127.0.0.1:8000/api/payment_methods/')
                    .then(res => {
                        return this.paymentMethods = res.data
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {return;}
        }
    }  */
};
</script>

<style lang="scss">
#product {
  padding: 150px 0;
}
.product-pics {
  //border: 1px solid #c3c3c3 !important;
  padding: 15px 0;
  :first-child {
    margin-bottom: 1px;
  }
  .card {
    justify-content: space-between;
    flex-direction: row !important;
    flex-wrap: wrap;
    img {
      padding-right: 5px;
      flex: 1;
      &:first-child {
        margin-bottom: 0;
      }
      &:last-child {
        padding-right: 0;
      }
    }
  }
}

.product-details {
  header {
    display: flex;
    justify-content: space-between;
    h4 {
      padding: 8px 0;
    }
    i {
      padding: 10px 0 0 0;
      font-weight: 500 !important;
    }
  }
  div > i {
    margin: 8px 0;
  }
}

.extras {
  border-top: 1px solid lighten(#c3c3c3, 15%);
  padding: 10px 0;
  margin-top: 50px;
}
</style>
