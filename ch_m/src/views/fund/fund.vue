<template>
  <div class="main">
    <div class="flex-container">
      <div class="canvaszz"></div>
      <canvas id="canvas"></canvas>
    </div>
    <div class="con flex-cen">
      <div class="box">
        <div class="ball">
          <dl>
            <dd v-for="(item,key) in data" :key="key" @click="swip(key)"><p>{{item.title}}</p></dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="hand"></div>
    <div class="elastic" :class="{on:iscon}">
      <div class="sok flex-cen" @click.stop >
        <p v-html="tatexts.description">{{tatexts.text}}</p>
        <div class="close"  @click="elastic">
          <div></div>
        </div>
      </DIV>
    </div>
  </div>
</template>

<script>
// import mapState from 'vuex'
var tatext=[
        {text:"硅谷、波士顿、维也纳、特拉维夫(筹备中)、伦敦(筹备中)"},
        {text:"深圳市顺势而为资产管理有限公司"},
        {text:"绿展控股（深圳）有限公司<br/>金迈元生物科技有限公司<br/>珠海市金迈元生物科技有限公司<br/>横琴绿展生物技术有限公司<br/>珠海市酷睿奥人工智能科技有限公司"},
        {text:"前海离岸科创产业化平台<br/>佛山工业互联网产业化基地<br/>文创谷<br/>横琴生物科技产业化基地"},
      ]
export default {
  name: 'fund',
  data () {
    return {
     iscon:false,
     tatexts:[],
     data:[]
    }
  },
  watch: {
  },
  mounted () {
    var _this = this
    _this.axios.get('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/lzstchj_run').then(res => {
      _this.data = res.data.data
      console.log(res.data.data)
    })

    window.onresize = function () { // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight // 窗口高度
    }
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    var w = canvas.width = window.innerWidth
    var h = canvas.height = window.innerHeight
    var hue = 217
    var stars = []
    var count = 0
    var maxStars = 1000 // 星星数量

    var canvas2 = document.createElement('canvas')
    var ctx2 = canvas2.getContext('2d')
    canvas2.width = 100
    canvas2.height = 100
    var half = canvas2.width / 2
    console.log(half)
    var gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)

    gradient2.addColorStop(0.025, '#fff')
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
    gradient2.addColorStop(0.2, 'hsl(' + hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()

    // End cache

    function random (min, max) {
      if (arguments.length < 2) {
        max = min
        min = 0
      }

      if (min > max) {
        var hold = max
        max = min
        min = hold
      }

      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function maxOrbit (x, y) {
      var max = Math.max(x, y)
      var diameter = Math.round(Math.sqrt(max * max + max * max))
      return diameter
      // 星星移动范围，值越大范围越小，
    }

    var Star = function () {
      this.orbitRadius = random(maxOrbit(w, h))
      this.radius = random(60, this.orbitRadius) / 8
      // 星星大小
      this.orbitX = w / 2
      this.orbitY = h / 2
      this.timePassed = random(0, maxStars)
      this.speed = random(this.orbitRadius) / 50000
      // 星星移动速度
      this.alpha = random(10, 10) / 100

      count++
      stars[count] = this
    }

    Star.prototype.draw = function () {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX
      var y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY
      var twinkle = random(10)

      if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05
      } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05
      }

      ctx.globalAlpha = this.alpha
      ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
      this.timePassed += this.speed
    }

    for (var i = 0; i < maxStars; i++) {
      /* eslint-disable no-new */
      new Star()
    }

    function animation () {
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 0.5 // 尾巴
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)'
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw()
      };

      window.requestAnimationFrame(animation)
    }

    animation()
  },
  created () {
  },
  methods: {
    indexElastic(){
      this.iscon=true
    },
    elastic(idx){
      if(idx <4){
        this.tatexts = this.data[idx]
      }
      this.iscon=!this.iscon
    },
    swip(index){
      console.log(this.data[index])
      this.tatexts=this.data[index]
      var reg = /#/g;
      this.tatexts.description = this.data[index].description.replace(reg,"<br/>")
      this.iscon=true;
    },
  }
}
</script>

<style scoped>

