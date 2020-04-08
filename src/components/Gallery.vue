<template>
  <div v-if="results.length == 0">
    No items found
  </div>
  <div v-else>
    <div class="gallery cf">
      <div
        v-for="(result, key) in results"
        :key="key"
      >
        <img :src="result.links[0].href">
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Gallery',
	props: {
		results: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped scss>
.gallery {
	width: 640px;
	margin: 0 auto;
	padding: 5px;
	background: #fff;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.gallery > div {
	position: relative;
	float: left;
	padding: 5px;
	min-height: 220px;
}

.gallery > div > img {
	width: 200px;
	vertical-align: middle;
	transition: 0.1s transform;
	transform: translateZ(0); /* hack */
}

.gallery > div:hover {
	z-index: 1;
}

.gallery > div:hover > img {
	transform: scale(1.8, 1.8);
	transition: 0.3s transform;
}

.cf:before,
.cf:after {
	display: table;
	content: "";
	line-height: 0;
}

.cf:after {
	clear: both;
}
</style>
