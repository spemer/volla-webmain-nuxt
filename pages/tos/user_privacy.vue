<template lang="pug">
  div(
    v-html="userPrivacy"
  )
</template>

<script>
import userPrivacy from '~/static/markdowns/tos/190326/user_privacy.md'

export default {
  computed: {
    userPrivacy: () => userPrivacy
  }
}
</script>
