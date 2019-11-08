<template>
    <div class="registerBox">
        <div class="nar-second-box">
            <div class="nar-second-inner">
                <div class="nar-second-logo">
                    <span>粤进E+</span>
                </div>
                <ul class="nar-second-ul">
                    <li>
                        <router-link to="/signIn">登录</router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div class="register-inner">
            <p class="register-logo">Register</p>
            <div class="register-input">
                <input type="text" v-model="account" placeholder="手机 / 邮箱" required pattern="^1(3|4|5|7|8)\d{9}$"/>
                <input type="password" v-model="password" minlength="6" maxlength="15"  placeholder="请填写6到15位的密码" required >
                <input type="password" v-model="checkPassword" minlength="6" maxlength="15" placeholder="确认密码" required/>

                <input class="check-code" type="text" maxlength="4" placeholder="请输入验证码" required v-model="checkCode"/>
                <button class="get-code" @click="getCode">点击获取</button>

                <button class="register-submit" @click="submit()">submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                account:"",
                password:"",
                checkPassword:"",
                checkCode:"",
            }
        },
        //存放 方法
        methods: {
            getCode(){

            },
            submit(){
                let msg={
                    account:this.account,
                    password:this.password,
                    checkPassword:this.checkPassword,
                    checkCode:this.checkCode
                }
                window.console.log(msg)
            }

        },

    }
</script>

<style scoped="less">
    @import '../style/nar-second.css';
    .registerBox{
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



    .register-inner{
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
    .register-inner .register-logo{
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
    .register-inner .register-input{
        width:70%;
        /*border:1px solid red;*/
    }
    .register-inner input{
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
    .register-submit{
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