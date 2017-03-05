<style lang="less">
  @import "../assets/less/home.less";
</style>

<template>
    <list class="list" @loadmore="fetch" loadmoreoffset="20">
      <cell class="cell" v-for="key in lists">
          <div class="panel">
            <text class="home-title">{{key.title}}</text>
            <text class="home-author" v-if="key.author_list.length > 0">{{key.author_list[0].user_name}}</text>
             <img class="img" :src="key.cover" resize="cover" v-if="key.cover.length > 0"></img>
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
      tools.httpAgent('http://v3.wufazhuce.com:8000/api/movie/list/0?version=v3.5.3').then((data)=>{
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
