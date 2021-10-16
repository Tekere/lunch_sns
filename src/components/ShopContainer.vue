<template>
  <transition-group
    tag="div"
    name="cell"
    class="bl_shopCard_container dc_has_innerShadow dc_has_innerShadow__right"
    :class="oneRow ? 'bl_shopCard_container__1row' : 'grid'"
  >
    <shop-card v-for="shop of shopData" :key="shop.id" :shop="shop"></shop-card>
  </transition-group>
</template>

<script>
import ShopCard from '@/components/ShopCard.vue'
// import Muuri from "muuri";

export default {
  name: 'ShopContainer',
  components: {
    ShopCard,
  },
  props: {
    oneRow: Boolean,
    shopData: Array,
  },
  mounted() {
    // 動的にClassを付与するので、mount後に初期化
    // new Muuri(".grid");
  },
}
</script>

<style lang="scss">
.dc_has_innerShadow__right {
  // position: relative;
  &:after {
    // content: "";
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
  padding-bottom: 40px;
  position: relative;
  justify-content: start;
  overflow-x: scroll;
  padding-top: 5px;
  padding-left: 5px;
  .bl_shopCard_wrapper {
    margin: 0 30px 30px 0;
  }
}
// .bl_shopCard_container.grid {
//   position: relative;
//   margin-right: -20px; //中のカードの右マージン相殺
//   .bl_shopCard_wrapper {
//     position: absolute;
//   }
// }

.ly_cont__mini .bl_shopCard_container.grid {
  //margin-right: 5px; //相殺した分を返す（中のカードの右マージン相殺）
}

.bl_shopCard_container.bl_shopCard_container__1row {
  overflow-x: scroll;
  flex-wrap: nowrap;
  justify-content: start;

  .bl_shopCard_wrapper {
    margin: 0 0 20px 20px;
  }
}

.cell-enter-active{
  transition: opacity 0.8s ease-in;
}
.cell-enter
 {
  opacity: 0;
}

</style>
