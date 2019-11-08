<template>
    <div class="list-body">
        <div class="single-post-box" v-for="(item,index) in collectedList" :key="index">
            <router-link to="">{{item.title}}</router-link>
            <p>{{item.introduction}}</p>
            <span class="list-time">{{item.collectedTime}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'history',
        //存放 数据
        data(){
            return {
                collectedList:[
                    {
                        id:"0",
                        title:"这里是浏览历史",
                        introduction:"广州美食打卡第一天!今天很开心吃到了很多美食超满足的",
                        collectedTime:"2019-10-01"
                    },
                    {
                        id:"1",
                        title:"这里是浏览历史",
                        introduction:"广州美食打卡第一天!今天很开心吃到了很多美食超满足的",
                        collectedTime:"2019-10-01"
                    },
                    {
                        id:"2",
                        title:"这里是浏览历史",
                        introduction:"广州美食打卡第一天!今天很开心吃到了很多美食超满足的",
                        collectedTime:"2019-10-01"
                    },
                    {
                        id:"3",
                        title:"这里是浏览历史",
                        introduction:"广州美食打卡第一天!今天很开心吃到了很多美食超满足的",
                        collectedTime:"2019-10-01"
                    },
                    {
                        id:"4",
                        title:"这里是浏览历史",
                        introduction:"广州美食打卡第一天!今天很开心吃到了很多美食超满足的",
                        collectedTime:"2019-10-01"
                    },
                    {
                        id:"5",
                        title:"这里是浏览历史",
                        introduction:"广州美食打卡第一天!今天很开心吃到了很多美食超满足的",
                        collectedTime:"2019-10-01"
                    }
                ]
            }
        },
        //存放 方法
        methods: {},
    }
</script>

<style scoped>
</style>