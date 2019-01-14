<template>
  <div class="zcbass-container">
    <div class="container">
      <div class="businessLayer" v-text="businessLayer"></div>
      <div class="body">
        <div class="safe">
          <div class="title" v-text="safe.title"></div>
          <ul>
            <li v-for="item in safe.data" :key="item.id" v-text="item.label"></li>
          </ul>
        </div>
        <div class="bussiness">
          <div class="container">
            <div class="title">
              <div v-for="item in bussiness.title" :key="item.id" v-text="item.label"></div>
            </div>
            <div class="arrow">
              <div class="arrow-icon"></div>
              <div class="arrow-icon"></div>
              <div class="arrow-icon"></div>
            </div>
            <div class="product">
              <div class="title" v-text="bussiness.product.title"></div>
              <div class="details">
                <div v-for="item in bussiness.product.details" :key="item.id" v-text="item.label"></div>
              </div>
            </div>
            <div class="APIAndSDK">
              <div class="title" v-text="bussiness.APIAndSDK.title"></div>
              <div class="chain">
                <div class="title" v-text="bussiness.APIAndSDK.chain.title"></div>
                <div class="details">
                  <div class="row row1">
                    <div
                      v-for="item in [...bussiness.APIAndSDK.chain.details].splice(0,5)"
                      :key="item.id"
                      v-text="item.label"
                    ></div>
                  </div>
                  <div class="row row2">
                    <div
                      v-for="item in [...bussiness.APIAndSDK.chain.details].splice(5,5)"
                      :key="item.id"
                      v-text="item.label"
                    ></div>
                  </div>
                  <div class="row row3">
                    <div
                      v-for="item in [...bussiness.APIAndSDK.chain.details].splice(10)"
                      :key="item.id"
                      v-text="item.label"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="doubleChain">
                <div class="title" v-text="bussiness.APIAndSDK.doubleChain.title"></div>
                <div class="details" v-text="bussiness.APIAndSDK.doubleChain.details"></div>
              </div>
              <div class="container">
                <div class="title" v-text="bussiness.APIAndSDK.container.title"></div>
                <div class="details">
                  <div
                    v-for="item in bussiness.APIAndSDK.container.details"
                    :key="item.id"
                    v-text="item.label"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="operation">
          <div class="title" v-text="operation.title"></div>
          <ul>
            <li v-for="item in operation.data" :key="item.id" v-text="item.label"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      businessLayer: "业务层",
      safe: {
        title: "安全管理",
        data: [
          { id: 0, label: "应用审查管理" },
          { id: 1, label: "云防火墙管理" },
          { id: 2, label: "密匙管理" },
          { id: 3, label: "容火管理" },
          { id: 4, label: "操作管理" },
          { id: 5, label: "云监控管理" }
        ]
      },
      bussiness: {
        title: [
          { id: 0, label: "零售" },
          { id: 1, label: "制图" },
          { id: 2, label: "物流" },
          { id: 3, label: "行政" },
          { id: 4, label: "金融" },
          { id: 5, label: "跨境" }
        ],
        product: {
          title: "产品解决方案",
          details: [
            { id: 0, label: "云链【ZC-OS】" },
            { id: 1, label: "积分【ZC-IN】" },
            { id: 2, label: "溯源【ZC-SY】" }
          ]
        },
        APIAndSDK: {
          title: "区块链API & SDK",
          chain: {
            title: "链管理",
            details: [
              { id: 0, label: "网络管理" },
              { id: 1, label: "资源管理" },
              { id: 2, label: "成员管理" },
              { id: 3, label: "联盟管理" },
              { id: 4, label: "成员管理" },
              { id: 5, label: "组织管理" },
              { id: 6, label: "节点管理" },
              { id: 7, label: "证书管理" },
              { id: 8, label: "密匙管理" },
              { id: 9, label: "链日志管理" },
              { id: 10, label: "通道管理" },
              { id: 11, label: "合约管理" },
              { id: 12, label: "策略管理" }
            ]
          },
          doubleChain: {
            title: "双链",
            details: "ZCOS"
          },
          container: {
            title: "容器",
            details: [
              { id: 0, label: "物理层容器集群管理" },
              { id: 1, label: "Swarm" },
              { id: 2, label: "Kuberneres(k8s)" }
            ]
          }
        }
      },
      operation: {
        title: "运营管理",
        data: [
          { id: 0, label: "产品管理" },
          { id: 1, label: "订单管理" },
          { id: 2, label: "支付管理" },
          { id: 3, label: "发票管理" },
          { id: 4, label: "计费管理" },
          { id: 5, label: "认证管理" },
          { id: 6, label: "工单管理" },
          { id: 7, label: "操作日志管理" },
          { id: 8, label: "数据报表管理" }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import url("./styles/arch-introduction.less");
</style>



