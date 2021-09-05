<template>
  <div class="home">
    <page-title :title='this.$route.name'></page-title>
  </div>
</template>

<script>
// import Detail from "@/components/Detail.vue";
import PageTitle from '@/components/elements/PageTitle.vue';

export default {
  name: "Archive",
  components: {
    // Detail,
    PageTitle,
  },
};
</script>
