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
import { globalVar } from '~/assets/js/globalVar'

const Hero = () =>
  import(
    /* webpackChunkName: 'components-seller-Hero' */ '~/components/seller/Hero'
  )
const VideoEmbed = () =>
  import(
    /* webpackChunkName: 'components-seller-VideoEmbed' */ '~/components/seller/VideoEmbed'
  )
const StatsList = () =>
  import(
    /* webpackChunkName: 'components-seller-StatsList' */ '~/components/seller/StatsList'
  )
const StartWith = () =>
  import(
    /* webpackChunkName: 'components-seller-StartWith' */ '~/components/seller/StartWith'
  )
const Benefits = () =>
  import(
    /* webpackChunkName: 'components-seller-Benefits' */ '~/components/seller/Benefits'
  )
const Benefits2 = () =>
  import(
    /* webpackChunkName: 'components-seller-Benefits2' */ '~/components/seller/Benefits2'
  )
const JoinUs = () =>
  import(
    /* webpackChunkName: 'components-home-JoinUs' */ '~/components/home/JoinUs'
  )

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
