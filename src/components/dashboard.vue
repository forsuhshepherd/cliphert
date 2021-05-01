<template>
<div id="categories">
    <section class="container">
        <div>
            <!-- Filter and Search options -->
            <div class="options">
                <ul class="bg-light">
                    <li class="filters">
                        <h5 class="filter-header"><a href="#" @click="filter_toggle=!filter_toggle">
                            <i class="fas fa-filter"></i> Filter </a></h5>
                        <slide-transition>
                            <ul class="filter-options" v-show="filter_toggle" id="filter">
                                <li class="option" value="">Type</li>
                                <li class="option">recent</li>
                                <li class="option">price</li>
                                <li class="option">location</li>
                            </ul>
                        </slide-transition>
                    </li>
                    <li class="search">
                        <input class="p-1" type="text" placeholder="Search">
                        <button class="p-1 btn-secondary pl-2 pr-2"><i class="fas fa-search"></i></button>
                    </li>
                </ul>
            </div>
            <div class="loading-icon" v-show="loading"><img loading="lazy" class="img-fluid" src="../assets/YCZH.gif" alt="loading"></div>
            <!-- Categories and products -->
            <div v-if="getProductsByCategory() && getProductsByCategory().length">
                <div v-for="category in getProductsByCategory()" :key="category.id">
                <div class="card category" v>
                    <h3 class="card-title">{{category.title}}</h3>
                    <div class="card-columns" v-if="category.products && category.products.length">
                        <div class="card" v-for="product of category.products" :key="product.id">
                            <div class="card-body">
                                <img class="card-img-top" src="" alt="product cap" >
                                <h5 class="card-title">
                                    <router-link @click="reset" v-bind:to="'/products/' + product.slug +'/'+ product.id ">{{product.title | uppercase}}</router-link>
                                    <p id="status">{{product.status}}</p>
                                </h5>
                                <div class="clearfix"></div>
                                <p id="amount">{{ product.price }} XAF</p>
                                <p>{{ product.description | truncatechars(60)}}</p>
                                <button href="#" class="btn btn-secondary"><i class="fas fa-shopping-cart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="text-info"> {{errors}} </div>
        </div>
    </section>
</div>
</template>

<script>
import {SlideYUpTransition} from 'vue2-transitions';

export default {
    components: {
        'slide-transition': SlideYUpTransition,
    },
    props : {
        isActive: {
            type: Boolean,
        },
        fetch_error_msg: {type: String},
    },
    data() {
        return {
            categories: null,
            errors: null,
            loading: true,
            filter_toggle: false,
        }
    },
    async mounted() {
        try {
            const response = await this.$http.get('http://127.0.0.1:8000/api/categories/');
            if (response.data !== null) {
                this.loading = false;
                return this.categories = response.data;
                
            } else {
                return this.loading;
            }
            
        } catch (e) {
            this.errors.push(e)
        }
    },
    methods: {
        getProductsByCategory: function() {
            let categories = this.categories
            return categories
        },
        reset: function() {
            this.getProductsByCategory = null
        }
    },
}
</script>

<style lang="scss" scoped>
    #categories {
        padding: 100px 0;
        section {
            min-height: 30vh;
        }
    }
    /*override border in .card*/
    .category {
        border: none !important;
    }
    /*.card {
        padding: 4px;
        margin: 20px;
    }*/
    /*product display using flex*/
    /*.product {
        width: auto;
        text-align: center;
        display: flex;
        justify-content:flex-start;
        align-content: flex-start;
        flex-direction: row !important;
        flex-wrap: wrap;
    }
    */
    .card a {
        color: #00008B;
    }
    .card-columns .card-body {
        padding: 1.0rem !important;
    }
    .card-title {
        padding: 10px 0;
        border-bottom: 1px solid #ddd;
    }
    .card-title #status {
        float:right;
        font-size: small;
        color: #3CB371;
        margin-top: 10px;
    }
    .card-body p {
        color:  #4D4D4D;
        font: 200 unset normal semi-expanded 60% inherit -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    .filters .search {
        padding: 0 10px;
    }

    .loading-icon {
        width: 50%;
        margin: auto;
        padding: 10px 0;
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