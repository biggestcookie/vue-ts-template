import { reactive } from "vue";

export class Store {
  private static _state = reactive({
    completePage: 0,
  });
  public static readonly state = Store._state;

  constructor() {
    console.log("Initializing store");
    localStorage.getItem("completePage");
  }

  public static setPageComplete(pageNumber: number) {
    Store._state.completePage = pageNumber;
  }

  private static log() {
    console.log("Public state: " + Store.state.completePage);
    console.log("Private state: " + Store._state.completePage);
  }
}

new Store();
