import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: true,
    isShowDetail: false,
    detailShopData: {
      name: 'none',
      photo: {
        pc: {
          l: 'none',
        },
      },
    },
    user: null,
  },
  getters: {
    isLoading: (state) => state.isLoading,
    isShowDetail: (state) => state.isShowDetail,
    detailShopData: (state) => state.detailShopData,
    user: (state) => {
      const user = firebase.auth().currentUser
      if (state.user == user) {
        return user
      } else {
        console.log('tigau')
        this.deleteLoginUser()
        this.logout()
				return
      }
    },
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
    setDetailShopData: (state, shop) => {
      state.detailShopData = shop
    },

    /*
     * auth
     */
    setLoginUser(state, user) {
      state.user = user
    },
    deleteLoginUser(state) {
      state.login_user = null
    },
  },
  actions: {
    // isLoading
    stopIsLoading: ({ commit }) => {
      commit('stopIsLoading')
    },
    startIsLoading: ({ commit }) => {
      commit('startIsLoading')
    },
    // isShowDetail
    toggleIsShowDetail: ({ commit }) => {
      commit('toggleIsShowDetail')
    },
    showIsShowDetail: ({ commit }, shop) => {
      commit('showIsShowDetail')
      // this.setDetailShopData(shop);
      commit('setDetailShopData', shop)
    },
    hiddenIsShowDetail: ({ commit }) => {
      commit('hiddenIsShowDetail')
    },
    setDetailShopData: ({ commit }, shop) => {
      commit('setDetailShopData', shop)
    },

    /*
     * auth
     */
    // login() {
    //   const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
    //   firebase.auth().signInWithRedirect(googleAuthProvider)
    // },
    // setLoginUser({ commit }, user) {
    // 	commit('setLoginUser', user)
    // 	console.log('setloginuser')
    // },
    checkIsLogin({commit}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // setLoginUser(user)
          commit('setLoginUser', user)
          console.log('setloginuser')
        } else {
          // login()
          const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithRedirect(googleAuthProvider)
        }
      })
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoguinUser')
    },

    logout() {
      firebase.auth().signOut()
    },
  },
  modules: {},
})
