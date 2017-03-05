<style lang="less">
  @import "../assets/less/home.less";
</style>

<template>
    <list class="list" @loadmore="fetch" loadmoreoffset="20">
      <cell class="cell" v-for="key in lists" @click="openContent">
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
 const navigator = weex.requireModule('navigator')

const tools = require('../tools/tools.js');
import router from '../router';

export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    fetch: function() {
      modal.toast({message:'loadmore', duration:1});
      tools.httpAgent('http://v3.wufazhuce.com:8000/api/hp/more/0?version=v3.5.3').then((data)=>{
        this.lists = data.data;
     },(errt)=>{
       console.log(errt);
     });
   },
    openContent: function(event) {
      router.push('/content/1');
      // navigator.push({
      //   url: '../entry.js',
      //   animated: "true"
      // }, event=>{
      //   modal.toast({message:'callback:' + event});
      // });
    }
  },
  created() {
     this.fetch();
  }
};

</script>
