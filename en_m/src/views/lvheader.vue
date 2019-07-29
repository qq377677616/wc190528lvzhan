<template>

    <header>

        <img class="logo" src="../assets/logo.png" alt="">
        <article class="btn-header">
            <transition-group
                    :enter-active-class="contactNav?'animated slideInRight':'animated slideInLeft'"
                    :leave-active-class="contactNav?'animated slideOutLeft':'animated slideOutRight'">
                <img
                        :key="1"
                        v-show="!contactNav"
                        @click="headerNav = !headerNav, contactoff?contactNav = true:''"
                        style="width: 0.6rem;height: 0.6rem"
                        src="../assets/header-btn.png" alt="">
                <i
                        :key="2"
                        style="color: #7d7e80;"
                        v-show="(contactNav || contactoff) && headerNav"
                        class="el-icon-back btn-header-item"
                        @click="contactNav=false,contactoff=false"></i>
            </transition-group>
        </article>

        <transition name="el-fade-in-linear">
            <nav
                    class="nav-detitle"
                    v-show="headerNav">

                <transition name="fade" mode="out-in">
                    <ul v-show="!contactNav && contactoff===false">
                        <li v-for="item in navList" :key="item" @click="togoNav(item)">{{item}}</li>
                    </ul>
                </transition>

                <transition name="fade1" mode="out-in">
                    <ul v-show="contactNav || contactoff">
                        <li
                                :class=""
                                v-for="(item, index) in navContact"
                                :key="item.name" @click="item.path === indexpath?'':goContact(item.path,index)">
                            {{item.name}}
                        </li>
                    </ul>
                </transition>
                <img class="logo-ii" src="../assets/logo2.png" alt="logo">
            </nav>
        </transition>

    </header>

</template>

<script>
    export default {
        name: "v-header",
        data() {
            return {
                indexpath: '',
                contactoff: false,
                navList: ['Home', 'Model', 'Team', 'Case Study', 'Contact'],
                navContact: [
                    {path: '/contact/shenzhen', name: 'Shenzhen Office(China HQ)'},
                    {path: '/contact/macau', name: 'Macau Office'},
                    {path: '/contact/hengqin', name: 'Hengqin Office'},
                    {path: '/contact/silicon', name: 'Silicon Valley Office'},
                    {path: '/contact/valley', name: 'Vienna Office'}
                ],
                contactNav: false,
                headerNav: false
            }
        },
        methods: {
            togoNav(title) {
                switch (title) {
                    case 'Home':
                        this.$router.push({path: '/home/'});
                        break;
                    case 'Model':
                        this.$router.push({path: '/lmodel/'});
                        break;
                    case 'Team':
                        this.$router.push({path: '/team/'});
                        break;
                    case 'Case Study':
                        this.$router.push({path: '/lproject/'});
                        break;
                    case 'Contact':
                        this.contactNav = true;
                        return;
                }
                this.headerNav = false
            },
            goContact(path, title) {
                switch (title) {
                    case 0:
                        this.$router.push({path: '/contact/shenzhen'});
                        break;
                    case 1:
                        this.$router.push({path: '/contact/macau'});
                        break;
                    case 2:
                        this.$router.push({path: '/contact/hengqin'});
                        break;
                    case 3:
                        this.$router.push({path: '/contact/silicon'});
                        break;
                    case 4:
                        this.$router.push({path: '/contact/valley'});
                        break;

                }
                this.contactNav = false
                this.headerNav = false
            }
        },
        watch: {
            $route: function () {
                let path = this.$route.path
                this.indexpath = path
                if (path.search(/contact/i) > 0) {
                    this.contactoff = true
                } else {
                    this.contactoff = false
                }

            }
        }
    }
</script>

<style scoped>
    .contact-active {
        color: #606266 !important;
    }

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
        top: 90%;
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
        border-bottom: 2px white solid;
    }

    .nav-detitle ul {
        position: absolute;
        width: 100%;
    }
</style>
