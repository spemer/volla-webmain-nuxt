<template lang="pug">
  div#hero
    div.hero__dim
      div.container
        div.hero__text.center
          h1.hero__text--title
            | 라이브 방송으로 만나는
            span.hero__title--nbsp &nbsp;&nbsp;
            span.hero__br
            | 오프라인 쇼핑
          p.hero__text--subtitle {{ serviceEn }}를 소개합니다
          p.hero__text--spantext
            | 라이브 방송으로 여러분의 상품을
            span.hero__title--nbsp &nbsp;
            span.hero__br
            | 더욱 쉽고 확실하게 판매하는
            br
            | 여성 패션 & 뷰티 모바일 라이브 쇼핑 플랫폼

          DownloadBtn.dlbtn
</template>

<script>
import { globalVar } from '~/assets/js/globalVar'

const DownloadBtn = () =>
  import(
    /* webpackChunkName: 'components-misc-DownloadBtn' */ '~/components/misc/DownloadBtn'
  )

export default {
  name: 'Hero',

  components: {
    DownloadBtn
  },

  data: () => ({
    serviceEn: globalVar.serviceEn
  })
}
</script>
