<template>
  <div class="homepage-container">
    <div class="homepage-data">
      <ul class="homepage-data-content clearfix user-noselect">
        <li class="homepage-data-item">
          <div class="homepage-data-item-title">CBaaS平台稳定运行</div>
          <div class="homepage-data-item-bottom">
            <div class="border-left-top"></div>
            <div class="border-right-top"></div>
            <div class="border-left-bottom"></div>
            <div class="border-right-bottom"></div>
            <span class="hour-num">188.188.12</span>
            <span class="unit">小时</span>
            <span class="minute-num">55</span>
            <span class="unit">分</span>
            <span class="sec-num">33</span>
            <span class="unit">秒</span>
          </div>
        </li>
        <li class="homepage-data-item">
          <div class="homepage-data-item-title">双链节点/通道生成</div>
          <div class="homepage-data-item-bottom">
            <div class="border-left-top"></div>
            <div class="border-right-top"></div>
            <div class="border-left-bottom"></div>
            <div class="border-right-bottom"></div>
            <span class="hour-num">188.188.12</span>
            <span class="unit">笔</span>
          </div>
        </li>
        <li class="homepage-data-item">
          <div class="homepage-data-item-title">双链实时交易数目</div>
          <div class="homepage-data-item-bottom">
            <div class="border-left-top"></div>
            <div class="border-right-top"></div>
            <div class="border-left-bottom"></div>
            <div class="border-right-bottom"></div>
            <span class="hour-num">188.188.12</span>
            <span class="unit">个</span>
          </div>
        </li>
      </ul>
    </div>
    <sky></sky>
  </div>
</template>

<script>
import Sky from "./3d";
export default {
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {

  },
  components: {
    Sky
  }
};
</script>

<style lang="less" scoped>
@import url("./styles/homepage.less");
</style>


