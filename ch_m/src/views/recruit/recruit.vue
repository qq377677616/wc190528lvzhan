<template>
    <div class="mian qing">
        <div class="recruit1">
            <div class="recruit-top">
                <div class="recruit-top-li"><h2>{{titlearr[0]}} <span>- {{titlearr[1]}}</span></h2></div>
                <div class="recruit-top-li"><router-link :to="{name:'recruit', path:'/recruit'}"></router-link></div>
            </div>
            <div class="recruit-con" :class="{on:isClass}">
                <p>岗位职责：</p>
                <div v-html="Article.content">{{Article.content}}</div>
                <p>任职要求：</p>
                <div v-html="Article.contents">{{Article.contents}}</div>
            </div>
            <div class="recruit-fo">
                <p>如果你有兴趣加入我们，请投递简历到</p>
                <p>hr@greenprosperitygroup.com</p>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import Qs from 'qs'
export default {
    data(){
      return{
        Article:[],
        titlearr:[],
        isClass:false
      }
    },
    beforeMount(height) {
        var h = document.documentElement.clientHeight || document.body.clientHeight;
        this.curHeight =h - height; //减去页面上固定高度height
        console.log(this.curHeight)
    },
    mounted(){
    
    var that = this;
    that.isOn = true;
    that.isClass=true;
    console.log(window.document.body.offsetHeight)
    let _data = {
          id: this.$route.params.id
        }
    this.axios.post('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/aboutcat', Qs.stringify(_data))
    .then((response)=>{
        this.Article = response.data.data[0]
        this.titlearr = response.data.data[0].title.split("-")
        console.log(response.data.data[0]);
    }).catch((response)=>{
      console.log(response);
    })          
  },
  methods:{
  }
}
</script>

<style>
html,body{min-height: 100%; background: #eeeeee;}
.mian.qing{
    position: static;
    min-height: 100%;
}
.recruit1{
    padding: 1.2rem 0.7rem 0 0.7rem;
}
.recruit-top{
   display: flex;
   padding-bottom: 0.42rem;
}
.recruit-top .recruit-top-li{
    flex: 1;
}
.recruit-top .recruit-top-li:first-child{
    text-align: left;
}
.recruit-top .recruit-top-li:last-child{
    text-align: right;
}
.recruit-top .recruit-top-li:last-child a{
    display: inline-block;
    width: 0.56rem;
    height: 0.56rem;
    background: url("../../assets/img/x.png");
    background-size: cover;
}
.recruit-top h2{
    font-size: 0.42rem;
    color: #5f5d5d;
    display: inline-block;
}
.recruit-top span{
    font-size: 0.28rem;
}
.recruit-con{
    padding: 0.8rem 0;
    position: relative;
}
.recruit-con.on::after,.recruit-con.on::before{
    width: 100%;
 -webkit-transition: all 1s;
    transition: all 1s;
    
}
.recruit-con::after{
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
       
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #46DAFF;
    position: absolute;
    left: 0;
    top: 0;
}
.recruit-con::before{
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
        -webkit-transition: all 1s;
    transition: all 1s;
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #46DAFF;
    position: absolute;
    right: 0;
    bottom: 0;
}
.recruit-con p{
    text-align: left;
    display: block;
    color: #787778;
    font-size: 0.22rem;
    line-height: 140%;
}
.recruit-fo{
    padding-top: 0.08rem;
}
.recruit-fo p{
    text-align: right;
    color: #46DAFF;
    line-height: 150%;
    font-size: 0.2rem;
}
</style>
