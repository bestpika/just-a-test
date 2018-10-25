export default {
  install (Vue, options) {
    Vue.prototype.$hack = function () {
      console.info('$hack')
      console.dir(this)
    }
    Vue.mixin({
      created () {
        console.info('$hack is installed.')
        console.dir(this)
      }
    })
  }
}
