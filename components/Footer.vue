<template lang="pug">
  div#footer(
    v-if="!isApp"
  )
    div.container
      div.footer__copyright
        p.footer__copyright--text
          | ⓒ {{ thisYear }} {{ companyName }}., All Rights Reserved.

        p.footer__terms(
            v-for="(section, index) in tosEntries"
          )
          span.footer__terms--each(
            v-for="entry in tosEntries[tosRenewDate]"
            :key="entry.id"
            target="_blank"
            @click="tosRouter(entry.id, tosRenewDate)"
          ) {{ entry.title }}

        p.footer__copyright--info
          span.footer__copyright--title(
            v-for="(key, info) in infoList"
            :key="key"
          ) {{ info }}
            span.footer__copyright--desc {{ key }}
          span.footer__copyright--title 이메일
            span.footer__copyright--desc.clipboard(
            @click="toast('이메일 주소가 복사되었습니다')"
            v-clipboard:copy="mailTo"
            title="이메일 주소를 복사하려면 클릭하세요"
          ) {{ mailTo }}

        no-ssr
          a.footer__sns(
            v-for="(value, key) in snsList"
            :key="key"
            target="_blank"
            :href="value[0]"
            :title="serviceKo + ' ' + value[2] + '(새 창)'"
          )
            i.footer__sns--logo.fab(
              :class="value[1]"
            )
</template>

<script>
import { mapState } from 'vuex'
import { globalVar } from '~/assets/js/globalVar'
import TOS_ENTRIES from '~/static/json/tos.json'

export default {
  data: () => ({
    tosEntries: null,
    tosRenewDate: globalVar.tosDateNowNumber,
    mailTo: globalVar.mailTo,
    serviceKo: globalVar.serviceKo,
    companyName: globalVar.companyName,
    toastText: '이메일 주소가 복사되었습니다'
  }),

  computed: {
    ...mapState(['thisYear', 'infoList', 'tosList', 'snsList', 'isApp'])
  },

  created() {
    this.$axios.get('./json/tos.json').then((res) => {
      this.tosEntries = res.data
    })
  },

  methods: {
    tosRouter(id, date) {
      const popupTos = this.$router.resolve({
        path: `tos/${id}`,
        params: {
          id
        },
        query: {
          date
        }
      })

      window.open(popupTos.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
#footer {
  padding: $grid12x $grid4x;
  background-color: $black04;

  ::selection {
    color: #fff;
    background-color: $brand-pink !important;
  }

  @media #{$pablet} {
    padding: $grid12x $grid4x $grid16x;
  }

  .footer__copyright {
    margin: 0 auto;
    color: $black24;

    .footer__copyright--info,
    .footer__terms {
      margin-top: $grid5x;
    }

    .footer__copyright--text {
      color: $black38;
      font-weight: 700;
      margin-bottom: -#{$grid2x};
      @include font-size(14px);
    }

    .footer__terms {
      font-weight: 700;
      margin-top: $grid6x;
      @include line-height($grid3x);

      .footer__terms--each {
        color: $black24;
        cursor: pointer;
        @include font-size($grid3x);
        @include transition(color 0.25s ease);

        &:hover {
          color: $black54;
        }

        &:not(:first-child) {
          &::before {
            content: '·';
            color: $black24;
            margin: 0 $grid2x;
          }
        }
      }
    }

    .footer__copyright--info {
      margin-bottom: $grid8x;
      @include font-size(10px);

      span {
        display: inline-block;
        @include font-size(10px);

        &.footer__copyright--title {
          display: block;
          font-weight: 400;
          @include line-height($grid3x);
        }

        &.footer__copyright--desc {
          font-weight: 900;
          display: inline;

          &::before {
            content: ' ';
            margin-right: $grid;
          }
        }
      }
    }

    .clipboard {
      cursor: pointer;
      @include transition(color 0.25s ease);

      &:hover {
        color: $black54;
      }
    }

    .footer__sns {
      color: $black24;
      font-size: $grid5x;
      display: inline-block;

      .footer__sns--logo {
        margin: $grid2x;
        padding: $grid2x;
        margin-bottom: $grid4x;
        @include transition(all 0.25s ease);

        &:hover {
          color: $black54;
        }

        &.fa-facebook-square {
          margin-left: -#{$grid2x};

          &:hover {
            color: $facebook;
          }
        }

        &.fa-instagram {
          &:hover {
            color: $instagram;
          }
        }
      }
    }
  }
}
</style>
