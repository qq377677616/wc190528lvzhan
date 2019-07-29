<template>
  <div class="mian">
    <div class="about" :class="{itsCompany:itsCompany}">
      <leftNav :isOn="isOn" :type="type"/>
      <div class="back" :class="{on:isOn}" @click="togoNav">&lt;</div>
      <div class="about-item1">
        <div class="wrap">
          <div class="about-item-h2">
        集团旗下公司
          </div>
          <div class="tl">
          <div class="about-item-div">
            <div class="about-div">
              绿展控股（深圳）有限公司<br/>横琴绿展生物技术有限公司<br/>金迈元生物科技有限公司<br/>珠海市金迈元生物科技有限公司<br/>珠海市酷睿奥人工智能科技有限公司
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>
<script>
import Swiper from 'swiper';
import leftNav from '@/components/base/leftNav.vue'
export default {
  name: 'anout1',
  data(){
    return{
      isOn:false,
      type:"about",
      itsCompany:true
    }
  },
  components: {
    leftNav
  },
  mounted(){     
    this.isOn = true;
  },
  methods:{
    togoNav(){
      this.isOn = !this.isOn
    }
  }
}
</script>
<style scoped>
.about{
  width: 100%;
  height: 100%;
  background: url("../../assets/img/about-bj2.jpg");
  background-size: cover;
  position: relative;
}

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
}
.back.on{
  left:1rem;
  -moz-transform:scaleX(1);
    -webkit-transform:scaleX(1);
    -o-transform:scaleX(1);
    transform:scaleX(1);
}
.about-item1{
  padding-top: 6.6rem;
}
.about-item-h2{
  width: 4.5rem;
  text-align: center;
  height: 0.7rem;
  line-height: 0.7rem;
  color: #fff;
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  border:2px solid #009de3;
  margin-bottom: 0.62rem;
  margin-left: 0.25rem;
  font-size: 0.45rem;
  font-weight: bold;
}
.tl{
  text-align:right;
}
.about-item-div{
  display: inline-block;
  width: 5.5rem;
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  border:2px solid #009de3;
  box-shadow: -0.3rem 0.36rem 0 rgba(0, 164, 242, 0.15);
  
}
.about-item-div .about-div{
  padding: 0.25rem 0.2rem 0.2rem 0.2rem;
  text-align: left;
  font-size: 0.2rem;
  line-height: 200%;
}
</style>

