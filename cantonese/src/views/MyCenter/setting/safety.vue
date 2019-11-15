<template>
    <div class="setting-view">
        <div class="setting-header">
            <h3 class="title">修改密码</h3>
        </div>
        <ul class="setting-view-list">
            <li class="setting-view-li">
                <span class="list-title">旧密码：</span>
                <input type="password"  :disabled="disabled">
            </li>
            <li class="setting-view-li">
                <span class="list-title">新密码：</span>
                <input type="password"  :disabled="disabled">
            </li>
            <li class="setting-view-li">
                <span class="list-title">确认密码：</span>
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

        },
        create(){
        }
    }
</script>

<style scoped>

</style>