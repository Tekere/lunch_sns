<template>
  <div class="ly_leftNav">
<div class="bl_leftNav">
  <a class="bl_leftNav_toggleBtn">
    <img src="@/assets/bars-solid.svg" alt="">
  </a>
</div>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
};
</script>

<style lang="scss">
.ly_leftNav{
  width: 100px;
  height: 100vh;
  background: #F6F7FB;
}
.bl_leftNav_toggleBtn{
  background-color: #393D46;
  width: 100%;
  height: 84.72px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 20px;
  }
  &:hover{
    img{
      opacity: 0.8;
    }
  }
}
</style>
