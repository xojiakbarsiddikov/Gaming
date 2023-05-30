<template>
  <div class="main bg-primary df align-center justify-center">
    <div class="container">
      <div class="content">
        <div class="content__left-image">
          <img src="../../assets/images/right.png" alt="right">
        </div>
        <div class="content__form df justify-center">
          <div class="content__form__content">
            <h2>Register</h2>
            <h4>Let’s get started</h4>
            <form>
              <input type="text" v-model="form.username" placeholder="Username">
              <img src="../../assets/images/user.png" alt="username" class="username">
              <input type="text" v-model="form.email" placeholder="Email">
              <img src="../../assets/images/email.png" alt="email" class="email">
              <input :type="registerStore.password" v-model="form.password" placeholder="Password">
              <img src="../../assets/images/password.png" alt="password" class="password">
            </form>
            <div class="content__form__checkbox df align-center">
              <div class="content__form__checkbox__content df align-center">
                <input type="checkbox" id="checkbox" :checked="registerStore.checked" @click="registerStore.checkbox">
                <span class="checkmark"></span>
                <label for="checkbox">I have read the</label>
              </div>
              <h4>Terms and conditions</h4>
            </div>
            <div class="content__form__button">
              <button class="df align-center justify-center" @click="registerStore.register()" :disabled="!form.username || !form.email || !form.password">Sign Up</button>
              <router-link class="link" to="/login">
                <div class="link">
                  <h4>Already have an account? <span>Login</span></h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="content__right-image">
          <img src="../../assets/images/left.png" alt="left">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRegister } from "../../store/useRegister";

const registerStore = useRegister();
const form = registerStore.form;
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
}

.content {
  position: relative;
  &__form {
    position: relative;
    z-index: 2;
    width: 462px;
    height: 470px;
    background: #1C3B6A;
    border-radius: 6px;
    transform: translateY(-151px) translateX(20px);
    padding: 50px;

    &__content {
      width: 100%;
      position: relative;
      & h2 {
        font-family: var(--font-francois);
        font-weight: 400;
        font-size: 17.5px;
        text-transform: uppercase;
        color: #AA59F7;
      }

      & h4 {
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        font-family: var(--font-inter);
        margin: 10px 0 15px;
      }

      & form {
        position: relative;

        & input {
          width: 100%;
          height: 42px;
          background: #344F7A;
          border-radius: 6px;
          border: none;
          outline: none;
          display: block;
          padding: 0 40px;
          font-weight: 400;
          font-size: 14px;
          color: #FFFFFF;
          font-family: var(--font-inter);
          margin-bottom: 20px;

          &::placeholder {
            font-weight: 400;
            font-size: 14px;
            color: #FFFFFF;
            font-family: var(--font-inter);
          }
        }
        .username {
          position: absolute;
          left: 0;
          top: 0;
          transform: translateX(15px) translateY(14px);
        }

        .email {
          position: absolute;
          left: 0;
          top: 0;
          transform: translateX(15px) translateY(77px);
        }

        .password {
          position: absolute;
          left: 0;
          top: 0;
          transform: translateX(15px) translateY(138px);
        }
      }
    }
    &__checkbox {
      &__content {
        & input {
          opacity: 0;
          cursor: pointer;
          height: 29px;
          display: block;
          z-index: 2;
          & ~ .checkmark {
            background-color: #ccc;
          }

          &:checked ~ .checkmark {
            background-color: #2196F3;
          }
          &:checked ~ .checkmark:after {
            display: block;
          }
        }

        & label {
          font-family: var(--font-inter);
          font-weight: 500;
          font-size: 14px;
          line-height: 21px;
          color: #FFFFFF;
          margin: 0 20px;
        }

        .checkmark {
          cursor: pointer;
          position: absolute;
          left: 0;
          width: 22px;
          height: 22px;
          background: #FFFFFF;
          border-radius: 6px;
          &:before {
            left: 9px;
            top: 5px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          &:after {
            content: "";
            position: absolute;
            display: none;
          }
        }
      }
      & h4 {
        font-family: var(--font-poppins);
        font-weight: 400;
        font-size: 14px;
        color: #757575;
      }
    }
    &__button {
      & button {
        width: 100%;
        height: 42px;
        background: #183CDA;
        border-radius: 6px;
        border: none;
        font-family: var(--font-inter);
        font-weight: 500;
        font-size: 14px;
        color: #FFFFFF;
        margin: 10px 0;
        cursor: pointer;
        &:disabled {
          opacity: .5;
          cursor: auto;
        }
      }
      .link {
        margin: 20px 0;
        & h4 {
          font-family: var(--font-inter);
          font-weight: 400;
          font-size: 14px;
          color: #757575;
          & span {
            color: #fff!important;
          }
        }
      }
    }
  }
  &__right-image {
    z-index: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(-127px) translateX(42px);
  }
}
</style>