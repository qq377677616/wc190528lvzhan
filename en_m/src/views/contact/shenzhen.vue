<template>
    <section>
        <transition appear enter-active-class="animated slideInDown" leave-active-class="animated fadeInDown" style="animation-duration: 2s;">
        <article v-show="show">
            <img class="introduction"
                :src="indexListdw.src" alt="">
        </article>
        </transition>

        <transition appear enter-active-class="animated slideInLeft" leave-active-class="animated slideInLeft">
        <article v-show="show" class="title">
            <img class="dw" src="../../assets/contact/dw.png" alt="">
            <p>{{indexList.title}}</p>
        </article>
        </transition>

        <transition appear enter-active-class="animated slideInRight" leave-active-class="animated slideInRight">
        <article v-show="show" class="contact-address" >
            <p v-html="indexList.other"></p>
            <img class="dt" :src="indexListdw.dw" alt="">
        </article>
        </transition>
    </section>
</template>

<script>
    export default {
        name: "shenzhen",
        data(){
            return{
                show:true,
                srcName:'',
                src:[
                    {name:'shenzhen',src:require("../../assets/contact/shenzhen_office_01.jpg"),dw:require("../../assets/contact/contact_00.jpg")},
                    {name:'hengqin',src:require("../../assets/contact/hengqin_office_03.jpg"),dw:require("../../assets/contact/contact_02.jpg")},
                    {name:'macau',src:require("../../assets/contact/macau_office_02.jpg"),dw:require("../../assets/contact/contact_01.jpg")},
                    {name:'silicon',src:require("../../assets/contact/silicon_office_04.jpg"),dw:require("../../assets/contact/contact_03.jpg")},
                    {name:'valley',src:require("../../assets/contact/valley_office_05.jpg"),dw:require("../../assets/contact/contact_04.jpg")},
                ],
                indexList:{},
                indexListdw:'',
                contactList:[
                    {name:'shenzhen',title:'Shenzhen Office (China HQ)',other:'5-212 E-Hub, Qianhai, Shenzhen <br>' +
                            'Tel：+86 0755- 26604489 <br> ' +
                            'E-mail: inquiry@greenprosperitygroup.com',},
                    {name:'macau',title:'Macau Office',other:'Add:Rua De Seng Tou UNO.357, Sala G,Bloco 23 Edif. Nova,' +
                            'Taipa Garden-Orquidea 22 Aadar, Tipa, Macau <br>' +
                            'Tel：28855503 <br>' +
                            'E-mail:inquiry@greenprosperitygroup.com'},
                    {name:'hengqin',title:'Hengqin Office',other:'Add:111-114,Bulding 19 B,Inno Valley HQ, Hengqin, China<br>' +
                            'Tel：+86 0756-6969113<br>' +
                            'E-mail: inquiry@greenprosperitygroup.com'},
                    {name:'silicon',title:'Silicon Valley Office',other:'Add:400 Concar Dr, San Mateo, CA 94402<br>' +
                            'Tel: 650-520-7086<br>' +
                            'E-mail: michael@volponellc.com'},
                    {name:'valley',title:'Vienna Office',other:'Add: Handelskai 94–96, 1200 Wien, Austria<br>' +
                            'Tel: +43 664 8219770<br>' +
                            'E-mail: Karl@greenprosperitygroup.com'},
                ]
            }
        },
        mounted() {

        },
        methods:{
            getList(){
                this.srcName = this.$route.name;
                for (let i of this.contactList){
                    if (i.name === this.srcName){
                        this.indexList = i
                    }
                }
                for (let i of this.src){
                    if(i.name === this.srcName){
                        this.indexListdw = i
                    }
                }
            }
        },
        created(){
            this.getList();
        },
        watch:{
            $route(){
                this.getList();
                this.show = false;
                this.$nextTick(()=>{
                    this.show = true
                })
            }
        },
    }
</script>

<style scoped>
    .title .contact-address{overflow: auto;}
    section{position: fixed;top: 1.2rem;bottom: 0;width: 100%;background: #e5e5e5;overflow:hidden}
    .introduction{width: 100%;}
    .title{padding:0.8rem 0.8rem 0 0.8rem;}
    .title p{font-weight: 500;font-size: 0.3rem;margin-left: 0.4rem;}
    .contact-address{padding:0.2rem 0.8rem 0.8rem 1.2rem;line-height: 0.4rem;color: #343434}
    .contact-address p{font-size: 0.2rem;}
    .dw{float: left;width: 0.25rem;}
    .dt{margin-top: 0.4rem;width: 100%;}
</style>
