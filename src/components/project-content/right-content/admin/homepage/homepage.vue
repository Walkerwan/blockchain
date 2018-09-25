<template>
    <div>
        <div class="homepage">
            <div class="homepage-title">企业首页</div>
            <div class="homepage-content">
                <div class="list-title">优酷视频</div>
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
.homepage {
  padding-top: 40px;
  padding-left: 45px;
  .homepage-title {
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
  }
  .homepage-content {
    padding-top: 20px;
    .list-title {
      height: 115px;
      border: 1px solid #ccc;
      box-sizing: border-box;
      background-color: #fff;
      margin-bottom: 20px;
    }
    .list-content {
      height: 500px;
      background: #fff;
      border: 1px solid #ccc;
      box-sizing: border-box;
      .tabs-content {
          padding-top: 30px;
          .ask-data {
            height: 500px;
          }
      }
    }
  }
}
</style>

<style>

</style>




