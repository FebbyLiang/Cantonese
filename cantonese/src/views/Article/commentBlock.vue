<template>
    <div class="comment-box">
        <h2>评论</h2>
        <div class="com-self-reply">
            <img src="../../assets/img/common/11.jpg">
            <input type="text" placeholder="输入评论" maxlength="100">
            <el-button type="primary" class="com-button">评论</el-button>
            <!-- <button class="com-button">评论</button> -->
        </div>
        <div class="com-container">
            <div class="single-com-box" v-for="(item,index) in commentList" :key="index">
                <div class="outer-box">
                    <img class="s-com-userImg" :src="item.imgUrl"/>
                    <div class="s-com-box">
                        <p class="com-nickname">{{item.nickname}}</p>
                        <p class="com-user-content">{{item.content}}</p>
                        <div class="com-bottom">
                            <span>{{item.time}}</span>
                            <div class="com-like-reply">
                                <img src="../../assets/img/common/details04.png">
                                <span class="com-commentNum">回复 </span>
                            </div>
                            <div class="com-like-reply" @click="changeLike(index)">
                                <img src="../../assets/img/common/details23.png" v-if="item.likeFlag">
                                <img src="../../assets/img/common/details02.png" v-else>
                            </div>
                        </div>
                    </div>
                </div>

<!--                二级回复-->
                <div class="nesting-box">
                    <img class="s-com-userImg" :src="item.imgUrl"/>
                    <div class="s-com-box">
                        <p class="com-nickname">{{item.nickname}}</p>
                        <p class="com-user-content">{{item.content}}</p>
                        <div class="com-bottom">
                            <span>{{item.time}}</span>
                            <div class="com-like-reply">
                                <img src="../../assets/img/common/details04.png">
                                <span class="com-commentNum">回复 </span>
                            </div>
                            <div class="com-like-reply" @click="changeLike(index)">
                                <img src="../../assets/img/common/details23.png" v-if="item.likeFlag">
                                <img src="../../assets/img/common/details02.png" v-else>
                            </div>
                        </div>
                    </div>
                </div>
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
                commentList:[
                    {
                        id:"0",
                        imgUrl:require("../../assets/img/common/1.jpg"),
                        nickname:"小梁",
                        content:"国庆都不休息吗？优秀的人都这么优秀",
                        time:"2小时前",
                        likeFlag:false,

                    },
                    {
                        id:"1",
                        imgUrl:require("../../assets/img/common/1.jpg"),
                        nickname:"小梁",
                        content:"国庆都不休息吗？优秀的人都这么优秀",
                        time:"2小时前",
                        likeFlag:true,

                    },
                    {
                        id:"2",
                        imgUrl:require("../../assets/img/common/1.jpg"),
                        nickname:"小梁",
                        content:"国庆都不休息吗？优秀的人都这么优秀",
                        time:"2小时前",
                        likeFlag:false,

                    },{
                        id:"3",
                        imgUrl:require("../../assets/img/common/1.jpg"),
                        nickname:"小梁",
                        content:"国庆都不休息吗？优秀的人都这么优秀",
                        time:"2小时前",
                        likeFlag:true,

                    }
                ]
            }
        },
        //存放 方法
        methods: {
            //修改点赞的状态
            changeLike(index){
                this.commentList[index].likeFlag = !this.commentList[index].likeFlag;
                window.console.log(this.commentList[index].likeFlag)
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
    .comment-box{
        width:100%;
        /* height: 400px; */
        /* border:2px solid blue; */
    }
    .comment-box h2{
        padding:10px 0;
        margin: 0;
        margin-bottom: 10px;
        text-align: center;
        font-size: 24px;
        color: rgb(150, 148, 148);
        border-bottom: 1px solid #ebebeb;
    }
    .com-self-reply{
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
        padding:8px 20px;
        /* height: 35px; */
        background: #fafbfc;
        /* border:1px solid red; */
        border-radius: 3px;
    }
    .com-self-reply  img{
        margin-right: 15px;
        width:35px;
        height: 35px;
        vertical-align: middle;
        border-radius: 50%;
    }
    .com-self-reply input{
        margin-right: 10px;
        margin-bottom: 10px;
        width:530px;
        height: 30px;
        text-indent: 10px;
        border-radius: 6px;
        outline: none;
        border:none;
        border:1px solid #ddd;
    }
    .com-button{
        height: 32px;
        line-height: 12px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: rgb(100, 176, 238);
        outline: none;
        border:none;
    }

    /* 评论主体 */

    .single-com-box{
        /*display: flex;*/
        /*flex-direction: row;*/
        margin:10px 0;
        margin-left: 10%;
        width:90%;
         border:1px solid blue;
    }
    .single-com-box .s-com-userImg{
        float: left;
        margin-right: 15px;
        width:35px;
        height: 35px;
        vertical-align: middle;
        border-radius: 50%;
    }
    .s-com-box{
        margin-left:50px;
        padding-bottom: 10px;
        width:98%;
        font-size: 13px;
        border-bottom: 1px solid #ebebeb;
    }
    .s-com-box p{
        margin-bottom: 4px;

    }
    .outer-box{
        padding-bottom: 10px;
        width:88%;
        font-size: 13px;
        border-bottom: 1px solid red;
    }
    .nesting-box{
        margin-left: 50px;
        padding-bottom: 10px;
        width:78%;
        font-size: 13px;
        border-bottom: 1px solid red;
    }

    .com-bottom .com-like-reply{
        float: right;
        margin:0 5px;
    }
    .com-bottom .com-like-reply img{
        margin-right: 3px;
        width:15px;
        height: 15px;
        vertical-align: middle;
    }
</style>