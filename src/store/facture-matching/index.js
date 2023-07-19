import axios from "axios";

export default {
  state: {
    rows: [],
  },
  getters: {
    getRows: (state) => {
      return state.rows;
    },
  },
  mutations: {
    UPDATE_ROWS(state, payload) {
      state.rows = payload;
    },
  },
  actions: {
    async getApi({ commit }) {
      try {
        // const response =  await axios.get("")
      } catch (error) {
        console.log(error);
      }
    },
  },
};
