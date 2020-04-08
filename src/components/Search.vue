<template>
  <div class="search">
    <form @submit.prevent="doRequest(query)">
      <input v-model="query">
    </form>
    Found images({{ numberOfImages }})
    <Gallery :results="results" />
  </div>
</template>

<script>
import axios from 'axios'
import Gallery from '@/components/Gallery'

export default {
	name: 'Search',
	components: {
		Gallery
	},
	data() {
		return {
			numberOfImages: 0,
			query: "",
			results: []
		}
	},
	methods: {
		doRequest(query) {
			axios
				.get('https://images-api.nasa.gov/search', {
					params: {
						media_type: 'image',
						q: query
					}
				})
				.then(response => {
					this.results = response.data.collection.items
					this.numberOfImages = this.results.length
				})
		}
	}
}
</script>

<style scopped scss>
.search {
	text-align: center;
}
.search input {
	padding: 6px;
	margin-bottom: 12px;
	font-size: 18px;
}
</style>
