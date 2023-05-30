<template>
  <header>
    <div class="container df align-center justify-between">
      <div class="logo df align-center">
        <h2>{{ username }}</h2>
        <div class="search">
          <input type="text" placeholder="Search">
          <img src="../../assets/images/search.png" alt="search">
        </div>
      </div>
      <div class="notification df align-center">
        <img src="../../assets/images/notification.png" alt="notification" class="one">
        <button class="df align-center justify-center">Sign Off</button>
        <img src="../../assets/images/user-logo.png" alt="user" class="two">
      </div>
    </div>
  </header>
</template>

<script setup>
import cookie from 'vue-cookies'

const username = cookie.get("username")
</script>

<style lang="scss" scoped>
  header {
    background: #1C3B6A;
    padding: 20px;
    .logo {
      & h2 {
        font-family: var(--font-lexend);
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
      }
      .search {
        position: relative;
        margin: 0 20px;
        & input {
          width: 193px;
          height: 35px;
          background: #344F7A;
          border-radius: 4px;
          border: none;
          outline: none;
          padding: 0 10px;
          font-family: var(--font-inter);
          font-weight: 300;
          font-size: 16px;
          color: #FFFFFF;
          &::placeholder {
            font-family: var(--font-inter);
            font-weight: 300;
            font-size: 16px;
            color: #FFFFFF;
          }
        }
        & img {
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(9px) translateX(-9px);
        }
      }
    }
    .notification {
      .one {
        width: 40px;
        height: 40px;
      }
      .two {
        width: 50px;
        height: 50px;
      }
      & button {
        width: 133px;
        height: 35px;
        background: #183CDA;
        border-radius: 4px;
        border: none;
        outline: none;
        margin: 0 20px;
        font-family: var(--font-inter);
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
      }
    }
  }
</style>