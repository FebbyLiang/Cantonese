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
                <input type="text" placeholder="手机 / 邮箱" v-model="account" minlength="11" maxlength="18" required pattern="^1(3|4|5|7|8)\d{9}$"/>
                <input type="password" placeholder="密码" v-model="password" minlength="6" maxlength="15" required/>
                <input class="check-code" type="text" placeholder="请输入验证码"  maxlength="6" required v-model="verifyCode"/>
                <img :src="'http://192.168.123.96:8080/file/verifyCode/'+md" class="codeImg" @click="getCodeImg">
                <button class="login-submit" @click="submit()">submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {uuid} from '../script/uuid.js'
    import http from '../request/http'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                account:"",
                password:"",
                verifyCode:"",
                md:""

            }
        },
        //存放 方法
        methods: {
            //获取图片验证码
            getCodeImg(){
                this.md = uuid();
                window.console.log(this.md);
             },
            submit() {
                window.console.log("点击提交")
                let account = this.account;
                let password = this.password;
                let verifyCode = this.verifyCode;
                let md = this.md;
                window.console.log(password.length)
                if (account != "" && (password.length>=6 || password.length<=15)  &&  password != "") {
                    window.console.log("关键信息获取成功");
                    http.post('/user/login', {
                        account,
                        password,
                        verifyCode,
                        md
                    })
                        .then((response) => {
                            window.console.log(response);
                            localStorage.setItem("token",response.data.data);
                            //window.console.log(localStorage.getItem("token"));
                            if(response.status == 200) {
                                window.console.log("登录成功")
                                this.$router.push({name: "index"})
                            }

                        })
                        .catch(function (error) {
                            window.console.log(error);
                        });
                }else{
                    alert("信息输入格式错误，请检查！")
                }
            }
        },

        created() {
            this.md = uuid();
            //window.console.log(this.uuidCode);
        },
        mounted() {
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
        position: relative;
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
        margin-right: 19px!important;
        width: 50%!important;
    }
    .codeImg{
        position: absolute;
        top: 154px;
        width:100px;
        height: 56px;
        border-radius: 7px;
    }
    .codeImg:hover{
        cursor: pointer;
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