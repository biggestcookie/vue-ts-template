<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">Hero</p>
        <p class="subtitle">text</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Store } from "../store";

export default defineComponent({
  data: () => ({
    state: Store.state,
  }),
});
</script>
