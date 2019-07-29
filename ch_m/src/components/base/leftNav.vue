<template>
    <div class="leftNav" :class="{on:isOn}">
      <div class="lNav">
        <div v-for="(list,key) in navlist" :key="key"><router-link :to="{name:list.name1, path:list.path,params: {id: list.id}}"><p>{{list.name}}</p></router-link></div>
      </div>
    </div>

</template>
<script>
//itsCompany
import Qs from 'qs'
var list = [
  {name:'澳门总部',name1:'Macao',path:'/contact/devePment'},
  {name:'中国内地总部',name1:'China',path:'/contact/about1'},
  {name:'横琴办事处',name1:'Hengqin',path:'/contact/personnelV'},
  {name:'硅谷办公室',name1:'siliconValley',path:'/contact/culture'},
  {name:'维也纳办公室',name1:'Vienna',path:'/contact/itsCompany'}
  // {name:'申请合作',name1:'cooperation',path:'/contact/itsCompany'}
]
export default {
  name: '',
  data(){
    return{
      navlist:[]
    }
  },
  props: [
    "isOn",
    "type"
  ],
  components: {
    
  },
  created(){
    this.isOn=false
    this.listarr()
  },
  mounted(){ 
    
  },
  methods:{
    listarr(){
      if(this.type == "contact"){
        this.navlist = list;
      }else if(this.type == "news"){
        this.axios.get('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/type').then((response)=>{
          this.navlist = []
          for(let i of response.data.data){
            i.path = "/news/newslist/"+i.id;
            i.name1 = "newslist";
            this.navlist.push(i)
          }
          console.log(this.navlist)
        }).catch((response)=>{
          console.log(response);
        })  
      }else if(this.type == "recruit"){
        this.axios.get('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/aboutlist').then((response)=>{
          this.navlist = []
          for(let i of response.data.data){
            i.path = "/recruit/recruitList/"+i.id;
            i.name1 = "recruitList";
            i.name = i.title;
            this.navlist.push(i)
          }
          console.log(this.navlist)
        }).catch((response)=>{
          console.log(response);
        })  
      }
    }
  },
  watch:{
    type(val){
     console.log(this.type);
     this.listarr()
    }
  }
}
</script>
<style>
.mian1{
  position:static
}
.leftNav{
  position: fixed;
  left: 0;
  width: 3.74rem;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  -webkit-transition: all 1s;
    transition: all 1s;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    z-index: 1
}
.leftNav.on{
  -webkit-transform: translate(0) scale(1) !important;
    -ms-transform: translate(0) scale(1) !important;
    transform: translate(0) scale(1) !important;
    opacity: 1;
}
.lNav{
  padding-top: 2rem;
  text-align: center;
}
.leftNav .lNav>div{
      -webkit-transform: translateX(-150px);
    -ms-transform: translateX(-150px);
    opacity: 0;
}
.leftNav.on .lNav>div{
      -webkit-transform: translate(0) scale(1) !important;
    -ms-transform: translate(0) scale(1) !important;
    transform: translate(0) scale(1) !important;
        -webkit-transition: all .3s;
    transition: all .3s;
    opacity: 1;
        padding: .25rem 0;
}
.leftNav.on .lNav>div:nth-child(1){
      -webkit-transition-delay: .2s;
    transition-delay: .2s;
}
.leftNav.on .lNav>div:nth-child(2){
      -webkit-transition-delay: .4s;
    transition-delay: .4s;
}
.leftNav.on .lNav>div:nth-child(3){
      -webkit-transition-delay: .6s;
    transition-delay: .6s;
}
.leftNav.on .lNav>div:nth-child(4){
      -webkit-transition-delay: .8s;
    transition-delay: .8s;
}
.leftNav.on .lNav>div:nth-child(5){
      -webkit-transition-delay: 1s;
    transition-delay: 1s;
}
.leftNav.on .lNav>div:nth-child(6){
      -webkit-transition-delay: 1.2s;
    transition-delay: 1.2s;
}
.leftNav.on .lNav>div:nth-child(7){
      -webkit-transition-delay: 1.4s;
    transition-delay: 1.4s;
}
.leftNav.on .lNav>div:nth-child(8){
      -webkit-transition-delay: 1.6s;
    transition-delay: 1.6s;
}
.leftNav.on .lNav>div:nth-child(9){
      -webkit-transition-delay: 1.8s;
    transition-delay: 1.8s;
}
.leftNav a{
  width: 2.34rem;
  display: inline-block;
   text-align: left;
}
.leftNav a p{
  text-align: left;
  display: inline-block;
  font-size: 0.24rem;
}

</style>
