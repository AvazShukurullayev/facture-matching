import { $themeBreakpoints } from "@themeConfig";
import axios from "axios";
export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    shallShowOverlay: false,
    rows: [],
    // data ni api bilan toldirish kerak
  },
  getters: {
    currentBreakPoint: (state) => {
      const { windowWidth } = state;
      if (windowWidth >= $themeBreakpoints.xl) return "xl";
      if (windowWidth >= $themeBreakpoints.lg) return "lg";
      if (windowWidth >= $themeBreakpoints.md) return "md";
      if (windowWidth >= $themeBreakpoints.sm) return "sm";
      return "xs";
    },
    getRows: (state) => {
      return state.rows;
    },
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val;
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay =
        val !== undefined ? val : !state.shallShowOverlay;
    },
    mutateRows(state, payload) {
      state.rows = payload;
    },
  },
  actions: {
    async getApi({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:8696/facture-match/act?type=1"
        );
        console.log("response.data => ", response.data);
        commit("mutateRows", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async postApi({ commit }, payload) {
      console.log("Payload => ", payload);
      try {
        const response = await axios.post(
          "http://localhost:8696/facture-match/act/register",
          payload
        );
        console.log("response", response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
