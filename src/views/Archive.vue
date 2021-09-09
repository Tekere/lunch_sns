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
import MovieContainer from "@/components/MovieContainer.vue";

export default {
  name: "Archive",
  components: {
    // Detail,
    PageTitle,
    MovieContainer,
  },
};
</script>
