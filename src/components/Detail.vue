<template>
  
    <div v-if="isShowDetail" class="ly_detail">
      <detail-shop-card in-detail="true"></detail-shop-card>
    </div>

</template>

<script>
import DetailShopCard from "@/components/DetailShopCard.vue";
import { mapGetters } from 'vuex';
export default {
  name: 'detail',
  components:{
    DetailShopCard
  },
  computed: {
    ...mapGetters(['isShowDetail', 'detailData']),
  },
};
</script>

<style scoped lang="scss">
.ly_detail {
  width: 310px;
  height: 100vh;
  z-index: 999;
  position: sticky;
  top: 0;
  padding:71px 10px 10px;
  background-color: rgba(196, 196, 196, 0.1);
  
}
.bl_detail {
  width: 100%;
  height: 100%;
  padding: 5px;
  box-shadow: -5px 0 6px rgba(191, 191, 191, 0.2);
}


</style>
