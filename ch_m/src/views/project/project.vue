<template>
  <div class="mian">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide sw1" v-for="(item,key) in data" :key="key" ref="sw1" @click="swip(key)">
          <div class="swiper-slide-divs">
          <div class="sli">
            <div class="img">
                <div class="top"><div class="box"></div>
                  <p>{{item.title}}</p>
                  <!-- <img src="@/assets/img/title_01.png" alt=""> -->
                </div> 
                <img class="base" src="@/assets/img//img_00.png" alt="">
            </div>
          </div>
          </div>
        </div>
      </div>
       <vue-particles
            color="#409EFF"
            :particleOpacity="0.7"
            :particlesNumber="150"
            shapeType="circle"
            :particleSize="2"
            linesColor="#409EFF"
            :linesWidth="1"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            hoverMode="grab"
            :clickEffect="false"
            :hoverEffect="false"
            class="lizi"
    >
    </vue-particles>
      <div class="swiper-pagination soso"></div>
    </div>
    <div class="project-tan" :class="{on:iscon}">
      
      <div class="text animated fadeInUpBig" @click.stop >
        <div class="close" @click="elastic">
          <div></div>
        </div>
        <h2>{{tatexts.title}}</h2>
        <div v-html="tatextsfont">{{tatextsfont}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import Qs from 'qs'
var tatext=[
        {title:"IOT工业4.0",text:"工业4.0 预维护系统<br/>边缘计算解决方案<br/>自供电工业眼系统<br/>帆翼系统<br/>自供电气流式传感器项目<br/>无人机项目<br/>二氧化碳转蛋白质项目"},
        {title:"新能源与新材料",text:"二氧化碳再利用项目<br/>新型特种炭黑项目"},
        {title:"消费级+AI",text:"便携净化器项目<br/>睡眠机器人项目<br/>移动手持毒品、药物智能检测仪项目<br/>人体3D扫描项目<br/>AI垂直信息检索引擎项目<br/>家居安防系统项目<br/>家居监控系统项目"},
        {title:"大健康与生物技术",text:"质子治疗项目<br/>小分子蛋白肽项目<br/>"},
        {title:"IP文创类及其他",text:"交互媒体平台<br/>天空旅馆项目<br/>"},
      ]
export default {
  name: 'project',
  data(){
    return{
      isOn:false,
      iscon:false,
      tatexts:{},
      tatextsfont:"",
      data:[]
      
    }
  },
  components: {
  },
  mounted(){
    var that = this;
    that.isOn = true;
    that.axios.get('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/about').then(res => {
      console.log(res.data.data)
      that.data = res.data.data    
      console.log(that.data)
      that.$nextTick(()=>{
        that.swiperInit()
      })
      
    })
  },
  
  methods:{
    indexElastic(){
      this.iscon=true
    },
    elastic(){
      this.iscon=false
    },
    swip(index){
      console.log(this.data[index])
      this.tatexts=this.data[index]
      var reg = /#/g;
      this.tatextsfont = this.data[index].description.replace(reg,"<br/>")
      console.log(this.tatextsfont)
      this.iscon=true;
    },
    swiperInit(){
      var that = this;
      new Swiper ('.swiper-container', {
        effect : 'slide',
        // autoplay:true,
        // speed:  500,
        pagination: {
          el: '.swiper-pagination',
        },
      })   
    },
  }
}

</script>
<style scoped>
.mian .swiper-container{
  height: 100%;
   background: #180d5b;
}
.swiper-wrapper{z-index: 110;}
.swiper-slide-divs{
  -webkit-animation: topBottom2 5s linear alternate infinite;
  animation: topBottom2 5s linear alternate infinite; 
text-align: center;
  width: 100%;
  height: 100%;
        display: flex;
    justify-content: space-around;
    align-items: center;
    
}
.sli{    -webkit-animation: topBottom2 5s linear alternate infinite;
    animation: topBottom2 5s linear alternate infinite;
    cursor: pointer;
    opacity: .9;
    text-align: center;
}
 .img .top{
    height: 4.5rem;
    margin: 0 auto;
    position: relative;
    z-index: 5;
}
.swiper-slide .img .top .box{
    -webkit-transition-delay: 1s;
    transition-delay: 1s;
height: 100%;
    background: url(../../assets/img/img_00s.png) no-repeat center bottom;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    -webkit-background-size: 1.71rem 100%;
    background-size: 1.71rem 100%;
    -webkit-transition: all 1.5s;
    transition: all 1.5s;
}
.swiper-slide .img .top img{
    padding-top: 0.6rem;
    width: 0.45rem;
    height: 4.5rem;
}
.swiper-slide .img .top p{
     display: block;
    margin: auto;
    padding-top: 1rem;
    width: 0.45rem;
    height: 3.48rem;
    z-index: 9999;
    position: relative;
    display: flex;
    align-items: center;
    font-size: 0.3rem;
}
.swiper-slide .img .top img,.swiper-slide .img img{
    -webkit-transform: translate(0) scale(1) !important;
    -ms-transform: translate(0) scale(1) !important;
    transform: translate(0) scale(1) !important;
    opacity: 1;
        -webkit-transition-delay: 2.4s;
    transition-delay: 2.4s;
        -webkit-transition: all 1s;
    transition: all 1s;
}
img.base{
        margin-top: -1.5rem;
    position: relative;
    z-index: 1;
    width: 3.8rem;
    height: 5.25rem;
}
div.base{
        margin-top: -1.5rem;
    position: relative;
    z-index: 1;
    width: 3.8rem;
    height: 5.25rem;
}
.lizi{
        position: absolute;
        height: 100%;
        top:0;
    }
.project-tan{
      position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.5);
    z-index:1;
    display: none
}
.project-tan.on{
  display: block
}

