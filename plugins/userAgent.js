import Vue from 'vue'

Vue.mixin({
  data: () => ({
    userAgent: null
  }),

  mounted() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/windows phone/i.test(userAgent)) {
      this.userAgent = 'Windows Phone'
    } else if (/android/i.test(userAgent)) {
      this.userAgent = 'Android'
    } else if (
      /iPad|iPhone|iPod/.test(userAgent) ||
      (navigator.appVersion.includes('Mac') && !window.MSStream)
    ) {
      this.userAgent = 'iOS'
    } else this.userAgent = 'unknown'
  }
})
