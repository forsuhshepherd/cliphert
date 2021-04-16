<template>
    <div id="product">
        <h3 class="text-center">Detailed Product</h3>
        <article>
            <div>
                <img src="" alt="preview">
            </div>
            <div>
                <h4>{{ product.title }}</h4>
                <p>{{ product.description }}</p>
                <i>Posted on {{ product.timestamp }}</i>
            </div>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            product: {},
            error: []
        }
    },
    created() {
        try {
            this.$http.get('http://127.0.0.1:8000/api/product/' + this.id).then(function(res){
                console.log(this.product);
                this.product = res.body;
            })
        } catch (e) {
            this.error.push(e)
        }
    }
    
}
</script>

<style lang="scss">
    
</style>