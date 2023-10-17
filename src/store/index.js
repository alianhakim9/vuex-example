import axios from "axios";
import { createStore } from "vuex";

const url =
  "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new";

export default createStore({
  state: {
    counter: 0,
    colorCode: "black",
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  mutations: {
    increment(state, randomNumber) {
      state.counter += randomNumber;
    },
    decrement(state, randomNumber) {
      state.counter -= randomNumber;
    },
    setColor(state, newColorCode) {
      state.colorCode = newColorCode;
    },
  },
  actions: {
    async increment(state) {
      await axios.get(url).then((response) => {
        state.commit("increment", response.data);
      });
    },
    async decrement(state) {
      await axios.get(url).then((response) => {
        state.commit("decrement", response.data);
      });
    },
    async setColor({ commit }, newColorCode) {
      commit("setColor", newColorCode);
    },
  },
  modules: {},
});
