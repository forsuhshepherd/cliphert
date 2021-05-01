<template>
    <div id="product">
        <main class="container">
            <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-10 col-sm-12 col-xs-12 border-secondary row pb-4">
                    <div class="product-pics col-xl-5 col-lg-5 col-md-4 col-sm-12 col-xs-12">
                        
                        <div id="primary-pic" class="card">
                            <img src="..\assets\media\sales-and-marketing-1974353-1663836.png" width="300" height="400" alt="preview">
                        </div>
                        <div id="more-pics" class="card">
                            <img src="..\assets\media\sales-and-marketing-1974353-1663836.png" width="50" height="80" alt="preview">
                            <img src="..\assets\media\sales-and-marketing-1974353-1663836.png" width="50" height="80" alt="preview">
                            <img src="..\assets\media\sales-and-marketing-1974353-1663836.png" width="50" height="80" alt="preview">
                            <img src="..\assets\media\sales-and-marketing-1974353-1663836.png" width="0" height="80" alt="preview">
                        </div>
                    </div>
                    <aside class="product-details col-xl-7 col-lg-7 col-md-8 col-sm-12 col-xs-12">
                        <header>
                            <h4>{{ product.title }}</h4>
                            <i v-bind:class="{ 'text-primary': !isActive, 'text-danger': isActive}">{{ product.status }}</i> 
                        </header>
                        <div class="d-flex justify-content-between flex-wrap pb-2">
                            <i>Seller: {{ product.seller }}</i>
                            <i>Price: {{ product.price }} XAF</i>
                            <i>Posted on: {{ product.timestamp }}</i>
                        </div>
                        <p>{{ product.description }}</p>
                        <div class="mt-5 d-flex justify-content-between flex-wrap">
                            <a href="#" type="button" class="btn btn-secondary"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                            <a class="btn btn-secondary" @click="showModal=true"><i class="fas fa-business-time"></i> Buy</a>
                        </div>
                    </aside>
                    <div class="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-xs-12"></div>
                </div>
            </div>
            <article class="extras">
                <h5>Similar Products</h5>
            </article>
        </main>
        <paymentmethod v-if="showModal" @close="showModal = false">

        </paymentmethod>
    </div>
</template>

<script>
import PaymentMethod from './paymentMethods.vue';

export default {
    components: {
        'paymentmethod': PaymentMethod,
    },
    props: {isActive:{type:Boolean}, 
        fetch_error_msg: {type: String},
    },
    data() {
        return {
            id: this.$route.params.id,
            slug: this.$route.params.slug,
            product: [],
            error: [],
            other_products: [],
            showModal: false,
        }
    },
    async mounted() {
        try {
            this.$http.get('http://127.0.0.1:8000/api/product/' + this.id)
            .then(function(res){
                this.product = res.body;
                if (this.product.status !== "on-sale") {
                    this.isActive = false;
                    return;
                } else { return;}
            })
        } catch (e) {
            this.error.push(e)
        }
    }
    
}
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
        display:flex;
        justify-content: space-between;
        h4 {
            padding: 8px 0;
        }
        i {
            padding: 10px 0 0 0;
            font-weight: 500 !important;
        }
    }
    div>i {
        margin: 8px 0;
    }
}

.extras {
    border-top: 1px solid lighten(#c3c3c3, 15%);
    padding: 10px 0; 
    margin-top: 50px;
}
    
</style>