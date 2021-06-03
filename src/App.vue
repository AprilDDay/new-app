
<template>
  <div id="app">
    <Hover />
<!--    <FullModalPopUp /> 
    <HelloWorld msg="Have a Nice Life"/>
    <PageTwo msg="Movies ROCK" talk="drummer boy"/>
    <Counter msg="Hello earthlings"/>
  -->
    <!-- <Example /> -->
  </div>

</template>

<script>

//import FullPagePopUp.vue from 'vue-fullpage-modal'
//Vue.use(FullPageModal)

//import HelloWorld from './components/HelloWorld.vue'
//import PageTwo from './components/PageTwo.vue'
//import Counter from './components/Counter.vue'
//import FullModalPopUp from './components/FullModalPopUp.vue'
//import Example from './components/Example.vue'
import Hover from './components/Hover.vue'

export default {
  name: 'App',
  components: {
//    HelloWorld, 
 ///   PageTwo,
  //  Counter,
   // FullModalPopUp, 
    Hover//,
    //Example//

  }
}
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
