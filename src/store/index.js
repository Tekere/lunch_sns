import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isShowDetail: false
	},
	getters: {
		isShowDetail: state => state.isShowDetail
	},
	mutations: {
		toggleIsShowDetail: state => {
			state.isShowDetail = !state.isShowDetail
		},
		showIsShowDetail: state => {
			state.isShowDetail = true
		},
		hiddenIsShowDetail: state => {
			state.isShowDetail = false
		}
	},
	actions: {
		toggleIsShowDetail: ({ commit }) => {
			commit('toggleIsShowDetail')
		},
		showIsShowDetail: ({ commit }) => {
			commit('showIsShowDetail')
		},
		hiddenIsShowDetail: ({ commit }) => {
			commit('hiddenIsShowDetail')
		}
	},
	modules: {}
})
