<template lang="pug">
  div#redirect
    div.container
      div.redirect__wrapper
        img.redirect__wrapper--img(
          src="/img/dist/launcher.svg"
        )
        p.redirect__wrapper--text {{ serviceKo }}

        nuxt-link.global__cta(
          :to="'/'"
        )
          button.global__cta--btn(
            :title="website"
          ) {{ website }}
</template>

<script>
import { globalVar } from '~/assets/js/globalVar'

export default {
  data: () => ({
    website: '웹사이트 바로가기',
    serviceKo: globalVar.serviceKo
  }),

  head: () => ({
    title: globalVar.serviceEn,
    titleTemplate: `%s - 앱 다운로드`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - 앱 다운로드`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - 앱 다운로드`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - 앱 다운로드`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - 앱 다운로드`
      }
    ]
  }),

  mounted() {
    const android = globalVar.androidStore
    const ios = globalVar.iosStore
    const unknown = globalVar.websiteUrl

    if (this.userAgent === 'Android') {
      window.location.href = android
    } else if (this.userAgent === 'iOS') {
      window.location.href = ios
    } else {
      alert('안드로이드, iOS 등의 모바일 운영체제에서만 다운로드 가능합니다.')
      window.location.href = unknown
    }
  }
}
</script>

<style lang="scss" scoped>
#redirect {
  text-align: center;

  .redirect__wrapper {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%, -50%));

    .redirect__wrapper--img {
      display: block;
      margin: 0 auto;
      width: $grid16x;
    }

    .redirect__wrapper--text {
      margin-top: $grid2x;
    }

    .global__cta {
      display: block;
      margin-top: $grid32x;
    }
  }
}
</style>
