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
    <div class="homepage-list">
      <ul class="homepage-list-content" :class="{'homepage-list-spread':isShowList}">
        <li
          class="homepage-list-item user-noselect"
          :class="{active:item.active}"
          v-for="(item,index) in homepageList"
          :key="index"
          @click="skipRoute(item)"
        >
          <span class="item-icon" :style="listItemStyle(item)"></span>
          <span>{{item.name}}</span>
        </li>
      </ul>
      <div class="control-bottom" @click="clickControlButton" :style="controlStyle">
          <div class="highlight"></div>
      </div>
    </div>
    <sky></sky>
  </div>
</template>

<script>
import { homepageList } from "@/constant.js";
import Sky from "./3d";
export default {
  data() {
    return {
      homepageList: homepageList,
      isShowList: false
    };
  },
  computed: {
    // 控制按钮的图片样式
    controlStyle() {
      if (this.isShowList) {
        return {
          backgroundImage: "url(" + require("./assets/spread.png") + ")"
        };
      }
      return {
        backgroundImage: "url(" + require("./assets/flexible.png") + ")"
      };
    }
  },
  methods: {
    // 列表样式
    listItemStyle(item) {
      return {
        backgroundImage: "url(" + require("./assets/" + item.iconUrl) + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center"
      };
    },
    skipRoute(targetItem) {
      homepageList.forEach(item => {
        item.active = false;
      });
      targetItem.active = true;
      this.$router.push({ path: targetItem.url });
    },
    clickControlButton() {
      this.isShowList = !this.isShowList;
    }
  },
  components: {
    Sky
  }
};
</script>

<style lang="less" scoped>
@import url("./styles/homepage.less");
</style>


