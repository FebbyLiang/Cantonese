<template>
    <div class="contentBox">
        <div class="s-box" v-for="(item,index) in list" :key="index">
            <img :src="item.imageUrl"/>
            <div class="sub-box">
                <p class="title">{{item.title}}</p>
                <p class="summary">{{item.summary}}
                </p>
                <span class="commentNum">评论数 {{item.commentNum}}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"contentBox",
        data() {
            return {
                list:[
                    {
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },
                    {
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },
                    {
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    }
                    ,{
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },{
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },{
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },{
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },{
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    },{
                        imageUrl:require("../../assets/img/common/1.jpg"),
                        title:"广州西华路美食打卡",
                        summary:"今天去了著名的西华路美食打卡，这条街真的好多广州老字号美食哦！一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦一整天吃下来肚子撑撑的，超满足~强烈推荐大家来打卡哦",
                        commentNum:"120"

                    }
                ]
            }
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

<style scoped>
    .contentBox{
        width:100%;
        /*border:1px solid red;*/
    }
    .s-box{
        display: flex;
        flex-direction: row;
        padding:10px 3%;
        width:94%;
        /* height: 100px; */
        border-bottom: 1px solid #b4b0b0;
    }
    .s-box:hover{
        cursor: pointer;
        background: rgba(243, 243, 243,0.3);
    }
    .s-box img{
        width:90px;
        height: 90px;
        margin-right: 20px;
        border-radius: 4px;
    }
    .sub-box{
        max-width: 560PX;
    }
    .sub-box .title{
        margin-bottom: 10px;
        font-size: 22px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color:#df7366;
        /* border:1px solid red; */
    }


    .sub-box .summary{
        margin-bottom: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        color: #8a8a8a;
        /* border:1px solid blue; */
    }
    .commentNum{
        float: right;
        font-size: 14px;
        color: #8a8a8a;
        /* border:1px solid red; */
    }
</style>