import axios from "axios";

export default {
  state: {
    rows: [],
    oneElement: null,
    rowsCount: null,
  },
  getters: {
    getRows: (state) => {
      return state.rows;
    },
    getOneElement: (state) => {
      return state.oneElement;
    },
    getRowsCount: (state) => {
      return state.rowsCount;
    },
  },
  mutations: {
    UPDATE_ROWS(state, payload) {
      state.rows = payload;
    },
    UPDATE_ONE_ELEMENT(state, payload) {
      state.oneElement = payload;
    },
    UPDATE_ROWS_COUNT(state, payload) {
      state.rowsCount = payload;
    },
  },
  actions: {
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
    async editApi({ commit }, {payload, id}) {
      try {
        const response = await axios.post(
          `http://localhost:8696/facture-match/act/edit/${id}?type=1`,
          payload
        );
        console.log("Edit API response => ", response);
      } catch (error) {
        console.log("Error editing API => ", error);
      }
    },
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
    async getOneApi({ commit }, id) {
      try {
        const response = await axios.get(
          `http://localhost:8696/facture-match/act/${id}?type=1`
        );
        console.log("Get One API response => ", response);
        commit("UPDATE_ONE_ELEMENT", response);
      } catch (error) {
        console.log(error);
      }
    },
    async getRowsCountApi({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:8696/facture-match/act/count?type=1"
        );
        console.log("Get Rows Count API response => ", response.data);
        commit("UPDATE_ROWS_COUNT", response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
