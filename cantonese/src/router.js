import Vue from 'vue'
import Router from 'vue-router'
import signIn from './components/signIn'
import register from './components/register'
import NarBar from './components/NarBar'
import index from './views/Discovery/index'
import Knowledge from './views/Knowledge/index'
import MyCenter from './views/MyCenter/index'
import collection from './views/MyCenter/collection'
import history from './views/MyCenter/history'
import myPost from './views/MyCenter/myPost'
import SecondaryFunction from './views/MyCenter/SecondaryFunction'
import SecondaryContent from './views/MyCenter/SecondaryContent'
import setting from './views/MyCenter/setting'
import Submission from './views/Submission/index'
import Editor from './views/Submission/Editor'
import Article from './views/Article/index'
import BecomeEditor from './views/Submission/BecomeEditor'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            component:index
        },
        {
            path: '/signIn',
            name: 'signIn',
            component:signIn
        },
        {
            path: '/register',
            name: 'register',
            component:register
        },
        {
            path: '/NarBar',
            name: 'NarBar',
            component:NarBar
        },
        {
            path: '/Knowledge/:id',
            name: 'Knowledge',
            component:Knowledge
        },
        {
            path: '/MyCenter',
            name: 'MyCenter',
            component:MyCenter,
            children:[
                //个人中心路由配置
                {
                    path: 'collection',
                    name: 'collection',
                    component: collection
                },
                {
                    path: 'history',
                    name: 'history',
                    component: history
                },
                {
                    path: 'myPost',
                    name: 'myPost',
                    component: myPost
                }
            ]
        },
        {
            path: '/Editor',
            name: 'Editor',
            component: Editor
        },
        {
            path: '/Submission',
            name: 'Submission',
            component: Submission
        },
        {
            path: '/Article/:id',
            name: 'Article',
            component: Article
        },
        {
            path: '/BecomeEditor',
            name: 'BecomeEditor',
            component: BecomeEditor
        },
        {
            path: '/SecondaryFunction/:id',
            name: 'SecondaryFunction',
            component: SecondaryFunction,
            children:[
                {
                    path: 'SecondaryContent',
                    name: 'SecondaryContent',
                    component: SecondaryContent
                },
                {
                    path: 'setting',
                    name: 'setting',
                    component: setting
                }
            ]
        }
    ]
})
