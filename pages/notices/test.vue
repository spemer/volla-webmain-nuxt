<template lang="pug">
  #div test
</template>

<script>
export default {
  created() {
    this.$axios.get('./json/notices.json').then((res) => {
      console.log(res.data)
    })
  }
}
</script>
