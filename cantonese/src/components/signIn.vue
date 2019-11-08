<template>
    <div class="loginBox">
        <div class="nar-second-box">
            <div class="nar-second-inner">
                <div class="nar-second-logo">
                    <span>粤进E+</span>
                </div>
                <ul class="nar-second-ul">
                    <li>
                        <router-link to="/register">注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="login-inner">
            <p class="login-logo">Login</p>
            <div class="login-input">
                <input type="text" placeholder="账号 / 邮箱"/>
                <input type="password" placeholder="密码"/>
                <input class="check-code" type="text" placeholder="请输入验证码"/>
                <button class="get-code">点击获取</button>
                <button class="login-submit">submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {}
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
    .loginBox{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        background: #3f2766;
    }

    .login-inner{
        padding:30px 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:0 auto;
        width:420px;
        border-radius: 7px;
        box-shadow: 0 20px 50px rgba(0,0,0,.3);
        background: #4d317a;
    }
    .login-inner .login-logo{
        margin:20px 0;
        width: 70%;
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 35px;
        font-weight: bold;
        color: #714cab;
        letter-spacing: .05em;
    }
    .login-inner .login-input{
        width:70%;
        /*border:1px solid red;*/
    }
    .login-inner input{
        margin: 8px 0;
        padding: 18px 15px;
        width:90%;
        text-indent: 5px;
        font-size: 16px;
        border-radius: 6px;
        outline: none;
        color: #ceafff;
        border:1px solid #9d74cb;
        background: #4d317a;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
        color: #fff;
        font-size: 16px;
    }
    .check-code{
        margin-right: 20px!important;
        width: 60%!important;
    }
    .get-code{
        height: 35px;
        outline: none;
        border-radius: 8px;
        border:none;
        color: #442372;
        background: #714cac;
    }
    .login-submit{
        margin: 8px 0;
        width:100%;
        height: 50px;
        font-size: 24px;
        border:none;
        color: #492e72;
        border-radius: 8px;
        background: #714cac;
    }
</style>