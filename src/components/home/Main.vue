<template>
  <div class="main-background df align-center justify-center">
    <div class="main-background__content">
      <div class="main-background__image df justify-center align-center">
        <img src="../../assets/images/pubg.png" alt="pubg">
      </div>
      <div class="main-background__btn df align-center">
        <button class="df align-center justify-center" data-aos="fade-down-right" data-aos-duration="3000">watching</button>
        <button class="play">
          <img src="../../assets/images/play.png" alt="play">
        </button>
        <button class="df align-center justify-center" data-aos="fade-down-left" data-aos-duration="3000">play</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import {onMounted} from "vue";

onMounted(() => {
  AOS.init()
})
</script>

<style lang="scss" scoped>
  .main-background {
    z-index: 2;
    background-image: url("../../assets/images/main-background.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 775px;
    transform: translateY(-121px);
    @media(max-width: 1500px) {
      background-size: 100% 98%;
      transform: translateY(-105px);
    }
    & img {
      width: 204px;
      height: 152px;
    }
    &__image {
      & img {
        transform: translateY(100px);
      }
    }
    &__btn {
      transform: translateY(308px);
      & button {
        width: 203px;
        height: 40px;
        background: #183CDA;
        border-radius: 4px;
        border: none;
        font-family: var(--font-poppins);
        font-weight: 600;
        font-size: 17.5px;
        color: #FFFFFF;
        overflow: hidden;
        position: relative;
      }
      .play {
        width: 204px;
        height: 204px;
        background: #1C3B6A;
        border-radius: 100%;
        border: 1px solid transparent;
        border-image: linear-gradient(90deg, rgba(170,89,247,1) 100%, rgba(25,44,84,1) 100%, rgba(249,120,29,1) 100%);
        margin: 0 20px;
        z-index: 2;
        & img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
</style>