<template>
    <div v-if="results.length == 0">No items found</div>
</template>
<script>
export default {
    name: "Gallery",
    props: {
        results: {
            type: Array,
            default: []
        } 
    } 
}
</script>