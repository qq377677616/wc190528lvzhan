<template>
    <div class="about">
      <div class="top-c" @click="sendMsg"><a></a></div>
       <div class="about-item2">
           <div class="wrap">
              <div class="about-item2-top"></div>
              <div class="about-item2-bottom">
                <h2 class="bounceInLeft animated">{{data.content}}</h2>
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
       var reg = /#/g;
       this.description = this.data.description.replace(reg,"<br/>")
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