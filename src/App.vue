<template>
  <div id="app">
    <h1>Search images from NASA:</h1>
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font: 14px/1 "Open Sans", sans-serif;
	color: #555;
	background: #e5e5e5;
}

h1 {
	margin: 40px 0;
	font-size: 24px;
	text-align: center;
}
</style>
