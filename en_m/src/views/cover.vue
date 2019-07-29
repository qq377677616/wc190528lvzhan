<template>
    <section class="cover">
        <article style="">
            <h3>请使用竖屏浏览，以获得最佳体验</h3>
            <img src="../assets/logo2.png" alt="">
        </article>
    </section>
</template>

<script>
    export default {
        name: "cover"
    }
</script>

<style scoped>
    .cover{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 9999;
        background: #1c95ff;
    }
    .cover article{
        position: absolute;
        top: calc(50% - 0.4rem);
        left: calc(50% - 1.25rem);
        color: white;
        width: 2.5rem;

        text-align: center;
        height: 0.8rem
    }
    img{
        margin-top: 0.2rem;
        height: 0.4rem;
        width: 1.8rem;
    }
</style>