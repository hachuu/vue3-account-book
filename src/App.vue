<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import CurrentCalendar from './components/CurrentCalendar.vue'
</script>
<script lang="ts">
const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
export default {
    name: 'App',
    data() {
      return {
        msg: `Account Book`
      }
    },
    components: {
      CurrentCalendar,
      RouterLink,
      RouterView
    }
  }
</script>

<template>
  <div class="view">
    <div class="header">
      <div class="made__by">
        <img alt="Quokka logo" class="logo" src="@/assets/quokka.svg" width="125" height="125" />
        <div class="made__by__link">
          <p>made by <a href="https://github.com/hachuu/vue3-account-book">hachuu</a></p>
        </div>
      </div>
      <div class="wrapper">
        <CurrentCalendar :msg="msg" />
        <nav>
          <RouterLink to="/">Main</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </div>
    <div class="body">
      <RouterView />
    </div>
  </div>
</template>

<style lang='scss'>
@import './assets/mixins.scss';
@import './assets/main.scss';
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-background);
  .header {
    line-height: 1.5;
    max-height: 150vh;
    // background-color: var(--color-background-soft);
    border-radius: 1rem 0 0 1rem;
    position: fixed;
    .made__by {
      margin: 0 0 2rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .made__by__link {
        margin: 0 auto;
        font-size: 0.3rem;
        a {
          color: var(--color-text);
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-border);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  content {
    max-height: 500px;
  }

  .body {
    
  }
}

@media (min-width: 1024px) {
  .view {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // height: 100vh;
    // width: 100vw;
    background-color: var(--color-background);

    .header {
      flex: 1;
      position: fixed;
      top: 0;
      left: 0;
      height: 90vh;
      width: 50%;
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
      .made__by {
        margin: 0 2rem 0 2rem;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        .made__by__link {
          display: block;
          a {
            color: var(--color-text);
            text-decoration: none;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
        nav {
          text-align: left;
          margin-left: -1rem;
          font-size: 1rem;
          padding: 1rem 0;
          margin-top: 1rem;
        }
      }
    }

    .body {
      flex: 1;
      width: 100%;
      max-height: 90vh; /* header의 height값과 동일하게 설정 */
      overflow-y: scroll;
      justify-content: flex-start; /* 좌측으로 이동시키기 */
      padding: 20px;
    }
  }
}
</style>
