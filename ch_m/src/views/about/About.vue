<template>
  <div class="mian">
    
    <div class="leftNav" :class="{on:isOn}">
      <div class="lNav">
        <div v-for="(item,key) in datas" :key="key"><a href="javascript:void(0)" @click="tabChange(key)">{{item.title}}</a></div>
        <!-- <div><a href="javascript:void(0)" @click="tabChange(child2)">战略远景</a></div>
        <div><a href="javascript:void(0)" @click="tabChange(child3)">人才观</a></div>
        <div><a href="javascript:void(0)" @click="tabChange(child4)">企业文化</a></div>
        <div><a href="javascript:void(0)" @click="tabChange(child5)">品牌活动</a></div> -->
      </div>
    </div>
    <!-- <div class="back"  v-show="childI" :class="{on:isOn}" @click="togoNav">&lt;</div> -->
    <div :is="currentView" :data="data" @func="getMsgFormSon" v-on:childIs="childByValue"></div>
  </div>
</template>
<script>
import Swiper from 'swiper';
import child1 from '@/views/about/child1.vue';
import child2 from '@/views/about/child2.vue';
import child3 from '@/views/about/child3.vue';
import child4 from '@/views/about/child4.vue';
import child5 from '@/views/about/child5.vue';

export default {
  name: 'anout',
  data(){
    return{
      isOn:false,
      child1: 'child1',
      child2: 'child2',
      child3: 'child3',
      child4: 'child4',
      child5: 'child5',
      childI:true,
      currentView: '', // 默认选中第一项
      data:[],
      datas:[]
    }
  },
  components: {
    child1,
     child2,
     child3,
     child4,
     child5,
  },
  //http://admin.greenprosperitygroup.cn/applet/public/index.php/
  mounted(){
    var that = this
    that.isOn = true;
    that.axios.get('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/aboutchj_run').then(res => {
      console.log(res.data.data)
      that.datas = res.data.data
    })
    // this.childByValue()
  },
  methods: {
    tabChange(tabItem) {
      console.log(tabItem)
      var fon = "child"+(tabItem+1)
      this.data = this.datas[tabItem]
      this.isOn = false
      this.currentView = fon;
    },
    togoNav(){
      this.isOn = !this.isOn
    },
    getMsgFormSon(data){
       if(data == false){
         this.childI = true
         this.currentView = ''
         this.isOn=true;
         
       }
    },
    childByValue(childIs) {
      // childValue就是子组件传过来的值
        this.childI = childIs
    }

  }
}
</script>
<style scoped>
.mian{
  position: static;
  background-image: url("../../assets/img/about-bj1.jpg"); 
  background-size: cover; 
  min-height:100vh;
  padding-top: 1.2rem;
    box-sizing: border-box;
}
</style>

