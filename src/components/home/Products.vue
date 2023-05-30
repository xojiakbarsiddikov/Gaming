<template>
  <section>
    <div class="container">
      <div class="content df align-center justify-between">
        <div class="products" v-for="item in product" :key="item.id" :data-aos="item.animation" data-aos-duration="1000">
          <div class="products__content" :class="item.background">
           <div class="products__content__footer">
             <div class="products__content__footer__text">
               <h2>{{ item.title }}</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
               <button class="df align-center justify-center">
                 <img src="../../assets/images/play.png" alt="play">
               </button>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {onMounted, reactive} from "vue";
import AOS from "aos";

  const product = reactive([
    { id: 1, background: "background1", title: "Marsaction", animation: "fade-right" },
    { id: 2, background: "background2", title: "Land of Empires", animation: "fade-up" },
    { id: 3, background: "background3", title: "CAR X", animation: "fade-up" },
    { id: 4, background: "background4", title: "Blitz", animation: "fade-left" },
  ]);
  onMounted(() => {
    AOS.init()
  })
</script>

<style lang="scss" scoped>
  section {
    background: #192C54;
    transform: translateY(-121px);
    z-index: 0;
    padding: 181px 0 100px;
  }
  .background1 {
    background-image: url("../../assets/images/products1.png");
  }
  .background2 {
    background-image: url("../../assets/images/products2.png");
  }
  .background3 {
    background-image: url("../../assets/images/products3.png");
  }
  .background4 {
    background-image: url("../../assets/images/products4.png");
  }
  .products {
      &__content {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 315px;
        height: 315px;
        border-radius: 16px;
        position: relative;
        &__footer {
          position: absolute;
          bottom: 0;
          &__text {
            height: 151px;
            background: rgba(24, 60, 218, 0.1);
            backdrop-filter: blur(2.5px);
            border-radius: 0px 0px 16px 16px;
            padding: 10px;
            font-family: var(--font-poppins);
            color: #FFFFFF;
            & h2 {
              font-weight: 600;
              font-size: 20px;
            }
            & p {
              font-weight: 400;
              font-size: 14px;
            }
            & button {
              width: 91px;
              height: 91px;
              background: #1C3B6A;
              border: 1px solid #814DC9;
              border-radius: 100px;
              margin: 15px auto;
              & img {
                width: 45px;
                height: 45px;
              }
            }
          }
        }
      }
    }
</style>