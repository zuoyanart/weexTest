import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
        path: '/index',
        component: require('src/views/index'),
        children:[{
          path: 'yuedu',
          component: require('src/views/yuedu')
        },{
          path: 'yinyue',
          component: require('src/views/yinyue')
        },{
          path: 'movie',
          component: require('src/views/movie')
        },{
          path: 'home',
          component: require('src/views/home')
        }]
    },
    {
        path: '/content/:id',
        component: require('src/views/content')
    },
    {
        path: '/login',
        component: require('src/views/login')
    },
    {
      path: '/yingtian',
      component: require('src/views/yingtian')
    },
    { path: '*', redirect: '/index/home' }
];

export default new VueRouter({
    routes
});
