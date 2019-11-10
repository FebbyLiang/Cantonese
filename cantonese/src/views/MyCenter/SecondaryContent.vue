<template>
    <div class="content-view">
        <h2>{{this.$route.params.id}}</h2>
        <div class="content-header">
            <h3 class="title">我的关注</h3>
            <span class="number">共7人</span>
        </div>

        <ul class="watch-list">
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
<!--                <button>关注</button>-->
            </li>
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
                <!--                <button>关注</button>-->
            </li>
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
                <!--                <button>关注</button>-->
            </li>
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
                <!--                <button>关注</button>-->
            </li>
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
                <!--                <button>关注</button>-->
            </li>
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
                <!--                <button>关注</button>-->
            </li>
            <li class="item-cont">
                <img src="../../assets/img/common/1.jpg">
                <router-link to="" class="item-nickname">肥肥</router-link>
                <button class="item-button">取消关注</button>
                <!--                <button>关注</button>-->
            </li>
        </ul>

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
        methods: {
            initContent(){
                // window.console.log($route.params.id)
            }
        },
        updated(){
            window.console.log(this.$route.params.id);
            if(this.$route.params.id == 0){
                //     this.$request.get('', {
                //
                //     })
                //         .then((response) => {
                //             window.console.log(response);
                //
                //         })
                //         .catch(function (error) {
                //             window.console.log(error);
                //         });
                // }
            }else if(this.$route.params.id == 1){
                //     this.$request.get('', {
                //
                //     })
                //         .then((response) => {
                //             window.console.log(response);
                //
                //         })
                //         .catch(function (error) {
                //             window.console.log(error);
                //         });
                // }
            }
        }
    }
</script>

<style scoped>
    /*头部*/
    .content-view{
        padding: 10px 3%;
        width:94%;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.05);
        /*border:1px solid red;*/
    }
    .content-header{
        width:100%;
        height: 80px;
        border-bottom: 1px solid #e0e0e0;
    }
    .content-header .title{
        font-size: 22px;
        color: #3d3d3d;
        float: left;
    }

    .content-header .number{
        display: inline-block;
        margin:22px 0;
        font-size: 14px;
        color: #4d4d4d;
        float: right;
    }
    /*列表*/
    .watch-list{
        margin:0;
        padding: 0;
        width:100%;
    }
    .watch-list .item-cont{
        margin:0;
        padding: 10px 0;
        border-bottom: 1px solid #e0e0e0;
    }
    .watch-list .item-cont img{
        margin-right: 15px;
        /*float: left;*/
        width:50px;
        height:50px;
        vertical-align: middle;
        border-radius: 50%;
    }

    .watch-list .item-cont .item-nickname{
        /*float: left;*/
        margin:13px 0;
        font-size: 16px;
        color: #4d4d4d;
        /*border:1px solid red;*/
    }
    .watch-list .item-cont .item-button{
        display: inline-block;
        margin:8px 0;
        width:90px;
        height: 40px;
        line-height: 40px;
        float: right;
        font-size: 16px;
        color: #999;
        border:1px solid #999;
        border-radius: 4px;
        background: #fff;
    }

    .watch-list .item-cont .item-button:hover{
        cursor: pointer;
    }

</style>