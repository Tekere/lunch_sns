<template>
  <div class="bl_dashboard">
    <h2 class="el_lv2_ttl">New</h2>
    <shop-container
      v-if="isActiveLunches"
      :one-row="true"
      :shop-data="activeLunches"
      :key="lunches.length"
    ></shop-container>
    <div class="bl_allScheduleArea bl_mainCont_body__bottom">
      <h2 class="el_lv2_ttl">Schedule</h2>
      <calendar :events="events"></calendar>
    </div>
    <!-- <pre>{{ activeLunches }}</pre>
    <hr />
    <pre>{{ lunches }}</pre> -->
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import ShopContainer from '@/components/ShopContainer.vue'
import Calendar from '@/components/Calendar.vue'
import { mapActions, mapGetters } from 'vuex'

import moment from 'moment'

export default {
  name: 'DashBoard',
  data() {
    return {
      //isActiveLunches: false, //shpDataが空ならfalseのまま shop-containerを表示しない
      // activeLunches: [],
    }
  },
  components: {
    // Detail,
    ShopContainer,
    Calendar,
  },
  computed: {
    ...mapGetters(['isLoading', 'isShowDetail', 'lunches','activeLunches']),
    // activeLunches(日付が有効なランチ)の有無で、Newの欄を表示を切り替える
    isActiveLunches: function () {
      if (this.activeLunches.length > 0) {
        return true
      } else {
        return false
      }
    },
    // 募集中のランチカレンダー
    events: function () {
      let result = []
      this.activeLunches.forEach((el) => {
        result.push({
          data: el,
          name: el.data.shop.name,
          start: moment(el.data.requestDate.seconds * 1000).toDate(),
          color: 'blue',
          timed: true,
        })
      })

      return result
    },
  },
  methods: {
    ...mapActions(['stopIsLoading', 'toggleIsShowDetail', 'fetchLunches']),
  },

  created() {
    setTimeout(() => {
      //shop-containerの表示フラグをtrueに切り替え、ローディングも止める
      // app.vueのfetchLunchesの非同期処理が遅れてカクつくため
      this.stopIsLoading()
    }, 600)
  },
}
</script>
<style lang="scss">
.bl_mainCont_body {
  padding: 30px 0;
}
.bl_dashboard_2colCont {
  display: flex;
  justify-content: center;
  .bl_allUserArea {
    width: 60%;
  }
  .bl_weeklyData {
    width: 35%;
  }
}
.bl_mainCont_body__bottom {
  margin-top: 30px;
}
// .theme--light.v-btn.v-btn--has-bg {
//   //カレンダー今日の場所の色
//   // background: ;
// }
</style>
