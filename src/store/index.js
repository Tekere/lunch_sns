import Vue from 'vue'
import Vuex from 'vuex'

import authModule from './auth'
import lunchesModule from './lunches'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authModule,
    lunchesModule,
  },
  state: {
    // ローディング画面の表示非表示
    isLoading: true,
    // Detailの表示非表示
    isShowDetail: false,
    // Detailに渡されるデータ
    detailShopData: {
      shop: {
        name: 'none',
        photo: {
          pc: {
            l: 'none',
          },
        },
      },
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    isShowDetail: (state) => state.isShowDetail,
    detailShopData: (state) => state.detailShopData,
  },
  mutations: {
    // isLoading
    stopIsLoading: (state) => {
      state.isLoading = false
    },
    startIsLoading: (state) => {
      state.isLoading = true
    },
    // isShowDetail
    toggleIsShowDetail: (state) => {
      state.isShowDetail = !state.isShowDetail
    },
    showIsShowDetail: (state) => {
      state.isShowDetail = true
    },
    hiddenIsShowDetail: (state) => {
      state.isShowDetail = false
    },
    setDetailShopData: (state, shopData) => {
      state.detailShopData = shopData
    },
  },
  actions: {
    // isLoading ローディング画面の表示停止
    stopIsLoading: ({ commit }) => {
      commit('stopIsLoading')
    },
    // isLoading ローディング画面表示開始
    startIsLoading: ({ commit }) => {
      commit('startIsLoading')
    },
    // isShowDetail Detailの表示切り替え
    toggleIsShowDetail: ({ commit }) => {
      commit('toggleIsShowDetail')
    },
    //  isShowDetail Detailの表示
    showIsShowDetail: ({ commit }, shopData) => {
      commit('showIsShowDetail')
      // Detailに必要なデータもセット
      commit('setDetailShopData', shopData)
    },
    // isShowDetail Detailの非表示
    hiddenIsShowDetail: ({ commit }) => {
      commit('hiddenIsShowDetail')
    },
    // detailData Detailにデータのセット
    setDetailShopData: ({ commit }, shopData) => {
      commit('setDetailShopData', shopData)
    },
  },
})
