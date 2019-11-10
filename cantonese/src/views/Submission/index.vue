<template>
    <div id="editor">
        <div class="editor-header">
            <input type="text" placeholder="请输入文章标题" v-model="title">
            <select class="editor-header-select"  @change="changeProduct($event)">
                <option v-for="(item,index) in productList" :key="index" :value='index'>{{item}}</option>
            </select>
            <button class="editor-header-button" @click="submission();centerDialogVisible = true">投稿</button>
            <el-dialog
                    title="提示"
                    :visible.sync="centerDialogVisible"
                    width="30%"
                    center
                    top="25vh"
                   >
                <span>确定内容无误进行投稿吗？</span>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="send();centerDialogVisible = false" >确 定</el-button>
              </span>
            </el-dialog>


            <router-link to="/BecomeEditor" class="editor-header-editor">成为小编</router-link>
            <router-link to="" class="editor-header-cancel">退出</router-link>
        </div>

        <editor ref="editorChild"></editor>
    </div>
</template>

<script>
    //import http from '../request/http'
    import Editor from './Editor'

    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                centerDialogVisible: false,
                title:"",
                productList:["粤语知识","粤趣","粤俗"],
                ProductActive:0
            }
        },
        //存放 方法
        methods: {
            changeProduct(event){
                this.ProductActive = event.target.value; //获取option对应的value值
                window.console.log("你选中了",this.ProductActive)
            },
            submission(){
                window.console.log(this.title)
                window.console.log("你选中了",this.ProductActive)
                window.console.log(this.$refs.editorChild.editorContent)
                //window.console.log(this.$refs.editorChild.getContent)
            },
            send(){
                let msg = {
                    title:this.title,
                    ProductActive:this.ProductActive,
                    editorContent:this.$refs.editorChild.editorContent
                }
                this.$request.post('', {
                    msg
                })
                    .then((response) => {
                        window.console.log(response);

                    })
                    .catch(function (error) {
                        window.console.log(error);
                    });
            }
        },
        components:{
            Editor
        }

    }
</script>

<style scoped>
    /*.self-define {*/
    /*    margin-top: 35vh;*/
    /*    width: 30%;*/
    /*    z-index: 999999;*/
    /*}*/
    button:hover{
        cursor: pointer;
    }
    .editor-header{
        width:100%;
        height: 70px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;
    }
    .editor-header input{
        padding: 0 15px;
        width:1000px;
        height: 70px;
        text-indent: 15px;
        font-size: 2rem;
        font-weight: 700;
        color: #000;
        outline: none;
        border:none;
    }
    .editor-header-select{
        margin:0 12px;
        width: 150px;
        height: 40px;
        font-size: 20px;
        color: #8a8a8a;
        text-indent: 8px;
        border-radius: 5px ;
        outline: none;
    }
    .editor-header-button{
        margin-right: 12px;
        width:100px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        color: #fff;
        border:none;
        border-radius: 8px;
        outline: none;
        background: #409EFF;
    }
    .editor-header-editor,
    .editor-header-cancel{
        margin-right: 12px;
        display: inline-block;
        width:100px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 20px;
        color: #007fff;
        border-radius: 8px;
        border: 1px solid #c4d2dd;
    }
    .editor-header-cancel{
        width:80px;
        color: #fff;
        background: #409EFF;
        border:none;
    }
</style>