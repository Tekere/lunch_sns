import firebase from 'firebase'

const lunchesModule = {
  namespaces: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    //ランチ募集の登録 (まずショップを登録、その後ショップ以下に登録ユーザーを登録、その後stateに保存)
    addLunch({ getters, commit }, shop) {
      if (getters.user) {
        // 1.APIで取得したshopのオブジェクトをそのまま入れる。
        firebase
          .firestore()
          .collection('lunches/')
          .add(shop)
          // 2.add()した際のデータをdocで受け取り、新たにfirestoreを呼び出しUserを登録
          .then((doc) => {
            firebase
              .firestore()
              // 直前のadd()したやつがdocで渡ってきてるので自動IDを使って、配下にadd()
              .collection(`lunches/${doc.id}/users/`)
              // add()には純粋なJsオブジェクトでないといけない。
              .add({
                uid: getters.user.uid,
                name: getters.user.displayName,
                img: getters.user.photoURL,
              })
              // 最後にStateに保存
              .then(() => {
                commit('addLunch', shop)
              })
          })
      }
    },
  },
}
export default lunchesModule
