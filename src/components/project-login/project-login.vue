<template>
    <div class="login-containor">
        <div class="title">我是登录页面</div>
        <div class="login" @click = 'skip'>登录</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hahah'
    }
  },
  methods: {
    skip () {
      this.$router.push({path: '/project'})
    }
  }
}
</script>

<style lang="less" scoped>

</style>
