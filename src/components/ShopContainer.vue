<template>
  <div
    class="bl_shopCard_container dc_has_innerShadow dc_has_innerShadow__right"
    :class="oneRow ? 'bl_shopCard_container__1row' : ''"
  >
    <shop-card v-for="n of 5" :key="n"></shop-card>
  </div>
</template>

<script>
import ShopCard from "@/components/ShopCard.vue";
export default {
  name: "ShopContainer",
  components: {
    ShopCard,
  },
  props: {
    oneRow: Boolean,
  },
};
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
  .bl_shopCard_wrapper {
    margin: 0 20px 20px 0;
  }
}

.bl_shopCard_container.bl_shopCard_container__1row {
  overflow-x: scroll;
  flex-wrap: nowrap;
  justify-content: start;
  padding-top: 5px;
  .bl_shopCard_wrapper {
    margin: 0 0 20px 20px;
  }
}
</style>
