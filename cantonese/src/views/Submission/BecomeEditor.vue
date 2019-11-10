<template>
    <div>
        <nar-bar></nar-bar>
        <div class="middle be-editor-box">
            <div class="editor-view">
                <div class="editor-header">
                    <h3 class="title">成为小编</h3>
                </div>
                <ul class="editor-view-list">
                    <li class="editor-view-li">
                        <div class="editor-uploadBox">
                            <div class="editor-upload-img">
                                <span class="editor-upload-hint">身份证正面照</span>
                                <img :src="photo1?photo1:require('../../assets/img/common/add.png')"  name="photo">
                                <button class="editor-upload-button">点击上传</button>
                                <input class="editor-upload-file" type="file" name="photo" ref="photoInput" @change="changeImageFirst($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
                            </div>
                            <div class="editor-upload-img">
                                <span class="editor-upload-hint">身份证反面照</span>
                                <img :src="photo2?photo2:require('../../assets/img/common/add.png')"  name="photo">
                                <button class="editor-upload-button">点击上传</button>
                                <input class="editor-upload-file" type="file" name="photo" ref="photoInput" @change="changeImageSecond($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
                            </div>
                        </div>

                    </li>
                    <li class="editor-view-li">
                        <span class="list-title">你的联系方式是：</span>
                        <input type="text" placeholder="请输入你的联系电话" maxlength="11" required pattern="^1(3|4|5|7|8)\d{9}$" v-model="phone">
                    </li>
                    <li class="editor-view-li">
                        <span class="list-title">简述想要成为小编的理由：</span>
                        <textarea placeholder="你的理由是……" maxlength="200" required v-model="reason"></textarea>
                    </li>
                    <li class="editor-view-li">
                        <button class="alter" @click="submitApply">提交申请</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
    import NarBar from '../../components/NarBar'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                photo1: '',
                photo2: '',

                phone:"",
                reason:""
            }
        },
        //存放 方法
        methods: {
            changeImageFirst: function(e){
                let file = e.target.files[0];
                if(file) {
                    this.file = file
                    //window.console.log(this.file)
                    let reader = new FileReader()
                    let that = this   //这里的that指向vue实例
                    reader.readAsDataURL(file)
                    reader.onload = function(){
                        // 在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
                        window.console.log("file对象是："+this.result)
                        that.photo1 = this.result
                    }
                }
            },
            changeImageSecond: function(e){
                let file = e.target.files[0];
                if(file) {
                    this.file = file
                    //window.console.log(this.file)
                    let reader = new FileReader()
                    let that = this   //这里的that指向vue实例
                    reader.readAsDataURL(file)
                    reader.onload = function(){
                        // 在reader的load内部，this的指向是reader，所以使用自己的数据或者封装的vue方法，请使用this.vue.XXX
                        window.console.log("file对象是："+this.result)
                        that.photo2 = this.result
                    }
                }
            },
            submitApply(){
                let photoArray=[this.photo1, this.photo2]
                let msg = {
                    photoArray,
                    phone: this.phone,
                    reason: this.reason
                }
                window.console.log(msg)
            //     this.$request.post('', {
                //         msg
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
        components: {
            NarBar
        }
    }
</script>

<style scoped>
    .be-editor-box{
        margin: 20px auto 20px!important;
        height: 600px;
    }
    .editor-view{
        padding: 10px 3%;
        width:94%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
    }
    .editor-header h3{
        margin:0;
        padding:10px 0;
        font-size: 24px;
        border-bottom: 1px solid #f1f1f1;
    }
    /*列表*/
    .editor-view-list{
        margin:0;
        padding: 0;
        width:100%;
        height: 500px;
    }
    .editor-view-list .editor-view-li{
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
        width:100%;
        font-size: 16px;
        /*border-bottom: 1px solid #f1f1f1;*/
    }
    .editor-upload-img{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 25px;
        padding:15px 0;
        float: left;
        position: relative;
        width:400px;
        height: 280px;
        /*border:1px solid red;*/
    }
    .editor-upload-img .editor-upload-hint{
        display: inline-block;
        font-size: 20px;

    }
    .editor-upload-img img{
        margin:10px 0;
        width:350px;
        height: 200px;
    }
    .editor-upload-img  .editor-upload-file{
        position: absolute;
        bottom:10px;
        width:80px;
        opacity: 0;
    }
    .editor-upload-img .editor-upload-button{
        position: absolute;
        bottom:10px;
        margin:0 auto;
        width:80px;
        height: 35px;
        border-radius: 4px;
        border:1px solid #dddd;
        outline: none;
        color: #ffffff;
        background: #df7366;
    }
    .editor-view-li .list-title{
        width:200px;
        line-height: 40px;
        color: #3d3d3d;
        /*border:1px solid red;*/
    }
    .editor-view-li input,
    .editor-view-li textarea{
        width:500px;
        height: 35px;
        text-indent: 10px;
        border-radius: 4px;
        border:none;
        border:1px solid #dddd;
        outline: none;
    }
    .editor-view-li textarea{
        padding: 5px 0;
        font-size: 14px;
        height: 80px;
    }
    .editor-view-li .alter{
        margin:0 auto;
        width:150px;
        height: 35px;
        border-radius: 4px;
        border:1px solid #dddd;
        outline: none;
        color: #ffffff;
        background: #df7366;
    }
    .editor-view-li .alter:hover{
        cursor: pointer;
    }
</style>