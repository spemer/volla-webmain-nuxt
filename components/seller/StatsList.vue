<template lang="pug">
  div#statsList
    div.container
      h1.easy__text--title.section__title
        | {{ serviceKo }}는 라이브 방송을 통해
        br
        | 매출을 극대화시킬 수 있는 플랫폼입니다

      div.service__card
        div.service__card--each(
          v-for="(value, key, index) in statsList"
          :key="key"
        )
          span.service__card--title {{ value.value }}{{ value.suffix }}
          p.service__card--text.section__subtitle {{ value.title }}
</template>

<script>
import { mapState } from 'vuex'
import { globalVar } from '~/assets/js/globalVar'

export default {
  name: 'StatsList',

  data: () => ({
    serviceKo: globalVar.serviceKo
  }),

  computed: {
    ...mapState(['statsList'])
  }
}
</script>
