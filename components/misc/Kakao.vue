<template lang="pug">
  div#plusfriend-addfriend-button(
    v-if="this.$route.path === '/' || this.$route.path === '/seller' || this.$route.path === '/sellerform'"
  )
    img#kakao__pf(
      title="카카오톡 문의하기"
      @click="plusFriendChat"
      src="/img/dist/kakao.svg"
    )
</template>

<script>
export default {
  methods: {
    plusFriendChat: () => {
      window.Kakao.PlusFriend.chat({
        plusFriendId: process.env.KAKAO_URL
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#plusfriend-addfriend-button {
  &:not(.contact__each) {
    @keyframes popup {
      from {
        opacity: 0;
        @include transform(scale(0));
      }

      to {
        opacity: 1;
        @include transform(scale(1));
      }
    }

    right: $grid4x;
    bottom: $grid6x;
    position: fixed;
    animation: popup 0.25s ease-in-out 2.5s 1 forwards;
    @include transform(scale(0));

    img {
      cursor: pointer;
      border-radius: $grid8x;
      transition: all 0.25s ease;
      @include box-shadow($grid3x, $grid4x, $black08);

      &:hover {
        @include transform(scale(1.05));
        @include box-shadow($grid3x, $grid4x, $black16);
      }
    }
  }
}
</style>
