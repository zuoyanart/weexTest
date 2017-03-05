<style lang="less">
  @import "../assets/less/home.less";
</style>

<template>
    <list class="list" @loadmore="fetch" loadmoreoffset="20">
      <cell class="cell" v-for="key in lists">
          <div class="panel">
            <text class="home-title">{{key.hp_title}}</text>
            <text class="home-author">{{key.hp_author}}</text>
             <img class="img" :src="key.hp_img_url" resize="cover"></img>
             <text class="home-content">{{key.hp_content}}</text>
          </div>
      </cell>
    </list>
</template>

<script>

const modal = weex.requireModule('modal');
const tools = require('../tools/tools.js');
const MP = 10;//每页多少条

export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    fetch() {
      modal.toast({message:'loadmore', duration:1});
      tools.httpAgent('http://v3.wufazhuce.com:8000/api/hp/bymonth/2016-10').then((data)=>{
        this.lists = data.data;
     },(errt)=>{
       console.log(errt);
     });
    }
  },
  mounted() {
     this.fetch();
  }
};

</script>
