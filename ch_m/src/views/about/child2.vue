<template>
    <div class="abouts">
      <div class="top-c" @click="sendMsg"><a></a></div>
      <div class="abouts-list">
        <img :src="data.img2">
        <!-- <div class="abouts-item">
          <div class="abouts-item-font bounceInLeft animated">
            通过全球多元化的合作伙伴，结合欧美领先的工业级技术，推动具有中国战略价值的产业新生态。
          </div>
          <div class="abouts-item-img bounceInRight animated">
            <img src="@/assets/img/about_01.jpg">
          </div>
        </div>
        <div class="abouts-item">
          <div class="abouts-item-font bounceInLeft animated">
            借助自身强大的总部职能，为被投企业提供一系列的资源，搭建完整的产业链，加速前沿技术的在中国的产业化进度。
          </div>
          <div class="abouts-item-img bounceInRight animated">
            <img src="@/assets/img/about_02.jpg">
          </div>
        </div>
        <div class="abouts-item">
          <div class="abouts-item-font bounceInLeft animated">
            把握中国在全球分工格局的变化，中产阶级崛起，城市化及资本市场壮大等内在机遇，实现被投企业的资源整合及业务扩张，创造与提升企业价值。
          </div>
          <div class="abouts-item-img bounceInRight animated">
            <img src="@/assets/img/about_03.jpg">
          </div>
        </div> -->
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props:["data"],
    mounted(){
       this.$emit('childIs', this.childIs)
    },
    methods:{
      sendMsg(){
          this.$emit('func',false)
      }
    }
  }
</script>
<style scoped>
.top-c{
  position: absolute;
  top:0.22rem;
  right:0.2rem;
  width: 0.56rem;
  z-index: 1;
  height: 0.56rem;
  background-image: url("../../assets/img/x.png"); background-size: cover;
}
</style>
<style>
.abouts{
  background: #e5e5e5;
  height: 100%;
  position: relative;
}
.abouts-list{
  height: 100%;
  overflow:scroll;
}
.abouts-list img{
  width: 100%;
}
.abouts-item-font{
  padding: 0.8rem 0.72rem;
  text-align: left;
  font-size: 0.24rem;
  line-height: 200%;
  color: #000
}
.abouts-item-img img{
  width: 100%;
}
</style>