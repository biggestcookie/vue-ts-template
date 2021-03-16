import { reactive, readonly } from "vue";

class Store {
  private _state = reactive({
    exampleValue: 0,
  });
  public readonly state = readonly(this._state);

  constructor() {
    console.log("Initializing store");
  }

  public incrementExampleValue() {
    this._state.exampleValue++;
  }
}

export const store = new Store();
