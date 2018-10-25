<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      this.$hack()
    }
  }

</script>

<style>
</style>
