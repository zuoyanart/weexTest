<style lang="less">@import "../assets/less/home.less";</style>

<template>
<list class="list" @loadmore="fetch" loadmoreoffset="20">
    <cell class="cell" v-for="key in lists">
        <div class="panel">
            <text class="home-title">{{key.title}}</text>
            <text class="home-author">{{key.author.user_name}}</text>
            <img class="img yinyue-img" @click="player" :src="key.cover" resize="cover"></img>
            <!-- <web class="yinyue-web" :src="'http://h.xiami.com/one-share.html?id=' + key.music_id"></web> -->
            <text class="home-content">{{key.story_title}}</text>
        </div>
    </cell>
</list>
</template>

<script>
const modal = weex.requireModule('modal');
const tools = require('../tools/tools.js');
const MP = 10; //每页多少条

export default {
    data() {
        return {
            lists: []
        };
    },
    methods: {
        fetch() {
            modal.toast({
                message: 'loadmore',
                duration: 1
            });
            let ids = [1527, 1524, 1516, 1504, 1502, 1499, 1481, 1491, 1476, 1471];
            for (let i = 0, l = ids.length; i < l; i++) {
                tools.httpAgent('http://v3.wufazhuce.com:8000/api/music/detail/' + ids[i] + '?version=v3.5.3').then((data) => {
                    this.lists.push(data.data);
                }, (errt) => {
                    console.log(errt);
                });
            }
        },
        player(){

        }
    },
    mounted() {
        this.fetch();
    }
};
</script>
