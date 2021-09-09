<template>
  <div id="app" class="ly_page">
    <LeftNav></LeftNav>
    <div class="ly_cont">
      <Header></Header>
      <main class="ly_mainCont">
        <transition>
          <router-view />
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftNav from "@/components/LeftNav.vue";
export default {
  components: {
    Header,
    LeftNav,
  },
};
</script>

<style lang="scss">
@import "./css/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap");

/*
* base
*/
html {
  font-family: "Noto Sans JP", Avenir, Helvetica, Arial, sans-serif;
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
}
.ly_mainCont {
  // background-color: #f6f7fb;
  background-color: #fff;
  height: 90vh;
  padding: 20px 25px;
}

.v-enter-active {
  transition: opacity 0.7s;
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
