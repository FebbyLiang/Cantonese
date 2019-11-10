<template>
    <div>
        <nar-bar></nar-bar>
        <head-brief></head-brief>
        <div class="middle">
            <div class="m-left">
<!--                <div class="c-f-tabs">-->
<!--                    <p >-->
<!--                        <span>粤语知识</span>-->
<!--                    </p>-->
<!--                </div>-->
                <div class="c-f-box">
                   <knowledge-contanier></knowledge-contanier>
                </div>
            </div>

            <div class="m-right">
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
    import  headBrief from '../../components/headBrief'
    import  adFirst from '../../components/ad-01'
    import  adSecond from '../../components/ad-02'
    import  KnowledgeContanier from './KnowledgeContanier'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {

        },
        components:{
            NarBar,
            headBrief,
            KnowledgeContanier,
            adFirst,
            adSecond
        },
        created(){
        }

    }
</script>

<style scoped>
    .c-f-tabs{
        margin-bottom: 20px;
    }
    .c-f-tabs p{
        font-size: 28px;
        color: #409EFF;
    }
    .c-f-tabs span{
        display: inline;
        padding: 5px 0;
        border-bottom: 2px solid #409EFF;
    }
</style>