<template>
  <div class="ly_detail">
    <div class="bl_detail">Detail</div>
  </div>
</template>

<script>
export default {
  name: 'detail',
};
</script>

<style scoped lang="scss">
.ly_detail {
  // position: fixed;
  // top: 0;
  // right: 0;
  width: 350px;
  height: 100vh;
  z-index: 999;
  position: sticky;
  top: 0;
}
.bl_detail {
  width: 100%;
  height: 100%;
  background-color: rgba(196, 196, 196,0.1);
  box-shadow: -5px 0 6px rgba(191, 191, 191,0.2);
}
</style>
