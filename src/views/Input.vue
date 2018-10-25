<template>
  <form class="container py-5">
    <div class="row">
      <div class="col-sm">
        <label>輸入1</label>
        <input type="text" class="form-control kb-0-0">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label>輸入2</label>
        <input type="text" class="form-control kb-1-0">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label>輸入3</label>
        <select class="form-control kb-2-0">
          <option></option>
          <option>Human</option>
          <option>Cat</option>
          <option>Dog</option>
          <option>Coffee</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label>輸入4</label>
        <input type="datetime-local" v-model="input4" class="form-control kb-3-0">
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label>輸入5</label>
        <input type="text" class="form-control kb-4-0">
      </div>
    </div>
  </form>
</template>
<script>
  export default {
    name: 'Input',
    data() {
      return {
        input4: dayjs().format('YYYY-MM-DDTHH:mm')
      }
    },
    mounted() {
      this.kbInit()
    },
    beforeDestroy() {
      this.kbDele()
    }
  }

</script>
