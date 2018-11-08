import Vue from 'vue'
import Router from 'vue-router'

// 开发环境不使用懒加载, 因为懒加载页面太多的话会造成webpack热更新太慢, 所以只有开发环境使用懒加载
const _import = require('./import-' + process.env.NODE_ENV)

Vue.use(Router)

// 路由定义使用说明:
// 1. 代码中路由统一使用name属性跳转.
// 2. 开放path属性用做简短路由, 比如: '/a1', 访问地址: www.renren.io/#/a1
export default new Router({
    mode: 'hash',
    routes: [
        { path: '/404', component: _import('error/404'), name: '404', desc: '404未找到' },
        { path: '/login', component: _import('login/index'), name: 'login', desc: '登录' },
        { path: '/videodetail', component: _import('roomlist/videodetail'), name: 'videodetail', desc: '播放页' },
        {
            path: '/',
            component: _import('layout/index'),
            name: 'layout',
            redirect: { name: 'home' },
            desc: '上左右整体布局',
            children: [
                // 通过isTab属性, 设定是否通过tab标签页展示内容
                { path: '/home', component: _import('home/index'), name: 'home', desc: '首页' },
                { path: '/n/livenumbers', component: _import('dataManagement/livenumbers'), name: 'livenumbers', desc: '直播间数据统计', meta: { isTab: true } },
                { path: '/n/sumlivenumbers', component: _import('dataManagement/sumlivenumbers'), name: 'sumlivenumbers', desc: '总数据', meta: { isTab: true } },
                { path: '/user', component: _import('user/index'), name: 'user', desc: '管理员管理', meta: { isTab: true } },
                { path: '/role', component: _import('role/index'), name: 'role', desc: '角色管理', meta: { isTab: true } },
                { path: '/menu', component: _import('menu/index'), name: 'menu', desc: '菜单管理', meta: { isTab: true } },
                { path: '/sql', component: _import('sql/index'), name: 'sql', desc: 'SQL监控', meta: { isTab: true } },
                { path: '/schedule', component: _import('schedule/index'), name: 'schedule', desc: '定时任务', meta: { isTab: true } },
                { path: '/config', component: _import('config/index'), name: 'config', desc: '参数管理', meta: { isTab: true } },
                { path: '/oss', component: _import('oss/index'), name: 'oss', desc: '文件上传', meta: { isTab: true } },
                { path: '/n/goods', component: _import('goods/index'), name: 'goods', desc: '商品管理' },
                { path: '/n/applist', component: _import('applist/index'), name: 'applist', desc: 'mcs管理', meta: { isTab: true } },
                { path: '/n/detail', component: _import('applist/detail'), name: 'detail', desc: 'mcs详情' },
                { path: '/n/agentdept', component: _import('agentdept/index'), name: 'agentdept', desc: '代理管理', meta: { isTab: true } },
                { path: '/n/companymanager', component: _import('companymanager/index'), name: 'companymanager', desc: '公司管理', meta: { isTab: true } },
                { path: '/n/sumcompanymanager', component: _import('sumcompanymanager/index'), name: 'sumcompanymanager', desc: '总公司管理', meta: { isTab: true } },
                { path: '/n/agentroom', component: _import('companymanager/room/index'), name: 'agentroom', desc: '子公司直播间', meta: { isTab: true } },
                { path: '/n/alilivenumbers', component: _import('alilivenumbers/index'), name: 'alilivenumbers', desc: '信息统计', meta: { isTab: true } },
                { path: '/n/dmslivenumbers', component: _import('dmslivenumbers/index'), name: 'dmslivenumbers', desc: 'dms信息统计', meta: { isTab: true } },
                { path: '/n/roomlist', component: _import('roomlist/index'), name: 'roomlist', desc: '直播间', meta: { isTab: true } },
                { path: '/log', component: _import('log/index'), name: 'log', desc: '系统日志', meta: { isTab: true } }
            ],
            beforeEnter(to, from, next) {
                let token = Vue.cookie.get('token')
                if (!token || !/\S/.test(token)) {
                    // console.log(to)
                    if (to.name === 'videodetail') {
                        next()
                    } else {
                        next({ name: 'login' })
                    }
                }
                next()
            }
        },
        { path: '*', redirect: { name: '404' } }
    ]
})
