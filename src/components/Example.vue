<template>
    <div id="app-6">
        <p>{{message}}</p>
        <input v-model="message">
    </div>
</template>

<script>
// export default{ 
    var app6 = new Vue({
        el: 'app-6',
        data: {
            message: 'Do right'
        }
    })
//}
</script>
