
<template>
    
    <div id="components-demo">
        <button-counter></button-counter>
    </div>
</template>


<script>

import Vue from 'vue'

const app = Vue.createApp({})

const count=0

app.component('button-counter', {
    data() {
        return{
            count: 0
        }
    },
    template: 
        <button v-on:click='count++'>
            You clicked me {{ count }} times
        </button>
})

app.mount('#components-demo')

</script>


<!--
<template>
    <div id="event-handling">
        <span>Message: {{ msg }}</span>
     </div>    
</template>

-->

<!-- <script> -->
    //const msg= "Hello Earthlings";
  
//    export default {
//        name: 'Counter',
//        props: {
//            msg: String
//        }  
//    }  
<!-- </script> -->