<template>
    <div class="content-container">
        <div class="top-part">
            <top-catalog></top-catalog>
        </div>
        <div class="bottom-part">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import TopCatalog from "@/components/project-content/top-catalog/top-catalog.vue";

export default {
  components: {
    TopCatalog
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../styles/theme.less";
.content-container {
    overflow: hidden;
  .top-part {
    position: absolute;
    width: 100%;
    height: @firstSideBarHeight;
    top: 0px;
    background-color: @firstSideBarBackgroundColor;
    color: @firstSideBarFontColor;
    text-align: center;
  }
  .bottom-part {
    position: absolute;
    width: 100%;
    top: @firstSideBarHeight;
    bottom: 0px;
    overflow: hidden;
  }
}
</style>
