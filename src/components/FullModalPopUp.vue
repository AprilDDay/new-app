import FullPagePopUp.vue from 'vue-fullpage-modal'
Vue.use(FullPageModal)

<template>
  <div>
    <img @click="openModal" src="/logo.png" >
  </div>
</template>
<script>
//import FullPagePopUp.vue from 'vue-fullpage-modal'
//Vue.use(FullPageModal)

import HelloWorld from './HelloWorld'

export default {
// ...
  methods: {
    openModal() {
      this.$FModal.show(
        { component: HelloWorld },
        { msg: "Welcome to Your Vue.js App" }
      )
    }
  }
}
</script>