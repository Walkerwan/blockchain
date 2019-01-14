<template>
  <div class="project-start-container">
    <div class="project-start-head">中琛源区块链ZCBaaS展示平台</div>
    <div class="project-start-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
       <div class="homepage-list">
      <ul class="homepage-list-content" :class="{'homepage-list-spread':isShowList}">
        <li
          class="homepage-list-item user-noselect"
          :class="{active:item.active}"
          v-for="(item,index) in catalogList"
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
    </div>
  </div>
</template>

<script>
import { homepageList } from "@/constant.js";
export default {
  data() {
    return {
       catalogList: homepageList,
       isShowList: true
    }
  },
  mounted() {
    this.catalogList = window.sessionStorage.getItem('routelist')?JSON.parse(window.sessionStorage.getItem('routelist')):homepageList;
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
      this.catalogList.forEach(item => {
        item.active = false;
      });
      targetItem.active = true;
      this.$router.push({ path: targetItem.url });
      if(targetItem.init) {
        this.activeWindow(homepageList);
      }
      if(targetItem.listName) {
        this.activeWindow(targetItem.listName);
      }
    },
    clickControlButton() {
      this.isShowList = !this.isShowList;
    },
    // 隐藏打开窗口
    activeWindow(targetCatalog) {
      this.isShowList = false;
      setTimeout(() => {
        this.catalogList = targetCatalog;
        window.sessionStorage.setItem("routelist",JSON.stringify(this.catalogList))
        return
        this.isShowList = true;
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./styles/project-start.less");
</style>


