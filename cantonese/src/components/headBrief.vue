<template>
    <div class="headBrief">
        <div class="inner">
            <div class="header">
                <h1>粤进e+</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'headBrief',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {},
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

<style  scoped>
    .headBrief {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 320px;
        background-image: url("../assets/img/common/header.jpg");
        background-position: center center;
        z-index: -1;
    }
    .headBrief .inner {
        margin: 150px auto 0;
        width: 300px;
    }
    .inner .header {
        margin-top:20px;
        width: 100%;
        /*height: 210px;*/
        text-align: center;
        color: #fff;
    }
    .inner .header h1{
        letter-spacing: 4px;
        font-weight: 400;
        font-size: 52px;
        margin-bottom: 45px;
    }
</style>