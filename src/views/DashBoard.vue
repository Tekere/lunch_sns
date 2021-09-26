<template>
  <div class="bl_dashboard">
    <h2 class="el_lv2_ttl">New</h2>
    <shop-container :one-row="true"></shop-container>
    <div class="bl_allScheduleArea bl_mainCont_body__bottom">
      <h2 class="el_lv2_ttl">Schedule</h2>
      <calendar></calendar>
    </div>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import ShopContainer from "@/components/ShopContainer.vue";
import Calendar from "@/components/Calendar.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "DashBoard",
  components: {
    // Detail,
    ShopContainer,
    Calendar,
  },
  computed: {
    ...mapGetters(["isShowDetail"]),
  },
  methods: {
    ...mapActions(["toggleIsShowDetail"]),
  },
};
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
