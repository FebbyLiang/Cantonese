<template>
    <div>
        <div id="div1" class="toolbar">
        </div>
        <div id="div2" class="text w-editor-box self-define" > <!--可使用 min-height 实现编辑区域自动增加高度-->
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    export default {
        name: 'editor',
        data () {
            return {
                editorContent: ''
            }
        },
        methods: {
            getContent: function () {
                alert(this.editorContent)
            }
        },
        mounted() {
            let editor = new E('#div1', '#div2')  // 两个参数也可以传入 elem 对象，class 选择器
            editor.customConfig.uploadImgShowBase64 = true;
            editor.customConfig.onchange = (html) => {
                this.editorContent = html
            }
            editor.create()
        }
    }
</script>

<style scoped>
    .w-editor-box{
        width:99.5%;
        height: 620px;
        border:1px solid #ddd;

    }
    .self-define{
        z-index: 1!important;
    }
</style>
