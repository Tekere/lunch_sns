<template>
  <div class="bl_shopCard_wrapper">
    <div
      class="bl_shopCard btnripple bl_shopCard__type_long"
      :class="{ new: shop.isNew }"
    >
      <figure class="bl_shopCard_img">
        <img :src="shop.photo.pc.l" alt="" />
      </figure>
      <div class="bl_shopCard_body">
        <p class="bl_shopCard_shopTtl">{{ shop.name }}</p>
        <a class="bl_shopCard_btn" @click="addLunch(shop)">募集する</a>
        <p class="bl_shopCard_shopCategory bl_shopCard_infoTxt mb10">
          <span>ジャンル:</span><span>{{ shop.genre.name }}</span>
        </p>
        <p class="bl_shopCard_shopOpen bl_shopCard_infoTxt mb10">
          <span>営業時間:</span><span>{{ shop.open }}</span>
        </p>
        <p class="bl_shopCard_shopClose bl_shopCard_infoTxt">
          <span>定休日:</span><span>{{ shop.close }}</span>
        </p>

        <!--<div class="bl_shopCard_subInfo">
           
          <div v-if="shop.user" class="bl_shopCard_person bl_usr_info">
            <p class="bl_usr_name">たびちゃん</p>
            <img src="@/assets/testuser.svg" alt="" class="bl_usr_img" />
          </div>
        </div>-->
        <div class="bl_shopCard_area">
          <div class="bl_shopCard_shopAddress_wrapper">
            <p class="bl_shopCard_shopAddress bl_shopCard_infoTxt">
              {{ shop.address }}
            </p>
            <div class="bl_shopCard_pin">
              <img src="@/assets/pin.svg" alt="" />
              <p>{{ sokutei(shop.lat, shop.lng) }}m</p>
            </div>
          </div>
          <div class="bl_shopCard_shopMap">
            <iframe
              :src="
                'https://maps.google.co.jp/maps?output=embed&q=' +
                shop.lat +
                ',' +
                shop.lng +
                '&z=15'
              "
              width="269"
              height="280"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <!-- NOTE ルート表示 一旦保留 -->
            <!-- <iframe
              :src="
                'https://maps.google.co.jp/maps?output=embed&saddr=株式会社レジット&daddr='+shop.address+'&z=15'
              "
              width="269"
              height="280"
              frameborder="0"
              scrolling="no"
            ></iframe> -->
          </div>
        </div>
      </div>
      <span v-if="shop.isNew" class="bl_shopCard_badge">
        <img src="@/assets/heart.svg" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { sokutei } from '@/helper.js'

export default {
  name: 'DetailShopCard',
  props: {
    shop: Object,
  },
  methods: {
    ...mapActions(['showIsShowDetail','addLunch']),
    sokutei: sokutei,
  },
}
</script>

<style lang="scss" scoped>
.bl_shopCard_wrapper {
  margin-right: 0 !important;
}
.bl_shopCard.bl_shopCard__type_long {
  margin-right: 0;
  background-color: transparent;
}
.bl_shopCard {
  height: auto;
  box-shadow: none;
}
.bl_shopCard_btn {
  display: block;
  padding: 0.7em 0;
  text-align: center;
  background-color: #000;
  color: #fff;
}

.bl_shopCard_btn {
  color: #fff;
  background-color: #ff6647;
  border-radius: 6px;
}
.bl_shopCard_btn:hover{
  opacity: 0.7;
}
.bl_shopCard__type_long .bl_shopCard_btn{
  margin: 1em 0;
}
.bl_shopCard_btn:hover {

}

.bl_shopCard_rest {
  font-size: 0.8rem;
}
.bl_shopCard_shopAddress_wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #999;
}
.bl_shopCard_shopAddress {
  width: 62%;
}
.bl_shopCard_shopMap {
  overflow: hidden;
  border-radius: 8px;
  .place-card.place-card-medium {
    display: none !important;
  }
}

.mb10 {
  margin-bottom: 10px;
}
</style>

<style scoped lang="scss">
.bl_shopCard_infoTxt {
  display: flex;
  span {
    display: block;
  }
  span:first-child {
    display: block;
    white-space: nowrap;
    width: 25%;
  }
  span:last-child {
    width: 75%;
  }
}
</style>
