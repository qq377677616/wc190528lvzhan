<template>
    <section>
        <keep-alive>
        <vue-particles
                color="#fff"
                :particleOpacity="0.7"
                :particlesNumber="120"
                shapeType="circle"
                :particleSize="4"
                linesColor="#409EFF"
                :linesWidth="1"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                hoverMode="grab"
                clickMode="push"
                :clickEffect="false"
                :hoverEffect="false"
                class="lizi"
        >
        </vue-particles>
        </keep-alive>
        <article class="quan">
            <transition-group appear>
                <img
                    v-for="(item,index) in src"
                    @click="dialogdetailed(item)"
                    :key="item.name"
                    :class="[`q${index+1}`,item.dh]"
                    :style="`animation-delay: ${index/8}s;`"
                    :src="item.srcList" alt="">
            </transition-group>
        </article>
        <article>
            <i id="cler"
               v-show="dialogVisible"
               @click="dialogVisible=false"
               class="el-icon-circle-close-outline"></i>
            <transition name="el-zoom-in-top">
                <div class="dialog-w" v-show="dialogVisible">
                <div class="dialog" >
                    <p id="title">{{indexDetailed.title}}</p>
                    <p id="deteiled">{{indexDetailed.detailed}}</p>
                </div>
                </div>
            </transition>
        </article>
        <transition name="el-fade-in-linear">
        <loading v-show="show"></loading>
        </transition>
    </section>

</template>

<script>
    import Loading from "../loading";
    export default {
        name: "lmodel",
        components: {Loading},
        data() {
            return {
                show:true,
                title: ['Shared Risk<br> Approach'],
                timer: '',
                dialogVisible: false,
                indexDetailed: {},
                src:[
                    {
                        dh:'animated rotateIn',
                        title:'Key Differentiators',
                        name:'key',
                        srcList:require('../../assets/lmodel/q1.png'),
                        detailed:'Unlike traditional institutional venture investors who, by definition are passive participants once the investment is complete, Green Prosperity takes an operational role and isn’t afraid of the hard work necessary for success in the China market. Our model includes investing and financing all China JV´s costs so we clearly show confidence in the partnership. We have access to right talents and hire the right team, leverage the right relationships and take responsibility for execution, follow through and monetizing value for both parent companies. We are not just armchair advisors, we actually do the heavy lifting. GP is incentivized to drive to profitability for all parties as quickly as possible. When the partnership succeeds, we all succeed.'},
                    {
                        dh:'animated fadeInLeft',
                        title:'IP Protection and Defensibility – Green Prosperity protects the interest of our partnerships',
                        name:'ip',
                        srcList:require('../../assets/lmodel/q6.png'),
                        detailed:'Because GP is funding the China JV, protecting the IP of our partners is critical. It\'s also in our own best interest to defend the value of the partnership. It is for this reason we have engaged and partnered with the world class law firm of Baker Botts (www.bakerbotts.com) to help protect the interest of our partnerships and our stakeholders in China.'
                    },
                    {
                        dh:'animated fadeInRight',
                        title:'Our Target Audience',
                        name:'our',
                        srcList:require('../../assets/lmodel/q5.png'),
                        detailed:'Our business model is built with the focus on timing, scaling and team building. We are not about quantity of deal flow but rather about quality of partnerships.\n' +
                        'We focus on these core questions:\n' +
                        '- With the right “product market fit,” Is there market demand and opportunity for this product & service in China?\n' +
                        '- Are they ready to hit "scale?"\n' +
                        '- As any partnership would involve protecting the core value for all involved, is it defensible for China?\n' +
                        '- Does Green Prosperity have the right relationships necessary to be successful?'},
                    {
                        dh:'animated fadeInDown',
                        title:'The Green Prosperity Team Commercialization and Investment',
                        name:'the',
                        srcList:require('../../assets/lmodel/q3.png'),
                        detailed:'Green Prosperity has both a go-to-market team and an investment team with two individual two funds. One fund is a corporate venture fund and the other is in partnership with the Shenzhen regional government. This allows us the flexibility to tailor the needs of the company with the needs the right capital to maximize value.We know China. Our exclusive focus is China. We are not domain constrained but rather process and value constrained as it relates to China.'
                    },
                    {
                        dh:'animated fadeInLeft',
                        title:'Shared Risk Approach: How does it work?',
                        name:'sha',
                        srcList:require('../../assets/lmodel/q2.png'),
                        detailed:'Green Prosperity takes a “Shared Risk” approach. Together with our JV partner, we form a local Chinese entity (JV) customized to the unique value of the initiative. GP takes responsibility for all capital requirements in China (staff, office, travel, overhead, legal, etc.), localization, go to market and management for risk mitigation and maximized return for all stakeholders. Our focus isn’t just about return on investment but about building value and monetization through operational excellence. It was for that reason that we built Green Prosperity from the beginning as a Macau based holding company so that we can move profits back to our partners with much greater ease. When we succeed, everyone succeeds. We’re not investors “per-se’” but a commercialization and go-to-market partner that has the ability to invest.'
                    },
                    {
                        dh:'animated fadeInRight',
                        title:'The Resources and Network\n' + 'to Take Off in China',
                        name:'china',
                        srcList:require('../../assets/lmodel/q4.png'),
                        detailed:'In addition to capital, we also have to right working relationships that we can put to work and leverage (corporate, enterprise, government, corporate, customers and channels). We don’t partner with a company unless we have a high confidence that we have to relationships necessary to be successful and we illustrate our confidence by investing strategic capital to unlock that value.'
                    },
                ]
            }
        },
        mounted() {
            this.$nextTick(()=>{
                this.show = false
            })

        },
        methods: {
            dialogdetailed(obj) {
                this.indexDetailed = obj;
                this.dialogVisible = true
            }
        },

    }
