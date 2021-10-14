<template>
  <div class="bl_explore">
    <h2 class="el_lv2_ttl">Explore</h2>
    <shop-container :shop-data="shopData"></shop-container>
    <button @click="nextPage">more</button>
  </div>
</template>

<script>
import ShopContainer from '@/components/ShopContainer.vue'
import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Explore',
  components: { ShopContainer },
  data() {
    return {
      shopData: [],
      maxCount: 20,
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    ...mapActions(['stopIsLoading']),
    getShopData() {
      const that = this
      axios
        .get(
          `/hotpepper/gourmet/v1/?key=${process.env.VUE_APP_HOTPEPPER_API_KEY}&lat=35.6553392&lng=139.6928003&lang=3&lunch=1&count=${that.maxCount}&format=json`
        )
        .then((res) => {
          this.filterPremiumShop(res.data.results.shop) //responseの形式に注意
        })
        .then(() => {
          this.stopIsLoading()
        })
        .catch((error) => {
          throw new Error(error)
        })
    },

    // ディナー予算6000円以上の高級店は弾いておく。(ランチも高いとこ多いから)
    filterPremiumShop(shops) {
      let result = shops.filter((shop) => {
        // 予算コード： B001 = 1000円~2000円 B002 = 2000円~3000円 B003 = 3000円~4000円
        return (
          shop.budget.code == 'B001' ||
          shop.budget.code == 'B002' ||
          shop.budget.code == 'B003'
        )
      })
      this.shopData = result
      console.log(result)
      return
    },

    // ページ送り
    nextPage() {
      if(this.maxCount <100){
      this.maxCount += 20
      this.getShopData()
      }else{
      // 100件目以降のページへ送る
      }
    },
  },
  mounted() {
    this.getShopData()
  },
}
</script>
