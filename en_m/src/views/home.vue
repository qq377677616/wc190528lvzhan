<template>
<div id="home">
    <vue-particles
            color="#409EFF"
            :particleOpacity="0.7"
            :particlesNumber="120"
            shapeType="circle"
            :particleSize="2"
            linesColor="#409EFF"
            :linesWidth="1"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            hoverMode="grab"
            :clickEffect="false"
            :hoverEffect="false"
            class="lizi"
    >
<!--        enter-active-class="animated fadeInDownBig" leave-active-class="animated slideInDown"-->
    </vue-particles>
    <transition-group  appear >
    <img
            v-for="(item, index) in homeImg"
            :key="item.id"
            :class="index===0?'animated zoomInDown':'animated fadeInDown'"
            :id="`title-img-${index}`"
            :src="item.src" alt=""
            :style="`animation-delay: ${index === 0?0:(index+1.5)/2}s;`">
    </transition-group>
</div>

</template>

<script>
    export default {
        name: "home",
        data(){
          return{
              homeImg:[
                  {id:'a',src:require('../assets/home/a.png')},
                  {id:'b',src:require('../assets/home/b.png')},
                  {id:'c',src:require('../assets/home/c.png')},
                  {id:'d',src:require('../assets/home/d.png')},
                  {id:'e',src:require('../assets/home/e.png')},
                  {id:'f',src:require('../assets/home/f.png')},
                  {id:'g',src:require('../assets/home/g.png')},
              ],
              show:false,
          }
        },
        mounted() {

        },
        methods:{

        },

    }
</script>

<style scoped lang="scss">

    #home{
        text-align: center;
        position: absolute;
        top:1.2rem;
        bottom:0;
        right: 0;
        left: 0;
        background: url("../assets/bkg.png") no-repeat;
        background-size: cover;
        overflow: hidden;
    }
    @for $i from 0 through 7 {
        #title-img-#{$i}{
            position: absolute;
            @if $i == 0{
                top:15%;
            } @else {
                top:calc(18% + #{$i / 2}rem );
            }
            left: calc(50% - 32.5%);
            width: 65%;
        }
    }
    .lizi{
        position: absolute;
        height: 100%;
        width: 100%;
    }

</style>
