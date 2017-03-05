<style lang="css">

</style>
<style lang="less">
  @import "./assets/less/app.less";
</style>
<template>
<div @androidback="back">
  <router-view style="flex:1;"></router-view>
</div>
</template>

<script>
import router from './router';
export default {
    methods: {
        back: function() {
            router.back(-1);
        }
    }
};
</script>
