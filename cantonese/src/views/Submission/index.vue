<template>
    <div id="editor">
        <div class="editor-header">
            <input type="text" placeholder="请输入文章标题">
            <select class="editor-header-select">
                <option>粤语知识</option>
                <option>粤趣</option>
                <option>粤俗</option>
            </select>
            <button class="editor-header-button">投稿</button>
            <router-link to="/BecomeEditor" class="editor-header-editor">成为小编</router-link>
            <router-link to="" class="editor-header-cancel">退出</router-link>
        </div>

        <editor></editor>
    </div>
</template>

<script>
    import Editor from './Editor'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {},
        components:{
            Editor
        }

    }
</script>

<style scoped>
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