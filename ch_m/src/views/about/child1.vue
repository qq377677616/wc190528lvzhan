<template>
  <div class="about soso">
    <div class="top-c" @click="sendMsg"><a></a></div>
    <div class="about-item1">
      <div class="wrap">
        <div class="about-item-h2 bounceInLeft animated">
          {{data.content}}
        </div>
        <div class="tl">
          <div class="about-item-div">
            <div class="about-div bounceInRight animated">
             {{data.description}}
            </div>
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
        childIs:false
      }
    },
    props:["data"],
    mounted(){
      
       this.$emit('childIs', this.childIs)
    },
    methods:{
      sendMsg(){
          this.$emit('func',false)
      },
      nson(){
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
.about.soso{
  width: 100%;
  min-height: 100%;
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  background-size: cover;
  position: relative;
  background: url("../../assets/img/about-bj2.jpg");
  background-size: 100% 100%;
}

.about-item1{
  padding-top: 6rem;
}
.about-item-h2{
  width: 4.5rem;
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  color: #fff;
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  border:2px solid #009de3;
  margin-bottom: 0.6rem;
  margin-left: 0.25rem;
  font-size: 0.45rem;
  font-weight: bold;
}
.tl{
  text-align:right;
  padding-bottom: 0.6rem;
}
.about-item-div{
  display: inline-block;
  width: 5.6rem;
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  border:2px solid #009de3;
  box-shadow: -0.3rem 0.36rem 0 rgba(0, 164, 242, 0.15);
}
.about-item-div .about-div{
  padding: 0.25rem 0.2rem 0.2rem 0.3rem;
  text-align: left;
  font-size: 0.2rem;
  line-height: 190%;
}
</style>