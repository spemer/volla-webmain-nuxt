<template lang="pug">
  div#sellerForm.submit(
    :class="{app: isApp}"
  )
    div.container
      div.sbmt
        h1.sellerform__form--title 감사합니다
        p.sellerform__form--subtitle
          | {{ serviceKo }} 셀러 입점신청이 완료되었습니다.
          br
          | 빠른 시일 내에 안내메일을 발송해드리겠습니다.

        div.sellerform__form--wrapper
          div.sellerform__form--value(
            v-for="list in sellerForm_List"
          )
            p.sellerform__form--title.text(
              v-if="list.value"
            ) {{ list.text }}
              span.value {{ list.value }}

          p.sellerform__form--title.text(
            v-if="sellerForm_CategoryValue.value"
          ) {{ sellerForm_Category[0].text }}
            span.value {{ sellerForm_CategoryValue.value }}

          p.sellerform__form--title.text(
            v-if="sellerForm_Details.value"
          ) {{ sellerForm_Details.text }}
            span.value {{ sellerForm_Details.value }}

          p.sellerform__form--title.text 개인정보 수집 및 이용
            span.value( v-if="marketing.val_1" ) 동의
            span.value( v-else ) 미동의

          p.sellerform__form--title.text 마케팅 정보 수신
            span.value( v-if="marketing.val_2" ) 동의
            span.value( v-else ) 미동의

        nuxt-link.global__cta(
          v-if="this.$router.path === '/submit'"
          :to="'/'"
        )
          button.global__cta--btn(
          ) 메인으로
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { globalVar } from '~/assets/js/globalVar'

export default {
  layout(context) {
    return 'common'
  },

  data: () => ({
    serviceKo: globalVar.serviceKo
  }),

  head: () => ({
    title: `${globalVar.serviceEn} - 입점신청완료`,
    titleTemplate: '%s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - 입점신청완료`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - 입점신청완료`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - 입점신청완료`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - 입점신청완료`
      }
    ]
  }),

  computed: {
    ...mapState([
      'sellerForm_List',
      'sellerForm_CategoryValue',
      'sellerForm_Details',
      'sellerForm_Category',
      'marketing',
      'tokenState',
      'isApp'
    ])
  },

  beforeCreate() {
    if (!this.$store.state.tokenState) {
      this.$router.replace({
        path: '/sellerform'
      })
    }
  },

  mounted() {
    return this.$route.path === '/submit-app'
      ? this.SET_CLASS_APP(true)
      : this.SET_CLASS_APP(false)
  },

  destroyed() {
    this.REMOVE_FORM_VAL()
    this.SET_MARKETING_BOOL(false)
    this.SET_TOKEN_BOOL(false)
  },

  methods: {
    ...mapMutations([
      'REMOVE_FORM_VAL',
      'SET_MARKETING_BOOL',
      'SET_TOKEN_BOOL',
      'SET_CLASS_APP'
    ])
  }
}
</script>

<style lang="scss" scoped>
.app {
  &.submit {
    padding-top: $grid8x !important;
  }
}
</style>
