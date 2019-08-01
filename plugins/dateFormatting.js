import Vue from 'vue'

Vue.mixin({
  methods: {
    dateFormatting: (arg) => {
      return '20' + arg.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '. ')
    }
  }
})
