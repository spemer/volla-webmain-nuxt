<template lang="pug">
  div#home
    Hero
    Service
    EasyStart.section__each
    Download.section__each
    JoinUs.section__each
</template>

<script>
import Hero from '~/components/home/Hero'
import Service from '~/components/home/Service'
import EasyStart from '~/components/home/EasyStart'
import Download from '~/components/home/Download'
import JoinUs from '~/components/home/JoinUs'
import { globalVar } from '~/assets/js/globalVar'

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
