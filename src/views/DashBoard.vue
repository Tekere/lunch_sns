<template>
  <div class="bl_dashboard">
    <page-title :title="this.$route.name"></page-title>
    <div class="bl_mainCont_body">
      <movie-container></movie-container>
    </div>
    <div class="bl_dashboard_2colCont">
      <div class="bl_allUserArea">
        <h2 class="el_lv2_ttl">All Users</h2>
        <div class="bl_allUserArea_body">
          
        </div>
      </div>
      <div class="bl_weeklyData">
        <h2 class="el_lv2_ttl">Weekly Data</h2>
        <div class="bl_weeklyData_body">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import PageTitle from "@/components/elements/PageTitle.vue";
import MovieContainer from "@/components/MovieContainer.vue";

export default {
  name: "DashBoard",
  components: {
    // Detail,
    PageTitle,
    MovieContainer,
  },
};
</script>
<style lang="scss">
.bl_mainCont_body {
  padding: 30px 0;
}
.bl_dashboard_2colCont{
  display: flex;
  justify-content: center;
  .bl_allUserArea{
    width: 60%;
  }
  .bl_weeklyData{
    width: 35%;
  }
  
  
}
</style>
