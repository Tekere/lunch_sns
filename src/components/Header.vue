<template>
  <header class="ly_header">
    <div class="bl_header">
      <div class="bl_header_logo">
        <h1><a href="">Shikra</a></h1>
      </div>
      <div class="bl_header_searchBox bl_search">
        <img src="@/assets/search-solid.svg" alt="" class="bl_search_icon" />
        <input type="text" class="bl_search_input" placeholder="Search" />
        <div class="bl_search_btn">
          <button>
            <img src="@/assets/filter.svg" alt="">
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss">
.ly_header {
  width: 100%;
  background: #f6f7fb;
  padding: 18px 40px;
}

/*
* block
*/

// bl_header
.bl_header {
  display: flex;
  justify-content: space-between;
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
  justify-content: space-between;
  position: relative;
  width: 387px;
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
  width: 326px;
  border-radius: 25px;
  padding: 13px 0 13px 50px;
  font-size: 1rem;
  line-height: 1;
  letter-spacing: 0.05em;
}
.bl_search_btn {
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    background-color: #f86549;
    color: #ffffff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    position: relative;
    box-shadow: 0 3px 3px 0 rgba(248, 101, 73, 0.24), 0 1.5px 7.5px 0 rgba(248, 101, 73, 0.24), 0 4.5px 1.5px -3px rgba(248, 101, 73, 0.4);
    &:hover{
      opacity: 0.8;
    }
    img{
      display: block;
      width: 26px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
}
</style>
