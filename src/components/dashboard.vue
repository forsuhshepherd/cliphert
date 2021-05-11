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
            <categories :errorMsg="errorMsg" :isActive="isActive"></categories>
        </div>
    </section>
</div>
</template>

<script>
import productByCategory from './productByCategory.vue';
import {SlideYUpTransition} from 'vue2-transitions';

export default {
    name: 'dashboard',
    components: {
        'categories': productByCategory,
        'slide-transition': SlideYUpTransition,
    },
    data() {
        return {
            filter_toggle: false,
            isActive: false,
            errorMsg: 'Unable to retrieve data, please try again later.',
        }
    }
}
</script>

<style lang="scss" scoped>

    #categories {
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

</style> 