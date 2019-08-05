<template lang="pug">
  div#eventlanding
    div.eventlanding__wrapper
      img.eventlanding__img(
        src="/img/dist/event_landing.png"
      )
      JoinUs
</template>

<script>
import { globalVar } from '~/assets/js/globalVar'
const JoinUs = () =>
  import(/* webpackChunkName: 'components-JoinUs' */ '~/components/home/JoinUs')

export default {
  head: () => ({
    title: `${globalVar.serviceEn} - 이벤트`,
    titleTemplate: '%s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - 이벤트`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - 이벤트`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - 이벤트`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - 이벤트`
      }
    ]
  }),

  components: {
    JoinUs
  }
}
</script>

<style lang="scss" scoped>
#eventlanding {
  text-align: center;
  padding: $grid8x 0 $grid4x;

  #joinus {
    border: none !important;
  }

  .eventlanding__wrapper {
    .eventlanding__img {
      width: 100%;
      max-width: 590px;
    }
  }
}
</style>
