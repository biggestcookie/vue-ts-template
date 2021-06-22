<template>
  <div class="block">
    <p class="subtitle">Stored state value: {{ state.exampleValue }}</p>
    <button class="button" @click="incrementStateValue">
      Click to increment
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { store } from "/@/store";

export default defineComponent({
  setup: () => {
    const incrementStateValue = () => store.incrementExampleValue();

    return {
      state: store.state,
      incrementStateValue,
    };
  },
});
</script>
