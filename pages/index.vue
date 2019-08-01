<template lang="pug">
  div#home
    Header
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
    Footer
    Kakao
</template>

<script>
import Header from '~/components/Header'
import Hero from '~/components/home/Hero'
import Service from '~/components/home/Service'
import EasyStart from '~/components/home/EasyStart'
import Download from '~/components/home/Download'
import JoinUs from '~/components/home/JoinUs'
import Footer from '~/components/Footer'
import Kakao from '~/components/misc/Kakao'
import { globalVar } from '~/assets/js/globalVar'

export default {
  head: () => ({
    title: globalVar.serviceEn,
    titleTemplate: '%s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineLong}`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineLong}`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineLong}`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineLong}`
      }
    ]
  }),

  components: {
    Header,
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs,
    Footer,
    Kakao
  }
}
</script>

<style lang="scss"></style>
