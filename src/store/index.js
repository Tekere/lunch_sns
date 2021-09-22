import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isShowDetail: false,
		detailData: {
			text: 'hello'
		}
	},
	getters: {
		isShowDetail: state => state.isShowDetail,
		detailData: state => state.detailData
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
		},
		updateDetailData: (state, arg) => {
			state.detailData.text = arg
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
		},
		updateDetailData: ({ commit },arg) => {
			commit('updateDetailData',arg)
		}
	},
	modules: {}
})
