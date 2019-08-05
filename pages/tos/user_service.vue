<template lang="pug">
  div(
    v-html="userService"
  )
</template>

<script>
import userService from '~/static/markdowns/tos/190326/user_service.md'

export default {
  computed: {
    userService: () => userService
  }
}
</script>
