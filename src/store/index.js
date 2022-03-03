import { createStore } from "vuex";

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      score: 0
    };
  },
  mutations: {
    increment(submitted_tests) {
      submitted_tests.count++;
    }
  }
});
