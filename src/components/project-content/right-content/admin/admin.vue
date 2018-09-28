<template>
    <div class="container">
      <div class="admin-left-part">
          <div class="title">
            <h3>账号管理</h3>
            <div class="describe">企业账户，企业管理</div>
          </div>
          <ul ref='catalogs' class="list" @click="toggle">
            <li class="active"><router-link class="list-item" to="/project/admin/homepage">首页</router-link></li>
            <li><router-link class="list-item" to="/project/admin/account">账号信息</router-link></li>
            <li><router-link class="list-item" to="/project/admin/account">结算账单</router-link></li>
            <li><router-link class="list-item" to="/project/admin/account">商户公告</router-link></li>
          </ul>
        </div>
        <div class="admin-right-part">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </div>
    </div>
</template>

<script>
import CommonUtil from "@/utils/common.js";
export default {
  methods: {
    toggle(e) {
      const catalogsDom = this.$refs.catalogs;
      CommonUtil.toggle(e.target, catalogsDom);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../../styles/theme.less";
.container {
  .admin-left-part {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: @secordSideBarWidth;
    background-color: @secordSideBarBackgroundColor;
    border-right: 1px solid #ccc;
    box-sizing: border-box;
    font-size: @secordSideBarFontSize;
    text-align: left;
    text-indent: 10px;
    .title {
      height: 90px;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      margin-top: 23px;
      font-size: 18px;
      font-weight: bold;
      .describe {
        margin-top: 12px;
        color: #a0a0a0;
        font-size: 14px;
        font-weight: 200;
      }
    }
    .list {
      li .list-item {
        display: block;
        height: 45px;
        line-height: 45px;
        color: #898989;
        &:hover {
          background-color: @secordSideBarHoverColor;
          color: @secordSideBarFontHoverColor;
        }
      }
      .active {
        background-color: @secordSideBarHoverColor;
        .list-item{
          color: @secordSideBarFontHoverColor;
        }
      }
    }
  }
  .admin-right-part {
    position: absolute;
    left: @secordSideBarWidth;
    right: 0px;
    height: inherit;
    background-color: @secordContentBackgroundColor;
    overflow: auto;
  }
}
</style>



