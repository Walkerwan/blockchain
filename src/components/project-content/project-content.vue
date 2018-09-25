<template>
    <div class="content-container">
        <div class="left-part">
            <left-catalog></left-catalog>
        </div>
        <div class="right-part">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import LeftCatalog from '@/components/project-content/left-catalog/left-catalog.vue'

export default {
    components: {
        LeftCatalog
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
@import '../../styles/theme.less';
.left-part {
    position: absolute;
    width: @firstSideBarWidth;
    top: 0px;
    bottom: 0px;
    background-color: @firstSideBarBackgroundColor;
    color: @firstSideBarFontColor;
    text-align: center;
}
.right-part {
    position: absolute;
    left: @firstSideBarWidth;
    right: 0px;
    top: 0px;
    bottom: 0px;
}
</style>
