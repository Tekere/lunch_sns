<template>
  <div class="bl_dashboard">
    <h2 class="el_lv2_ttl">New</h2>
    <shop-container :one-row="true"></shop-container>
    <div class="bl_allScheduleArea bl_mainCont_body__bottom">
      <h2 class="el_lv2_ttl">Schedule</h2>
      <div class="bl_allUserArea_body"></div>
    </div>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
// import PageTitle from '@/components/elements/PageTitle.vue';
import ShopContainer from "@/components/ShopContainer.vue";

export default {
  name: "DashBoard",
  components: {
    // Detail,
    // PageTitle,
    ShopContainer,
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
</style>
