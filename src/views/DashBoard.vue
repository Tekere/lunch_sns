<template>
  <div class="bl_dashboard">
    <h2 class="el_lv2_ttl">New</h2>
    <shop-container
      v-if="isActiveLunches"
      :one-row="true"
      :shop-data="shopData"
    ></shop-container>
    <div class="bl_allScheduleArea bl_mainCont_body__bottom">
      <h2 class="el_lv2_ttl">Schedule</h2>
      <calendar></calendar>
    </div>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import ShopContainer from '@/components/ShopContainer.vue'
import Calendar from '@/components/Calendar.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'DashBoard',
  data() {
    return {
      shopData: [],
      isActiveLunches: false, //shpDataが空ならfalseのまま shop-containerを表示しない
    }
  },
  components: {
    // Detail,
    ShopContainer,
    Calendar,
  },
  computed: {
    ...mapGetters(['isLoading', 'isShowDetail', 'lunches']),
  },
  methods: {
    ...mapActions(['stopIsLoading', 'toggleIsShowDetail', 'fetchLunches']),
  },
  mounted() {
    // this.stopIsLoading()
    // console.log(this.activeLunches)
  },
  created() {
    setTimeout(() => {
      // FireStoreに保存されている全てのランチを取得してコピー
      let allLunches = this.lunches.slice()
      // 全てのランチから、createdAtでフィルターをかけてdataに格納(形も整える)
      allLunches.forEach((el) => {
        if (el.data.createdAt != '') {
          this.shopData.push(el.data.shop)
        }
      })
      //shop-containerの表示フラグをtrueに切り替え、ローディングも止める
      this.isActiveLunches = true
      this.stopIsLoading()
    }, 1000)
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
.theme--light.v-btn.v-btn--has-bg {
  //カレンダー今日の場所の色
  // background: ;
}
</style>
