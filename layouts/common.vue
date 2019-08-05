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
const Header = () => import('~/components/Header')
const Footer = () => import('~/components/Footer')
const Kakao = () => import('~/components/misc/Kakao')

export default {
  components: {
    Header,
    Footer,
    Kakao
  }
}
</script>
