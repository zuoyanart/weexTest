import App from './app';
import router from './router';
// Vue.prototype.$router = router;

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  render: h => h(App)
});

router.push('/home');
