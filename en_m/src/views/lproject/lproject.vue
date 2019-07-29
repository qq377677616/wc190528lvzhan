<template>
    <section @scroll="hello">
        <div class="proiect-title animated slideInDown">
            <p>The Commercialization Process of a</p>
            <p>Japanese Peptide Company</p>
        </div>
        <article id="kdx">
            <ul id="ul-left" class="ul-left">
                <transition-group>
                    <li  :class="item.isShow>0?ikdRight:''"
                        v-for="(item,index) in leftList"
                        :key="item.title">
                        <span class="lj"></span>
                        <div class="bd"></div>
                        <img :src="item.src" alt="">
                        <div class="dtl">
                            <span class="time">{{item.title}}</span>
<!--                            <span></span>-->
                            <p>{{item.detailed}}</p>
                        </div>
                    </li>
                </transition-group>
            </ul>
            <ul id="ul-right" class="ul-right">
                <transition-group>
                    <li  :class="item.isShow>0?ikdLeft:''"
                        v-for="(item, index) in rightList"
                        :key="item.title">
                        <span class="rj"></span>
                        <div class="bd"></div>
                        <img :src="item.src" alt="">
                        <div class="dtl">
                            <span class="time">{{item.title}}</span>
<!--                            <span></span>-->
                            <p>{{item.detailed}}</p>
                        </div>
                    </li>
                </transition-group>
            </ul>
        </article>
    </section>
</template>

<script>
    export default {
        name: "lproject",
        data() {
            return {
                // show:false,
                ikdLeft:'animated slideInLeft',
                ikdRight:'animated slideInRight',
                timer: '',
                leftList: [
                    {
                        isShow:0,
                        time:0.3,
                        title: 'May 2018',
                        src: require("../../assets/lproject/project_02.png"),
                        detailed: 'SPV registered.\n' +
                            'Set up office and lab in Zhuhai.\n' +
                            'Completed key hires:lab assistants,marketing and sales team,product develpment\n' +
                            'team,etc.'
                    },
                    {
                        isShow:0,
                        time:0.7,
                        title: 'July 2018',
                        src: require("../../assets/lproject/project_03.png"),
                        detailed: 'Co-organized an event with Macau government with donation of 10000 boxes to Mainland\n' +
                            'China to support“Senior Care”initiative by Ministry of Civil Affairs.\n' +
                            'The event was widely covered by major media.'
                    },
                    {
                        isShow:0,
                        time:0,
                        title: 'Sep-Nov 2018',
                        src: require("../../assets/lproject/project_08.png"),
                        detailed: 'Cooperated with hospitals as a maternity and senior recovery health supplement.'
                    },
                    {
                        isShow:0,
                        time:0,
                        title: 'Dec.2018-Feb2019',
                        src: require("../../assets/lproject/project_07.png"),
                        detailed: 'Ongoing effort to extend market reach and increase production capacity.\n' +
                            'Already in profit.'
                    },
                ],
                rightList: [
                    {
                        isShow:0,
                        time:0.1,
                        title: 'April 2018',
                        src: require("../../assets/lproject/project_01.png"),
                        detailed: 'Initial diligence and China Market validation.\n' +
                            'Assisted the founder to obtain China`s\n' +
                            'national-level talent program grants of ¥2M\n' +
                            'individual grant and ¥10M project grant.'
                    },
                    {
                        isShow:0,
                        time:0.5,
                        title: 'June 2018',
                        src: require("../../assets/lproject/project_04.png"),
                        detailed: 'Production facility set up in Macau.\n' +
                            'Food production permit in Macau and\n' +
                            'import permit to China issued.\n' +
                            'First batch of”made in Macau”products packaged.'
                    },
                    {
                        isShow:0,
                        time:0,
                        title: 'August 2018',
                        src: require("../../assets/lproject/project_05.png"),
                        detailed: 'Key contracts signed with major pharmacy and\n' +
                            'supermarkets in Hong Kong and Macau,and\n' +
                            'distributors in China.'
                    },
                    {
                        isShow:0,
                        time:0,
                        title: 'Nov.2018',
                        src: require("../../assets/lproject/project_06.png"),
                        detailed: 'Invited and sponsored by the Macau government\n' +
                            'to exhibit at the first China International\n' +
                            'Import Expo in Shanghai.'
                    },
                ]
            }
        },
        methods:{
            hello(){
                let a = document.getElementById('ul-left');
                let b = document.getElementById('ul-right');
                let kx = a.querySelectorAll('#ul-left li');
                let kx2 = b.querySelectorAll('#ul-right li');

                kx.forEach((item, index, itemList)=>{
                    if (item.getBoundingClientRect().top  <= window.innerHeight) {
                        this.leftList[index].isShow = 1
                    }
                });
                kx2.forEach((item, index, itemList)=>{
                    if (item.getBoundingClientRect().top  <= window.innerHeight) {
                        this.rightList[index].isShow = 1
                    }
                })
            }
        },
        mounted() {
            this.hello();
        },

        beforeDestroy() {
            // clearInterval(this.timer);
        }
    }
