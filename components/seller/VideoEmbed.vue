<template lang="pug">
  div#videoEmbed
    div.container
      h1.easy__text--title.section__title
        | 이제 소비자는 예쁜 제품사진이 아닌
        br
        | 영상을 통한 소통으로 구매를 합니다

      youtube.video__body(
        :video-id="videoId"
      )
      p.videoEmbed__from
        span.videoEmbed__from--text 영상출처:
          a.videoEmbed__from--link(
            :href="videoLink"
            target="_blank"
            :title="`${videoChannel} 님 유튜브 채널 바로가기(새 창)`"
          ) &nbsp;{{ videoChannel }}&nbsp;
            i.videoEmbed__from--icon.fab.fa-youtube
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

export default {
  name: 'VideoEmbed',

  data: () => ({
    videoChannel: '춤추는 변호사',
    videoId: process.env.YT_ID,
    videoLink: 'https://www.youtube.com/channel/UCoeXIHBxfJ7ahvMV4y8a9wQ'
  })
}
</script>
