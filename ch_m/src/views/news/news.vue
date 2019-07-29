<template>
    <div class="mian qing">
        <div class="news" style="min-height:700px">
            <div class="top-c"><router-link :to="{name:'news', path:'/news'}"></router-link></div>
            <div class="swiper-container news-swiper" v-show = "panelShow">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,key) in banajax" :key="key">
                        <img :src="item.image">
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!--banner结束-->
            <!-- <div class="news-list" v-show = "panelShow">
                <router-link class="news-li" v-for="(item,key) in Articlelist" :key="key" :to="{name:'newsa', path:'/news/newsa/',params: {id: item.id}}">
                    <p class="p1">{{item.media}} {{item.create_time}}</p>
                    <p class="p2">{{item.title}}</p>
                </router-link>
            </div> -->
            <div class="news-soli" v-show="panelShow2">
                <router-link class="news-soli-li" v-for="(item,key) in Articlelist" :key="key" :to="{name:'newsa', path:'/news/newsa/',params: {id: item.id}}">
                    <img :src="item.image">
                    <div class="news-soli-li-info">
                        <p class="p1">{{item.title}}<p>
                        <p class="p2"><span v-if="mianIs">{{item.media}}</span> <span>{{item.create_time}}</span></p>
                    </div>
                </router-link>
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
          isOn:false,
          pagelist:1,
          Articlelist:[],
          pageIs:true,
          banajax:[],
          panelShow:false,
          panelShow2:true,
          mianIs:false
      }
    },
    created(){
        var that = this;
        
    },
    mounted(){

    var that = this;
    console.log(this.$route.params.id)
    if(that.$route.params.id==2){
        that.mianIs=true
    }
    // if(that.$route.params.id)
    // if(this.$route.params.id == 3){
    //     that.panelShow = false;
    //     that.panelShow2 = true;
    // }
    that.isOn = true;
    that.swiajax();
    window.addEventListener('scroll',function(){
            let visibleHeight = document.documentElement.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            if(scrollTop +100 > (scrollHeight-visibleHeight-1) && that.pageIs){
                that.pagelist++;
                that.newsAjax()
            }
        },true)
    that.newsAjax()
             
  },
  methods:{
    swiajax(){
        let _data = {
          type: this.$route.params.id,
          status:1
        }
        this.axios.post('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/image',
             Qs.stringify(_data))
        .then((response)=>{
            this.banajax = response.data.data
            console.log(response.data.data)
        }).catch((response)=>{
            console.log(response)
        }) 
    },
    newsAjax(){
        let _data = {
          type: this.$route.params.id,
          page:this.pagelist
        }
        this.axios.post('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/newlist',
             Qs.stringify(_data))
        .then((response)=>{
            console.log(response)
            for(let i =0; i<response.data.data.list.length; i++){
                this.Articlelist.push( response.data.data.list[i])
            }
            //this.Articlelist.push(response.data.data);
      console.log(this.Articlelist);
      new Swiper ('.swiper-container', {
      loop: true,
      autoplay:true,
      speed:  500,
      pagination: {
        el: '.swiper-pagination',
      },
    })
        }).catch((response)=>{
            this.pageIs = false;
        }) 
    },
  }
}
</script>

<style>
.mian.qing{
    position: static;
    background: #eeeeee;
}
.news{
    position: relative;
   
}
.top-c{
  position: absolute;
  top:0.22rem;
  right:0.2rem;
  width: 0.56rem;
  z-index: 2;
  height: 0.56rem;
  background-image: url("../../assets/img/x.png"); background-size: cover;
}
.top-c a{
    display: block;
    width: 100%;
    height: 100%;
}
.news .news-swiper{
    width: 100%;
    height: 4.16rem;
    padding-bottom: 0.6rem;
}
.news .news-swiper img{
    width: 100%;
    height: 100%;
}
.news .news-swiper .swiper-pagination{
    display: inline-block;
    width: auto;
    bottom: 0.1rem;
    z-index: 20;
    opacity: 1;
    left: auto;
    right: 0.6rem;
}
.news .news-swiper .swiper-pagination .swiper-pagination-bullet{
    width: 0.15rem;
    height: 0.15rem;
    border:2px solid #5f5d5e;
    background: #fff;
    margin: 0 0.04rem;
    border-radius: 50%;
    opacity: 1;
}
.news .news-swiper .swiper-pagination .swiper-pagination-bullet-active{
    background:#5f5d5e
}
.news-list{
    padding: 0 0.68rem 0.5rem 0.68rem;
}
.news-li{
    padding-top: 0.4rem;
    display: block;
}
.news-li p{
    text-align: left;
    line-height: 200%;
    color: #5f5d5e;
}
.news-li .p1{
    font-size: 1em;
}
.news-li .p2{
    font-size: 1.2em;
}

.news-soli{
    padding: 0.3rem 0.94rem 1rem 0.94rem;
}
.news-soli a{
    display: block;
    padding-top: 0.45rem;
    width: 100%
}
.news-soli a img{
    width: 100%;
    height: 3.18rem;
}
.news-soli-li-info{
    padding-top: 0.4rem
}
.news-soli-li-info p {
    color: #000;
    text-align: left;
}
.news-soli-li-info .p1{
    padding-bottom: 0.1rem;
    font-size: 0.32rem;
}
.news-soli-li-info .p2{
    font-size: 0.24rem;
    line-height: 160%;
}
.news-soli-li-info .p2 span{
    display: inline-block;
    padding-right: 0.2rem;
}
.news-soli-li-info .p2 span:last-child{
    padding-top: 0.06rem
}
</style>
