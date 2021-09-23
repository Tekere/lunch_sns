<template>
  <!-- <v-app> -->
  <div id="app" class="ly_page">
    <LeftNav></LeftNav>
    <div
      @click="hiddenIsShowDetail"
      class="ly_cont"
      :class="{ ly_cont__mini: isShowDetail }"
    >
      <Header></Header>
      <main class="ly_mainCont">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </main>
    </div>
    <transition name="fade">
      <detail></detail>
    </transition>
  </div>
  <!-- </v-app> -->
</template>

<script>
import Header from '@/components/Header.vue';
import LeftNav from '@/components/LeftNav.vue';
import Detail from '@/components/Detail.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    Header,
    LeftNav,
    Detail,
  },
  computed: {
    ...mapGetters(['isShowDetail']),
  },
  methods: {
    ...mapActions(['hiddenIsShowDetail']),
  },
  watch:{
    $route(){
      this.hiddenIsShowDetail()
    }
  }
};
</script>

<style lang="scss">
@import './css/reset.css';
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');

/*
* base
*/
html {
  font-family: 'Noto Sans JP', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #303030;
  box-sizing: border-box;
  letter-spacing: 0.04em;
  line-height: 1.5;
}
a {
  cursor: pointer;
}

/*
* layouts
*/
.ly_page {
  display: flex;
}
.ly_cont {
  width: calc(100% - 72px);
  margin-left: 72px;

  transition: 0.4s;
}
.ly_mainCont {
  // background-color: #f6f7fb;
  background-color: #fff;
  height: fit-content;
  padding: 20px 25px;
}
.ly_cont.ly_cont__mini {
  width: calc(100% - 382px);
  .ly_mainCont {
    padding: 20px 0 25px 20px;
  }
}



.el_lv1_ttl {
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0;
}
.el_lv2_ttl {
  font-size: 20px;
  letter-spacing: 0;
  font-weight: 500;
  margin-bottom: 10px;
}



/*
* transition
*/
// fade
.fade-enter-active {
  will-change: opacity;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-leave-active{
  will-change: opacity;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-leave{
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// right
// .right-enter-active,
// .right-leave-active {
//   transform: translate(0px, 0px); 
//   transition: transform 0.4s;
// }

// .right-leave-active {
//   position: absolute;
//   width: 100%;
// }

// .right-enter,
// .right-leave-to {
//   // transform: translateX(100%) translateX(0px);
//   transform: translateX(100%) translateX(0px);
// }
// .right-enter-to,
// .right-leave{
//   transform: translateX(0px);
// }
</style>
