<template>
  <div class="hello">
    <h2>{{ talk }}</h2>
    <h1>{{ msg }}</h1>
    <p>
      Rocky 2 is awesome<br>
      check it out here
      <a href="https://www.imdb.com/title/tt0079817/" target="_blank" rel="noopener">imdb Rocky II</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'PageTwo',
  props: {
    msg: String,
    talk: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
