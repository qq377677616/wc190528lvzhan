<template>
    <div class="about">
      <div class="top-c" @click="sendMsg"><a></a></div>
       <div class="about-item2">
           <div class="wrap">
              <div class="about-item2-top pinpai"></div>
              <div class="about-item2-bottom ">
                <h2 class="bounceInLeft animated">{{data.content}}</h2>
                <!-- <span class="span"></span> -->
                <p class="bounceInRight animated about-item2-bottom-si" v-html="description">
                  {{description}}
<!-- {{data.description}}
{{data.description_two}} -->
                </p>
                <p v-html="description_two">{{description_two}}</p>
                <div class="imgsss">
                  <img :src="data.img3">
                  <!-- <div class="img-text">
                    <img src="@/assets/img/icon_06.png">
                    <p>维也纳站</p>
                  </div>
                  <div class="img-text">
                   <img src="@/assets/img/icon_07.png">
                   <p>硅谷站</p>
                  </div>
                  <div class="img-text">
                   <img src="@/assets/img/icon_08.png">
                   <p>深圳站</p>
                  </div> -->
                </div>
              </div>
           </div>
       </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        description:'',
        description_two:''
      }
    },
    props:["data"],
    mounted(){
       this.$emit('childIs', this.childIs)

       this.description_two = "<b>"+this.data.description_two.replace("#","</b>")
       this.description = "<b>"+this.data.description.replace("#","</b>")

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
.imgsss{
  padding-top: 0.2rem;
}
.imgsss .img-text{
  display: inline-block;
    vertical-align: top;
    margin-right: 0.3rem;
}
.imgsss img{
  width: 70%;
}
.imgsss .img-text img{
      width: 1rem;
}
.imgsss .img-text p{
  text-align: center;
}

</style>
<style>
.about-item2-bottom p b{
  display: block;
}
.about-item2-bottom-si{
  padding-bottom: 0.2rem;
}
.about-item2-bottom p span{
  display: block;
  font-weight: bold;
  
}
.about-item2-top.pinpai{
  background: url("../../assets/img/about_06.jpg");
  background-size: cover;
}
</style>