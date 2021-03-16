<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">Hero</p>
        <p class="subtitle">Stored state value: {{ state.exampleValue }}</p>
        <button class="button" @click="incrementStateValue">
          Click to increment
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../store";

export default defineComponent({
  data: () => ({
    state: store.state,
  }),
  mounted() {
    console.log(this.state.exampleValue);
  },
  methods: {
    incrementStateValue() {
      store.incrementExampleValue();
    },
  },
});
</script>
