<template>
    <div class="nar-box">
        <div class="nar-inner">
            <div class="nar-logo">
                <span>粤进e+</span>
            </div>
            <ul class="nar-ul">
                <li>
                    <router-link to="/">发现</router-link>
                </li>
                <li>
                    <router-link to="/Knowledge/0">粤知</router-link>
                    <ul class="secondary-ul">
                        <li>
                            <router-link to="/Knowledge/0">粤语知识</router-link>
                        </li>
                        <li>
                            <router-link to="/Knowledge/1">粤趣</router-link>
                        </li>
                        <li>
                            <router-link to="/Knowledge/2">粤俗</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/Submission">我要投稿</router-link>
                </li>
                <li v-if="NotLogin">
                    <router-link to="/register" >注册/登录</router-link>
                </li>
                <li v-else>
                    <router-link to="/MyCenter" >我嘅中心</router-link>
                    <ul class="secondary-ul">
                        <li>
                            <router-link to="/SecondaryFunction">我的关注</router-link>
                        </li>
                        <li>
                            <router-link to="/SecondaryFunction">我的粉丝</router-link>
                        </li>
                        <li>
                            <router-link to="/SecondaryFunction">设置</router-link>
                        </li>
                        <li>
                            <router-link to="/signIn">退出</router-link>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                NotLogin:false
            }
        },
        //存放 方法
        methods: {},
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
    .nar-box{
        min-width: 550px;
        position: relative;
        top:0;
        left: 0;
        width: 100%;
        height: 80px;
        background: #323A45;
        z-index: 9999;
    }
    .nar-inner{
        display: flex;
        flex-direction: row;
        width:100%;
        height: 100%;
    }
    .nar-logo{
        width:480px;
        height: 100%;
        text-align: center;
        line-height: 80px;
        font-size: 32px;
        color: #bbb;
    }
    .nar-ul{
        /*float: right;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0;
        width:60%;
        height: 100%;
        /*overflow: hidden;*/
    }
    .nar-ul li{
        width:150px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-weight: 400;
        letter-spacing: 2px;
        font-size: 16px;
    }
    .nar-ul li a{
        color: #bbb;
    }
    .nar-ul li a:hover {
        color: #fff;
    }
    .nar-ul li:hover .secondary-ul{
        display: block;
    }
    .secondary-ul{
        display: none;
        margin:10px 0;
        padding: 0;
        width:150px;
        border-radius: 10px;
        background: #323A45;
    }
</style>