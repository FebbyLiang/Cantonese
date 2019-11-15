<template>
    <div>
<!--        发表帖子信息框-->
        <div class="discovery-send">
            <textarea placeholder="有什么新鲜事想告诉大家？" maxlength="200"></textarea>
            <div class="discovery-func">
                <div class="kind">
                    <div class="kind-inner">
                        <input type="file" class="kind-upload-file" @change="changeImage($event)" @click="clickBox(0)" multiple accept="image/gif,image/jpeg,image/jpg,image/png">
                        <img src="../../assets/img/common/camera_add.png" >
                        <span>图片</span>

                        <div class="kind-hidden" v-if="showImg" >
                            <div class="kind-description-img" >
                                <span>上传图片</span>
                                <span class="kind-close" @click="clickBox(1)">关闭</span>
                            </div>
                            <img :src="item" v-for="(item,index) in uploadImg" :key="index" >
                        </div>
                    </div>
                    <div class="kind-inner">
                        <input type="file" class="kind-upload-file" @change="changeVideo($event)"  @click="clickBox(2)">
                        <img src="../../assets/img/common/record.png">
                        <span>视频</span>
                        <div class="kind-hidden" v-if="showVideo">
                            <div class="kind-description-video">
                                <span>上传视频</span>
                                <span class="kind-close" @click="clickBox(3)">关闭</span>
                            </div>
                            <video :src="uploadVideo[0]" controls></video>
                        </div>
                    </div>
                </div>
                <div class="func">
                    <button class="send-button">发表</button>
                </div>
            </div>
        </div>
<!--        用户帖子展示区-->
        <div class="post-display">
            <div class="post-box-outer">
                <div class="post-box">
                    <img src="../../assets/img/common/1.jpg" class="avatar">
                    <div class="post-box-inner">
                        <div class="username">
                            <router-link to="" >小梁</router-link>
                        </div>
                        <span class="post-time">2019/10/11</span>
                        <div class="post-text">好好学习天天向上</div>
                        <div class="shareImg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                        </div>
                    </div>
                </div>
                <div class="post-func">
                    <div class="func-kind">
                        <el-divider direction="vertical"></el-divider>
                        <span>收藏</span>
                        <el-divider direction="vertical"></el-divider>
                    </div>

                    <div class="func-kind">
                        <el-divider direction="vertical"></el-divider>
                        <span>评论</span>
                        <el-divider direction="vertical"></el-divider>
                    </div>

                    <div class="func-kind">
                        <el-divider direction="vertical"></el-divider>
                        <span>点赞</span>
                        <el-divider direction="vertical"></el-divider>
                    </div>
                </div>
            </div>
        </div>


        <div class="post-display">
            <div class="post-box-outer">
                <div class="post-box">
                    <img src="../../assets/img/common/1.jpg" class="avatar">
                    <div class="post-box-inner">
                        <router-link to="" class="username">小梁</router-link>
                        <span class="post-time">2019/10/11</span>
                        <div class="post-text">好好学习天天向上</div>
                        <div class="shareImg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                            <img src="../../assets/img/common/1.jpg">
                        </div>
                    </div>
                </div>
                <div class="post-func">
                    <div class="func-kind">
                        <span>收藏</span>
                    </div>
                    <div class="func-kind">
                        <span>评论</span>
                    </div>
                    <div class="func-kind">
                        <span>点赞</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name:"",
        data() {
            return {
                showImg:false,
                showVideo:false,
                imgLen:0,
                videoLen:0,
                uploadImg:[

                ],
                uploadVideo:[
                    //require("../../assets/video/cantonese.mp4")
                ]
            }
        },
        //存放 方法
        methods: {
            // initDiscovery(){
            //     http.get('', {
            //
            //     })
            //         .then((response) => {
            //             window.console.log(response);
            //
            //         })
            //         .catch(function (error) {
            //             window.console.log(error);
            //         });
            // },
            // getIndex(index){
            //     window.console.log(index)
            //     this.$router.push({
            //         name:"Article",
            //         query:{
            //             id:index
            //         }
            //     })
            // }

            clickBox(index){
                switch (index) {
                    case 0:
                        this.showImg = true;
                        break;
                    case 1:
                        this.showImg = !this.showImg;
                        this.uploadImg = [];
                        break;
                    case 2:
                        this.showVideo = true;
                        break;
                    case 3:
                        this.showVideo = !this.showVideo;
                        this.uploadVideo = [];
                        break;
                }
            },

            //上传图片
            changeImage: function(e){
                let file = e.target.files[0];
                if(file) {
                    this.file = file
                    let reader = new FileReader()
                    let that = this   //这里的that指向vue实例
                    reader.readAsDataURL(file)
                    reader.onload = function(){
                        // 在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
                        //window.console.log("file对象是："+this.result)
                        if(that.imgLen<=9){
                            that.imgLen++;
                            that.uploadImg.push(this.result);
                            window.console.log(that.imgLen);
                        }
                        window.console.log(that.uploadImg)

                    }
                }
            },
            //上传视频
            changeVideo: function(e){
                let file = e.target.files[0];
                if(file) {
                    this.file = file
                    //window.console.log(this.file)
                    let reader = new FileReader()
                    let that = this   //这里的that指向vue实例
                    reader.readAsDataURL(file)
                    reader.onload = function(){
                        // 在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
                        //window.console.log("file对象是："+this.result)
                        if(that.videoLen<1){
                            that.videoLen++;
                            that.uploadVideo.push(this.result);
                            //window.console.log(that.videoLen);
                        }
                        //window.console.log(that.uploadVideo)

                    }
                }
            },
        },
        /*  生命周期函数  */
        created() {

        },
        mounted() {
        }
    }
