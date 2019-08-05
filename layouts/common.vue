<template lang="pug">
  div
    Header
    nuxt
    Footer
    Kakao
    script(
      async
      src="https://developers.kakao.com/sdk/js/kakao.min.js"
    )
</template>

<script>
const Header = () =>
  import(/* webpackChunkName: 'components-Header' */ '~/components/Header')
const Footer = () =>
  import(/* webpackChunkName: 'components-Footer' */ '~/components/Footer')
const Kakao = () =>
  import(/* webpackChunkName: 'components-Kakao' */ '~/components/misc/Kakao')

export default {
  components: {
    Header,
    Footer,
    Kakao
  }
}
</script>
