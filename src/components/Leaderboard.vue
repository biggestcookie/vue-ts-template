<script setup lang="ts">
import { onMounted } from "vue";
import { getSpeedruns, submitSpeedrun } from "../api/speedruns";
import { useStore } from "../config/store";

const store = useStore();
const props = defineProps<{ totalTime: number; username: string }>();

onMounted(() => {
  // Submit current run to API
  submitSpeedrun({
    username: props.username,
    totalTimeMilliseconds: Math.round(props.totalTime),
  }).then(async (response) => {
    store.submittedRun = response;

    // Get latest top times & user times from API
    [store.topResults, store.userResults] = await Promise.all([
      getSpeedruns(),
      getSpeedruns(store.submittedRun.userId),
    ]);
  });
});

/**
 * Converts milliseconds to a formatted timestring
 *
 * Example: `msToElapsedString(7889456123456)` outputs: '3h 35m 23s 456ms'
 */
function msToElapsedString(totalms: number): string {
  const ms = totalms % 1000;
  const seconds = Math.floor((totalms / 1000) % 60);
  const minutes = Math.floor((totalms / (1000 * 60)) % 60);
  const hours = Math.floor((totalms / (1000 * 60 * 60)) % 24);

  return `${hours ? hours + "h" : ""} ${minutes}m ${seconds}s ${ms}ms`;
}
</script>

<template>
  <div className="content has-text-centered">
    <div className="block">
      <h2 className="title">{{ username }}&apos;s time:</h2>
      <p className="subtitle">
        {{ msToElapsedString(store.submittedRun?.totalTimeMilliseconds) }}
      </p>
    </div>
    <div className="block">
      <h4>Global top times</h4>
      <table className="table is-bordered is-striped is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, index) in store.topResults"
            :key="index"
            :class="store.submittedRun.id === result.id ? 'is-selected' : ''"
          >
            <th>{{ index + 1 }}</th>
            <td>{{ result.username }}</td>
            <td>{{ msToElapsedString(result.totalTimeMilliseconds) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="block">
      <h4>Your top times</h4>
      <table className="table is-bordered is-striped is-fullwidth">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, index) in store.userResults"
            :key="index"
            :class="store.submittedRun.id === result.id ? 'is-selected' : ''"
          >
            <th>{{ index + 1 }}</th>
            <td>{{ result.username }}</td>
            <td>{{ msToElapsedString(result.totalTimeMilliseconds) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
