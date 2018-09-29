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
                <div class="list-footer">
                  <ul class="footer-content clearfix">
                    <li class="footer-item">
                      <div class="left-part">
                        <div class="logo">
                          <img class="image" src= './assets/shop-state.svg'/>
                          <span class="text">商品</span>
                        </div>
                      </div>
                      <div class="right-part">
                        <span class="item state">上架中</span>
                        <span class="item number">200</span>
                        <span class="item select">挑选</span>
                        <span class="item stock">
                          <i class="text">库存不足</i>
                          <i class="number">5</i>
                        </span>
                      </div>
                    </li>
                    <li class="footer-item">
                      <div class="left-part">
                        <div class="logo">
                          <img class="image" src= './assets/active-state.svg'/>
                          <span class="text">活动</span>
                        </div>
                      </div>
                      <div class="right-part">
                        <span class="item state">进行中</span>
                        <span class="item number">200</span>
                        <span class="item select">挑选</span>
                        <span class="item stock">
                          <i class="text">库存不足</i>
                          <i class="number">5</i>
                        </span>
                      </div>
                    </li>
                    <li class="footer-item">
                      <div class="left-part">
                        <div class="logo">
                          <img class="image" src= './assets/order-state.svg'/>
                          <span class="text">订单状态</span>
                        </div>
                      </div>
                      <ul class="right-part">
                        <li class="right-part-item">
                          <span class="dot"></span>
                          <span class="state">待审核</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                        <li class="right-part-item">
                          <span class="dot"></span>
                          <span class="state">待处理</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                        <li class="right-part-item">
                          <span class="dot"></span>
                          <span class="state">待发货</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                        <li class="right-part-item">
                          <span class="state">今日合计</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                      </ul>
                    </li>
                    <li class="footer-item">
                      <div class="left-part">
                        <div class="logo">
                          <img class="image" src= './assets/system-state.svg'/>
                          <span class="text">系统状态</span>
                        </div>
                      </div>
                      <ul class="right-part">
                        <li class="right-part-item">
                          <span class="dot"></span>
                          <span class="state">接口配置</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                        <li class="right-part-item">
                          <span class="dot"></span>
                          <span class="state">今日预算</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                        <li class="right-part-item">
                          <span class="dot"></span>
                          <span class="state">审核金额</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                        <li class="right-part-item">
                          <span class="state">账户信息</span>
                          <span class="number">6</span>
                          <span class="text">审核</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
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
    var myChart = echarts.init(document.getElementById("ask-data"),null, {
      height: 498
    });
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
@import "./styles/homepage.less";
@innerBackColor: #fff;
@borderColor: #ccc;
.homepage {
  padding: 20px 26px 101px 20px;
  font-size: 14px;
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
    .list-content {
      height: inherit;
      background: @innerBackColor;
      box-sizing: border-box;
      .tabs-content {
        padding-top: 30px;
        .ask-data {
          height: 498px;
        }
      }
    }
    .list-footer{
      height: 236px;
      margin-top: 20px;
      .footer-content{
        height: inherit;
        .footer-item {
          float: left;
          width: 324px;
          height: inherit;
          background-color: @innerBackColor;
          margin-right: 20px;
          padding: 20px 0px 20px 0px;
          .left-part {
            .left-part;
            .logo {
              display: inline-block;
              position: relative;
              top: 50%;
              margin-top: -25px;
              .image{
                width: 50px;
                height: 50px;
              }
              .text {
                display: block;
                position: absolute;
                width: 130px;
                left: -40px;
                top: 50px;
                text-align: center;
                font-size: 16px;
                font-weight: bold;
                margin-top: 10px;
              }
            }
          }
          .right-part {
            .right-part;
          }
          &:nth-of-type(3) {
            width: 482px;
            .left-part {
              .left-part-sec;
            }
            .right-part {
            .right-part-sec;
            }
          }
          &:nth-of-type(4) {
            width: 482px;
            margin-right: 0px;
            .left-part {
              .left-part-sec;
            }
            .right-part {
              .right-part-sec;
            }
          }
        }
      }
    }
  }
}
</style>

<style>
.tabs-content .ivu-tabs-bar {
  border: none;
  margin-bottom: 0px;
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





