<template>
  <div class="mian">
    <div class="wrap" :class="{contact:contact,news:news,recruit:recruit}">
    <leftNav :isOn="isOn" v-bind:type="type"/>
    <!-- <div class="back" :class="{on:isOn}" @click="togoNav">&lt;</div> -->
    </div>
      
  </div>
</template>
<script>
import Swiper from 'swiper';
import leftNav from '@/components/base/leftNav.vue'
export default {
  name: 'anout',
  data(){
    return{
      isOn:false,
      contact:false,
      news:false,
      recruit:false,
      type:""
    }
  },
  components: {
    leftNav
  },
  created(){
    this.type =this.$route.name
    this.soNav()
  },
  mounted(){  
       this.isOn = true;
  },
  methods:{
    togoNav(){
      this.isOn = !this.isOn
    },
    soNav(){
      console.log(this.$route.name)
      if(this.$route.name == "contact"){
        this.type = "contact"
        this.contact=true;
        this.news=false;
        this.recruit=false;
      }else if(this.$route.name == "news"){
        this.type = "news"
        this.contact=false;
        this.news=true;
        this.recruit=false;
      }else if(this.$route.name == "recruit"){
        this.type = "recruit"
        this.contact=false;
        this.news=false;
        this.recruit=true;
      }
    }
  },
  watch:{
    $route(to) {
      this.soNav()
    }
  }
}
</script>
<style scoped>
.wrap{
  width: 100%;
  height: 100%;
  background:#fff;
  position: relative;
}
.contact{
  background-image: url("../../assets/img/contact-bj.png");
  background-size: cover;
}
.news{
  background-image: url("../../assets/img/news-bj.jpg");
  background-size: cover;
}
.recruit{
  background-image: url("../../assets/img/recruit-bj.jpg");
  background-size: cover;
}
.back{
  position: fixed;
  bottom: 0.5rem;
  left:0.5rem;
  font-size: 0.32rem;
  width: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #fff;
  -webkit-transition: left 1s;
    transition: left 1s;
  font-family: "宋体";
  -moz-transform:scaleX(-1);
    -webkit-transform:scaleX(-1);
    -o-transform:scaleX(-1);
    transform:scaleX(-1);
}
.back.on{
  left:1rem;
  -moz-transform:scaleX(1);
    -webkit-transform:scaleX(1);
    -o-transform:scaleX(1);
    transform:scaleX(1);
}

</style>
<style>
.back{
  position: absolute;
  bottom: 0.5rem;
  left:0.5rem;
  font-size: 0.32rem;
  width: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #fff;
  -webkit-transition: left 1s;
    transition: left 1s;
  font-family: "宋体";
  -moz-transform:scaleX(-1);
    -webkit-transform:scaleX(-1);
    -o-transform:scaleX(-1);
    transform:scaleX(-1);
    z-index: 1;
}
.back.on{
  left:1rem;
  -moz-transform:scaleX(1);
    -webkit-transform:scaleX(1);
    -o-transform:scaleX(1);
    transform:scaleX(1);
    z-index: 1
}
</style>
