<template>
    <div class="search">
        <form v-on:submit.prevent="doRequest(query)">
            <input v-model="query">
        </form>
        <span>Found images({{ numberOfImages }})</span>
    </div>
</template>
<script>
export default {
    name: "Search",
    data() {
        return  {
            numberOfImages: 0,
            query: ''
        }
    },
    methods: {
        doRequest(query) {
            this.numberOfImages = query.length
        }
    }
}
</script>