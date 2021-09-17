import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isShowDetail: false
	},
	getters: {
		isShowDetail: state => state.isShowDetail
	},
	mutations: {
		toggleShowDetail: state => {
			state.isShowDetail != state.isShowDetail
		}
	},
	actions: {
		toggleIsShowDetail: ({ commit }) => {
			commit('toggleShowDetail')
		}
	},
	modules: {}
})
