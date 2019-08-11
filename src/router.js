import Vue from 'vue'
import Router from 'vue-router'

import NewsAdd from './views/NewsAdd.vue'
import NewsDelete from './views/NewsDelete.vue'
import NewsList from './views/NewsList.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: NewsList,
            redirect: '/news/list'
        },
        {
            path: '/news/list',
            name: 'new-list',
            component: NewsList
        },
        {
            path: '/news/delete',
            name: 'new-delete',
            component: NewsDelete
        },
        {
            path: '/news/add',
            name: 'new-add',
            component: NewsAdd
        }
    ]
})