</script>

<style scoped lang="scss">
    #cler {
        font-size: 0.6rem;
        color: white;
        position: absolute;
        top: 1.2rem;
        right: 0.45rem
    }

    #title {
        height: 1rem;
        color: #f9fbfd;
        margin: 0 0.5rem 0.5rem 0.5rem;
        padding-bottom: 0.15rem;
        font-size: 0.3rem;
        border-bottom: 2px white solid;;
    }
    #deteiled {
        color: #f9fbfd;
        font-size: 0.25rem;
        padding: 0 0.5rem 0.5rem 0.5rem;
        text-align: left;
        top: 2rem;
        bottom: 0.5rem;
    }

    .lizi {
        height: 95%;
    }

    .dialog {
        line-height: 0.35rem;
        width: 100%;
        position: absolute;
        left: 0;
        top: 5%;
        bottom: 5%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
.dialog-w{
    position: absolute;
    background: rgb(64, 158, 255, 0.7);
    left: calc(50% - 35%);
    top: calc(50% - 40%);
    width: 70%;
    height: 80%;
}
    .dialog::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
        /*border-radius: 10px;*/
    }

    .dialog::-webkit-scrollbar
    {
        width: 10px;
        background-color: #F5F5F5;
    }

    .dialog::-webkit-scrollbar-thumb
    {
        /*border-radius: 10px;*/
        background-image: -webkit-gradient(linear,
                left bottom,
                left top,
                color-stop(0.44, rgb(122,153,217)),
                color-stop(0.72, rgb(73,125,189)),
                color-stop(0.86, rgb(28,58,148)));
    }


    section {
        background: url("../../assets/lmodel/bk1.png");
        background-size: cover;
        position: absolute;
        top: 1.2rem;
        bottom: 0;
        width: 100%;
        text-align: center;
        overflow: hidden;
    }

    .quan {
        position: absolute;
        border-radius: 50%;
        border: 1px #1987e9 solid;
        height: 5rem;
        width: 5rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .q1 {
        height: 2.4rem;
        width: 2.4rem;
        margin-top: calc(50% - 1.2rem);
    }

    @for $i from 2 through 7 {
        .q#{$i} {
            position: absolute;
            width: 1.8rem;
            height: 1.8rem;
            /*animation: changDeg 15s linear 1s infinite;*/
        }
    }

    .q2 {
        left: -0.7rem;
        top: 0.8rem;
    }

    .q3 {
        right: -0.7rem;
        top: 0.8rem;
    }

    .q4 {
        top: -0.8rem;
        left: calc(50% - 0.9rem)

    }

    .q5 {
        left: 0.5rem;
        bottom: -0.6rem;
    }

    .q6 {
        right: 0.5rem;
        bottom: -0.6rem;
    }

</style>
