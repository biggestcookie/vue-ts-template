<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p class="title">Hero</p>
        <p class="subtitle">text</p>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="content">
        <a @click="addPage">click</a>
        {{ state.completePage }}
        <router-link to="/">Home</router-link>
        <!-- <a class="button">A button</a> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Store } from "../store";

class Home extends Vue {
  state = Store.state;

  mounted() {
    console.log("MOUNTED PUZZLE");
    this.log();
  }

  addPage() {
    console.log("add 1: " + (this.state.completePage + 1).toString());
    Store.setPageComplete(this.state.completePage + 1);
    this.log();
  }

  log() {
    console.log("Component state: " + this.state.completePage);
    console.log("Store state: " + Store.state.completePage);
  }
}

export default Home;
</script>
