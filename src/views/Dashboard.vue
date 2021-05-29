<template>
<div>
    <Header/>
    <div id="dashboard">
        <section class="container">
                <!-- Filter and Search options -->
                <div class="options">
                    <ul class="bg-light">
                        <li class="filters">
                            <h5 class="filter-header"><a href="#" @click="filter_toggle=!filter_toggle">
                                <i class="fas fa-filter"></i> Filter </a></h5>
                            <slide-transition>
                                <ul class="filter-options" v-show="filter_toggle" id="filter">
                                    <li class="option" value="">Type
                                        <div class="pt-3">
                                            <div>
                                                <input class="pr-2" type="checkbox" name="all" id="all-products">
                                                <label class="pl-2" for="all-products" true>All</label>
                                            </div>
                                             <div>
                                                <input class="pr-2" type="checkbox" name="recent" id="recent-products">
                                                <label class="pl-2" for="recent-products" true>Recent</label>
                                            </div> 
                                            <br/>                                          
                                            <div v-if="getAllCategories() && getAllCategories().length">
                                                <div class="pb-3">Categories</div>
                                                <li v-for="category in getAllCategories()" :key="category.id">
                                                    <input class="pr-2" type="checkbox" :name="category.slug" :id="category.id">
                                                    <label class="pl-2" :for="category.id">{{ category.slug | capitalize }}</label>
                                                </li>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="option">Price</li>
                                    <li class="option">Location</li>
                                </ul>
                            </slide-transition>
                        </li>
                        <li class="search">
                            <form action="" method="get">
                                <input class="p-1" type="text" placeholder="Search">
                                <button class="p-1 btn-secondary pl-2 pr-2"><i class="fas fa-search"></i></button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div v-if="errored">
                  <p class="pt-5 pb-5 text-center text-info">{{ errorMsg }}</p>
                </div>
                <div v-else>
                  <div v-if="loading">
                    <div class="loading-icon">
                      <img
                        loading="lazy"
                        class="img-fluid"
                        src="../assets/YCZH.gif"
                        alt="loading"
                      />
                    </div>
                  </div>
                  <div v-else>
                    <products :products="products" :is-active="is-active"></products>
                    <!--<categories :errorMsg="errorMsg" :isActive="isActive"></categories>-->
                  </div>

                </div>
        </section>
    </div>
    <Footer/>
</div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios';
//import productByCategory from './productByCategory.vue';
import Header from '../components/header.vue';
import Footer from '../components/footer.vue';
import {SlideYUpTransition} from 'vue2-transitions';
import allProducts from '../components/allProducts.vue';

export default {
    name: 'dashboard',
    components: {
        //'categories': productByCategory,
        Header,
        Footer,
        'products': allProducts,
        'slide-transition': SlideYUpTransition,
    },
    data() {
        return {
            categories: {},
            products: {},
            filter_toggle: false,
            errored: false,
            loading: true,
            isActive: false,
            errorMsg: 'Unable to retrieve data, please try again later.',
        }
    },
    created() {
        let url = 'http://127.0.0.1:8000/api/categories/'
        axios.get(url)
            .then(res => {
                this.categories = res.data
            })
            .catch(err => {
                console.log(err)
                //this.errorMsg = err
                //this.errored = true
            })
    },
    mounted() {
        let url = 'http://127.0.0.1:8000/api/products/all'
        axios.get(url)
            .then(res => {
                this.products = res.data
            })
            .catch(err => {
                console.log(err)
                this.errored = true
            })
            .finally(() => this.loading = false)
    },
    methods: {
        getAllCategories() { return this.categories }
    }   
}
</script>

<style lang="scss">

    #dashboard {
        padding: 100px 0;
        section {
            min-height: 30vh;
        }
    }
    /* Filters and Searches */
    .options {
        width: 100%;
        padding-bottom: 15px;
        ul {
            display: flex;
            display: -webkit-flex;
            display: -moz-inline-box;
            flex-wrap: wrap-reverse;
            padding: 10px;
            list-style-type: none;
            justify-content: space-between;
            padding-bottom: 15px;
            .filters {
                .filter-header a {
                    color:#000000 !important;
                    &:hover {
                        color: lighten(#000000, 50%) !important;
                    }
                }
                .filter-options {
                    width: 100%;
                    margin: auto;
                    padding: 10px;
                    li {
                        padding-right: 20px;
                        &:last-child {
                            padding-right: 0;
                        }
                    }

                }
            }
        }
    }
    .option {
        label {
            font-size: small;
            margin-bottom: 0 !important;
        }
    }
    .filters .search {
        padding: 0 10px;
    }

</style>