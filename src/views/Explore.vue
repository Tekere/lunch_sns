<template>
  <div class="bl_explore">
    <h2 class="el_lv2_ttl">Explore</h2>
    <shop-container :shop-data="shopData"></shop-container>
    <button v-if="loadMore" @click="nextPage" class="el_moreBtn">
      {{ loadMore }}
    </button>
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
      huuh: false,
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    // MOREボタンの中身を状態によって書き換える
    loadMore() {
      if (this.huuh == true) {
        return 'Loading'
      }
      if (this.maxCount < 100) {
        return 'MORE'
      } else {
        return false
      }
    },
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
      if (this.maxCount < 100) {
        // まず maxCount とMOREボタンをLoading状態にする
        this.maxCount += 20
        this.huuh = true
        
        // maxCount とMOREボタンをLoading状態にできたら、
        // データの取得とMOREボタンの書き換えを非同期で順番に行う。（描画前に「MORE」に戻ってしまうのを防ぐ）
        new Promise((resolve) => {
          setTimeout(() => {
            this.getShopData()
            resolve()
          }, 400)
        }).then(() => {
          setTimeout(() => {
            this.huuh = false
          }, 100)
        })
      } else {
        // 100件目以降のページへ送る処理
      }
    },
  },
  mounted() {
    this.getShopData()
  },
}
</script>
<style lang="scss">
.el_moreBtn {
  width: 300px;
  text-align: center;
  display: block;
  color: #fff;
  background-color: #000;
  font-weight: bold;
  padding: 10px 0;
}
.bl_explore {
  .el_moreBtn {
    margin: 0 auto 30px;
  }
}
</style>
