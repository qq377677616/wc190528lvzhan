<template>
  <div id="app">
    <el-container>
      <el-header>
        <v-header></v-header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <transition name="el-fade-in-linear">
    <!--<loading v-show="isLoading" ></loading>-->
      <cover v-show="cover"></cover>
    </transition>
  </div>
</template>
<script>
  import cover from './views/cover'
  import v_header from './views/lvheader'
  import home from './views/home'
  import loading from './views/loading'
  import {mapState} from "vuex";

  export default {
    data(){
      return{
        cover:false,
        screenWidth:document.documentElement.clientWidth,
      }
    },
    mounted(){
      window.onresize = () => { // 定义窗口大小变更通知事件
        this.screenWidth = document.documentElement.clientWidth; //窗口宽度
      };
    },
    methods:{

    },
    components:{
      'v-header':v_header,
      home,
      loading,
      cover
    },
    watch:{
      'screenWidth':function () {
        // console.log(111)
        if (document.documentElement.clientWidth > document.documentElement.clientHeight){
          this.cover = true
        } else {
          this.cover = false
        }
      }
    },
    name: "app",
    computed:{
      ...mapState([
              'isLoading'
      ])
    }
  }
</script>
<style lang="scss">

  html{
    font-family: 'Helvetica',serif;
  }
  .el-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 1.2rem !important;
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 1.2rem;
    z-index: 1;
  }
  .el-main {
    /*text-align: center;*/
    /*line-height: 160px;*/
    margin-top: 1.2rem;
    padding: 0 !important;
  }
  /*p{ word-break:break-all; width:80%;}*/
</style>
