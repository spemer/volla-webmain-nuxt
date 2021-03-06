<template lang="pug">
  div#sellerForm(
    :class="{app: isApp}"
  )
    div.container
      h1.sellerform__form--title {{ sellerForm }}
      p.sellerform__form--subtitle {{ serviceKo }} 셀러(판매자)용 입점 신청서입니다.
        span 는 필수 입력 항목입니다.

      form.sellerform__form--form(
        name="sellerform__form"
        @submit.prevent="sendPost"
      )
        p.sellerform__form--title(
          v-for="list in sellerForm_List"
        ) {{ list.text }}
          span(
            :required="list.required"
          )
          input.sellerform__form--input(
            :type="list.type"
            :name="list.name"
            v-model.trim="list.value"
            :pattern="list.pattern"
            :required="list.required"
            :minlength="list.minlength"
            :maxlength="list.maxlength"
            :placeholder="list.placeholder"
          )
          span.sellerform__form--helpText {{ list.helpText }}

        p.sellerform__form--title.host {{ sellerForm_Category[0].text }}
          span(
            :required="sellerForm_Category[0].required"
          )
            div.sellerform__form--div(
              v-for="category in sellerForm_Category"
            )
              input.sellerform__form--input(
                :id="category.id"
                :type="category.type"
                :name="category.name"
                :value="category.buttonText"
                :required="category.required"
                v-model="sellerForm_CategoryValue.value"
              )
              label.sellerform__form--label(
                :for="category.id"
                :name="category.name"
                :class="category.class"
                :title="category.buttonText"
                v-model="sellerForm_CategoryValue.value"
              ) {{ category.buttonText }}

        p.sellerform__form--title {{ sellerForm_Details.text }}
          textarea.sellerform__form--input.textarea(
            :type="sellerForm_Details.text"
            :name="sellerForm_Details.name"
            v-model.trim="sellerForm_Details.value"
            :placeholder="sellerForm_Details.placeholder"
          )

        p.sellerform__form--condition {{ sellerCondition }}

        div.sellerform__form--terms
          p.sellerform__form--termsDetails(
            v-for="(value, key, index) in marketingTerms"
          ) {{ value.desc }}

        label.sellerform__form--checkbox(
          for="checkbox_1"
          style="font-weight: 700"
        ) {{ marketingTerms.personal.title }}
          input(
            id="checkbox_1"
            type="checkbox"
            v-model="marketing.val_1"
          )
          span.checkmark

        label.sellerform__form--checkbox(
          for="checkbox_2"
        ) {{ marketingTerms.marketing.title }}
          input(
            id="checkbox_2"
            type="checkbox"
            v-model="marketing.val_2"
          )
          span.checkmark

        div.sellerform__form--wrapper
          div.sellerform__form--box
            button.sellerform__form--submit(
              name="sellerform__form"
              @click="checkCategoryValue"
            ) 제출하기
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import { globalVar } from '~/assets/js/globalVar'

export default {
  layout(context) {
    return 'common'
  },

  data: () => ({
    serviceKo: globalVar.serviceKo,
    sellerForm: globalVar.sellerForm,
    sellerCondition: globalVar.sellerCondition
  }),

  head: () => ({
    title: `${globalVar.serviceEn} - ${globalVar.sellerForm}`,
    titleTemplate: '%s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - ${globalVar.sellerForm}`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - ${globalVar.sellerForm}`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - ${globalVar.sellerForm}`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - ${globalVar.sellerForm}`
      }
    ]
  }),

  computed: {
    ...mapState([
      'sellerForm_Category',
      'marketing',
      'marketingTerms',
      'tokenState',
      'isApp'
    ]),

    sellerForm_List: {
      get() {
        return this.$store.state.sellerForm_List
      },
      set(value) {
        this.$store.commit('UPDATE_FORM_LIST', value)
      }
    },

    sellerForm_CategoryValue: {
      get() {
        return this.$store.state.sellerForm_CategoryValue
      },
      set(value) {
        this.$store.commit('UPDATE_FORM_CATEGORY', value)
      }
    },

    sellerForm_Details: {
      get() {
        return this.$store.state.sellerForm_Details
      },
      set(value) {
        this.$store.commit('UPDATE_FORM_DETAILS', value)
      }
    },

    marketing: {
      get() {
        return this.$store.state.marketing
      },
      set(value) {
        this.$store.commit('SET_MARKETING_BOOL', value)
      }
    }
  },

  mounted() {
    return this.$route.path === '/sellerform-app'
      ? this.SET_CLASS_APP(true)
      : this.SET_CLASS_APP(false)
  },

  methods: {
    ...mapMutations({
      SET_TOKEN_BOOL: 'SET_TOKEN_BOOL',
      SET_CLASS_APP: 'SET_CLASS_APP',
      ADD_FORM_HELPTEXT: 'ADD_FORM_HELPTEXT'
    }),

    checkCategoryValue() {
      if (!this.sellerForm_List[0].value) {
        this.ADD_FORM_HELPTEXT([0, '이메일 주소는 필수 입력사항입니다.'])
      } else if (this.sellerForm_List[0].value) {
        this.ADD_FORM_HELPTEXT([0, ''])

        if (!this.sellerForm_List[1].value) {
          this.ADD_FORM_HELPTEXT([1, '담당자 이름은 필수 입력사항입니다.'])
        } else if (this.sellerForm_List[1].value) {
          this.ADD_FORM_HELPTEXT([1, ''])

          if (this.sellerForm_List[2].value) {
            return !this.sellerForm_List[2].value.includes('http') ||
              !this.sellerForm_List[2].value.includes('://')
              ? this.ADD_FORM_HELPTEXT([
                  2,
                  `URL은 'http://' 혹은 'https://'로 시작해야 합니다.`
                ])
              : this.ADD_FORM_HELPTEXT([2, ''])
          }

          if (!this.sellerForm_CategoryValue.value) {
            alert('호스트 지원 희망여부를 선택해주세요.')
          }
        }
      }
    },

    sendPost() {
      if (
        this.sellerForm_List[0].value &&
        this.sellerForm_List[1].value &&
        this.sellerForm_CategoryValue.value &&
        this.marketing.val_1
      ) {
        this.$Progress.start()

        this.$toast('요청중입니다. 잠시만 기다려주세요!')

        const base = process.env.BASE_URL
        axios
          .post(
            `${base}/requestSeller`,
            {
              email: this.sellerForm_List[0].value,
              name: this.sellerForm_List[1].value,
              site: this.sellerForm_List[2].value,
              apply_categories: this.sellerForm_CategoryValue.value,
              details: this.sellerForm_Details.value,
              agree_personal_info: this.marketing.val_1,
              agree_marketing_info: this.marketing.val_2
            },
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            }
          )

          .then((response) => {
            this.$Progress.finish()

            this.SET_TOKEN_BOOL(true)
            console.info(response.data)

            return this.isApp
              ? this.$router.push('/submit-app')
              : this.$router.push('/submit')
          })

          .catch((error) => {
            this.$Progress.fail()

            this.SET_TOKEN_BOOL(false)
            alert(`오류입니다. 다시 시도해주세요!\n${error}`)
            console.warn(error)
          })
      } else {
        alert('개인정보 수집 및 이용 동의 여부를 선택해주세요.')
      }
    }
  }
}
</script>
