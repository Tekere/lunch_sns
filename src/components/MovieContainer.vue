<template>
  <div
    class="
      bl_movieCard_container
      dc_has_innerShadow dc_has_innerShadow__right
    "
    :class="oneRow? 'bl_movieCard_container__1row':''"
  >
    <div v-for="n of 10" :key="n" class="bl_movieCard_wrapper">
      <router-link to="/" class="bl_movieCard">
        <figure class="bl_movieCard_img">
          <img src="@/assets/test-movie.jpg" alt="" />
        </figure>
        <div class="bl_movieCard_body">
          <p class="bl_movieCard_movieTtl">スーサイド・スクワッド</p>
          <router-link
            :to="{ name: 'Profile' }"
            class="bl_movieCard_person bl_usr_info"
          >
            <p class="bl_usr_name">たびちゃん</p>
            <img src="@/assets/testuser.svg" alt="" class="bl_usr_img" />
          </router-link>
        </div>
        <span class="bl_movieCard_badge">
          <img src="@/assets/good.svg" alt="" />
        </span>
      </router-link>
    </div>
    <!-- / .bl_movieCard -->
  </div>
</template>

<script>
export default {
  name: "MovieContainer",
  props: {
    oneRow:Boolean
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

.bl_movieCard_container {
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
  padding-bottom: 20px;
  position: relative;
}
.bl_movieCard_container.bl_movieCard_container__1row {
  overflow-x: scroll;
  flex-wrap: nowrap;
}

.bl_movieCard {
  display: block;
  // hover
  &:hover {
    opacity: 0.8;
  }
}
.bl_movieCard_wrapper {
  background-color: #fff;

  flex-shrink: 0;
  width: 140px;
  margin-right: 20px;
  padding-bottom: 30px; //user名表示エリア用
  position: relative; //user名表示用
  .bl_movieCard_img {
    overflow: hidden;
    border-radius: 6px;
    img {
      width: 100%;
    }
  }
  .bl_movieCard_body {
    padding: 6px 6px 0;
  }
  .bl_movieCard_movieTtl {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.4;
  }
  .bl_movieCard_person {
    position: absolute;
    bottom: 0;
    right: 5px;
    width: 100%;
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

  .bl_movieCard_badge {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #ff6647;
    background-color: #3b3b3b;
    display: block;
    padding: 5px;
    top: 186px;
    left: -2px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }

  .bl_movieCard_movieCreated {
  }
}
</style>
