<template lang="pug">
  div(
    v-html="ceoService"
  )
</template>

<script>
import ceoService from '~/static/markdowns/tos/190326/ceo_service.md'

export default {
  computed: {
    ceoService: () => ceoService
  }
}
</script>
