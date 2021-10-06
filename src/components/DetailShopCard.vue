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
        <p class="bl_shopCard_shopCategory bl_shopCard_infoTxt mb10">
          ジャンル:{{ shop.genre.name }}
        </p>
        <p class="bl_shopCard_shopOpen bl_shopCard_infoTxt mb10">
          営業時間:{{ shop.open }}
        </p>
        <p class="bl_shopCard_shopClose bl_shopCard_infoTxt">
          定休日:{{ shop.close }}
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
          <div class="bl_shopCard_shopMap"></div>
                </div>
        </div>
      <span v-if="shop.isNew" class="bl_shopCard_badge">
        <img src="@/assets/heart.svg" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { sokutei } from '@/helper.js';
export default {
  name: 'DetailShopCard',
  props: {
    shop: Object,
  },
  methods: {
    ...mapActions(['showIsShowDetail']),
    sokutei: sokutei,
  },
};
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
.bl_shopCard_shopAddress{
  width:62% ;
}

.mb10 {
  margin-bottom: 10px;
}
</style>
