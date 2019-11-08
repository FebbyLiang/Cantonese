<template>
    <div class="ad-02">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane  label="关于我们" name="first">
                <img class="tab-pane-img" src="@/assets/img/common/er-code.jpg"/>
                <h4>扫一扫也能使用粤进e+哦</h4>
            </el-tab-pane>
            <el-tab-pane label="招聘小编" name="second">
                <img class="tab-pane-img" src="@/assets/img/common/5.jpg"/>
                <h4>志同道合的你赶紧加入我们吧</h4>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name: 'ad-02',
        //存放 数据
        data: function () {
            return {
                activeName: 'first'
            }
        },
        //存放 方法
        methods: {
            handleClick(tab, event) {
                window.console.log(tab, event);
            }
        },
        //存放 过滤器
        filters: {},
        /*  生命周期函数  */
        //创建期间
        beforeCreate() {
        },
        created() {
        },
        beforeMount() {
        },
        mounted() {
        },
        //运行期间
        beforeUpdate() {
        },
        updated() {
        },
        //销毁时期
        beforeDestroy() {
        },
        destroyed() {
        }
    }
</script>

<style scoped>
    .ad-02{
        padding:0 10px;
        height: 380px;
        box-shadow: 0 1px 2px 0 rgba(104, 103, 103, 0.2);
        border-radius: 4px;
        background: #fff;
    }
    .tab-pane-img {
        width:260px;
        height: 270px;
        border-radius: 4px;
    }
    h4{
        font-size: 16px;
        text-align: center;
        color: rgb(82, 79, 79);
    }
</style>