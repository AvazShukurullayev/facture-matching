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
        const response = await axios.get(
          "http://localhost:8696/facture-match/act?type=1"
        );
        console.log("Get API response => ", response);
        commit("UPDATE_ROWS", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async postApi({ commit }, payload) {
      try {
        const response = await axios.post(
          "http://localhost:8696/facture-match/act/register",
          payload
        );
        console.log("Post API response => ", response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
