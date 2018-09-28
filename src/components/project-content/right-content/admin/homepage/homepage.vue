<template>
    <div>
        <div class="homepage">
            <div class="homepage-title">
              <div class="left-logo"></div>
              <div class="right-content">
                <div class="right-top-title">
                  <span class="text">百果园</span>
                  <span class="state">已审核</span>
                </div>
                <div class="right-bottom-des">
                  <span>活动宣言：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</span>
                </div>
              </div>
            </div>
            <div class="homepage-content">
                <div class="list-content">
                    <Tabs class="tabs-content" type="card">
                        <TabPane label="访问数据">
                            <div class="ask-data" id="ask-data"></div>
                        </TabPane>
                        <TabPane label="订单数据"></TabPane>
                        <TabPane label="消耗积分"></TabPane>
                        <TabPane label="消耗资金"></TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted: function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("ask-data"));
    // 绘制图表
    myChart.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    });
  }
};
</script>

<style lang="less" scoped>
@import "../../../../../styles/theme.less";
.homepage {
  padding: 20px 26px 0px 20px;
  .homepage-title {
    height: 80px;
    .left-logo {
      float: left;
      width: 60px;
      height: 60px;
      background-color: yellow;
    }
    .right-content {
      float: left;
      padding-left: 10px;
      .right-top-title {
        margin-top: 10px;
        margin-bottom: 10px;
        .text {
          font-size: 16px;
          font-weight: bold;
        }
        .state {
          display: inline-block;
          width: 40px;
          height: 16px;
          line-height: 16px;
          margin-left: 10px;
          font-size: 12px;
          text-align: center;
          color: #ffffff;
          background-color: @secordSideBarFontHoverColor;
          border-radius: 2px;
        }
      }
    }
  }
  .homepage-content {
    overflow: auto;
    .list-content {
      height: inherit;
      background: #fff;
      border: 1px solid #ccc;
      box-sizing: border-box;
      .tabs-content {
        padding-top: 30px;
        .ask-data {
          height: 700px;
        }
      }
    }
  }
}
</style>

<style>
.tabs-content .ivu-tabs-bar {
  border: none;
}
.homepage
  .homepage-content
  .list-content
  .tabs-content
  .ivu-tabs-nav
  .ivu-tabs-tab.ivu-tabs-tab-active {
  background-color: #33a1f0;
  color: #fff;
}

.homepage
  .homepage-content
  .list-content
  .tabs-content
  .ivu-tabs-nav
  .ivu-tabs-tab:nth-of-type(2) {
  margin-left: 610px;
  margin-right: 10px;
}
.homepage
  .homepage-content
  .list-content
  .tabs-content
  .ivu-tabs-nav
  .ivu-tabs-tab {
  margin-right: 10px;
  width: 100px;
  height: 34px;
  background-color: #e5e5e5;
  text-align: center;
  border: none;
  border-radius: 6px;
}
.homepage
  .homepage-content
  .list-content
  .tabs-content
  .ivu-tabs-nav
  .ivu-tabs-tab:hover {
  color: #33a1f0;
}
.homepage
  .homepage-content
  .list-content
  .tabs-content
  .ivu-tabs-nav
  .ivu-tabs-tab.ivu-tabs-tab-active:hover {
  color: #fff;
}
.homepage .homepage-content .list-content .tabs-content {
  padding-top: 20px !important;
}
</style>





