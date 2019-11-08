<template>
    <div class="block user-profile">
        <div class="user-header">
            <img src="../../assets/img/common/1.jpg">
            <span>小梁</span>
        </div>
        <div class="user-box">
            <div class="user-infor">
                <span >他的文章</span>
                <span>10</span>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="user-infor">
                <span>关注</span>
                <span>12</span>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="user-infor">
                <span>粉丝</span>
                <span>36</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                activeName: 'first',
                imgList:[
                    {
                        id:"0",
                        imageUrl:require("../../assets/img/common/1.jpg"),
                    },
                    {
                        id:"1",
                        imageUrl:require("../../assets/img/common/2.jpg"),
                    },
                    {
                        id:"2",
                        imageUrl:require("../../assets/img/common/3.jpg"),
                    }
                ]
            }
        },
        //存放 方法
        methods: {},
    }
</script>

<style scoped>
    .user-profile{
        padding:10px 20px;
        /* height: 250px; */
        box-shadow: 0 1px 2px 0 rgba(104, 103, 103, 0.2);
        border-radius: 4px;
        background: #fff;
    }
    .user-header{
        padding-bottom: 10px;
        margin-bottom: 20px;
        border-bottom: 1px solid #ebebeb;
        /* border:1px solid red; */
    }

    .user-header img{
        width:60px;
        height: 60px;
        margin-right: 20px;
        vertical-align: middle; /*解决img跟文字不对齐问题*/
        border-radius: 50%;
    }
    .user-header span{
        font-size: 20px;
        font-weight: 500;
    }
    .user-box{
        display: flex;
        flex-direction: row;
    }
    .user-box .user-infor{
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow:1;
        text-align: center; /*所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）*/
        /* border:1px solid green; */
    }
    .user-infor span:nth-child(1){
        display: inline-block;
        margin-bottom: 8px;
        font-size: 14px;
        /* border:1px solid red; */
    }
    .user-infor span:nth-child(2){
        display: inline-block;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: bold;
    }
</style>