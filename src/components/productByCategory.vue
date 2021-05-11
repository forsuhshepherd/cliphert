<template>
            <div v-if="errored">
                <p class="pt-5 pb-5 text-center text-info"> {{ errorMsg }} </p>
            </div>

            <!-- Categories and products -->
            <div v-else>
                <div v-if="loading">
                    <div class="loading-icon">
                        <img loading="lazy" class="img-fluid" src="../assets/YCZH.gif" alt="loading">
                    </div>
                </div>
                
                <div v-else>
                    <div v-if="getProductsByCategory() && getProductsByCategory().length">
                    <div v-for="category in getProductsByCategory()" :key="category.id">
                        <div class="card category">
                            <h3 class="card-title">{{category.title}}</h3>
                            <div class="card-columns" v-if="category.products && category.products.length">
                                <div class="card" v-for="product of category.products" :key="product.id">
                                    <div class="card-body">
                                        <router-link @click="reset" v-bind:to="'/products/' + product.slug +'/'+ product.id ">
                                            <img class="card-img" src="../assets/media/TSFH Battlecry.jpg" alt="product cap" >
                                            
                                            <h5 class="card-title">{{product.title | uppercase}}</h5>
                                            <!--<p id="status">{{product.status}}</p>-->
                                            <span class="card-text pt-3">
                                                <p id="amount">{{ product.price }} XAF</p>
                                                <p>{{ product.description | truncatechars(60)}}</p>
                                            </span>
                                        </router-link>
                                        <button class="small-text btn btn-secondary"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- End of v-for -->
                    </div><!-- End of v-if -->
                </div>
            </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'productByCategory',
    props : {
        isActive: Boolean,
        errorMsg: String,
    },
    data() {
        return {
            categories: null,
            errored: false,
            loading: true,
        }
    },
    mounted() {
        let url = 'http://127.0.0.1:8000/api/categories/'
        axios.get(url)
            .then(res => {
                this.categories = res.data
            })
            .catch(err => {
                console.log(err)
                this.errorMsg = err
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        getProductsByCategory() {
            return this.categories
        },
        reset: function() {
            this.getProductsByCategory = null
        }
    },
}
</script>

<style lang="scss" scoped>
    /*override border in .card*/
    .category {
        border: none !important;
    }
    .card {
        a {
            color: #00008B;
            &:hover {
                background-color: #ddd;
                text-decoration: none !important;
            }
        }
        .card-img {
            //margin: auto;
            //width: 250px;
            height: 200px;
        }
    }
    .card-columns .card-body {
        padding: 0.5rem !important;
    }
    .card-title {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }
    /*.card-title #status {
        float:right;
        font-size: small;
        color: #3CB371;
        margin-top: 10px;
    }*/
    .card-body {
        p {
            color:  #4D4D4D;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            &:first-child {
                font-size: 0.9rem;
            }
            font-size: 0.80rem;
            
        }
    }
    .loading-icon {
        width: 50%;
        margin: auto;
        padding: 10px 0;
    }
    .small-text {
        font-size: 0.8em;
    }

    // Responsiveness
    @media (min-width: 576px) {
        #categories {
            padding-top: 150px;
        }
        .card-columns {
            column-count: 4 !important;
        }
        .loading-icon {
            padding-left: 65px;
        }
    }
</style>