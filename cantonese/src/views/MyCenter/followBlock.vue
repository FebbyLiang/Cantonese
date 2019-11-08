<template>
    <div class="follow-block-box">
        <div class="follow-block">
            <div class="follow-inner">
                <span>我的关注</span>
                <span>12</span>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="follow-inner">
                <span>我的粉丝</span>
                <span>36</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'followBlock',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {},

    }
</script>

<style scoped>
    .follow-block-box {
        padding: 20px 10px;
        box-shadow: 0 1px 2px 0 rgba(104, 103, 103, 0.2);
        border-radius: 4px;
        background: #fff;
    }
    .follow-block-box  span:nth-child(1){
        display: block;
        color:#df7366;
    }
    .follow-block-box  span:nth-child(2){
        display: block;
        margin:5px 0;
        font-weight: 300;
    }
    .follow-block{
        display: flex;
        flex-direction: row;
        text-align: center;
    }
    .follow-inner{
        width:50%;
    }
</style>