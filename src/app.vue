<template>
    <div>
        <div>
            <router-link to="/index">Home</router-link>
            <router-link v-on:click.native="tt" to="/hello">hello</router-link>
            <router-link to="/hello2">hello</router-link>
            <router-link to="/imgVue">imgVue</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>

</template>
<script>
var LazyLoad = require("lazyload-js")
  export default {
    methods:{
        tt(){
            LazyLoad.js('./com1.dll.js', function () {
                console.log('com1.dll loaded')
            });
        }
    }

  }
   
</script>