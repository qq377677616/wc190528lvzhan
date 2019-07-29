<template>
    <div class="mian qing">
        <div class="newsa">
            <div class="top-c"><a @click="back"></a></div>
            <div class="newsa-img"><img :src="Article.image"/></div>
            <div class="newsa-con">
                <div class="newsa-con-title">
                    <h2>{{Article.title}}</h2>
                    <p>{{Article.create_time}}</p>
                </div>
                <div class="newsa-con-in" v-html="Article.content">
                    {{Article.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import Qs from 'qs'
export default {
    data(){
      return{
        Article:{}
      }
    },
    mounted(){
    var that = this;
    console.log(this.$route.params.id)
    let _data = {
          id: this.$route.params.id,
          type:1
        }
    this.axios.post('http://admin.greenprosperitygroup.cn/applet/public/index.php/api/lzpc/newcontent', Qs.stringify(_data))
    .then((response)=>{
        console.log(response);
        this.Article = response.data.data
        
    }).catch((response)=>{
      console.log(response);
    })          
  },
  methods:{
      back(){
        this.$router.go(-1);//返回上一层
    },
  }
}
</script>

<style>
.mian.qing{
    position: static;
    background: #eeeeee;
     padding-top:1.2rem ;
}
.newsa-img{
        width: 100%;
    height: 4.16rem;
    background: url("../../assets/img/news-list.jpg");
    background-size: cover;
}
.newsa-img img{
    width: 100%;
    height: 4.16rem;
}
.newsa-con{
    padding: 0.3rem;
}
.newsa-con img{
    width: 80%;
    display: block;
    height: auto;
    margin: 5% auto;
}
.newsa-con-title p{
    padding: 0.1rem 0 0.2rem 0;
}
.newsa-con p,.newsa-con h2{
    color: #000
}
.newsa-con-in{
    text-align: left
}
.newsa-con-in span,.newsa-con-in p,.newsa-con-in div,.newsa-con-in strong{
    font-size:14px !important;
    background-color: #eeeeee !important;
}
video{
    width: 100% !important;
    margin: auto;

}
</style>
<style scoped>
.top-c{
    top: 1.42rem;
    background-image: url("../../assets/img/x1.png"); background-size: cover;
    border-radius: 50%;
    box-shadow: 0 0 0.5rem rgba(0, 48, 255, 0.5)
}

</style>
