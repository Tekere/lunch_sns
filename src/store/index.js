import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isShowDetail: true
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
		toggleShowDetail: ({ commit }) => {
			commit('toggleShowDetail')
		}
	},
	modules: {}
})
