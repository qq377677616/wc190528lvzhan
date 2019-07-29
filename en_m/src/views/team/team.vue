<template>
    <section style="position: absolute;top:0;bottom: 0;overflow: hidden;width: 100%">
        <keep-alive>
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
                    :hoverEffect="false"
                    class="lizi"
            >
            </vue-particles>
        </keep-alive>
        <div v-if="show" id="people" class="people" @scroll="hello">
            <transition-group>
                <div class="adis" v-for="(item,index) in srcs" :key="item.src">
                    <img
                            :class="item.isShow>0?(index % 2 === 0?ikdLeft:ikdRight):''"
                            :key="item.src"
                            :src="item.src"
                            @click="teamDetile(index)"
                            alt=""
                            :data-index="index">
                </div>
            </transition-group>
        </div>

        <transition name="fade">
            <teamDetile v-show="detileSt" :obj="detileSrc" @detailed="detailed"></teamDetile>
        </transition>

    </section>
</template>

<script>

    import teamDetile from './teamdetile'

    export default {
        components: {
            teamDetile
        },
        name: "team",
        data() {
            return {
                show: true,
                ikdLeft: 'animated slideInLeft',
                ikdRight: 'animated slideInRight',
                showKey: 0,
                detileSt: false,
                detileSrc: {},
                detileList: [
                    {
                        name: 'Kevin Lan',
                        position: 'Chief Executive Officer',
                        detailed: 'Kevin has over 10 years track experience in entrepreneurship, banking, finance and investment experience in Canada, US and China (UBC, Asia Development and Investment Bank and Canadian Imperial Bank of Commerce ). Kevin is a multi-cultural serial entrepreneur and cross border specialist committed to unlocking the Chinese market for the “rest of world.” Bachelor of Engineering Physics of University of British Columbia.',
                        src: require('../../assets/team/r1.png',)
                    },
                    {
                        name: 'Sam Lan',
                        position: 'President',
                        detailed: 'Sam holds a 25+ year pedigree of success in real estate development in Shenzhen, Zhuhai, Zhongshan, and Nanchang region in China. He is the Standing Director of Shenzhen-Hong Kong-Macau Cooperative Council, Standing Directors of Overseas Chinese Federations of Fujian and Guangdong, a former Professor of Petrochemistry for the Staff College of China National Petroleum Corp., a former Director of Financial Department for CNPC Shenzhen and a serial entrepreneur, trader and investor in the senior healthcare industry in Hong Kong. He holds a Bachelor of Petrochemistry, China Central Normal University.',
                        src: require('../../assets/team/r2.png')
                    },
                    {
                        name: 'Bob Feng',
                        position: 'President Assistant',
                        detailed: 'In addition to a 20+ year political career and management experience, Bob was the District Attorney of Hunan province, Director of General Office of Changsha, the Director and Party Secretary of Legal Affairs of a Changsha, the Deputy Director-General of the Commercial and Industrial Bureau of Guangdong, was the President of the Consumer Council of a province and was the deputy standing mayor of Yunfu in China. Bob is a licensed Chinese lawyer, holds the degree of Master of Law, Human Normal University and a PhD of Economics, University of Human. He was an Exchange Scholar to Public Administration, UC San Jose in 2005-2006; Exchange Scholar to Administrative Management, Waseda University of Japan in 2011.',
                        src: require('../../assets/team/r3.png')
                    },
                    {
                        name: 'Owen Liang',
                        position: 'Chief Commercialization Officer',
                        detailed: 'With over 30 years’ industry experience, Owen is also the former deputy director of a National High-tech Zone Management Committee and was the deputy director of a High-tech Zone, in charge of the development of science and technology industry and economic cooperation, external liaison, and finance. In addition, Owen was the Assistant Director and Director of Science and Technology Information of Foshan City and Director of Investment Promotion and Co-Ordination Bureau of Guangdong Financial Hi-tech Service Area. <br>' +
                            '<p style="margin-bottom: 10px"></p>He also held the title of Director and Chairman of Guangdong Digital Certificate Certification Center. During the working period from 2003 to 2013, he presided over the development of new industries, investment invitation, talent team introduction, cooperation with universities and scientific research institutes at home and abroad, international cooperation and introduction of scientific and technological projects, construction of theme parks and incubators of new industries, and landing of projects involved various categories. Owen holds a Military Bachelor of Computer Science, the Second Artillery College of Air Force (now Air Force Engineering University). He also has a Master of Engineering from the Air Force Missile Academy.',
                        src: require('../../assets/team/r4.png')
                    },
                    {
                        name: 'Paul Yan',
                        position: 'Technical Director',
                        detailed: 'In addition to a 30 years information technology work, 10+ years political management and economic forecasting and analysis experience, Paul has a strong professional & technical ability and large-scale projects management ability. Besides, he has strategic thinking, global insight and a unique analysis method of macro economy.<br>' +
                            ' <br>  As a Deputy Head of Guangdong Information Center, a Division Head of Guangdong Economy and Information Commission, Paul has been in charge of several provincial-level electronic information industry planning and large-scale information engineering construction projects. He has been honored provincial-level science and technology progress awards many times.',
                        src: require('../../assets/team/r10.png')
                    },
                    {
                        name: 'Kenny Xu',
                        position: 'Chief Marketing Officer',
                        detailed: 'With 20+ years of marketing and branding experience, Kenny is a serial entrepreneur and marketing expert. Kenny is the founder of Shenzhen Why-not Cultural Creativity Co. Ltd., the founder of Shenzhen Loving-space Design Co. Ltd., former VP and Chief Advertising Officer of Ogilvy China, winner of Global Chinese Advertising Gold Award, Guangzhou Daily Cup Advertising Gold Award, China Advertising Festival Gold Award. Some of his customers include CMB, China Mobile, TCL, Citic Group, China Railway, Vanco, P&G, and OCT China, etc. Kenny holds a Bachelor of Civil Engineering Degree, Shenyang University of Construction and Engineering.',
                        src: ''
                    },
                    {
                        name: 'Michael Fox',
                        position: 'Senior VP, Corporate Development',
                        detailed: 'Michael has a 30 year history of entrepreneurship, venture capital, building valuation, corporate development, international localization and commercialization of disruptive technology. Before joining GP, he launched the VAIO for SONY and grew the business 40% in the first year. He drove Corporate Development under Mitsubishi Electric’s President’s. Michael was an Entrepreneur In Residence for a $5B fund where he grew one of the portfolio companies from a $50M valuation to $300M in valuation in five months. He also spent 4 years as an adjunct professor (final thesis) at an MBA program in Design Strategy in San Francisco and also taught workshops in Holland for 3 years for the International Business and Law Program. He also assisted the Korean and Japanese governments, German universities and others in assisting their entrepreneurial community. He is an internationally recognized speaker and a thought leader in the Corporate Venture space. In 2015, Michael also established the Silicon Valley presence as the “Silicon Valley Emissary” for London-based Global Corporate Venturing. Most recently, Michael was the Investor Ambassador for the US 2017 Mobile World Congress in San Francisco. Michael is an MIT alumni and an MIT Venture Mentor.',
                        src: require('../../assets/team/r5.png')
                    },
                    {
                        name: 'Franco Huang',
                        position: 'Director of Investment Department',
                        detailed: '10 years of investment experience in venture capital, investment banking, consulting, qualified for independent director of Chinese public companies; former Director of Investment, Shenzhen Zhongzheng Dingfeng Investment Corp., wholly owned investment subsidiary of Citic Group; led investment in Shenzhen Stock Exchange (SZ) in SZ000068 and SZ002290; IPO case: SZ300241; M&A case: SH600638, SZ002290; other lead investment cases include China UnionPay, Cirque du Soleil China Performance. Graduated from IUCTT University of science and technology, Malaysia.',
                        src: require('../../assets/team/r7.png')
                    },
                    {
                        name: 'Mandy Chung',
                        position: 'Head of Business Development',
                        detailed: 'Mandy has over 8 years experience in product development and business development in consumer electronics industry. She helped over 500 hardware & IoT startups around the world by giving product development advise and connecting them with quality prototyping design house or contract manufacturers while she worked in HWTrek, a Taiwanese smart manufacturing platform startup once raised $4.2M in series-A.<br>' +
                            '<p style="margin-bottom: 10px"></p>Her accolades include ASUS Best Employee of the Year (2015) and got selected and sponsored by U.S. Department of State to visit the entrepreneur ecosystem in San Diego, Denver, Kansas City and Washington, D.C. in the IVLP (International Visitors Leadership Program). Inspired by her own experience in the global startup world, she co-founded a non-profit initiative called Women in IoT in the goal to provide a community to empower, inspire and connect women to make difference in the IoT and tech world. Mandy holds a bachelor degree in Economics from National Chengchi University.',
                        src: require('../../assets/team/r8.png')
                    },
                    {
                        name: 'Karl Pfister-Kraxner',
                        position: 'Strategic Advisor, Europe',
                        detailed: 'Karl is an executive business growth & change leader global leadership experience in Technology/ICT/Digital among other industry domains. ' +
                            '<br> He did serve in international leadership roles managing +500m€ P&Ls and leading global teams serving leading global players in the industry. Karl recently launched PK TechVentures, a globally operating Business Growth Partner for startup and fortune corporates alike.' +
                            '<br> <p style="margin-bottom: 10px"></p> During the mid 2000`s Karl completed the mission to restructure Samsung Electronics business (+€500m) in CEE (14 countries) while keeping a +80 growth YoY, for 2 years in row. ' +
                            'The mission was to change the business model from importer business into direct sales model. The task was to build direct client relationships, build a commercial organization and implement SAP while maintaining growth of business. ' +
                            'Karl holds a MSC in Innovation Management and an MBA from the Johannes Kepler University in Liz, Austria.',
                        src: require('../../assets/team/r9.png')
                    },

                ],
                srcs: [
                    {isShow: 0, src: require('../../assets/Teams1.png')},
                    {isShow: 0, src: require('../../assets/Teams2.png')},
                    {isShow: 0, src: require('../../assets/Teams3.png')},
                    {isShow: 0, src: require('../../assets/Teams4.png')},
                    {isShow: 0, src: require('../../assets/Teams10.png')},
                    {isShow: 0, src: require('../../assets/Teams5.png')},
                    {isShow: 0, src: require('../../assets/Teams6.png')},
                    {isShow: 0, src: require('../../assets/Teams7.png')},
                    {isShow: 0, src: require('../../assets/Teams8.png')},
                    {isShow: 0, src: require('../../assets/Teams9.png')},

                ]
            }
        },
        created() {
            // this.show = false
            // this.$nextTick(()=>{
            //     this.show = true
            // })
        },
        mounted() {
            this.hello()
        }
        ,
        methods: {
            hello() {
                let kx = document.querySelectorAll('#people img')
                kx.forEach((index, item_arr, item) => {
                    if (index.getBoundingClientRect().top <= window.innerHeight) {
                        // console.log(item_arr,index.getBoundingClientRect().top, window.innerHeight, )
                        this.srcs[item_arr].isShow = 1
                    }

                })
            }
            ,
            teamDetile(index) {
                this.detileSrc = this.detileList[index];
                this.detileSt = true
            }
            ,
            detailed() {
                this.detileSt = false
            }
            ,
        }
        ,
        beforeDestroy() {
            clearInterval(this.timer);
        }
    }
