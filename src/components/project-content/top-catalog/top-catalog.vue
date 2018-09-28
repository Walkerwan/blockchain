<template>
    <div class="top-container">
        <Row class="grid-row">
            <Col span="4" class="item">
             <div class="logo">
                <i class="logo-image"></i>
                <span class="title">百果园</span>
             </div>
            </Col>
            <Col span="10" class="item">
                <Row ref='catalogs' @click='toggle'>
                    <Col span=3 style="height:100%"><div class="route active"><router-link class="adimin list-item" to="/project/admin"><i class="icon icon-admin"></i><span class="text">账户</span></router-link></div></Col>
                    <Col span=3 style="height:100%"><div class="route"><router-link class="catalog list-item" to="/project/associator"><i class="icon icon-catalog"></i><span class="text">会员</span></router-link></div></Col>
                    <Col span=3 style="height:100%"><div class="route"><router-link class="activity list-item" to="/project/associator"><i class="icon icon-activity"></i><span class="text">活动</span></router-link></div></Col>
                    <Col span=3 style="height:100%"><div class="route"><router-link class="mall list-item" to="/project/associator"><i class="icon icon-mall"></i><span class="text">商城</span></router-link></div></Col>
                    <Col span=3 style="height:100%"><div class="route"><router-link class="order list-item" to="/project/associator"><i class="icon icon-order"></i><span class="text">订单</span></router-link></div></Col>
                    <Col span=3 style="height:100%"><div class="route"><router-link class="data list-item" to="/project/associator"><i class="icon icon-data"></i><span class="text">数据</span></router-link></div></Col>
                    <Col span=3 style="height:100%"><div class="route"><router-link class="set list-item" to="/project/associator"><i class="icon icon-set"></i><span class="text">设置</span></router-link></div></Col>
                </Row>
            </Col>
            <Col span="10" class="item"></Col>
        </Row>

        <!-- <ul ref='catalogs' @click='toggle'>
            <li class="active"><router-link class="adimin list-item" to="/project/admin"><i class="icon icon-admin"></i><span class="text">账户</span></router-link></li>
            <li><router-link class="catalog list-item" to="/project/associator"><i class="icon icon-catalog"></i><span class="text">会员</span></router-link></li>
            <li><router-link class="activity list-item" to="/project/associator"><i class="icon icon-activity"></i><span class="text">活动</span></router-link></li>
            <li><router-link class="mall list-item" to="/project/associator"><i class="icon icon-mall"></i><span class="text">商城</span></router-link></li>
            <li><router-link class="order list-item" to="/project/associator"><i class="icon icon-order"></i><span class="text">订单</span></router-link></li>
            <li><router-link class="data list-item" to="/project/associator"><i class="icon icon-data"></i><span class="text">数据</span></router-link></li>
            <li><router-link class="set list-item" to="/project/associator"><i class="icon icon-set"></i><span class="text">设置</span></router-link></li>
        </ul> -->
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
@import "../../../styles/theme.less";
.top-container {
  .grid-row {
    height: @firstSideBarHeight;
    .item {
      height: inherit;
      .logo {
        float: left;
        height: inherit;
        line-height: @firstSideBarHeight;
        .logo-image {
          float: left;
          width: 55px;
          height: 55px;
          background-image: url("");
          margin-left: 35px;
        }
        .title {
          float: left;
          font-size: 24px;
        }
      }
      .list-item {
        display: inline-block;
        width: 92px;
        height: @firstSideBarHeight;
        color: @firstSideBarFontColor;
        font-size: @firstSideBarFontSize;
        &:hover {
          cursor: pointer;
          background-color: @firstSideBarHoverColor;
        }
        .icon {
          display: block;
          font-size: 28px;
          color: #fff;
          margin-top: 16px;
        }
        .text {
          display: block;
          height: 20px;
          color: #fff;
          margin-top: 5px;
        }
      }
      .route {
        height: inherit;
        .active {
          background-color: @firstSideBarHoverColor;
        }
      }
    }
  }
}
</style>

// <style lang="less" scoped>
// @import "../../../styles/theme.less";
// .top-container {
//   position: relative;
//   height: inherit;
//   background: @firstSideBarBackgroundColor;
//   .logo {
//     float: left;
//     height: inherit;
//     line-height: @firstSideBarHeight;
//     .logo-image {
//       float: left;
//       width: 55px;
//       height: 55px;
//       background-image: url("");
//       margin-left: 35px;
//     }
//     .title {
//       float: left;
//       font-size: 24px;
//     }
//   }
//   ul {
//     float: left;
//     height: inherit;
//     font-size: 0px;
//     text-align: left;
//     li {
//       display: inline-block;
//       width: 92px;
//       text-align: center;
//       .list-item {
//         display: inline-block;
//         width: 92px;
//         height: @firstSideBarHeight;
//         color: @firstSideBarFontColor;
//         font-size: @firstSideBarFontSize;
//         &:hover {
//           cursor: pointer;
//           background-color: @firstSideBarHoverColor;
//         }
//         .icon {
//           display: block;
//           font-size: 28px;
//           color: #fff;
//           margin-top: 16px;
//         }
//         .text {
//           display: block;
//           height: 20px;
//           color: #fff;
//           margin-top: 5px;
//         }
//       }
//     }
//     .active {
//         background-color: @firstSideBarHoverColor;
//      }
//   }
// }
//
</style>