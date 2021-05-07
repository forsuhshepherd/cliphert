<template>
    <div class="mymodal-backdrop">
        <div class="mymodal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="mymodal-header">
                        <slot name="heading">
                            Title here
                        </slot>
                        <button type="button" class="btn btn-secondary btn-large" @click="close"><span>&times;</span></button>
                    </div>
                    <section class="mymodal-body">
                        <slot name="body"></slot>
                    </section>
                    <div class="mymodal-footer">
                        <slot name="footer"></slot>
                        <button type="button" class="btn btn-info" @click="close">Close</button>
                    </div>                    
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        },
    }
};
</script>

<style scoped>
  .mymodal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mymodal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .mymodal-header,
  .mymodal-footer {
    padding: 15px;
    display: flex;
  }

  .mymodal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .mymodal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .mymodal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>