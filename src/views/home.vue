<template>
  <section class="hero is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <p class="title">Home</p>
        <state-example></state-example>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StateExample from "/@/components/state-example.vue";

export default defineComponent({
  components: {
    StateExample,
  },
});
</script>
