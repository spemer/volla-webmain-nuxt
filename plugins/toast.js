import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

Vue.mixin({
  methods: {
    toast(str) {
      this.$toasted.show(str, {
        theme: 'primary',
        position: 'bottom-center',
        duration: 2000
      })
    }
  }
})
