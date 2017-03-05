<style lang="css">

</style>
<style lang="less">
  @import "../assets/less/app.less";
</style>
<template>
<div class="layout-main">
  <div class="header" >
      <text class="iconimg title1" @click="jump('/login')">&#xe75e;</text>
      <h2 class="headerh2"><text style="text-align:center;">one 一个</text></h2>
      <text class="iconimg title1" @click="jump('/yingtian');">&#xe752;</text>
  </div>
    <div class="topsc">
      <router-view></router-view>
    </div>
    <div class="footer">
        <div class="f-div" @click="jump('home');">
            <text class="iconimg title1" >&#xe751;</text>
            <text class="title-text">首页</text>
        </div>
        <div class="f-div"  @click="jump('yuedu');">
            <text class="iconimg title1">&#xe751;</text>
            <text class="title-text">阅读</text>
        </div>
        <div class="f-div" @click="jump('yinyue');">
          <text class="iconimg title1">&#xe751;</text>
          <text class="title-text">音乐</text>
        </div>
        <div class="f-div" @click="jump('movie');">
          <text class="iconimg title1">&#xe751;</text>
          <text class="title-text">电影</text>
        </div>
    </div>
</div>
</template>

<script>
import router from '../router';
export default {
    methods: {
        jump: function(page) {
            router.push(page);
        }
    },
    computed:{
      getHeight: function(env) {
        return  {height:88 * 750 / env.deviceWidth};
      }
    },
    created: function() {
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace', {
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_y074itb5xyqcwhfr.ttf')"
        });
    }
};
</script>
