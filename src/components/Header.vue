<template>
  <header class="ly_header">
    <div class="bl_header">

      <div v-if="user" class="bl_header_usr bl_usr">
        <router-link :to="{ name: 'Profile' }" class="bl_usr_info">
          <p class="bl_usr_name">{{ user.displayName }}</p>
          <img :src="user.photoURL" alt="" class="bl_usr_img" />
        </router-link>
        <div class="bl_usr_action">
          <a href="" class="bl_usr_logout">
            <!-- <svg-logout></svg-logout> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#C9CED6"
            >
              <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
              <g>
                <path
                  d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters(['user']),
  },
}
</script>

<style lang="scss">
.ly_header {
  width: 100%;
  // background: #fff;
  background-color: #f6f7fb;
  padding: 15px 40px;
}

/*
* block
*/

// bl_header
.bl_header {
  display: flex;
  justify-content: space-between;
  min-height:40px;
}
.bl_header_logo {
  font-size: 1.625rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
// bl_search
.bl_search {
  display: flex;
  position: relative;
  // width: 387px;
}
.bl_search_icon {
  position: absolute;
  width: 20px;
  top: calc(50% - 10px);
  left: 14px;
}
.bl_search_input,
.bl_search_btn {
  display: block;
}
.bl_search_input {
  background-color: #fff;
  border: 2px solid #afafaf;
  width: 326px;
  border-radius: 25px;
  padding: 7px 0 7px 50px;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.05em;
}
.bl_search_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;

  button {
    background-color: #f86549;
    color: #ffffff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 3px 3px 0 rgba(248, 101, 73, 0.24),
      0 1.5px 7.5px 0 rgba(248, 101, 73, 0.24),
      0 4.5px 1.5px -3px rgba(248, 101, 73, 0.4);
    &:hover {
      opacity: 0.8;
    }
    img {
      display: block;
      width: 26px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

// usr
.bl_usr {
  display: flex;
}
.bl_usr_info {
  display: flex;
  align-items: center;
  border-right: 1px solid #c9ced6;
}
.bl_usr_name {
  margin-right: 0.2em;
}
.bl_usr_img {
  width: 41px;
  height: 41px;
  border-radius: 50%;
}
.bl_usr_action {
  display: flex;
  align-items: center;
  padding-left: 1rem;
}
.bl_usr_logout {
  height: 24px;
  svg {
    width: 24px;
    height: 24px;
  }
}
.bl_header_usr {
  position: absolute;
  z-index: 10000;
  right: 40px;

  .bl_usr_info {
    padding-right: 1rem;
  }
  .bl_usr_name {
    margin-right: 0.6em;
  }
}
</style>
