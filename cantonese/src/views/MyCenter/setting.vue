<template>
    <div class="setting-view">
        <div class="setting-header">
            <h3 class="title">个人资料</h3>
        </div>
        <ul class="setting-view-list">
            <li class="setting-view-li">
                <span class="list-title">头像</span>
                <div class="upload-img">
<!--                    <img src="../../assets/img/common/1.jpg">-->
                    <img :src="avatar?avatar:require('../../assets/img/common/add.png')"  name="avatar">
                    <span class="upload-hint">支持 jpg、png 格式大小</span>
                    <button class="upload-button">点击上传</button>
                    <input class="upload-file" type="file"  name="avatar" ref="avatarInput" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
                </div>

            </li>
            <li class="setting-view-li">
                <span class="list-title">用户名</span>
                <input type="text" placeholder="肥肥" :disabled="disabled">
            </li>
            <li class="setting-view-li">
                <span class="list-title">简介</span>
                <input type="text" placeholder="好好学习天天向上" :disabled="disabled">
            </li>
            <li class="setting-view-li">
                <span class="list-title">修改密码</span>
                <input type="password" :disabled="disabled">
            </li>
            <li class="setting-view-li">
                <button class="alter">修改</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                avatar: '',
                file: '',
                showBg: false,
                disabled:true

            }
        },
        //存放 方法
        methods: {
            changeImage: function(e){
                let file = e.target.files[0];
                if(file) {
                    this.file = file
                    window.console.log(this.file)
                    let reader = new FileReader()
                    let that = this   //这里的that指向vue实例
                    reader.readAsDataURL(file)
                    reader.onload = function(){
                        // 在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
                        window.console.log("file对象是："+this.result)
                        that.avatar = this.result
                    }
                }
            },
            initData(){
                //     this.$request.get('', {
                //
                //     })
                //         .then((response) => {
                //             window.console.log(response);
                //
                //         })
                //         .catch(function (error) {
                //             window.console.log(error);
                //         });
                // }
            }
        },
        create(){
            this.initData();
        }
    }
</script>

<style scoped>
    .setting-view{
        padding: 10px 3%;
        width:94%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
        /*border:1px solid red;*/
    }
    .setting-header h3{
        margin:0;
        padding:20px 0;
        font-size: 24px;
        border-bottom: 1px solid #f1f1f1;
    }
    /*列表*/
    .setting-view-list{
        margin:0;
        padding: 0;
        width:100%;
        height: 400px;
        /*border:1px solid red;*/
    }
    .setting-view-list .setting-view-li{
        display: flex;
        flex-direction: row;
        padding:15px 0;
        width:100%;
        /*height: 40px;*/
        font-size: 16px;
        border-bottom: 1px solid #f1f1f1;
    }
    .upload-img{
        position: relative;
        width:600px;
        /*border:1px solid red;*/
    }
    .upload-img img{
        margin-right: 15px;
        width:70px;
        height: 70px;
    }
    .upload-img .upload-hint{
        position: absolute;
        top:0;
        color: #909090;
        font-size: 12px;
        margin-bottom: 1.5rem;
    }
    .upload-img  .upload-file{
        position: absolute;
        top:25px;
        width:80px;
        opacity: 0;
    }
    .upload-img .upload-button{
        position: absolute;
        top:25px;
        margin:0 auto;
        width:80px;
        height: 35px;
        border-radius: 4px;
        border:1px solid #dddd;
        outline: none;
        color: #ffffff;
        background: #df7366;
    }
    .setting-view-li .list-title{
        width:150px;
        line-height: 40px;
        color: #3d3d3d;
        /*border:1px solid red;*/
    }
    .setting-view-li input{
        width:400px;
        height: 35px;
        text-indent: 10px;
        border-radius: 4px;
        border:none;
        border:1px solid #dddd;
        outline: none;
    }

    .setting-view-li input[disabled]{
        /*opacity: 0.5;*/
        background-color: #f8f8f8;
    }

    .setting-view-li .alter{
        margin:0 auto;
        width:150px;
        height: 35px;
        border-radius: 4px;
        border:1px solid #dddd;
        outline: none;
        color: #ffffff;
        background: #df7366;
    }
    .setting-view-li .alter:hover{
        cursor: pointer;
    }
</style>