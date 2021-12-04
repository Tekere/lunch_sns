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
        const unixTime = el.data.requestDate.seconds
        const now = new Date().getTime()
        if (new Date(unixTime * 1000).getTime() > now) {
          result.push(el)
        }
      })
      return result
    },
    //期日が過ぎ去った全てのランチ
    pastLunches: (state) => {
      let result = []
      state.lunches.forEach((el) => {
        const unixTime = el.data.requestDate.seconds
        const now = new Date().getTime()
        if (new Date(unixTime * 1000).getTime() < now) {
          result.push(el)
        }
      })
      return result
    },
  },
  mutations: {
    addLunch(state, data) {
      state.lunches.push(data)
    },
    fetchLunches(state, lunches) {
      state.lunches.push(lunches)
    },
  },
  actions: {
    //ランチ募集の登録 (まずショップを登録、その後ショップ以下に登録ユーザーを登録、その後stateに保存)
    addLunch({ getters, commit }, data) {
      // dataは整えられて渡ってくる
      if (getters.user) {
        firebase
          .firestore()
          .collection('lunches')
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
                commit('addLunch', {
                  id: doc.id,
                  data: data,
                })
              })
          })
      }
    },

    // 登録されているランチの一覧取得
    fetchLunches({ commit }) {
      // let result = []
      // まず、全ランチを取得
      firebase
        .firestore()
        .collection('lunches')
        .get()
        .then((lunchRes) => {
          // 取得ができたらイテレートして 型を整えてオブジェクトが入った配列を作る
          lunchRes.forEach((doc) => {
            // result.push({ id: doc.id, data: doc.data() })

            const id = doc.id
            const data = doc.data()
            // 取得した全ランチの配列を再度イテレートしてUsersを取得&型追加
            firebase
              .firestore()
              .collection(`lunches/${doc.id}/users`)
              .get()
              .then((userRes) => {
                let users = []
                userRes.forEach((doc) => {
                  users.push(doc.data())
                })
                // dataに日付やshopのデータなど全て入れる形なので、プロパティを指定して入れる
                data.users = users
                //コミット
                commit('fetchLunches', { id: id, data: data })
              })
          })
        })
    },

    // ランチへの参加
    joinLunch(lunchId, user, { commit }) {
      if (getters.user) {
        firebase
          .firestore()
          .collection(`lunches/${lunchId}/users`)
          .add(user)
          // 2.add()した際のデータをdocで受け取り、mutation
          .then((doc) => {
            
          })
      }
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
