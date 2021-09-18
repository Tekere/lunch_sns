<template>
  <div class="bl_shopCard_wrapper">
      <a @click="toggleIsShowDetail" class="bl_shopCard btnripple new">
        <figure class="bl_shopCard_img">
          <img src="@/assets/noimage.png" alt="" />
        </figure>
        <div class="bl_shopCard_body">
          <p class="bl_shopCard_shopTtl">権八</p>
          <p class="bl_shopCard_shopCategory">12:00</p>
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
      </a>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'ShopCard',

  methods: {
    ...mapActions(["toggleIsShowDetail"]),
  },
};
</script>

<style lang="scss">
.bl_shopCard {
  display: block;
  width: 290px;
  height: 280px;
  background-color: transparent; //router-linkの指定解除
  padding: 10px 10px 30px;
  position: relative;
  background-color: #f4f4f4;
  border-radius: 12px;
  transition: 0.3s;
  // hover
  &:hover {
    // opacity: 0.8;
    transform: translateY(-5px);
  }
}
.bl_shopCard_wrapper {
  flex-shrink: 0;
  margin-right: 20px;

  .bl_shopCard_img {
    overflow: hidden;
    img {
      width: 100%;
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
    top: 5px;
    transform: rotate(45deg);
    right: 0;
    position: absolute;
    z-index: 101;
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
  content: '';
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
