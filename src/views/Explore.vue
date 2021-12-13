<template>
  <div class="bl_explore">
    <h2 class="el_lv2_ttl">Explore</h2>
    <a href="" v-if="pageCount > 100" @click="prevPage">prev page</a>
    <shop-container :shop-data="shopData"></shop-container>
    <button
      @click.stop="moreLoad"
      class="el_moreBtn"
      :class="{ el_moreBtn__loading: loadMore == 'Loading' }"
    >
      {{ loadMore }}
    </button>
  </div>
</template>

<script>
import ShopContainer from '@/components/ShopContainer.vue'
import axios from 'axios'

import { mapActions, mapGetters } from 'vuex'
import { getShuffledArr } from '@/helper.js'
export default {
  name: 'Explore',
  components: { ShopContainer },
  data() {
    return {
      shopData: [],

      pageCount: 1,
      huuh: false,
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    // MOREボタンの中身を状態によって書き換える
    loadMore() {
      if (this.huuh == true) {
        return 'Loading'
      } else {
        return 'MORE'
      }
    },
  },
  methods: {
    ...mapActions(['stopIsLoading', 'startIsLoading']),
    getShopData() {
      const that = this

      axios
        .get(
          `/hotpepper/gourmet/v1/?key=${process.env.VUE_APP_HOTPEPPER_API_KEY}&lat=35.6553392&lng=139.6928003&lang=3&lunch=1&count=100&start=${that.pageCount}&format=json`
        )
        // .then(res =>{
        // 	console.log(res.data)
        // })
        .then((res) => {
          // filter
          let shops = this.filterPremiumShop(res.data.results.shop) //responseの形式に注意

          //  オブジェクトの中にshopのデータがあるような形にする
          this.shopData = []
          let n = 1    //仮ID
          let temp = []    // 仮配列
          shops.forEach((el) => {
            temp.push({ id: n, data: { shop: el } })
            n++
          })
          // 100件をシャッフルしてshopDataに格納
          this.shopData = getShuffledArr(temp)
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
      return result
    },

    // LoadMore
    moreLoad() {
      // まず pageCount とMOREボタンをLoading状態にする
      this.pageCount += 100
      this.huuh = true

      new Promise((resolve) => {
        setTimeout(() => {
          this.getShopData()
          resolve()
          window.scroll({ top: 0, behavior: 'smooth' })
        }, 200)
      }).then(() => {
        setTimeout(() => {
          this.huuh = false
        }, 300)
      })
    },
    // // ページ送り （マックスが100件なので開始位置を101にしてAPIを叩き直す）
    // nextPage() {
    //   this.pageCount += 100
    //   this.startIsLoading()
    //   this.getShopData()
    //   // 一番上からデータが書き換えられるので、一番上に戻る
    //   window.scroll({ top: 0, behavior: 'smooth' })
    // },
    // // ページ戻り （開始位置を-100してAPIを叩き直す）
    prevPage() {
      this.pageCount -= 100
      this.startIsLoading()
      this.getShopData()
      // 一番上からデータが書き換えられるので、一番上に戻る
    },
  },
  created() {
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
  padding: 16px 0;
  letter-spacing: 0.04em;
}
.el_moreBtn__loading {
  background-color: #ff6647;
}
.bl_explore {
  .el_moreBtn {
    margin: 0 auto 30px;
  }
}
</style>
