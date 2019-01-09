<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import './styles/base.less';
  #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: "微软雅黑","宋体","Arial","黑体",sans-serif;
}
</style>

<style>
@import './font/style.css';
</style>


