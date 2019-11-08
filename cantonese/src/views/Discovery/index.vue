<template>
    <div>
        <nar-bar></nar-bar>
        <start-button></start-button>

        <div class="index">
            <div class="m-left">
                <index-contanier></index-contanier>
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
    import  StartButton from '../../components/StartButton'
    import  indexContanier from './indexContanier'
    import  adFirst from '../../components/ad-01'
    import  adSecond from '../../components/ad-02'
    export default {
        name: '',
        //存放 数据
        data: function () {
            return {}
        },
        //存放 方法
        methods: {},
        components:{
            NarBar,
            StartButton,
            indexContanier,
            adFirst,
            adSecond
        }
    }
</script>

<style scoped>
</style>