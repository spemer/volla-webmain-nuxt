import Vue from 'vue'

Vue.filter('dateFormatting', (arg) => {
  return '20' + arg.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '. ')
})
