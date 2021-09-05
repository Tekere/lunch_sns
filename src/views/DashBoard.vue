<template>
  <div class="">
    <page-title :title="this.$route.name"></page-title>
    <div class="bl_mainCont_body">
      <div class="bl_movieCard_container">
        <div v-for="n of 10" :key="n" class="bl_movieCard">
          <figure class="bl_movieCard_img">
            <img src="@/assets/test-movie.jpg" alt="" />
          </figure>
          <div class="bl_movieCard_body">
            <p class="bl_movieCard_movieTtl">test testman</p>
          </div>
        </div>
        <!-- / .bl_movieCard -->
      </div>
    </div>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import PageTitle from '@/components/elements/PageTitle.vue';

export default {
  name: 'DashBoard',
  components: {
    // Detail,
    PageTitle,
  },
};
</script>
<style lang="scss">
.bl_mainCont_body {
  padding: 30px 0;
}

.bl_movieCard_container {
  display: flex;
  overflow-x: scroll;
  padding-bottom: 50px;
}

.bl_movieCard {
  background-color: #fff;
  overflow: hidden;
  flex-shrink:0;
  width: 140px;
  margin-right: 15px;
  .bl_movieCard_img {
    overflow: hidden;
    border-radius: 6px;
    img {
      width: 100%;
    }
  }
  .bl_movieCard_body {
    padding: 6px 6px 10px;
  }
  .bl_movieCard_movieTtl {
  }
  .bl_movieCard_movieCreated {
  }
}
</style>
