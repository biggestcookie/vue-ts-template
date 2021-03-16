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
        {{ state.exampleShared }}
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
