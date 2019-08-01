<template lang="pug">
  div#notices
    div.container
      div.notices__wrapper(
        v-for="(section, index) in Object.keys(noticeEntries)"
        :key="index"
      )
        div.notices__list(
          v-for="entry in noticeEntries[section]"
          :key="entry.id"
        )
          div.notices__list--each
            h3.notices__list--title(
              @click="goDetails(entry.id)"
            ) {{ entry.title }}
              span.notices__list--date {{ '20' + entry.ymd.toString().replace(/\B(?=(\d{2})+(?!\d))/g, '. ') }}
</template>

<script>
import NOTICE_ENTRIES from '~/static/json/notices.json'
import { globalVar } from '~/assets/js/globalVar'

export default {
  head: () => ({
    title: `${globalVar.serviceEn} - 공지사항`,
    titleTemplate: '%s',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${globalVar.serviceEn} - 공지사항`
      },
      {
        itemprop: 'description',
        content: `${globalVar.serviceEn} - 공지사항`
      },
      {
        property: 'og:description',
        content: `${globalVar.serviceEn} - 공지사항`
      },
      {
        name: 'twitter:description',
        content: `${globalVar.serviceEn} - 공지사항`
      }
    ]
  }),

  computed: {
    noticeEntries: () => {
      return NOTICE_ENTRIES
    }
  },

  methods: {
    goDetails(id) {
      this.$router.push({
        path: id,
        params: {
          id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#notices {
  margin: 0 auto;
  padding-top: $grid2x;
  max-width: 480px !important;

  .notices__wrapper {
    max-width: 480px !important;

    .notices__list {
      cursor: pointer;

      .notices__list--each {
        border-bottom: 1px solid $texteee;

        .notices__list--title {
          @include font-size($grid4x);
        }

        .notices__list--date {
          color: $black54;
          font-weight: 400;
          @include font-size($grid3x);

          &::before {
            content: '\a';
            white-space: pre;
          }
        }
      }
    }
  }
}
</style>
