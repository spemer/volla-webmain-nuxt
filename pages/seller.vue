<template lang="pug">
  div#microsite
    Hero
    VideoEmbed.section__each
    StatsList.section__each
    StartWith.section__each
    Benefits.section__each
    Benefits2.section__each
    JoinUs.section__each
</template>

<script>
const Hero = () => import('~/components/seller/Hero')
const VideoEmbed = () => import('~/components/seller/VideoEmbed')
const StatsList = () => import('~/components/seller/StatsList')
const StartWith = () => import('~/components/seller/StartWith')
const Benefits = () => import('~/components/seller/Benefits')
const Benefits2 = () => import('~/components/seller/Benefits2')
const JoinUs = () => import('~/components/home/JoinUs')
import { globalVar } from '~/assets/js/globalVar'

export default {
  layout(context) {
    return 'common'
  },

  head: () => ({
    title: globalVar.serviceEn,
    titleTemplate: `%s - ${globalVar.taglineSeller}`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineSeller}`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineSeller}`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineSeller}`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - ${globalVar.taglineSeller}`
      }
    ]
  }),

  components: {
    Hero,
    VideoEmbed,
    StatsList,
    StartWith,
    Benefits,
    Benefits2,
    JoinUs
  }
}
</script>
