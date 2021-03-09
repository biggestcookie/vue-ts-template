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
        <router-link to="/puzzle">Puzzle</router-link>
        <router-link
          v-if="state.completePage > 0"
          :to="'/' + state.completePage"
        >
          Continue</router-link
        >
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Store } from "../store";

class Home extends Vue {
  private readonly state = Store.state;
}

export default Home;
</script>
