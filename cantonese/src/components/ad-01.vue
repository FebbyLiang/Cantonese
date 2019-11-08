<template>
    <div class="block ad-01">
        <el-tabs v-model="activeName" >
            <el-tab-pane  label="粤知粤趣" name="first">
                <el-carousel height="260px">
                    <el-carousel-item v-for="(item,index) in imgList" :key="index">
                        <img :src="item.imageUrl"/>
                    </el-carousel-item>
                </el-carousel>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    export default {
        name:"ad-01",
        data(){
            return {
                activeName: 'first',
                imgList:[
                    {
                        id:"0",
                        imageUrl:require("@/assets/img/common/1.jpg"),
                    },
                    {
                        id:"1",
                        imageUrl:require("@/assets/img/common/2.jpg"),
                    },
                    {
                        id:"2",
                        imageUrl:require("@/assets/img/common/3.jpg"),
                    }
                ]
            }
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
    .ad-01{
        padding:0 10px;
        height: 330px;
        box-shadow: 0 1px 2px 0 rgba(104, 103, 103, 0.2);
        border-radius: 4px;
        background: #fff;
    }
    .ad-01 img{
        width:260px;
        height: 270px;
        border-radius: 4px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>