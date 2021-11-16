import firebase from 'firebase'
import 'firebase/auth'

const authModule = {
  namespaces: true,
  state: {
    // ログインユーザー
    user: null,
  },
  getters: {
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
    setLoginUser(state, user) {
      state.user = user
    },
    deleteLoginUser(state) {
      state.login_user = null
    },
  },
  actions: {
    // Firebaseでログイン（Google）
    login() {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(googleAuthProvider)
    },
    // stateにuserを登録
    setLoginUser({ commit }, user) {
      commit('setLoginUser', user)
    },
    // 未ログインがどうかをチェックして適切な処理を行う
    checkIsLogin() {
      const that = this
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          that.dispatch('setLoginUser', user)
        } else {
          that.dispatch('login')
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
  },
}
export default authModule