</script>

<style scoped>
    .proiect-title {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 0.3rem;
        color: #4b4b4b
    }

    section {
        text-align: center;
        padding-top: 0.1rem;
        position: fixed;
        top: 1.2rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #e5e5e5;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }

    article {
        color: #5d5d5d;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        /*height: 200px;*/
    }

    .ul-left {
        padding-top: 1.8rem;
        /*float: left;*/
        width: 50%;
        border-right: 1px #ababab solid;
        /*padding-bottom: 0.6rem;*/
        overflow: hidden;
    }

    .ul-left .lj {
        width: calc(50% - 1.13rem);
        position: absolute;
        border-top: 1px #9c9c9c dashed;
        right: 0;
        top: 1.4rem;

    }

    .ul-left li .dtl, .ul-right li .dtl {
        text-align: left;
        padding: 0.2rem 0.2rem 0.2rem 0.75rem
    }

    .ul-left li .time, .ul-right li .time {
        padding-bottom: 0.05rem;
        border-bottom: 2px #5d5d5d solid;
    }
    .ul-left li p,.ul-right li p{
        margin-top: 0.15rem;
    }
    /*.ul-left li span, .ul-right li span {*/
    /*    display: block;*/
    /*    width: 40%;*/
    /*    border-top: 2px #5d5d5d solid;*/
    /*    padding-bottom: 0.1rem*/
    /*}*/

    .ul-right .rj {
        width: calc(50% - 1.13rem);
        position: absolute;
        border-top: 1px #9c9c9c dashed;
        left: 0;
        top: 1.4rem;
    }

    .ul-right li {
        height: 5.5rem;
        position: relative;
        padding-top: 0.4rem;


    }

    .ul-left li {
        height: 5.5rem;
        position: relative;
        padding-top: 0.4rem;
    }

    .ul-right {
        width: 50%;
        float: right;
        margin-top: -0.4rem;
        overflow: hidden;
    }

    @keyframes changDeg {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    img {
        width: 2rem;
        height: 2rem;
        /*margin: 0.1rem;*/
        margin-top: 0.12rem;
        margin-left: 0.05rem;
        /*padding: 0.12rem 0 0 0.05rem;*/

    }
    .bd{
        position: absolute;
        left: calc(50% - 1.1rem);
        width: 2.2rem;
        height: 2.2rem;
        margin:  auto;
        border-radius: 50%;
        border: 1px #9c9c9c dashed;
        /*border-width: 1px;*/
        /*border-style: solid;*/
        /*border-color: #9c9c9c;*/
        /*border-left: none;*/
        /*border-top: none;*/
        animation: changDeg 40s linear 0s infinite;
        /*animation: changDeg 15s linear 1s infinite;*/
    }

    .ikc {
        display: block;
        width: 2rem;
        height: 2rem;
        padding: 0.1rem;
        border: 1px #9c9c9c dashed;
        border-radius: 50%;
    }
</style>
