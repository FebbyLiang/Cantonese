<template>
    <div class="contentBox">
        <div class="c-f-tabs">
            <p >
                <span>粤语知识</span>
            </p>
        </div>
        <div class="s-box" v-for="(item,index) in list" :key="index" @click="getIndex(index)">
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
    import http from '../../request/http'
    export default {
        name:"contentBox",
        data() {
            return {
                type:this.$route.params.id,
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
        methods: {
            initKnowledge(){
                http.get('', {

                })
                    .then((response) => {
                        window.console.log(response);

                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            },
            getIndex(index){
                window.console.log(index)
                // this.$router.push({
                //     name:"Article",
                //     query:{
                //         id:index
                //     }
                // })
            }
        },
        watch: {
            //动态监听路由参数变化
            $route(){
                this.type = this.$route.params.id;
                window.console.log(this.type);
            },
        },
        // created(){
        //     window.console.log(this.type);
        //     //this.initKnowledge();
        // },
        // updated(){
        //     window.console.log(this.type);
        // }

    }
</script>

<style scoped>
    .c-f-tabs{
        margin-bottom: 20px;
    }
    .c-f-tabs p{
        font-size: 28px;
        color: #409EFF;
    }
    .c-f-tabs span{
        display: inline;
        padding: 5px 0;
        border-bottom: 2px solid #409EFF;
    }
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