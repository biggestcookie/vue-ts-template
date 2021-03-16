import { reactive } from "vue";

export class Store {
  private static _state = reactive({
    exampleShared: 0,
  });
  public static readonly state = Store._state;

  constructor() {
    console.log("Initializing store");
    localStorage.getItem("completePage");
  }

  public static setExampleValue(value: number) {
    Store._state.exampleShared = value;
  }

  private static log() {
    console.log("Public state: " + Store.state.exampleShared);
    console.log("Private state: " + Store._state.exampleShared);
  }
}

new Store();
