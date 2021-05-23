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
                    <div class="card-deck" v-if="getAllProducts() && getAllProducts().length">
                        <div class="" v-for="product in getAllProducts()" :key="product.id">
                            <div class="card">
                                <div class="card-body">
                                    <router-link @click="reset" v-bind:to="'/products/' + product.slug +'/'+ product.id ">
                                        <img class="card-img-top" src="../assets/media/TSFH Battlecry.jpg" alt="product cap" >
                                        
                                        <span class="card-title">
                                            <h6>{{product.title | uppercase}}</h6> 
                                            <i id="amount">{{ product.price }} XAF</i>
                                        </span>
                                        <!--<p id="status">{{product.status}}</p>-->
                                        <span class="card-text pt-3">
                                            <p>{{ product.description | truncatechars(60)}}</p>
                                        </span>
                                    </router-link>
                                    <button class="small-text btn btn-secondary"><i class="fas fa-shopping-cart"></i> Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div><!-- End of v-for -->
                </div>
            </div>
</template>

<script>
export default {
    name: 'allProducts',
    props : {
        products: {type: Object}, errored: {type: Boolean, default: false}, 
        loading: {type: Boolean, default: true}, errorMsg: {type: String}
    },
    data() {
        return {
        }
    },
    methods: { 
        getAllProducts() {
            return this.products
        }

    },
    mounted() {
        console.log(this.errored)
    },
}
</script>

<style lang="scss" scoped>
    /*override border in .card*/
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
        .loading-icon {
            padding-left: 65px;
        }
    }
</style>