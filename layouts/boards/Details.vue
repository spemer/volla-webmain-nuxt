<template lang="pug">
  div#markdown
    router-view.container

    div#closebtn
      nuxt-link.global__cta(
        to="/notices"
      )
        button.global__cta--btn(
          type="button"
        ) 목록으로
</template>

<script>
// import NOTICE_ENTRIES from '~/static/data/notice.json'
import { dateFormatting } from '~/mixins/dateFormatting'
import { globalVar } from '~/assets/js/globalVar'

export default {
  name: 'Markdown',

  mixins: [dateFormatting],

  // computed: {
  //   noticeEntries: () => {
  //     return NOTICE_ENTRIES
  //   }
  // },

  metaInfo: {
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: `%s`
  }

  // mounted() {
  //   // append date info
  //   let arr = this.noticeEntries['notice']

  //   let idx = arr.findIndex((item, idx) => {
  //     return item.id === this.$route.params.id
  //   })

  //   let getTitle = document.querySelectorAll('section h1')[0]
  //   let setDate = document.createElement('h4')
  //   getTitle.parentNode.insertBefore(setDate, getTitle.nextSibling)
  //   setDate.innerHTML = this.dateFormatting(arr[idx].ymd)

  //   // set _blank every anchor tags
  //   ;[...document.querySelectorAll('section a')].forEach((anchor) => {
  //     let getAnchorTarget = anchor.getAttribute('target')
  //     return !getAnchorTarget && anchor.setAttribute('target', '_blank')
  //   })
  // }
}
</script>

<style lang="scss" scoped>
#markdown {
  margin: 0 auto;
  padding-bottom: $grid32x;
  padding: auto 0 !important;
  max-width: 480px !important;

  .container {
    max-width: 480px !important;
    padding: 0 $grid2x !important;
    width: calc(100% - #{$grid4x});
  }

  #closebtn {
    left: 0;
    width: 100%;
    height: auto;
    position: fixed;
    bottom: -#{$grid16x};
    background-color: #fff;
    padding: $grid2x 0 $grid4x;
    @include gradient();

    // iPhone X safearea
    @supports (padding-bottom: env(safe-area-inset-bottom)) {
      padding-bottom: calc(env(safe-area-inset-bottom)) !important;
    }

    padding-bottom: 0 !important;

    .global__cta--btn {
      height: $header;
      color: $brand_pink;
      margin: $grid4x auto;
      width: calc(100% - #{$grid8x});
      background-color: $brand_pink_16;
      @include border-radius();
      @include font-size($grid4x);
    }
  }
}
</style>
