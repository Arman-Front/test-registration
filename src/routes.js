import VueRouter from 'vue-router'
import Home from './pages/Home'
import Registration from './pages/Registration'

export default new VueRouter({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/registration',
            component: Registration
        }
    ],
    mode: 'history'
})