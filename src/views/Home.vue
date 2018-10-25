<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-sm-4 mx-auto">
        <div class="list-group">
          <router-link to="Input" class="list-group-item list-group-item-action kb-0-0">選單1</router-link>
          <a href="#" class="list-group-item list-group-item-action kb-1-0">選單2</a>
          <a href="#" class="list-group-item list-group-item-action kb-2-0">選單3</a>
          <a href="#" class="list-group-item list-group-item-action kb-3-0">選單4</a>
          <a href="#" class="list-group-item list-group-item-action kb-4-0">選單5</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      this.kbInit()
    },
    beforeDestroy () {
      this.kbDele()
    }
  }

</script>
