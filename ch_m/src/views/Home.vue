<template>
  <div class="mian">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        
        <div class="swiper-slide sw2" ref="sw2">
          <div class="swiper-info el-row animated fadeinB">
            <img style="width:4.88rem;height:1.02rem;" src="@/assets/img/font-03.png">
          </div>
        </div>
        <div class="swiper-slide sw3" ref="sw3">
          <div class="swiper-info el-row animated">
            <img style="width:4.26rem;height:1.24rem;" src="@/assets/img/font-02.png">
          </div>
        </div>
        <div class="swiper-slide sw4" ref="sw4">
          <div class="swiper-info el-row animated">
            <img style="width:3.66rem;height:1.24rem;" src="@/assets/img/font-01.png">
          </div>
        </div>
        <div class="swiper-slide sw1" ref="sw1">
          <img class="swiper-info animated" src="@/assets/img/logo-img.png">
          <img style="width:3.48rem;height:0.93rem;    display: block;margin: auto;margin-top: 1rem;" src="@/assets/img/font-04.png">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination soso"></div>
      <vue-particles
            color="#409EFF"
            :particleOpacity="0.7"
            :particlesNumber="200"
            shapeType="circle"
            :particleSize="2"
            linesColor="#409EFF"
            :linesWidth="0"
            :lineOpacity="0.1"
            :linesDistance="1"
            :moveSpeed="3"
            hoverMode="grab"
            :clickEffect="false"
            :hoverEffect="false"
            class="lizi"
    >
    </vue-particles>
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  name: 'home',
  components: {
  },
  mounted(){
    var that = this
    new Swiper ('.swiper-container', {
      loop: true,
      effect : 'fade',
      autoplay:true,
      speed:  500,
      pagination: {
        el: '.swiper-pagination',
      },
      on:{
        slideChangeTransitionStart:function(){
          if(this.realIndex == 1){
            that.$refs.sw3.getElementsByClassName("swiper-info")[0].classList.add("fadeinB");
            /***fadeInRight */
          }else if(this.realIndex == 2){
            that.$refs.sw4.getElementsByClassName("swiper-info")[0].classList.add("fadeinB");
          }else if(this.realIndex == 3){
            that.$refs.sw1.getElementsByClassName("swiper-info")[0].classList.add("fadeinB");
          }
        },
      },
    })        
  }
}
</script>
<style scoped>
.mian .swiper-container{
  height: 100%;
}
.swiper-wrapper .sw1{
  background: url("../assets/img/banner1.jpg") no-repeat;
}
.swiper-wrapper .sw2{
  background: url("../assets/img/banner2.jpg") no-repeat;
}
.swiper-wrapper .sw3{
  background: url("../assets/img/banner3.jpg") no-repeat;
}
.swiper-wrapper .sw4{
  background: url("../assets/img/banner4.jpg") no-repeat;
}
.swiper-wrapper .swiper-slide{
  background-size: cover;
  text-align: center;
}
.swiper-wrapper .swiper-slide{
  display: block;
  margin: auto;
}
.swiper-wrapper .sw1 img{
  width: 2.74rem;
  height: 2.6rem;
  margin-top: 4.4rem;
}
.swiper-wrapper .sw1 p{
  font-size: 0.25rem;
  padding-top: 1.42rem;
  letter-spacing:0.06rem;
}
.swiper-wrapper .sw2 .swiper-info{
  padding-top:105%;
}
.swiper-wrapper .sw3 .swiper-info{
  padding-top:1.5rem;
}
.swiper-wrapper .sw4 .swiper-info{
  padding-top:1.6rem;
}
.swiper-info{
  display: inline-block;
}
.swiper-info p{
  float: left;
  font-size: 0.38rem;
  width: 0.7rem;
  text-align: center;
  display: inline-block;
}
.swiper-info p.flq{
  float: none;
}
.swiper-container-horizontal > .swiper-pagination-bullets{
  bottom: 8px;
}
</style>
<style>
.soso .swiper-pagination-bullet{
  background: #fff
}
.lizi{
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 100;
}
</style>

