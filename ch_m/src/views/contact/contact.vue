<template>
  <div class="mian">
    <div class="contact">
      <div class="top-c"><router-link :to="{name:'contact', path:'/contact'}"></router-link></div>
      <div class="contact-item">
        <div class="wrap">
          <div class="contact-item-top China" :class="itemlist.name"></div>
          <div class="contact-item-bottom">
              <div class="contact-items">
                  <h2 class="contact-items-h2">{{itemlist.title}}</h2>
                  <div class="contact-items-info" v-html="itemlist.info">
                      {{itemlist.info}}
                  </div>
                  <img class="img" :src="itemlist.img">
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  name: 'anout1',
  data(){
    return{
      isOn:false,
      srcName:"",
      itemlist:{},
      contactList1:[
        {name:"Macao",title:"澳门总部",info:"地址：氹仔成都街357号 濠景花园23座紫荆苑22楼G座</br>电话：+853 28855503</br>邮箱： inquiry@greenprosperitygroup.com",img:require('../../assets/img/contact_00.jpg')},
        {name:"China",title:"中国内地总部(深圳)",info:"地址：深圳市南山区前湾一路前海深港青年梦工场5栋212</br>电话：+86 0755- 26604489</br>邮箱： inquiry@greenprosperitygroup.com",img:require('../../assets/img/contact_01.jpg')},
        {name:"Hengqin",title:"横琴办事处",info:"地址：珠海市横琴新区横琴创意谷19栋B 111-114室</br>电话：+86 0756-6969113</br>邮箱： inquiry@greenprosperitygroup.com",img:require('../../assets/img/contact_02.jpg')},
        {name:"siliconValley",title:"硅谷办公室",info:"地址：美国加利福尼亚州圣马特奥县康卡街道400号</br>电话：650-520-7086</br>邮箱：michael@volponellc.com",img:require('../../assets/img/contact_03.jpg')},
        {name:"Vienna",title:"维也纳办公室",info:"地址：奥地利维也纳汉德斯凯街道94-96号</br>电话：+43 664 8219770</br>邮箱：Karl@greenprosperitygroup.com",img:require('../../assets/img/contact_04.jpg')},
      ]
    }
  },
  components: {
  },
  created(){
    this.getList()
  },
  mounted(){
    this.isOn = true;
  },
  methods:{
    getList(){
      this.srcName = this.$route.name
      for(let i of this.contactList1){
          if(this.$route.name == i.name){
              console.log(i.name)
              this.itemlist = i
          }
      }
    },
    // 将class赋值给方法，动态生成对象
    setClass (item) {
      let obj = {};
      obj[type[item]] = true;
      return obj;
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
p{ color:#5f5d5d }
.contact{
  width: 100%;
  height: 100%;
  background: #eee;
  background-size: cover;
  position: relative;
}
.contact-item-top{
    width: 100%;
    height: 4.16rem;
}
.China{
    background: url("../../assets/img/China.jpg");
    background-size: cover;
}
.Macao{
    background: url("../../assets/img/Macao.jpg");
    background-size: cover;
}
.Hengqin{
    background: url("../../assets/img/Hengqin.jpg");
    background-size: cover;
}
.siliconValley{
    background: url("../../assets/img/siliconValley.jpg");
    background-size: cover;
}
.Vienna{
    background: url("../../assets/img/Vienna.jpg");
    background-size: cover;
}
.contact-item-bottom{
    padding: 0.8rem;
}
.contact-items{
padding-left: 0.4rem;
text-align: left;
}
.contact-items-h2{
    font-size: 0.32rem;
    padding-bottom: 0.2rem;
    color: #5f5d5d;
    text-align: left;
    position: relative
}
.contact-items-h2::after{
    position: absolute;
    content: "";
    height: 0.43rem;
    width: 0.27rem;
    background: url("../../assets/img/biao.png");
    background-size: cover;
    left: -0.4rem;
    top: -0.05rem
}
.contact-items-info{
    color: #5f5d5d;
    padding-bottom: 0.6rem;
    font-size: 0.18rem;
    line-height: 200%;
    color: #5f5d5d;
    display: block;
    text-align: left
}
.contact-items-info p{
    
}
.contact-items .img{
    width: 5.45rem;
    height: 3.1rem;
    
}
</style>

