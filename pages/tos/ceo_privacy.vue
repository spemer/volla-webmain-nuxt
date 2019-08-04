<template lang="pug">
  div(
    v-html="ceoPrivacy"
  )
</template>

<script>
import ceoPrivacy from '~/static/markdowns/tos/190326/ceo_privacy.md'

export default {
  computed: {
    ceoPrivacy: () => ceoPrivacy
  }
}
</script>
