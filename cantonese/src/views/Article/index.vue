<template>
    <div>
        <nar-bar></nar-bar>

        <div class="middle article-box">
            <div class="m-left">
                <div class="a-header">
                    <h1>广州西华路美食打卡</h1>
                    <div class="a-header-span">
                        <span>2019-10-01</span>
                        <span>评论数 200</span>
                    </div>
                </div>

                <div class="a-content">
                    <p>
                        广州西华路| 从街头吃到街尾🌟不超过100⭐️撑到走不动
                        💜超级接地气的广州美食，答应我不要错过好吗

                        💜非周末时间去，下午5点到7点，基本不用排队，我和朋友承包了整条街🤣🤣

                        🌈食盈碗仔翅(西华路店)

                        💰人均23

                        🥥一定要点它家的椰子冻，只要28，把椰肉挖下来配椰子冻，冰凉清爽❗️椰子里面有两层，一层类似果冻，一层类似椰汁糕，大满足❗️❗️

                        🍲碗仔翅有很多味道可以选择：人比花娇翅、东成西就翅、花容月貌翅、锦上添花翅。区别是配料不一样，记得加点胡椒粉，味蕾爆炸💥

                        📍地铁一号线陈家祠c出口步行790米

                        🌈芳记小食店

                        💰人均10

                        🍲地道的广州肠粉和粥，9¥肠粉很大一份，是布拉肠，皮一丢丢厚，但是肉很多，肠粉选择很多，酱油是甜甜的。粥推荐艇仔粥、皮蛋瘦肉粥。一碟肠粉一碟粥，不到20，真的满足❗️

                        📍地铁一号线陈家祠c出口步行800米

                        🌈腾元生煎(西华路店)

                        💰人均10

                        🥟生煎里面汁超足，很脆，咬下去要小心会喷汁❗️❗听说它家红豆沙也很好喝

                        📍就在碗仔翅对面

                        🌈沙湾甜品食馆(西华店)

                        💰人均10

                        🥣人生最幸福就是，吃完很多咸的之后，来一碗甜到心头的甜品🍮。这是一件藏在老街里的糖水铺，各式各样的糖水都有❗️我们点了凤凰炒奶，芒果双皮奶，香芋西米露。炒奶是热的哦，它家双皮奶不要错过。

                        📍西华路第一津33号

                        ⭐️喜欢记得点赞收藏哦，我会继续分享吃喝玩乐

                        ⭐️广州美食 广州探店 周末探店 美食 我的美食日记 周末去哪儿浪 探店
                    </p>
                </div>
                <!-- 评论框 -->
                <div class="a-commentBox">
                    <comment-block></comment-block>
                </div>

            </div>

            <div class="m-right">
                <div class="m-right-box">
                    <user-profile></user-profile>
                </div>

                <div class="m-right-box">
                    <ad-first></ad-first>
                </div>
                <div class="m-right-box">
                    <ad-second></ad-second>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import NarBar from '../../components/NarBar'
    import  adFirst from '../../components/ad-01'
    import  adSecond from '../../components/ad-02'
    import  commentBlock from './commentBlock'
    import  userProfile from './userProfile'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {},
        //2.然后,在components中写入子组件
        components: {
            NarBar,
            adFirst,
            adSecond,
            commentBlock,
            userProfile
        }
    }
</script>

<style scoped>
    .article-box{
        margin: 80px auto 20px!important;
    }
    .a-header{
        padding-bottom: 10px;
        width:96%;
        /*height: 70px;*/
        border-bottom: 1px solid #ebebeb;
 }

    .a-header h1{
        /*margin-bottom: 20px;*/
        font-size: 24px;
        color: rgba(0, 0, 0, 0.7);
    }
    .a-header-span{
        font-size: 14px;
        color: #8a8a8a;
    }
    .a-header-span span{
        margin-right: 20px;
    }

    /* 正文内容 */
    .a-content{
        padding:2%;
        width:96%;
        font-size: 16px;
        line-height: 32px;
    }
    /* 评论框 */
    .a-commentBox{
        padding:2%;
        width:96%;
        /* height: 200px;
        font-size: 16px;
        line-height: 32px; */
        border:1px solid red;
    }
</style>