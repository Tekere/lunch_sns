<template>
  <div class="ly_leftNav">
    <div class="bl_leftNav">
      <a class="bl_leftNav_logo">
        <img src="@/assets/power-off-white.svg" alt="" />
      </a>
      <div class="bl_leftNav_inner">
        <ul class="bl_leftNav_links">
          <li class="bl_leftNav_link el_link_btn">
            <router-link :to="{ name: 'DashBoard' }">
              <svg-home></svg-home>
              <span class="bl_leftNav_link_txt">Home</span>
            </router-link>
          </li>
          <li class="bl_leftNav_link el_link_btn">
            <router-link :to="{ name: 'Archive' }">
              <svg-archive></svg-archive>
              <span class="bl_leftNav_link_txt">Archive</span>
            </router-link>
          </li>
          <li class="bl_leftNav_link el_link_btn">
            <router-link :to="{ name: 'Explore' }">
              <svg-compass></svg-compass>
              <span class="bl_leftNav_link_txt">Explore</span>
            </router-link>
          </li>
          <li class="bl_leftNav_link el_link_btn">
            <router-link :to="{ name: 'Profile' }">
              <svg-user></svg-user>
              <span class="bl_leftNav_link_txt">Profile</span>
            </router-link>
          </li>
        </ul>
        <!-- <div class="el_link_btn uq__logout">
          <a href="">
            <svg-compass></svg-compass>
            <span class="bl_leftNav_link_txt">Logout</span>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import SvgHome from "@/components/svg/SvgHome.vue";
import SvgArchive from "@/components/svg/SvgArchive.vue";
import SvgUser from "@/components/svg/SvgUser.vue";
import SvgCompass from "@/components/svg/SvgCompass.vue";
export default {
  name: "LeftNav",
  components: {
    SvgHome,
    SvgArchive,
    SvgUser,
    SvgCompass,
  },
};
</script>

<style lang="scss">
.ly_leftNav {
  width: 72px;

  background: #373b53;
}
.bl_leftNav {
  position: relative;
  height: 100%;
}
.bl_leftNav_inner {
  position: sticky;
  top: 10px;
}
.bl_leftNav_logo {
  background-color: #ff6647;
  width: 100%;
  height: 70.68px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
  }
}

.bl_leftNav_links {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
}

.bl_leftNav_link {
  display: block;
  margin-bottom: 48px;
  position: relative;
}
.router-link-active {
  transition: all 0.3s;
  background-color: #fff;
  svg path {
    fill: #ff6647;
  }
}
.bl_leftNav_link_txt {
  font-size: 10px;
  position: absolute;
  bottom: -17px;
  color: #fff;
}
.el_link_btn {
  a {
    display: flex;
    width: 47px;
    height: 47px;
    // background: #ffffff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
  }
  svg {
    width: 25px;
    height: 25px;
  }
}

.uq__logout {
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
