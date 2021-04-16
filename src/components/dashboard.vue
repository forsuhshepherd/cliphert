<template>
<div id="categories">
    <section class="container">
        <div>
            <!-- Filter and Search options -->
            <div class="options">
                <ul class="bg-light">
                    <li class="filters">
                        <h5 class="filter-header"><a href="#" on:click="" class=""><i class="fas fa-filter"></i> Filter </a></h5>
                        <ul class="filter-options" id="filter">
                            <li class="option" value="">Type</li>
                            <li class="option">recent</li>
                            <li class="option">price</li>
                            <li class="option">location</li>
                        </ul>
                    </li>
                    <li class="search">
                        <input class="" type="text" placeholder="Search">
                        <button class="btn-secondary">Go</button>
                    </li>
                </ul>
            </div>

            <!-- Categories and products -->
            <div v-if="categories && categories.length">
                <div v-for="category of categories" :key="category.id">
                <div class="card category">
                        <h3 class="card-title">{{category.title}}</h3>
                        <div class="card-columns" v-if="category.products && category.products.length">
                            <div class="card" v-for="product of category.products" :key="product.id">
                                <div class="card-body">
                                    <img class="card-img-top" src="" alt="product cap" >
                                    <h5 class="card-title">
                                        <router-link v-bind:to="'/products/' + product.id">{{product.title | uppercase}}</router-link><p id="status">{{product.status}}</p>
                                    </h5>
                                    <div class="clearfix"></div>
                                    <p>{{ product.description | truncatechars(60)}}</p>
                                    <p>{{product.seller}}</p>
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
export default {
    data() {
        return {
            categories: {},
            errors: null,
        }
    },
    async mounted() {
        try {
            const response = await this.$http.get('http://127.0.0.1:8000/api/categories/')
            this.categories = response.data
        } catch (e) {
            this.errors.push(e)
        }
    },
}
</script>

<style lang="scss" scoped>
    #categories {
        padding: 100px 0;
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
        position: relative;
        width: 100%;
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
                    display: none;
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

// Responsiveness
    @media (min-width: 576px) {
        #categories {
            padding-top: 150px;
        }
        .card-columns {
            column-count: 4 !important;
        }
    }
</style>