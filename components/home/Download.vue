<template lang="pug">
  div#download
    div.container
      h1.download__title.section__title 앱으로 간편하게 즐겨보세요
      p.section__subtitle
        | {{ serviceKo }} 앱은 안드로이드 구글 플레이, 아이폰 앱스토어에서 다운로드 받으실 수 있습니다.

      DownloadBtn

      div.download__mockup
        img.download__mockup--img(
          src="/img/dist/screen.png"
        )
</template>

<script>
import { globalVar } from '~/assets/js/globalVar'

const DownloadBtn = () =>
  import(
    /* webpackChunkName: 'components-misc-DownloadBtn' */ '~/components/misc/DownloadBtn'
  )

export default {
  name: 'Download',

  components: {
    DownloadBtn
  },

  data: () => ({
    serviceKo: globalVar.serviceKo
  })
}
</script>

<style lang="scss" scoped>
#download {
  $height: 664px;

  height: $height;
  overflow-y: hidden;
  border-top: 1px solid $texteee;

  @media #{$pablet2} {
    height: calc(#{$height} + 64px);
  }

  @media #{$pablet} {
    height: calc(#{$height} + 11px);
  }

  @media #{$middle2} {
    height: calc(#{$height} + 19px);
  }

  @media #{$mobile} {
    height: calc(#{$height} - 53px);
  }

  .download__mockup {
    text-align: center;

    .download__mockup--img {
      width: 320px;
      margin: 0 auto;

      @media #{$mobile} {
        width: 280px;
      }
    }
  }
}
</style>
