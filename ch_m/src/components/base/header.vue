<template>

    <header>

        <img class="logo" src="../../assets/logo.png" alt="">
        <article class="btn-header">
            <transition-group
                    :enter-active-class="'animated slideInRight'"
                    :leave-active-class="'animated slideOutRight'">
                <img
                        :key="1"
                        v-show="!contactNav"
                        @click="headerNav = !headerNav"
                        style="width: 0.6rem;height: 0.6rem"
                        src="../../assets/header-btn.png" alt="">
                <i :key="2" style="color: #7d7e80;" v-show="contactNav" class="el-icon-back btn-header-item" @click="contactNav=false"></i>
            </transition-group>
        </article>

        <transition name="el-fade-in-linear">
            <nav
                    class="nav-detitle"
                    v-show="headerNav">

                <transition name="fade" mode="out-in">
                    <ul v-show="!contactNav">
                        <li v-for="item in navList" :key="item" @click="togoNav(item)">{{item}}</li>
                    </ul>
                </transition>

                <transition name="fade1" mode="out-in">
                    <ul v-show="contactNav">
                        <li
                                v-for="(item, index) in navContact"
                                :key="item" @click="goContact(index)">
                            {{item}}
                        </li>
                    </ul>
                </transition>

                <img class="logo-ii" src="../../assets/logo2.png" alt="logo">
            </nav>
        </transition>

    </header>

</template>

<script>
    export default {
        name: "v-header",
        data() {
            return {
                navList: ['首页', '关于我们', '绿展生态', '项目展示', '新闻中心','加入我们','联系我们'],
                navContact: [
                    '中国内地总部',
                    '澳门总部',
                    '横琴办事处',
                    '硅谷办公室',
                    '维也纳办公室',
                    '申请合作'
                ],
                contactNav: false,
                headerNav: false
            }
        },
        methods: {
            togoNav(index) {
                switch (index) {
                    case '首页':
                        this.$router.push({path: '/'});
                        break;
                    case '关于我们':
                        this.$router.push({path: '/about'});
                        break;
                    case '绿展生态':
                        this.$router.push({path: '/fund'});
                        break;
                    case '项目展示':
                        this.$router.push({path: '/project'});
                        break;
                    case '新闻中心':
                        this.$router.push({path: '/news'});
                        break;
                    case '加入我们':
                        this.$router.push({path: '/recruit'});
                        break;
                    case '联系我们':
                        this.$router.push({path: '/contact'});
                        // this.contactNav = true;
                        break;
                }
                this.headerNav = false
            },
            goContact(title) {
                switch (title) {
                    case 0:
                        this.$router.push({name: 'China',params:{name:'China'}});
                        break;
                    case 1:
                        this.$router.push({name: 'Macao',params:{name:'Macao'}});
                        break;
                    case 2:
                        this.$router.push({name: 'Hengqin',params:{name:'Hengqin'}});
                        break;
                    case 3:
                        this.$router.push({name: 'siliconValley',params:{name:'siliconValley'}});
                        break;
                    case 4:
                        this.$router.push({name: 'Vienna',params:{name:'Vienna'}});
                        break;
                    case 5:
                        this.$router.push({name: 'cooperation',params:{name:'cooperation'}});
                        break;
                }
                this.contactNav = false
                this.headerNav = false
            }
            // headerNav(){
            //     console.log(111)
            // }
        }
    }
</script>

<style scoped>
    .fade1-enter-active, .fade1-leave-active {
        transition: all .5s ease-in-out;

    }

    .fade1-enter {
        /*transform:translateY(-100%);*/
        -webkit-transform: translateX(100%);
        opacity: 0;

    }

    .fade1-leave-active {
        -webkit-transform: translateX(100%);
        /*-webkit-transform: translateZ(0);*/
        opacity: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all .5s ease-in-out;

    }

    .fade-enter {
        /*transform:translateY(-100%);*/
        -webkit-transform: translateX(-100%);
        opacity: 0;

    }

    .fade-leave-active {
        -webkit-transform: translateX(-100%);
        /*-webkit-transform: translateZ(0);*/
        opacity: 0;
    }

    .overlayer {
        position: fixed;
        left: 0;
        top: 1.2rem;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    header {
        position: relative;
        height: 1.2rem;
        line-height: 1.2rem;
    }

    .logo {
        position: absolute;
        height: 0.6rem;
        top: calc(50% - 0.3rem);
        left: 0.2rem;
    }

    .logo-ii {
        position: absolute;
        bottom: 8%;
        height: 0.45rem;
        width: 2rem;
        left: calc(50% - 1rem)
    }

    .btn-header {
        line-height: 0.6rem;
        position: absolute;
        width: 0.6rem;
        height: 0.6rem;
        top: calc(50% - 0.3rem);
        right: 0.2rem;
        overflow: hidden;
    }

    .btn-header-item {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: 0.6rem
    }

    .nav-detitle {
        position: fixed;

        background: #1c95ff;
        top: 1.2rem;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .nav-detitle li {

        color: white;
        font-size: 22px;
        margin: 0 auto;
        width: 80%;
        border-bottom: 1px white solid;
        line-height: 1rem;
    }

    .nav-detitle ul {
        position: absolute;
        width: 100%;
    }
</style>
