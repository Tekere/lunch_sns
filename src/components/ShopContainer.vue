<template>
  <div
    class="bl_shopCard_container dc_has_innerShadow dc_has_innerShadow__right"
    :class="oneRow ? 'bl_shopCard_container__1row' : ''"
  >
    <div v-for="n of 5" :key="n" class="bl_shopCard_wrapper">
      <router-link to="/" class="bl_shopCard">
        <figure class="bl_shopCard_img">
          <img src="@/assets/noimage.png" alt="" />
        </figure>
        <div class="bl_shopCard_body">
          <p class="bl_shopCard_shopTtl">権八</p>
          <p class="bl_shopCard_shopCategory">和食</p>
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
          <img src="@/assets/good.svg" alt="" />
        </span>
      </router-link>
    </div>
    <!-- / .bl_shopCard -->
  </div>
</template>

<script>
export default {
  name: "ShopContainer",
  props: {
    oneRow: Boolean,
  },
  methods: {},
};
</script>

<style lang="scss">
.dc_has_innerShadow__right {
  // position: relative;
  &:after {
    content: "";
    position: fixed;
    width: 35px;
    height: 290px; // contents hight
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 30%,
      rgba(255, 255, 255, 0.7) 50%,
      #fff 100%
    ); // to right
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    z-index: 99;
    // right （topを指定しないことで親のrelativeに合わせる）
    right: 20px;
  }
}

.bl_shopCard_container {
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  padding-bottom: 20px;
  position: relative;
  justify-content: space-around;
}
.bl_shopCard_container.bl_shopCard_container__1row {
  overflow-x: scroll;
  flex-wrap: nowrap;
  justify-content: start;
}

.bl_shopCard {
  display: block;
  background-color: transparent; //router-linkの指定解除
  // hover
  &:hover {
    opacity: 0.8;
  }
}
.bl_shopCard_wrapper {
  background-color: #f4f4f4;
  flex-shrink: 0;
  width: 290px;
  height: 280px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 10px 10px 30px; // bottom user名表示エリア用
  position: relative; //user名表示用
  .bl_shopCard_img {
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 10px;
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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #ff6647;
    background-color: #3b3b3b;
    display: block;
    padding: 5px;
    top: 145px;
    left: 6px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .bl_shopCard_shopCreated {
  }
}
</style>
