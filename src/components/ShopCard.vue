<template>
  <div class="bl_shopCard_wrapper">
    <a
      @click.stop="showIsShowDetail(shop)"
      class="bl_shopCard btnripple"
    >
      <figure class="bl_shopCard_img">
        <!-- <img src="@/assets/noimage.png" alt="" /> -->
        <img :src="shop.photo.pc.l" alt="" />
      </figure>
      <div class="bl_shopCard_body">
        <p class="bl_shopCard_shopTtl">{{ shop.name }}</p>
        <p
          v-if="shop.time"
          class="bl_shopCard_shopCategory bl_shopCard_infoTxt"
        >
          12:00
        </p>
        <p class="bl_shopCard_shopCategory bl_shopCard_infoTxt">
          {{ shop.genre.name }}
        </p>
        <div class="bl_shopCard_subInfo">
          <div class="bl_shopCard_pin">
            <img src="@/assets/pin.svg" alt="" />
            <p>{{ sokutei(shop.lat, shop.lng) }}m</p>
          </div>
          <div v-if="shop.person" class="bl_shopCard_person bl_usr_info">
            <p class="bl_usr_name">たびちゃん</p>
            <img src="@/assets/testuser.svg" alt="" class="bl_usr_img" />
          </div>
        </div>
      </div>
      <span v-if="shop.isNew" class="bl_shopCard_badge">
        <img src="@/assets/heart.svg" alt="" />
      </span>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { sokutei } from '@/helper.js'
export default {
  name: 'ShopCard',
  props: {
    shop: Object,
  },
  methods: {
    ...mapActions(['showIsShowDetail']),
    sokutei: sokutei,
  },
}
</script>

<style lang="scss">
.bl_shopCard {
  display: block;
  width: 300px;
  height: 300px;
  background-color: transparent; //router-linkの指定解除
  padding: 10px 10px 30px;
  position: relative;
  background-color: #f6f7fb;
  border-radius: 12px;
  transition: 0.4s;
  box-shadow: 0px 4px 4px lightgray;
}
.bl_shopCard_container .bl_shopCard:hover {
  transform: translateY(-5px);
}
.bl_shopCard_wrapper {
  display: inline-block;
  flex-shrink: 0;
  margin-right: 20px;
  transition: all 1s;

  .bl_shopCard_img {
    overflow: hidden;

    img {
      width: 100%;
      height: 163px;
      border-radius: 12px;
      object-fit: cover;
    }
  }
  .bl_shopCard_body {
    padding: 6px 6px 0;
  }
  .bl_shopCard_shopTtl {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.4;
    margin-bottom: 0.3rem;
  }
  .bl_shopCard_infoTxt {
    font-size: 0.8rem;
  }
  .bl_shopCard_subInfo {
    position: absolute;
    bottom: 8px;
    left: 10px;
    width: 270px;
    display: flex;
    justify-content: space-between;
  }
  .bl_shopCard_pin {
    display: flex;
    font-size: 0.76rem;
    color: #999;
    font-weight: bold;
    img {
      widows: 21px;
      height: 21px;
    }
  }
  .bl_shopCard_person {
    justify-content: end;
    font-size: 0.76rem;
    font-weight: 500;
    line-height: 1;
    img {
      width: 22px;
      height: 22px;
    }
    border: none;
  }

  .bl_shopCard_badge {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: block;
    font-size: 1.75rem;
    line-height: 1;
    padding: 7px;
    top: 140px;
    right: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .bl_shopCard_shopCreated {
  }
}

.bl_shopCard.new {
  &::before {
    content: 'New!';
    display: block;
    top: 9px;
    right: -29px;
    transform: rotate(45deg);
    color: #fff;
    background-color: #ff6647;
    position: absolute;
    z-index: 101;
    padding: 0 30px;
  }
}

/* クリック 波紋が広がる */
.btnripple {
  /*はみ出す波紋を隠す*/
  overflow: hidden;
  outline: none;
  padding: 10px 10px 30px;
}

.btnripple::after {
  // FIXME 開発時のみコメントアウト
  // content: '';
  /*絶対配置で波紋位置を決める*/
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /*波紋の形状*/
  background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat 50%;
  transform: scale(10, 10);
  /*はじめは透過0に*/
  opacity: 0;
  /*アニメーションの設定*/
  transition: transform 0.3s, opacity 1s;
}

/*クリックされたあとの形状の設定*/
.btnripple:active::after {
  transform: scale(0, 0);
  transition: 0s;
  opacity: 0.3;
}
</style>
