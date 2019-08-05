<template lang="pug">
  div#home
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
</template>

<script>
import { globalVar } from '~/assets/js/globalVar'
const Hero = () => import('~/components/home/Hero')
const Service = () => import('~/components/home/Service')
const EasyStart = () => import('~/components/home/EasyStart')
const Download = () => import('~/components/home/Download')
const JoinUs = () => import('~/components/home/JoinUs')

export default {
  layout(context) {
    return 'common'
  },

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
    Hero,
    Service,
    EasyStart,
    Download,
    JoinUs
  }
}
</script>
