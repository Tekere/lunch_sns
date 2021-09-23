<template>
  <div class="bl_shopCard_wrapper">
    <div  class="bl_shopCard btnripple new bl_shopCard__type_long">
      <figure class="bl_shopCard_img">
        <img src="@/assets/noimage.png" alt="" />
      </figure>
      <div class="bl_shopCard_body">
        <p class="bl_shopCard_shopTtl">権八</p>
        <p class="bl_shopCard_shopCategory">12:00</p>
        <div class="bl_shopCard_desc">
          
        </div>
        <div class="bl_shopCard_subInfo">
          <div class="bl_shopCard_pin">
            <img src="@/assets/pin.svg" alt="" />
            <p>100m</p>
          </div>
          <div class="bl_shopCard_person bl_usr_info">
            <p class="bl_usr_name">たびちゃん</p>
            <img src="@/assets/testuser.svg" alt="" class="bl_usr_img" />
          </div>
        </div>
      </div>
      <span class="bl_shopCard_badge">
        <img src="@/assets/heart.svg" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DetailShopCard",

  methods: {
    ...mapActions(["showIsShowDetail"]),
  },
};
</script>

<style lang="scss" scope>
.bl_shopCard.bl_shopCard__type_long{
  margin-right: 0 ;
  background-color: transparent ;
}
</style>
