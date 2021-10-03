import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isShowDetail: false,
    detailShopData: {
      name: "none",
      photo: {
        pc: {
          l: "none",
        },
      },
    },
  },
  getters: {
    isShowDetail: (state) => state.isShowDetail,
    detailShopData: (state) => state.detailShopData,
  },
  mutations: {
    toggleIsShowDetail: (state) => {
      state.isShowDetail = !state.isShowDetail;
    },
    showIsShowDetail: (state) => {
      state.isShowDetail = true;
    },
    hiddenIsShowDetail: (state) => {
      state.isShowDetail = false;
    },
    setDetailShopData: (state, shop) => {
      state.detailShopData = shop;
    },
  },
  actions: {
    toggleIsShowDetail: ({ commit }) => {
      commit("toggleIsShowDetail");
    },
    showIsShowDetail: ({ commit },shop) => {
      commit("showIsShowDetail");
      // this.setDetailShopData(shop);
      commit("setDetailShopData", shop);
    },
    hiddenIsShowDetail: ({ commit }) => {
      commit("hiddenIsShowDetail");
    },
    setDetailShopData: ({ commit }, shop) => {
      commit("setDetailShopData", shop);
    },
  },
  modules: {},
});
