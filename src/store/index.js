import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// ローディング画面の表示非表示
		isLoading: true,
		// Detailの表示非表示
		isShowDetail: false,
		// Detailに渡されるデータ
    detailShopData: {
      name: 'none',
      photo: {
        pc: {
          l: 'none',
        },
      },
		},
		// ログインユーザー
    user: null,
  },
  getters: {
    isLoading: (state) => state.isLoading,
    isShowDetail: (state) => state.isShowDetail,
		detailShopData: (state) => state.detailShopData,
		user: (state) => {
			// firebaseの現在ログインしているユーザーを取得
			const user = firebase.auth().currentUser
			// stateのユーザーと同一か念の為確認してから処理を行う
      if (state.user == user) {
        return user
			} else {
				// 違ったらログアウトさせる
        this.deleteLoginUser()
        this.logout()
        return
      }
		},
		// NOTE userの情報は、必要なプロパティだけ返すGettersよりそのまま返すのがよさそうなのでコメントアウト。
    // userName: (state) => (state.user ? state.user.displayName : null),
    // userImg: (state) => (state.user ? state.user.photoURL : null),
    // userUid: (state) => (state.user ? state.user.uid : null),
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
    showIsShowDetail: ({ commit }, shop) => {
			commit('showIsShowDetail')
			// Detailに必要なデータもセット
      commit('setDetailShopData', shop)
		},
		// isShowDetail Detailの非表示
    hiddenIsShowDetail: ({ commit }) => {
      commit('hiddenIsShowDetail')
		},
		// detailData Detailにデータのセット
    setDetailShopData: ({ commit }, shop) => {
      commit('setDetailShopData', shop)
    },

    /*
     * auth
     */
		// Firebaseでログイン（Google）
    login() {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(googleAuthProvider)
		},
		// stateにuserを登録
    setLoginUser({ commit }, user) {
    	commit('setLoginUser', user)
    	console.log('setloginuser')
		},
		// 未ログインがどうかをチェックして適切な処理を行う
		checkIsLogin() {
			const that = this
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          that.setLoginUser(user)
					console.log(user)
        } else {
					// that.login()
					that.dispatch('login')
					console.log('erroe')
        }
      })
		},
		// stateよりuserをリセット
    deleteLoginUser({ commit }) {
      commit('deleteLoguinUser')
    },
		// Firebaseのログアウト
    logout() {
      firebase.auth().signOut()
    },

    /*
     * Shopデータ操作
     */
		addLunch() {
			
		}
  },
  modules: {},
})