.project-tan .text{
  width: 4.5rem;
  min-height:3rem;
  padding-left: 0.8rem;
  padding-bottom: 0.4rem;
  text-align: left;
  border:2px solid #17FFFF;
  background-image: linear-gradient(90deg, #38DDFF, #1D96FF);
  position: absolute;
  left:50%;
  margin-left: -2.8rem;
  top: 30%;
  font-size: 0.2rem;
  line-height: 150%;
}
.project-tan .text h2{
  font-size: 0.3rem;
  line-height: 200%;
  padding-top: 0.2rem;
}
.project-tan .text .close{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 0.1rem;
  right:0.06rem;
}
.project-tan .text .close div{
  width: 0.3rem;
  height: 0.3rem;
  background-image: url("../../assets/img/x1.png"); background-size: cover;
 display: inline-block;
}
.project-tan .text .close .div::before{
   content: "";
  position: absolute;
  top: 0;
  left: 0.1rem;
   width:0.05rem;
 height:0.3rem;
 background: #333;
 -webkit-transform: rotate(45deg);
 -moz-transform: rotate(45deg);
 -o-transform: rotate(45deg);
 -ms-transform: rotate(45deg);
 transform: rotate(45deg);
}
.project-tan .text .close .div::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0.1rem;
  background: #333;
width:0.05rem;
 height:0.3rem;
 -webkit-transform: rotate(-45deg);
 -moz-transform: rotate(-45deg);
 -o-transform: rotate(-45deg);
 -ms-transform: rotate(-45deg);
 transform: rotate(-45deg);
}
/*上下轻移2*/
@keyframes topBottom2 {
  0%{transform: translate(0, 0);}
  33%{transform: translate(0, -6px);}
  100%{transform: translate(0, 6px);}
}
@-webkit-keyframes topBottom2 {
  0%{-webkit-transform: translate(0, 0);}
  33%{-webkit-transform: translate(0, -6px);}
  100%{-webkit-transform: translate(0, 6px);}
}
@-moz-keyframes topBottom2 {
  0%{-moz-transform: translate(0, 0);}
  33%{-moz-transform: translate(0, -6px);}
  100%{-moz-transform: translate(0, 6px);}
}
@-o-keyframes topBottom2 {
  0%{transform: translate(0, 0);}
  33%{transform: translate(0, -6px);}
  100%{transform: translate(0, 6px);}
}
</style>
<style>
.soso .swiper-pagination-bullet{
  background: #fff
}
</style>
