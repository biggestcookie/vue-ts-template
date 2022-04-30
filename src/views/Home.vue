<script setup lang="ts">
import { ref } from "vue";
import Leaderboard from "../components/Leaderboard.vue";
import Tos from "../components/Tos.vue";

const tosComplete = ref(false);
const submission = ref({
  username: "",
  totalTime: 0,
});

/**
 * On Tos completion, record submitted username and time,
 * then mount Leaderboard component
 */
function onSubmitTos(username: string, totalTime: number) {
  submission.value = {
    username,
    totalTime,
  };
  tosComplete.value = true;
}
</script>

<template>
  <section className="section">
    <div className="columns is-centered">
      <div className="column is-one-third">
        <Tos v-if="!tosComplete" @submitTos="onSubmitTos" />
        <Leaderboard
          v-else
          :totalTime="submission.totalTime"
          :username="submission.username"
        />
      </div>
    </div>
  </section>
</template>
