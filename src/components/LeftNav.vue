<template>
  <div class="ly_leftNav">
    <div class="bl_leftNav">
      <a class="bl_leftNav_toggleBtn">
        <img src="@/assets/bars-solid.svg" alt="" />
      </a>
      <div>
        <ul class="bl_leftNav_links">
          <li class="bl_leftNav_link el_link_btn">
            <a href="">
              <img src="@/assets/home.svg" alt="" />
              <span class="bl_leftNav_link_txt">Home</span>
            </a>
          </li>
          <li class="bl_leftNav_link el_link_btn">
            <a href="">
              <img src="@/assets/archive.svg" alt="" />
              <span class="bl_leftNav_link_txt">Archive</span>
            </a>
          </li>
          <li class="bl_leftNav_link el_link_btn">
            <a href="">
              <img src="@/assets/user.svg" alt="" />
              <span class="bl_leftNav_link_txt">Profile</span>
            </a>
          </li>
          <li class="bl_leftNav_link el_link_btn">
            <a href="">
              <img src="@/assets/compass.svg" alt="" />
              <span class="bl_leftNav_link_txt">Explore</span>
            </a>
          </li>
        </ul>
        <div class="el_link_btn uq__logout">
          <a href="">
              <img src="@/assets/power-off.svg" alt="" />
              <span class="bl_leftNav_link_txt">Logout</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
};
</script>

<style lang="scss">
.ly_leftNav {
  width: 100px;
  height: 100vh;
  background: #f6f7fb;
}
.bl_leftNav{
  position: relative;
  height: 100%;
}
.bl_leftNav_toggleBtn {
  background-color: #393d46;
  width: 100%;
  height: 84.72px;
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
  padding-top: 53px;
  
}

.bl_leftNav_link{
  display: block;
  margin-bottom: 53px;
  position: relative;

}
.bl_leftNav_link_txt{
  font-size: 12px;
  position: absolute;
  bottom: -24px;
  color: #7987A5;
}
.el_link_btn {
  a {
    display: flex;
    width: 55px;
    height: 55px;
    background: #ffffff;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
  }
  img {
    width: 25px;
    height: 25px;
  }
}

.uq__logout{
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
