<template>
    <div class="bg-img">
        <div class="inner">
            <div class="header">
                <h1>粤进e+</h1>
                <p class="line"></p>
                <p>一个热情专注粤语的交流平台</p>
            </div>
            <div class="footer">
                <a  class="a-button" @click="scrollTo">start</a>
            </div>
        </div>
    </div>
</template>

<script >
    export default  {
        name: '',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {
            scrollTo:function(){
                this.$options.methods.startMove(725);
                window.console.log(123)
            },
            startMove:function(top){
                // const top=725;
                let timer=null;
                let speed=5;
                timer=setInterval(function(){
                    const t=document.documentElement.scrollTop || document.body.scrollTop; //获取滚动条位置

                    if(t<top){
                        if(document.documentElement.scrollTop>=0){
                            document.documentElement.scrollTop+=speed;//获取当前滚动条位置增加speed变量高度
                            window.console.log(document.documentElement.scrollTop);
                        }else{
                            document.body.scrollTop+=speed;
                        }
                        speed+=2;

                    }else{
                        clearInterval(timer);  //清除定时器
                    }
                },20);
            }
        },
    }
</script>

<style  scoped>
    .bg-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 723px;
        background-image: url("../assets/img/common/header.jpg");
        /*z-index: -1;*/
    }
    .bg-img .inner {
        margin: 250px auto;
        width: 300px;
    }
    .header{
        width:100%;
        height: 210px;
        text-align: center;
        color: #fff;
    }
    .header h1{
        letter-spacing: 4px;
        font-size: 64px;
        margin-bottom: 45px;
    }
    .header .line{
        margin-bottom: 25px;
        width:100%;
        height:4px;
        box-shadow: inset 0 1px 0 0 rgba(192,192,192,0.35);
        border-top:1px solid rgba(192,192,192,0.35);
        border-bottom:1px solid rgba(192,192,192,0.35);
    }

    .header p{
        letter-spacing: 6px;
    }

    .footer {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 90px;
        background: none;
    }
    .footer a{
        margin:0 auto;
        width:90px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 23px;
        border-radius: 50%;
        background: #df7366;
        color: #fff;
        outline: 0;
        border:none;
    }
    .footer a:hover {
        cursor: pointer!important;
        background: #f17f72;
    }

</style>