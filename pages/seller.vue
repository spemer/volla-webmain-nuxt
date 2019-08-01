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
import Hero from '~/components/seller/Hero'
import VideoEmbed from '~/components/seller/VideoEmbed'
import StatsList from '~/components/seller/StatsList'
import StartWith from '~/components/seller/StartWith'
import Benefits from '~/components/seller/Benefits'
import Benefits2 from '~/components/seller/Benefits2'
import JoinUs from '~/components/home/JoinUs'
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
