<template>
  <div class="cooper-container">
    <div class="title">
      <h2 v-text="title.head"></h2>
      <p v-text="title.p1"></p>
      <p v-text="title.p2"></p>
    </div>
    <div class="content">
      <div v-for="row in cooper" :key="row.id" class="row">
        <div class="details" v-for="details in row.details" :key="details.id">
          <img :src="details.path">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: {
        head: "合作伙伴",
        p1: "整合精英，整合人脉，整合技术，整合资源",
        p2: "中琛链会为合作人提供全方位立体化的运营新生态"
      },
      cooper: [
        {
          id: "row1",
          details: [
            {
              id: 0,
              path: require("./asset/cooper/cooperLogo/cooperLogo12.png")
            },
            {
              id: 1,
              path: require("./asset/cooper/cooperLogo/cooperLogo11.png")
            },
            {
              id: 2,
              path: require("./asset/cooper/cooperLogo/cooperLogo10.png")
            },
            {
              id: 3,
              path: require("./asset/cooper/cooperLogo/cooperLogo9.png")
            },
            {
              id: 4,
              path: require("./asset/cooper/cooperLogo/cooperLogo8.png")
            }
          ]
        },
        {
          id: "row2",
          details: [
            {
              id: 0,
              path: require("./asset/cooper/cooperLogo/cooperLogo7.png")
            },
            {
              id: 1,
              path: require("./asset/cooper/cooperLogo/cooperLogo5.png")
            },
            {
              id: 2,
              path: require("./asset/cooper/cooperLogo/cooperLogo4.png")
            },
            {
              id: 3,
              path: require("./asset/cooper/cooperLogo/cooperLogo3.png")
            }
          ]
        },
        {
          id: "row3",
          details: [
            {
              id: 0,
              path: require("./asset/cooper/cooperLogo/cooperLogo6.png")
            },
            {
              id: 1,
              path: require("./asset/cooper/cooperLogo/cooperLogo2.png")
            },
            {
              id: 2,
              path: require("./asset/cooper/cooperLogo/cooperLogo1.png")
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import url("./styles/cooper.less");
</style>


