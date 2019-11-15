<template>
    <div>
        <nar-bar></nar-bar>
        <div class="middle function-box">
            <div class="mid-aside">
                <ul class="sub-per-aside">
                    <li>
                        <router-link to="/settingIndex/perInfor" >个人资料</router-link>
                    </li>
                    <li>
                        <router-link to="/settingIndex/privacy" >隐私设置</router-link>
                    </li>
                    <li>
                        <router-link to="/settingIndex/safety" >安全设置</router-link>
                    </li>
                </ul>
            </div>
            <div class="mid-box">
                <router-view></router-view>
            </div>
        </div>
    </div>


</template>

<script>
    import NarBar from '../../../components/NarBar'
    //import SecondaryContent from './SecondaryContent'
    //import setting from './setting'
    export default {
        name: 'SecondaryFunction',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {},
        components:{
            NarBar,
            //SecondaryContent,
            //setting
        },
        updated(){
            //window.console.log(this.$route.params.id)
        }
    }
</script>

<style scoped>
    .function-box{
        margin: 80px auto 20px!important;
        border:1px solid red;
    }
    .sub-per-aside{
        margin:0;
        padding: 0;
        margin-right: 15px;
        width:180px;
        list-style: none;
        background: #fff;
        box-shadow: 0 1px 2px 0 rgba(104, 103, 103, 0.2);
        border-radius: 4px;
        /* border:1px solid green; */
    }

    .sub-per-aside li{
        height: 45px;
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #ebebeb;
        /* border:1px solid red; */
    }

    .sub-per-aside li:hover{
        background: #df7366;
    }
    .sub-per-aside li:hover a{
        color: #fff;
    }
    .sub-per-aside li a{
        color:rgb(78, 78, 78);
    }
    /* 对应的子路由盒子 */
    .mid-box{
        width:810px;
        /*height: 300px;*/
        /*border:1px solid red;*/
    }
</style>



