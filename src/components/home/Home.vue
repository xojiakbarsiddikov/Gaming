<template>
  <header>
    <Header />
  </header>
  <main>
    <Main class="main"/>
    <Product class="product"/>
  </main>
</template>

<script setup>
import Header from '../home/Header.vue'
import Main from '../home/Main.vue'
import Product from '../home/Products.vue'
</script>

<style lang="scss" scoped>
  .main {
    z-index: 2;
    position: relative;
  }
  .product {
    z-index: 0;
    position: absolute;
    width: 100%;
    transform: translateY(-121px);
  }
</style>