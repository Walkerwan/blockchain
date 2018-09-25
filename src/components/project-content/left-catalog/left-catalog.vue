<template>
    <div class="left-container">
        <ul ref='catalogs' @click='toggle'>
            <li class="active"><router-link class="adimin list-item" to="/project/admin">优酷视频</router-link></li>
            <li><router-link class="catalog list-item" to="/project/associator">会员</router-link></li>
            <!-- <li class="activity list-item"><router-link>活动</router-link></li>
            <li class="mall list-item"><router-link>商城</router-link></li>
            <li class="order list-item"><router-link>订单</router-link></li>
            <li class="data list-item"><router-link>数据</router-link></li>
            <li class="set list-item"><router-link>设置</router-link></li> -->
        </ul>
    </div>
</template>

<script>
import CommonUtil from '@/utils/common.js'
export default {
    methods: {
        toggle(e) {
            const catalogsDom = this.$refs.catalogs;
            CommonUtil.toggle(e.target, catalogsDom)
        }
    }
};
</script>

<style lang="less" scoped>
@import '../../../styles/theme.less';
.left-container {
  width: 75px;
  background: @firstSideBarBackgroundColor;
  .list-item {
    display: block;
    width: 75px;
    height: 75px;
    line-height: 75px;
    color: @firstSideBarFontColor;
    font-size: @firstSideBarFontSize;
    &:hover {
        cursor: pointer;
        background-color: @firstSideBarHoverColor;
    }
  }

  .adimin.list-item {
    width:75px;
    height: 120px;
    line-height: 120px
  }

  .active {
      background-color: @firstSideBarHoverColor;
  }
}

</style>