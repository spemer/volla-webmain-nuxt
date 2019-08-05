import Vue from 'vue'
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

Vue.use(Toast, {
  type: 'bottom',
  duration: 2500,
  wordWrap: true
})
