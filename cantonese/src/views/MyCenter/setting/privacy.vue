<template>
    <div class="setting-view">
        <div class="setting-header">
            <h3 class="title">隐私设置</h3>
        </div>
        <ul class="setting-view-list">
            <li class="setting-view-li privacy-checkbox">
                <span class="list-title">谁能看我的帖子：</span>
                <p>
                    <input type="checkbox" name="whoCanSee" value="所有人"><label>所有人</label>
                </p>
                <p>
                    <input type="checkbox" name="whoCanSee" value="我关注的人"><label>我关注的人</label>
                </p>
                <p>
                    <input type="checkbox" name="whoCanSee" value="互关的人"><label>互关的人</label>
                </p>
                <p>
                    <input type="checkbox" name="whoCanSee" value="都不能"><label>都不能</label>
                </p>
            </li>
            <li class="setting-view-li privacy-checkbox">
                <span class="list-title">谁可以给我发信息：</span>
                <p>
                    <input type="checkbox" name="whoCanSend" value="所有人"><label>所有人</label>
                </p>
                <p>
                    <input type="checkbox" name="whoCanSend" value="我关注的人"><label>我关注的人</label>
                </p>
                <p>
                    <input type="checkbox" name="whoCanSend" value="互关的人"><label>互关的人</label>
                </p>
                <p>
                    <input type="checkbox" name="whoCanSend" value="都不能"><label>都不能</label>
                </p>
            </li>
            <li class="setting-view-li">
                <button class="alter">保存</button>
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
    .privacy-checkbox p{
        margin:10px 28px;
        font-size: 13px;
    }
    .privacy-checkbox input{
        width: 15px;
        height: 15px;
        vertical-align: middle;
    }

</style>