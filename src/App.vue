<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div id="logo" class="navbar-item" @click="toggleNavbar(false)">
          <router-link to="/">Logo</router-link>
        </div>
        <a class="navbar-burger burger" @click="toggleNavbar()">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        class="navbar-menu"
        v-bind:class="{ 'is-active': navbarBurgerToggled }"
        @click="toggleNavbar(false)"
      >
        <div class="navbar-start">
          <div class="navbar-item">
            <router-link to="/">A link</router-link>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/"> Another link</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
  <footer class="footer"></footer>
</template>

<style lang="scss">
body {
  display: block;
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

class App extends Vue {
  navbarBurgerToggled = false;

  toggleNavbar(setValue?: boolean) {
    this.navbarBurgerToggled = setValue ?? !this.navbarBurgerToggled;
  }
}

export default App;
</script>