.main{
  position: absolute;
  top: 1.2rem;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
}
.flex-container{
  width: 100%;
  height: 100%;
        /* background: radial-gradient(200% 100% at bottom center, #0070aa, #0b2570, #000035, #000);
    background: radial-gradient(220% 105% at top center, #000 10%, #000035 40%, #0b2570 65%, #0070aa);
    background-attachment: fixed; */
}
canvas {
  width: 100%;
  height: auto /*默认全屏显示 可自己设置高度640px*/;
  display: inline-block;
  vertical-align: baseline;
  position: absolute;
  z-index: -1;
  
}
.canvaszz {
  width: 100%;
  height: 100%;
  background: radial-gradient(200% 100% at bottom center, #0070aa, #0b2570, #0b2570, #09164b);
  background: radial-gradient(220% 105% at top center, #09164b, #0b2570 40%, #0b2570 65%, #0070aa);
  background-attachment: fixed;
  position: absolute;
  z-index: 10;
  filter: alpha(opacity=60);
  -moz-opacity: 0.6;
  -khtml-opacity: 0.6;
  opacity: 0.6;
}
.con{
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
}
.flex-cen{
     display: flex;
    justify-content: center;
    align-items: center;
}
.box{
  width: 6.9rem;
  height: 6.9rem;
  z-index: 11;
      padding-bottom: 2rem;
}
.box .ball{
  width: 6.9rem;
  height: 6.9rem;
  background: url(../../assets/img/ecology_01.png) no-repeat center;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    flex-shrink: 0;
    position: relative;
    -webkit-animation: turns 200s linear infinite;
    animation: turns 200s linear infinite;
}
.box .ball dl{
      width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-animation: turn 200s linear infinite;
    animation: turn 200s linear infinite;
}
.box .ball dl dd{width: 1.48rem;
    height: 1.48rem;
    line-height: 1.48rem;
    text-align: center;
    border-radius: 50%;
    background: #09afca;
    font-size: 0.22rem;
    color: #003686;
    position: absolute;
    left: 50%;
    margin-left: -0.74rem;
    top: 15%;
    -webkit-animation: topBottom2 5s linear alternate infinite;
    animation: topBottom2 5s linear alternate infinite;
    cursor: pointer;
    box-shadow: 0 0 20px 0px #09afca;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    /* white-space: nowrap; */
}
.box .ball dl dd p{
  display:inline-block;
  width: 1rem;
  line-height: 120%;
  white-space: inherit;
  color: #003686}
.box .ball dl dd:nth-child(2){
  top:50%;
  margin-top: -0.74rem;
    right: 20%;
  left:auto;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
.box .ball dl dd:nth-child(3){
     top: auto;
    bottom: 15%;
    -webkit-animation-delay: 2s;
    animation-delay: 2s;
}
.box .ball dl dd:nth-child(4){
 top:50%;
  margin-top: -0.74rem;
    left: 30%;
    -webkit-animation-delay: 3s;
    animation-delay: 3s;
}
.hand{
  width: 5.55rem;
  height: 4.26rem;
  background: url(../../assets/img/hand.png) no-repeat ;
      position: absolute;
      bottom: 0.3rem;
       -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    z-index: 11;
    -webkit-animation: topBottom2 5s linear alternate infinite;
    animation: topBottom2 5s linear alternate infinite;
}
.elastic{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(0,0,0,.5);
  z-index: 12;
  display: none
}
.elastic.on{
   display: flex;
    justify-content: center;
    align-items: center;
}
.elastic p{
  font-size: 0.28rem;
  line-height: 160%;
  width: 4.83rem;
  text-align: center;
  display: block;
  
}
.elastic .sok{
  width: 4.83rem;
  padding: 0.42rem 0.2rem;
  min-height: 1rem;
      background-image: linear-gradient(90deg, #38DDFF, #1C95FF);
  border:2px solid #00FFFF;
  position: relative;
}
.elastic .sok .close{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: 0.1rem;
  right:0.06rem;
}
.elastic .sok .close div{
  position: relative;
  width: 0.3rem;
  height: 0.3rem;
   background-image: url("../../assets/img/x1.png"); background-size: cover;
 display: inline-block;
}
.elastic .sok .close .div::before{
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
.elastic .sok .close .div::after{
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
/*360度正旋转*/
@keyframes turn {
  0%{transform:rotate(0);}  
  100%{transform:rotate(360deg);}  
}
@-webkit-keyframes turn {
  0%{-webkit-transform:rotate(0);}  
  100%{-webkit-transform:rotate(360deg);}  
}
@-ms-keyframes turn {
  0%{-ms-transform:rotate(0);}  
  100%{-ms-transform:rotate(360deg);}  
}
@-o-keyframes turn {
  0%{transform:rotate(0);}  
  100%{transform:rotate(360deg);}  
}
/*360度反旋转*/
@keyframes turns {
  0%{transform:rotate(0);}  
  100%{transform:rotate(-360deg);}  
}
@-webkit-keyframes turns {
  0%{-webkit-transform:rotate(0);}  
  100%{-webkit-transform:rotate(-360deg);}  
}
@-ms-keyframes turns {
  0%{-ms-transform:rotate(0);}  
  100%{-ms-transform:rotate(-360deg);}  
}
@-o-keyframes turns {
  0%{transform:rotate(0);}  
  100%{transform:rotate(-360deg);}  
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