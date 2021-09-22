<template>
  <transition name="right">
    <div v-if="isShowDetail" class="ly_detail">
      <div class="bl_detail">{{ detailData.text }}</div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'detail',
  computed: {
    ...mapGetters(['isShowDetail', 'detailData']),
  },
};
</script>

<style scoped lang="scss">
.ly_detail {
  width: 310px;
  height: 100vh;
  z-index: 999;
  position: sticky;
  top: 0;
}
.bl_detail {
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: rgba(196, 196, 196, 0.1);
  box-shadow: -5px 0 6px rgba(191, 191, 191, 0.2);
}

.right-enter-active,
.right-leave-active {
  transform: translate(0px, 0px);
  transition: transform 0.4s;
}

.right-enter,
.right-leave-to {
  transform: translateX(100%) translateX(0px);
}
</style>
