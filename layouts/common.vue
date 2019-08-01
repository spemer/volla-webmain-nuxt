<template lang="pug">
  div
    Header
    nuxt
    Footer
    Kakao
    script(
      src="https://developers.kakao.com/sdk/js/kakao.min.js"
    )
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Kakao from '~/components/misc/Kakao'

export default {
  components: {
    Header,
    Footer,
    Kakao
  }
}
</script>
