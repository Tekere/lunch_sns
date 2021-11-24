import firebase from 'firebase'

const lunchesModule = {
  namespaces: true,
  state: {
    lunches: [],
  },
  getters: {
    //FireStoreに保存されている全てのランチ
    lunches: (state) => state.lunches,
    // 期日がただいまの時刻より後の全てのランチ(募集中)
    activeLunches: (state) => {
      let result = []
      state.lunches.forEach((el) => {
        const unixTime = el.data.dateTime.seconds
        const now = new Date().getTime() //テスト的に11-01に設定
        if (new Date(unixTime * 1000).getTime() < now) {
          result.push(el.data.shop)
        }
      })
      return result
    },
    //期日が過ぎ去った全てのランチ
    pastLunches: (state) => {
      let result = []
      state.lunches.forEach((el) => {
        const unixTime = el.data.dateTime.seconds
        const now = new Date().getTime() //テスト的に11-01に設定
        if (new Date(unixTime * 1000).getTime() > now) {
          result.push(el.data.shop)
        }
      })
      return result
    },
  },
  mutations: {
    addLunch(shop) {
      console.log(shop)
    },
    fetchLunches(state, lunches) {
      state.lunches.push(lunches)
      console.log(lunches)
    },
  },
  actions: {
    //ランチ募集の登録 (まずショップを登録、その後ショップ以下に登録ユーザーを登録、その後stateに保存)
    addLunch({ getters, commit }, shop) {
      if (getters.user) {
        // 1.APIで取得したshopのオブジェクト整えて記録。
        const data = {
          shop: shop,
          dateTime:new Date('2021-11-30T11:01:22+09:00'),
          createdAt: new Date(),
        }
        firebase
          .firestore()
          .collection('lunches/')
          .add(data)
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

    // 登録されているランチの一覧取得
    fetchLunches({ commit }) {
      firebase
        .firestore()
        .collection('lunches')
        .get()
        .then((res) => {
          res.forEach((doc) => {
            commit('fetchLunches', { id: doc.id, data: doc.data() })
          })
        })
    },

    /*
     * helper
     */
    // compareLunchIsActive(type) {
    //   let result = []
    //   if (type === 'active') {
    //     state.lunches.forEach((el) => {
    //       const unixTime = el.data.createdAt.seconds
    //       const now = new Date().getTime()
    //       if (new Date(unixTime * 1000).getTime() < now) {
    //         result.push(el.data.shop)
    //       }
    //     })
    //   }else if(type==='past'){
    //   
    //    }
    //   return result
    // },
  },
}
export default lunchesModule
