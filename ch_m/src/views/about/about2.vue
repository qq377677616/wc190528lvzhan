<template>
  <div class="mian">
    <div class="about" :class="{itsCompay:page1Is}">
      <leftNav :isOn="isOn" v-bind:type="type"/>
      <!-- <div class="back" :class="{on:isOn}" @click="togoNav">&lt;</div> -->
      <div class="about-item2" v-if="page2Is">
        <div class="wrap">
          <div class="about-item2-top"></div>
          <div class="about-item2-bottom">
            <h2 class="bounceInLeft animated">{{itemlist.title}}</h2>
            <span class="span"></span>
            <p class="bounceInRight animated" v-html="itemlist.info">{{itemlist.info}}</p>
          </div>
        </div>
      </div>
      <!--page2结束-->
      <div class="about-item1" v-if="page1Is">
        <div class="wrap">
          <div class="about-item-h2 bounceInLeft animated">
        {{itemlist.title}}
          </div>
          <div class="tl">
          <div class="about-item-div">
            <div class="about-div bounceInRight animated" v-html="itemlist.info">
              {{itemlist.info}}
            </div>
          </div>
          </div>
        </div>
      </div>
      <!--page1结束-->
    </div>
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
      page1Is:true,
      page2Is:true,
      srcName:"",
      type:'about',
      itemlist:{},
      aboutList1:[
        {name:"devePment",title:"集团发展",info:"绿展集团诞生于澳门，目前中国内地总部位于深圳前海，并在珠海设有办事处。作为一家国际公司，绿展在北美、欧洲设立了多个离岸创新中心，引进生物技术项目、硅谷人工智能、智慧物联网项目。2018年，绿展签约前海科创投，并规划组建私募股权基金，佛山产业化基地规划设立，未来将在全球引入更多的高新技术产业落地中国。"},
        {name:"personnelV",title:"绿展集团人才观",info:"每个人都是世间的孤本，</br>我们珍视这份独一无二，</br>请认真的生活,勤奋的思考，勇敢的践行并开创新局。</br>我们欣喜于看到一个“全新的你”，</br>绿展拒绝一成不变。"},
        {name:"culture",title:"绿展集团企业文化",info:"保持好奇，保持天真，</br>永远不要试图成为“专家”或“行尊”。</br>人生的教室无边无际，</br>在绿展，我们共同作为学生，</br>分享见地，组织学习，相伴成长。"},
        {name:"about1",title:"绿展集团",info:"绿展集团成长于澳门，是一家致力于全球性高新技术产业发展和服务的企业，绿展开创了独特的绿展模式：集群化引入国际创新项目产业化落地中国+网络化构建全球科技创新平台+共享化产业合作服务平台。立体构建高新技术产业全球生态网络，被誉为全球化时代的4.0企业模式。"},
        {name:"itsCompany",title:"集团旗下公司",info:"绿展控股（深圳）有限公司<br/>横琴绿展生物技术有限公司<br/>金迈元生物科技有限公司<br/>珠海市金迈元生物科技有限公司<br/>珠海市酷睿奥人工智能科技有限公司"},
      ]
    }
  },
  components: {
    leftNav
  },
  created(){
    this.getList()
  },
  mounted(){
    this.isOn = true;
  },
  methods:{
    togoNav(){
      this.isOn = !this.isOn
    },
    getList(){
      this.srcName = this.$route.name
      for(let i of this.aboutList1){
        if(this.$route.name == i.name){
          this.itemlist = i
        }
      }
    }
  },
  watch:{
    $route(to) {
      this.getList()
    }
  }
}
</script>
<style scoped>
.about{
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(left, #53e1ff , #0e91ff);
  background-size: cover;
  position: relative;
}
.about.itsCompay{
  background: url("../../assets/img/about-bj2.jpg");
  background-size: cover;
}
.about-item2-top{
  width: 100%;
  height: 4.16rem;
  background: url("../../assets/img/about-top.jpg");
  background-size: cover;
}

.about-item2{
  
}
.about-item2-bottom{
  padding: 0.65rem 0.65rem 0.65rem 0.8rem;
  text-align: left;
  
}
.about-item2-bottom h2{
  font-size: 0.42rem;
  padding-bottom: 0.2rem;
  text-align: left;
  
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
  line-height: 200%;
  font-size: 0.24rem;
  text-align: left;
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