</script>

<style scoped>
    button:hover{
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    a:hover{
         color: #df7366!important;
     }

    .discovery-send{
        /*padding-bottom: 15px;*/
        width:100%;
        /*height:150px;*/
        border-bottom:1px solid #ddd;
    }
    .discovery-send textarea{
        padding: 1.5%;
        width:97%;
        height: 100px;
        line-height: 20px;
        letter-spacing:2px;
        font-size: 15px;
    }
    .discovery-func{
        display: flex;
        flex-direction: row;
        margin:5px 0;
        padding-bottom: 5px;
        width:100%;
        height: 25px;
        border-bottom:1px solid #ddd;
    }
    .discovery-func .kind{
        flex-grow:1;
        /*width:450px;*/
        height: 100%;
    }
    .kind .kind-inner{
        position: relative;
        float: left;
        width:80px;
        font-size: 13px;
        /*border:1px solid blue;*/
    }
    .kind-inner img{
        margin-right: 10px;
        width:23px;
        height: 23px;
        vertical-align: middle;
    }
    .kind-upload-file{
        position: absolute;
        width:60px;
        height: 23px;
        opacity: 0;
    }
    /*隐藏的上传预览框*/
    .kind-hidden{
        position: absolute;
        top:35px;
        padding:15px;
        /*width:135px;*/
        border-radius: 7px;
        background: #fff;
        border:1px solid #ddd;
        z-index: 100;
    }
    .kind-hidden img{
        margin-right: 5px;
        width:40px;
        height:40px;
    }
    .kind-hidden video{
        margin-right: 5px;
        width:250px;
        height:150px;
    }
    .kind-description-img{
        margin-bottom: 10px;
        width:135px;
        font-size: 14px;
        font-weight: bold;
        border:1px solid red;
    }
    .kind-description-video{
        margin-bottom: 10px;
        width:250px;
        font-size: 14px;
        font-weight: bold;
        border:1px solid red;
    }
    .kind-close{
        float: right;
    }
    .kind-close:hover{
        color: red;
        cursor: pointer;
    }
    .func .send-button{
        width:60px;
        height: 25px;
        line-height: 25px;
        color: #fff;
        border:none;
        outline: none;
        border-radius: 3px;
        background: #df7366;
    }


    /*帖子信息框*/
    .post-display{
        margin-bottom: 10px;
        width:100%;
        border-radius: 3px;
        border:1px solid #ddd;
    }
    .post-box{
        padding:15px 10px;
        display: flex;
        flex-direction: row;
        /*border:1px solid blue;*/
    }
    .post-box .avatar{
        float: left;
        margin-right: 15px;
        width:65px;
        height: 65px;
        border-radius: 50%;
    }
    .post-box .post-box-inner{
        flex-grow: 1;
        flex-direction: column;
        /*border:2px solid red;*/
    }
    .post-box-inner .username{
        /*display: block;*/
        margin:0;
        font-size: 16px;
        color: #333;
        font-weight: bold;
    }
    .post-time{
        font-size: 12px;
        color: #808080;
    }
    .post-box-inner .shareImg{
        width:400px;
        /*border:2px solid green;*/
    }
    /*帖子内容*/
    .post-text{
        margin-bottom: 6px;
        color: #333;
        letter-spacing: 1px;
    }
    .shareImg img{
        width:120px;
        height: 120px;
        margin:0 10px 5px 0;
    }

    .post-func{
        display: flex;
        flex-direction: row;
        width:100%;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-top:1px solid #ddd;
    }
    .post-func .func-kind{
        flex-grow: 1;
        text-align: center;
    }
</style>