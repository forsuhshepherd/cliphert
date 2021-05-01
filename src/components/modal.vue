<template>
    <div id="modal">
        <div class="modal fade in modal-active">
            <div class="modal-dialog">
                <dig class="modal-content">
                    <div class="modal-header">
                        <button type="button" @click="$emit('close')" class="close"><span>
                            &times;</span></button>
                            <h5 class="modal-title"></h5>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <dib class="modal-footer">
                        <button type="button" class="btn-default" @click="$emit('close')">Close</button>
                    </dib>
                </dig>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
    .modal-active {
        display: block;
    }
</style>