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
             <ul ref='catalogs' @click='toggle' id="catalogs-list">
                <li class="active"><router-link class="adimin list-item" to="/project/admin" @click = 'stopPropaga'><i class="icon icon-admin"></i><span class="text">账户</span></router-link></li>
                <li><router-link class="catalog list-item" to="/project/associator" @click = 'stopPropaga'><i class="icon icon-catalog"></i><span class="text">会员</span></router-link></li>
                <li><router-link class="activity list-item" to="/project/associator"><i class="icon icon-activity"></i><span class="text">活动</span></router-link></li>
                <li><router-link class="mall list-item" to="/project/associator"><i class="icon icon-mall"></i><span class="text">商城</span></router-link></li>
                <li><router-link class="order list-item" to="/project/associator"><i class="icon icon-order"></i><span class="text">订单</span></router-link></li>
                <li><router-link class="data list-item" to="/project/associator"><i class="icon icon-data"></i><span class="text">数据</span></router-link></li>
                <li><router-link class="set list-item" to="/project/associator"><i class="icon icon-set"></i><span class="text">设置</span></router-link></li>
            </ul>
                <!-- <Row ref='catalogs' @click='toggle'>
                    <Col span=3 style="height:100%" class="active"><router-link class="adimin list-item" to="/project/admin"><i class="icon icon-admin"></i><span class="text">账户</span></router-link></Col>
                    <Col span=3 style="height:100%"><router-link class="catalog list-item" to="/project/associator"><i class="icon icon-catalog"></i><span class="text">会员</span></router-link></Col>
                    <Col span=3 style="height:100%"><router-link class="activity list-item" to="/project/associator"><i class="icon icon-activity"></i><span class="text">活动</span></router-link></Col>
                    <Col span=3 style="height:100%"><router-link class="mall list-item" to="/project/associator"><i class="icon icon-mall"></i><span class="text">商城</span></router-link></Col>
                    <Col span=3 style="height:100%"><router-link class="order list-item" to="/project/associator"><i class="icon icon-order"></i><span class="text">订单</span></router-link></Col>
                    <Col span=3 style="height:100%"><router-link class="data list-item" to="/project/associator"><i class="icon icon-data"></i><span class="text">数据</span></router-link></Col>
                    <Col span=3 style="height:100%"><router-link class="set list-item" to="/project/associator"><i class="icon icon-set"></i><span class="text">设置</span></router-link></Col>
                </Row> -->
            </Col>
            <Col span="10" class="item"></Col>
        </Row>
    </div>
</template>

<script>
import CommonUtil from "@/utils/common.js";
export default {
  methods: {
    toggle(e) {
      debugger
      const catalogsDom = this.$refs.catalogs;
      CommonUtil.toggle(e.target, catalogsDom);
    },
    stopPropaga(e) {
      e.stopPropagation()
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
      ul {
        height: @firstSideBarHeight;
        li {
          float: left;
          width: 12.5%;
          height: inherit;
          .list-item {
            width: inherit;
            height: @firstSideBarHeight;
            color: @firstSideBarFontColor;
            font-size: @firstSideBarFontSize;
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
          &:hover {
              cursor: pointer;
              background-color: @firstSideBarHoverColor;
            }
        }
        .active {
            background-color: @firstSideBarHoverColor;
        }
      }
    }
  }
}
</style>