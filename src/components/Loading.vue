<template>
  <div>
    <div class="fullview">
      <div class="loading-spacer"></div>
      <vue-loading
        type="bars"
        color="#ff6647"
        :size="{ width: '60px', height: '60px' }"
      >
      </vue-loading>
    </div>
  </div>
</template>

<script>
import { VueLoading } from "vue-loading-template";

export default {
  name: "loading",
  components: {
    VueLoading,
  },
};
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background: #fefefe;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
}
.loading-spacer {
  height: calc(
    50vh - 60px
  ); /* 50vhから本体サイズの半分を引いて中央へ ちょっと上めのほうがいいかも */
}
</style>
