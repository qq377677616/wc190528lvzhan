<template>
    <div class="about">
      <div class="top-c" @click="sendMsg"><a></a></div>
       <div class="about-item2">
           <div class="wrap">
              <div class="about-item2-top rencai"></div>
              <div class="about-item2-bottom">
                <h2 class="bounceInLeft animated" >{{data.content}}</h2>
                <!-- <span class="span"></span> -->
                <p class="bounceInRight animated" v-html="description">{{description}}</p>
              </div>
           </div>
       </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description:""
      }
    },
    props:["data"],
    mounted(){
       this.$emit('childIs', this.childIs)
       console.log(this.data)
       var reg = /#/g;
       this.description = this.data.description.replace(reg,"<br/>")
       console.log(this.description)
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
  background-image: url("../../assets/img/x1.png"); background-size: cover;
}
</style>
<style>
  .about{
  width: 100%;
  min-height: calc(100vh - 1.2rem);
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  background-size: 100% 100%;
  position: relative;
}
.about-item2-top{
  width: 100%;
  height: 4.16rem;
  background: url("../../assets/img/about-top.jpg");
  background-size: cover;
}
.about-item2-top{
  width: 100%;
  height: 4.16rem;

}
.about-item2-top.rencai{
  background: url("../../assets/img/about_02s.jpg");
  background-size: cover;
}
.about-item2{
  
}
.about-item2-bottom{
  padding: 0.65rem 0.65rem 0.65rem 0.8rem;
  text-align: left;
  
}
.about-item2-bottom h2{
  position: relative;
  font-size: 0.42rem;
  padding-bottom: 0.2rem;
  text-align: left;
  margin-bottom: 0.4rem;
}
.about-item2-bottom .span{
  background: #fff;
  width: 2.16rem;
  height: 0.03rem;
  display: inline-block;
  margin-bottom: 0.9rem;
}
.about-item2-bottom h2::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 2.16rem;
  height: 0.03rem;
  
}
.about-item2-bottom p{
  line-height: 180%;
  font-size: 0.24rem;
  text-align: left;
}
</style>