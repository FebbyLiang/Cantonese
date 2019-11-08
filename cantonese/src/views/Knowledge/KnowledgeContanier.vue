<template>
    <div class="contentBox">
        <div class="s-box" v-for="(item,index) in list" :key="index">
            <!-- <img :src="item.imageUrl"></img> -->
            <div class="text-box">
                <p class="title">{{item.title}}</p>
                <p class="summary">{{item.summary}}</p>
                <p>
                    <img :src="item.imageUrl"/>
                    <span class="text-username">{{item.username}}</span>
                    <span class="commentNum">评论数 {{item.commentNum}}</span>
                </p>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"contentBox",
        data() {
            return {
                list: [
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"

                    },
                    {
                        imageUrl: require("../../assets/img/common/1.jpg"),
                        title: "广州省博物院打卡",
                        summary: "今天去了著名的广州省博物院打卡，超满足~强烈推荐大家来打卡哦",
                        username: "小梁",
                        commentNum: "120"
                    },
                ]
            }
        },
        //存放 方法
        methods: {},

    }
</script>

<style scoped>
    .contentBox{
        width:100%;
    }
    .s-box{
        display: flex;
        flex-direction: row;
        padding:10px 3%;
        width:94%;
        border-bottom: 1px solid #ebebeb;
    }

    .text-box{
        max-width: 760PX;
        width:760px;
    }
    .text-box .title{
        margin-bottom: 10px;
        font-size: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .text-box .summary{
        margin-bottom: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        color: #8a8a8a;
    }

    .text-box img{
        width:24px;
        height: 24PX;
        margin-right: 5px;
        vertical-align: middle; /*解决文字跟图片不对齐*/
        border-radius: 50%;
    }
    .text-box .text-username{
        font-size: 14px;
        color: #494848;
    }
    .commentNum{
        float: right;
        font-size: 14px;
        color: #8a8a8a;
    }
</style>