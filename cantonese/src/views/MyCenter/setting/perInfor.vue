<template>
    <div class="setting-view">
        <div class="setting-header">
            <h3 class="title">个人资料</h3>
        </div>
        <ul class="setting-view-list">
            <li class="setting-view-li">
                <span class="list-title">头像：</span>
                <div class="upload-img">
                    <!--                    <img src="../../../assets/img/common/1.jpg">-->
                    <img :src="avatar?avatar:require('../../../assets/img/common/add.png')"  name="avatar">
                    <span class="upload-hint">支持 jpg、png 格式大小</span>
                    <button class="upload-button">点击上传</button>
                    <input class="upload-file" type="file"  name="avatar" ref="avatarInput" @change="changeImage($event)" accept="image/gif,image/jpeg,image/jpg,image/png">
                </div>

            </li>
            <li class="setting-view-li">
                <span class="list-title">昵称：</span>
                <input type="text" placeholder="肥肥" :disabled="disabled">
            </li>
            <li class="setting-view-li">
                <span class="list-title">简介：</span>
                <input type="text" placeholder="好好学习天天向上" :disabled="disabled">
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

</style>