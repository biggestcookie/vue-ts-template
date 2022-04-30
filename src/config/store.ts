import { StorageSerializers, useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { SpeedrunData } from "../../../shared/models/speedrun-data";

export const useStore = defineStore("store", {
  state: () => ({
    lastUsername: useStorage("lastUsername", null, undefined, {
      serializer: StorageSerializers.string,
    }),
    submittedRun: null as SpeedrunData | null,
    topResults: [] as SpeedrunData[],
    userResults: [] as SpeedrunData[],
  }),
});