</script>

<style scoped lang="scss">

    .fade-enter-active, .fade-leave-active {
        transition: all .4s ease-in-out;
    }

    .fade-enter {
        /*//进入时的动画*/
        transform: translateX(100%);
        opacity: 0;
        margin-right: -100%;
    }

    .fade-leave-active {
        /*//离开时的动画*/
        transform: translateX(100%);
        opacity: 0;
        margin-right: -100%;
    }

    .adis {
        width: 100%;
        height: 3rem;
        text-align: center;
        margin-top: 1rem;

    }

    img {
        width: 7.8rem;
        height: 3rem
    }

    .people {
        position: fixed;
        width: 100%;
        top: 1.2rem;
        bottom: 0;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }

    .people img {
        /*margin-top: 33px;*/
        /*padding-bottom: 1rem;*/

    }

    #btn {
        position: absolute;
        width: 60px;
        height: 25px;
        /*top:120px;*/
        right: 78px;
    }

    @for $i from 1 through 10 {
        .btn-#{$i} {
            position: absolute;
            width: 60px;
            height: 25px;
            @if $i == 1 {
                top: 120px
            } @else {
                top: 180px + (120px * $i);
            }
            right: 78px;
            z-index: 1;
        }
    }

    .lizi {
        height: 100%;
        width: 100%;
        background: url('../../assets/bks2.png');
        background-size: cover;
    }
</style>
