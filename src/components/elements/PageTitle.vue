<template>
  <h1 class="el_pageTtl">{{title}}</h1>
</template>

<script>
export default {
name: "PageTitle",

props:{
  title:String
}
}
</script>

<style>
.el_pageTtl{
  font-size: 26px;
  font-weight: 500;
  letter-spacing: 0;
}
</style>
