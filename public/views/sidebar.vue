<template lang="html">
    <div id="sidebar">
        <div v-for="(list, name) in sidebar">
            <div class="sidebar-category">{{ name }}</div>

        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
