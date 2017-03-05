<template lang="html">
  <div class="login">
    <img src="http://img.sj33.cn/uploads/allimg/201302/1-130201105142.jpg" class="login-img" resize="cover"></img>
      <text class="iconimg title1" @click="back">&#xe779;</text>
    <div class="login-content">
      <input type="text" class="login-input" placeholder="username"></input>
      <input type="password" class="login-input" placeholder="password"></input>
       <div class="login-button">
         <text class="login-button1">登录</text>
       </div>
    </div>
    <div class="login-pri">
      <text class="login-pri-1">创建账户即代表您同意</text>
      <text class="login-pri-1">使用条款和隐私策略</text>
    </div>
  </div>
</template>

<script>
import router from '../router';
export default {
  methods:{
    back: function() {
        router.back(-1);
    }
  }
}
</script>

<style lang="less">
@import "../assets/less/app.less";
  @import '../assets/less/login.less';
</style>
