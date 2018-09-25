<template>
	<div>
		<div class="admin-left-part">
			<div class="title">
				<h3>账号管理</h3>
			</div>
			<ul ref='catalogs' class="list" @click="toggle">
				<li class="active"><router-link class="list-item" to="/project/admin/homepage">首页</router-link></li>
				<li><router-link class="list-item" to="/project/admin/account">账号信息</router-link></li>
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
.admin-left-part {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: @secordSideBarWidth;
  background-color: @secordSideBarBackgroundColor;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
  .title {
    height: 100px;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  .list {
    li .list-item {
      display: block;
      height: 45px;
      line-height: 45px;
	  text-align: center;
	  color: @secordSideBarFontColor;
      &:hover {
        background-color: @secordSideBarHoverColor;
      }
    }
    .active {
      background-color: @secordSideBarHoverColor;
    }
  }
}
.admin-right-part {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: @secordSideBarWidth;
  right: 0px;
  background-color: @secordSideBarBackgroundColor;
  overflow: auto;
}
</style>


