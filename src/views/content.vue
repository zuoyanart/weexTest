<style lang="css">

</style>
<style lang="less">@import "../assets/less/app.less";
@import "../assets/less/content.less";</style>
<template>
<div class="layout-main">
    <div class="header">
        <text class="iconimg title1" @click="back">&#xe779;</text>
        <h2 class="headerh2"><text style="text-align:center;">one一个</text></h2>
        <text class="iconimg title1">&#xe739;</text>
    </div>
    <scroller class="topsc">
      <loading class="loading" @loading="fetch" :display="showLoading"><text class="indicator">Loading ...</text></loading>
        <text :value="content.hp_title" class="content-title"></text>
        <div class="content-gap"></div>
        <text class="content-author">文 / {{content.hp_author}}</text>
        <text class="content-content">{{content.hp_content}}</text>
    </scroller>
    <div class="footer footer-content">
        <div class="f-div-content" @click="jump('home');">
            <text class="iconimg title1-content">&#xe733;</text>
            <text class="iconimg title1-content">&#xe733;</text>
            <text class="iconimg title1-content" @click="cmtPage">&#xe744;</text>
        </div>
        <div class="f-div-content-right" @click="jump('movie');">
            <text class="title-text-content">28评论&nbsp;&nbsp;&nbsp;</text>
            <text class="title-text-content">28评论</text>
        </div>
    </div>
</div>
</template>

<script>
const modal = weex.requireModule('modal');
const tools = require('../tools/tools.js');

import router from '../router';
export default {
    data() {
        return {
            content: {},
            showLoading: 'show'
        }
    },
    methods: {
        jump: function(page) {
            router.push(page);
        },
        fetch: function() {
            // modal.toast({
            //     message: 'loadmore',
            //     duration: 1
            // });
            tools.httpAgent('http://v3.wufazhuce.com:8000/api/essay/1571').then((data) => {
                this.content = data.data;
                this.content.hp_content = this.content.hp_content.substring(0,1000);//.hp_content.replace(/<[^>]+>/g,"");
                this.showLoading = 'hide';
            }, (errt) => {
                console.log(errt);
            });
        },
        back: function() {
            router.go(-1);
        },
        cmtPage: function() {
          router.push('/login');
        }
    },
    created() {
        // let domModule = weex.requireModule('dom');
        // domModule.addRule('fontFace', {
        //     'fontFamily': "iconfont",
        //     'src': "url('http://at.alicdn.com/t/font_iizcb80vdg9cnmi.ttf')"
        // });
        this.fetch();
    }
};
</script>
