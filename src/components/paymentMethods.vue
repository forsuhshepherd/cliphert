<template>
    <div id="paymentmethods" class="modal fade in modal-active">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" @click="$emit('close')" class="close"><span>
                        &times;</span></button>
                        <h5 class="modal-title"></h5>
                </div>
                <div class="modal-body">
                    <div v-if="getPaymentMethods() && getPaymentMethods.id">
                        <div v-for="method in getPaymentMethods()" :key="method.id">
                           <p>{{ method.title }}</p>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-default" @click="$emit('close')">Close</button>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            payment_methods: null,
            errored: false,
            loading: true,

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
            console.log(this.buyout)
            return this.payment_methods
        }
    }
}
</script>

<style lang="scss" scoped>
</style>