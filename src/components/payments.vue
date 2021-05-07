<template>
    <div>
        <!--<slot name="payment_methods">-->
            <div v-if="getPaymentMethods() && getPaymentMethods.id">
                <div v-for="method in getPaymentMethods()" :key="method.id">
                    <p>{{ method.title }}</p>
                </div>
            </div>                
        <!--</slot>-->        
    </div>    
</template>

<script>
export default {
    //props: {showModal: {type: Boolean, default: false}},
    data() {
        return {
            payment_methods: [],
            errored: false,
            loading: true,
            //paymentmethods: this.showModal,

            fetch_error_msg: 'Unable to retrieve data, please try again later.'

        }
    },
    async mounted() {
        this.$http.get('http://127.0.0.1:8000/api/payment_methods')
        .then(function(res) {
            this.payment_methods = res.body;
        })
    },
    methods: {
        getPaymentMethods: function() {
            console.log(this.paymentmethods)
            return this.payment_methods
        }
    }
}
</script>

<style lang="scss" scoped>
</style>