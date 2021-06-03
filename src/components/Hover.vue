<template>
<!--    <div id="app-2"> -->
        <div id="bind-attribute">
        <span v-bind:title="message">
            Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
    </div>
</template>


<script>

//Vue 2.x
/*
    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    })
    */


    import Vue from 'vue'
//    export default {

        const AttributeBinding = {
            data() {
                return{
                    message: 'You loaded this page on ' + new Date().toLocaleString()
                }
            }
        }

    Vue.createApp(AttributeBinding).mount('#bind-attribute')
    
</script>


