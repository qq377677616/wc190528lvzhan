<template>
    <section class="loading">
        <div class="ma">
        </div>
        <img class="logo" src="../assets/logo.png" alt="">
    </section>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .loading{
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        /*background: #010a26;*/
        z-index: 99;
        text-align: center;
    }
    .loading img{
        display: block;
        position: absolute;
        height: 0.8rem;
        width: 3.5rem;
        left: calc(50% - 1.65rem);
        top: calc(50% - 0.3rem);
        color: white;
        font-size: 0.5rem;
    }
    .loading div{
        position: absolute;
        height: 3.8rem;
        width: 3.8rem;
        top: calc(50% - 1.9rem);
        left: calc(50% - 1.9rem);
        color: white;
        font-size: 0.5rem;
        border-radius: 50%;
        border-width: 3px;
        border-style: solid;
        border-color: aqua;
        border-left: none;
        border-top: none;
        animation: changDeg 2s linear 1s infinite;
        -webkit-animation: changDeg 2s linear 0s infinite;;
    }

    @keyframes changDeg {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>
