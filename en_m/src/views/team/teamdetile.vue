<template>
    <section class="team" >
        <div style="padding: 40px;">
            <i class="el-icon-circle-close-outline" @click="shutDown"></i>
            <h3>{{obj.name}}</h3>
            <h6>{{obj.position}}</h6>
            <p v-html="obj.detailed"></p>
            <img :src="obj.src" alt="">
        </div>
    </section>
</template>

<script>
    export default {
        props: ['obj'],
        name: "teamdetile",
        data() {
            return {
                srccode: this.obj
            }
        },
        methods: {
            shutDown() {
                this.$emit('detailed')
            }
        },
        watch: {
            // srccode: function () {
            //     console.log('hahahahah')
            // }
        }
    }
</script>

<style scoped>
    .team {
        z-index: 1000;
        height: calc(100% + 1px);
        position: absolute;
        top: 1.2rem;
        bottom: 0;
        width: 100%;
        background: #e5e5e5;
        /*overflow: auto;*/
        overflow-y: scroll;
        /*-webkit-overflow-scrolling : touch;*/
    }

    i {
        float: right;
        font-size: 30px;
        color: #606266
    }

    p {
        font-size: 14px;
        margin-bottom: 20px;
        line-height: 24px;
        color: #606266;
    }

    img {
        width: 100%;
        padding-bottom: 40px;
    }

    h3 {
        margin-bottom: 5px
    }

    h6 {
        margin-bottom: 15px;
        color: #303133;
    }
</style>
