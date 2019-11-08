<template>
    <div>
        <nar-bar></nar-bar>
        <head-brief></head-brief>
        <div class="middle">
            <!-- 左侧边内容 -->
            <div class="m-left">
                <div class="person-header">
                    <img src="../../assets/img/common/3.jpg">
                    <div class="per-h-r">
                        <h3 class="per-nickname">小梁</h3>
                        <p class="per-introduce">简介：天天学习 学到秃头</p>
                    </div>
                </div>

                <!-- 内容区 -->
                <div class="person-center">
<!--                    <el-tabs v-model="activeName" @tab-click="handleClick">-->
<!--                        <el-tab-pane label="我的收藏" name="first">-->
<!--                        </el-tab-pane>-->
<!--                        <el-tab-pane label="浏览历史" name="second" ></el-tab-pane>-->
<!--                        <el-tab-pane label="我的帖子" name="third"></el-tab-pane>-->
<!--                    </el-tabs>-->
                    <ul class="per-center-list">
                        <li><router-link to="/MyCenter/collection">我的收藏</router-link></li>
                        <li><router-link to="/MyCenter/history">浏览历史</router-link></li>
                        <li><router-link to="/MyCenter/myPost">我的帖子</router-link></li>
                    </ul>
                    <!-- 路由中对应组件的显示 -->
                    <router-view></router-view>

                </div>
            </div>
            <!-- 右侧边内容 -->
            <div class="m-right">
                <div class="m-right-box">
                    <follow-block></follow-block>
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
    import headBrief from '../../components/headBrief'
    import  adFirst from '../../components/ad-01'
    import  adSecond from '../../components/ad-02'
    import followBlock from './followBlock'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {
                activeName: 'first'
            }
        },
        //存放 方法
        methods: {

        },
        components:{
            NarBar,
            headBrief,
            adFirst,
            adSecond,
            followBlock
        }
    }
</script>

<style scoped>
    .person-header{
        display: flex;
        flex-direction: row;
        padding:10px 3%;
        margin-bottom: 20px;
        width:94%;
        border-bottom: 1px solid #ebebeb;
    }
    .person-header img{
        margin-right: 35px;
        width: 100px;
        height: 100px;
        vertical-align: middle;
        border-radius: 50%;
    }

    .per-h-r{
        display: flex;
        flex-direction: column;
    }
    .per-h-r .per-nickname{
        margin:0;
        padding-top:10px;
        font-size: 32px;
        font-weight: 500;
    }

    /* 内容区 */
    .per-center-list{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding:0 3%;
        width:94%;
        list-style: none;
        border-bottom: 1px solid #ebebeb;
    }
    .per-center-list li{
        width:150px;
    }
    .per-center-list a:hover{
        color: rgb(62, 200, 224);
        border-bottom: 2px solid rgb(62, 200, 224);
        transition: all 0.25s linear;  /* 鼠标悬停字体颜色渐变 */
    }

    .per-center-list li a{
        display: inline-block;
        padding:10px 0;
        color: rgb(73, 72, 72);
    }
</style>