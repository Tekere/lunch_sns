<template :key="shopData.id">
  <div class="bl_shopCard_wrapper">
    <div class="bl_shopCard btnripple bl_shopCard__type_long bl_createShopCard">
      <figure class="bl_shopCard_img">
        <a><img src="@/assets/noimage.png" alt="" /> </a>
      </figure>
      <div class="bl_shopCard_body">
        <p class="bl_shopCard_shopTtl">
          <span>タイトル:</span>
          <input class="bl_createShopCard_inputTxt" type="text" required />
        </p>
        <div>
          <date-time-picker
            :disabled="false"
            :request-date="requestDate"
            @update-request-date="updateRequestDate"
          ></date-time-picker>
          <a
            class="bl_shopCard_btn"
            @click.prevent="recruit(createShopData.data.shop)"
            >募集する</a
          >
        </div>

        <p class="bl_shopCard_shopCategory bl_shopCard_infoTxt mb10">
          <span>ジャンル:</span>
          <input class="bl_createShopCard_inputTxt" type="text" />
        </p>
        <p class="bl_shopCard_shopClose bl_shopCard_infoTxt mb10">
          <span>平均予算:</span
          ><input class="bl_createShopCard_inputTxt" type="text" />
        </p>
        <p class="bl_shopCard_shopClose bl_shopCard_infoTxt mb10">
          <span>住所:</span
          ><input class="bl_createShopCard_inputTxt" type="text" />
        </p>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { sokutei, formatRequestDate } from '@/helper.js'
import DateTimePicker from '@/components/DateTimePicker.vue'
import moment from 'moment'

const today = new Date()
// datepickerの初期値
const ddd = moment(today)
  .hour(12)
  .minute(30)
  .add(1, 'days')
  .format('YYYY-MM-DD HH:mm')

export default {
  components: { DateTimePicker },
  name: 'CreateDetailShopCard',
  data() {
    return {
      dateTimePicker: false,
      requestDate: ddd,
      // 新規作成用データ
      createShopDate: {},
    }
  },
  computed: {
    ...mapGetters(['user']),
  },
  methods: {
    ...mapActions(['showIsShowDetail', 'addLunch', 'joinLunch']),
    // helper関数2つ定義
    sokutei,
    formatRequestDate,
    // ランチ募集メソッド
    recruit(shop) {
      const dateTime = moment(this.requestDate).toISOString()
      // requestDateTimeとshopを持ってaddLunchを実行
      // shopとrequestDateとモディファイアを整えた状態でアクションへ引き渡す。
      const data = {
        shop: shop,
        requestDate: new Date(dateTime),
        createdAt: new Date(),
      }
      // 登録時間を確認してからポスト
      if (
        window.confirm(
          moment(dateTime).format('YYYY年MM月DD日HH時mm分') + 'で募集しますか？'
        )
      ) {
        this.addLunch(data)
      }
    },
    updateRequestDate(value) {
      this.requestDate = value
    },

    // requestDateが過ぎているかどうかのメソッド
    isPastRequestDate(date) {
      // 現在の時間を過ぎていたらfalseを返す
      if (today < new Date(date.seconds)) {
        return false
      } else {
        return true
      }
    },

    // ユーザーが未参加のランチか判別するメソッド
    isUnParticipated(participants) {
      // loginUserのuidと一致するものがparticipantsに含まれてないかチェック
      const flag = participants.some((el) => {
        return el.uid === this.user.uid
      })
      // idが一致したときにtrueが返ってくるで反転させる
      return !flag
    },

    //ランチに参加するためのメソッド
    joinThisLunch(id) {
      this.joinLunch(id)
    },
  },
}
</script>

<style lang="scss" scoped>
.bl_shopCard_wrapper {
  margin-right: 0 !important;
}
.bl_shopCard.bl_shopCard__type_long {
  margin-right: 0;
  background-color: transparent;
}
.bl_shopCard {
  height: auto;
  box-shadow: none;
}
.bl_shopCard_btn {
  display: block;
  padding: 0.7em 0;
  text-align: center;
  background-color: #000;
  color: #fff;
}

.bl_shopCard_btn {
  color: #fff;
  background-color: #ff6647;
  border-radius: 6px;
}
.bl_shopCard_btn:hover {
  opacity: 0.7;
}
.bl_shopCard__type_long .bl_shopCard_btn {
  margin: 0.7em 0 1em;
}
.bl_shopCard_btn:hover {
}

.bl_shopCard_rest {
  font-size: 0.8rem;
}
.bl_shopCard_shopAddress_wrapper {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #999;
}
.bl_shopCard_shopAddress {
  width: 62%;
}
.bl_shopCard_shopMap {
  overflow: hidden;
  border-radius: 8px;
  .place-card.place-card-medium {
    display: none !important;
  }
}

.bl_shopCard_img a {
  display: block;
  position: relative;
}
.bl_shopCard_img a .link_icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background: rgba(100, 100, 100, 0.8);
  padding: 3px;
}
.mb10 {
  margin-bottom: 10px;
}

.bl_shopCard_infoTxt {
  display: flex;
  span {
    display: block;
  }
  span:first-child {
    display: block;
    white-space: nowrap;
    width: 29%;
  }
  span:last-child {
    width: 75%;
  }
}

.bl_createShopCard_inputTxt {
  display: block;
  width: 100%;
  background-color: #fff;
  border: 1px solid lightgray
  ;
  padding: 0.2em 0.3em 0.2em 0.5em;
  margin-left: 0.5em;
  font-weight: normal;
}

.bl_shopCard_wrapper .bl_shopCard_shopTtl {
  // display: flex;
  span {
    white-space: nowrap;
    font-size: 0.8rem;
    font-weight: 400;
  }
  .bl_createShopCard_inputTxt{
    margin-left: 0;
  }
}
</style>
