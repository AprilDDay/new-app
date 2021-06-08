<template>
  <div id="app">   
    <FullModalPopUp />
    <HelloWorld msg="Have a Nice Life"/>
    <PageTwo msg="Movies ROCK" talk="drummer boy"/>
    <Counter msg="Hello earthlings"/>
  </div> 
</template>

<script> 
  import FullModalPopUp from './components/FullModalPopUp.vue'
  import HelloWorld from './components/HelloWorld.vue'
  import PageTwo from './components/PageTwo.vue'
  import Counter from './components/Counter.vue'


export default {
  name: 'App',
  components: {
    HelloWorld, 
    PageTwo,
    Counter,
    FullModalPopUp
   
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
