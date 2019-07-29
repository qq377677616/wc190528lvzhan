<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <div class="min-main">
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from '@/components/base/header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>
<style>
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
    z-index: 10;
  }
  .el-main {
    margin-top: 1.2rem;
    padding: 0 !important;
  }
  .min-main{
    min-height: 100%;
  }
  .mian{
      text-align: center;
    position: absolute;
    top: 1.2rem;
    bottom: 0;
    right: 0;
    left: 0;
    /* min-height: 100vh; */
    /* position: relative;
    min-height: 100vh;
    padding-top: 1.2rem;
    box-sizing: border-box; */
}
body{
  height: 100% !important;
}
</style>
