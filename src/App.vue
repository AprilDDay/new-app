<template>
  <div id="app">   
    <div>
      Happy happy joy joy
    </div>
    <div id="components-demo">
        <button-counter></button-counter>
    </div>

  </div> 
</template>


<script>
    
    //import Vue from 'vue'
    //import { createApp } from 'vue'
    import * as Vue from 'vue'
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

  //export default app;

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
