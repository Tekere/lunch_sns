<template>
  <!-- <div v-if="isShowDetail" class="ly_detail"> -->
  <div class="ly_detail">
    <!-- お店の詳細用 
    新規作成のときは仮IDで 0を渡すのでそれを使用
    -->
    <detail-shop-card
    v-if="detailShopData.id !== 0"
      in-detail="true"
      :shop-data="detailShopData"
    ></detail-shop-card>
    <!-- 新規作成用 propsは必要ないので渡さない -->
    <create-detail-shop-card
    v-else
      in-detail="true"
    ></create-detail-shop-card>
  </div>
</template>

<script>
import DetailShopCard from '@/components/DetailShopCard.vue'
import CreateDetailShopCard from '@/components/CreateDetailShopCard.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'detail',
  components: {
    DetailShopCard,
    CreateDetailShopCard
  },
  computed: {
    ...mapGetters(['isShowDetail', 'detailShopData']),
  },
}
</script>

<style scoped lang="scss">
.ly_detail {
  width: 320px;
  height: 100vh;
  z-index: 999;
  position: sticky;
  overflow-y: auto;
  top: 70px;
  padding: 0 20px 10px 10px;
  background-color: #f6f7fb;
}
.bl_detail {
  width: 100%;
  height: 100%;
  padding: 5px;
  // box-shadow: -5px 0 6px rgba(191, 191, 191, 0.2);
}
</style>
