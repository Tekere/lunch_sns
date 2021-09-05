<template>
  <div class="">
    <page-title :title="this.$route.name"></page-title>
    <div class="bl_mainCont_body">
      <movie-container></movie-container>
    </div>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import PageTitle from '@/components/elements/PageTitle.vue';
import MovieContainer from '@/components/MovieContainer.vue';

export default {
  name: 'DashBoard',
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


</style>
