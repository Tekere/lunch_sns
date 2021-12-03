<template>
  <div class="bl_shopCard_wrapper">
    <div
      class="bl_shopCard btnripple bl_shopCard__type_long"
      :class="{ new: shopData.shop.isNew }"
    >
      <figure class="bl_shopCard_img">
        <img :src="shopData.shop.photo.pc.l" alt="" />
      </figure>
      <div class="bl_shopCard_body">
        <p class="bl_shopCard_shopTtl">{{ shopData.shop.name }}</p>
        <div v-if="!shopData.requestDate">
          <date-time-picker
            :disabled="false"
            :request-date="requestDate"
            @update-request-date="updateRequestDate"
          ></date-time-picker>
          <a class="bl_shopCard_btn" @click.prevent="recruit(shopData.shop)"
            >募集する</a
          >
        </div>
        <div v-else>
          <date-time-picker
            :request-date="formatRequestDate(shopData.requestDate)"
            :disabled="true"
          ></date-time-picker>
          <a
            v-if="isPastRequestDate(shopData.requestDate)"
            class="bl_shopCard_btn"
            @click.prevent="recruit(shopData)"
            >参加する</a
          >
          <div class="bl_shopCard_user_container">
            <img
              v-for="user of shopData.users"
              :key="user.uid"
              :src="user.img"
              class="bl_shopCard_user bl_shopCard_user__l"
              alt=""
            />
          </div>
        </div>
        <p class="bl_shopCard_shopCategory bl_shopCard_infoTxt mb10">
          <span>ジャンル:</span><span>{{ shopData.shop.genre.name }}</span>
        </p>
        <p class="bl_shopCard_shopOpen bl_shopCard_infoTxt mb10">
          <span>営業時間:</span><span>{{ shopData.shop.open }}</span>
        </p>
        <p class="bl_shopCard_shopClose bl_shopCard_infoTxt">
          <span>定休日:</span><span>{{ shopData.shop.close }}</span>
        </p>

        <!--<div class="bl_shopCard_subInfo">
           
          <div v-if="shopData.shop.user" class="bl_shopCard_person bl_usr_info">
            <p class="bl_usr_name">たびちゃん</p>
            <img src="@/assets/testuser.svg" alt="" class="bl_usr_img" />
          </div>
        </div>-->
        <div class="bl_shopCard_area">
          <div class="bl_shopCard_shopAddress_wrapper">
            <p class="bl_shopCard_shopAddress bl_shopCard_infoTxt">
              {{ shopData.shop.address }}
            </p>
            <div class="bl_shopCard_pin">
              <img src="@/assets/pin.svg" alt="" />
              <p>{{ sokutei(shopData.shop.lat, shopData.shop.lng) }}m</p>
            </div>
          </div>
          <div class="bl_shopCard_shopMap">
            <iframe
              :src="
                'https://maps.google.co.jp/maps?output=embed&q=' +
                shopData.shop.lat +
                ',' +
                shopData.shop.lng +
                '&z=15'
              "
              width="269"
              height="280"
              frameborder="0"
              scrolling="no"
            ></iframe>
            <!-- NOTE ルート表示 一旦保留 -->
            <!-- <iframe
              :src="
                'https://maps.google.co.jp/maps?output=embed&saddr=株式会社レジット&daddr='+shopData.shop.address+'&z=15'
              "
              width="269"
              height="280"
              frameborder="0"
              scrolling="no"
            ></iframe> -->
          </div>
        </div>
      </div>
      <span v-if="shopData.shop.isNew" class="bl_shopCard_badge">
        <img src="@/assets/heart.svg" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { sokutei } from '@/helper.js'
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
  name: 'DetailShopCard',
  props: {
    shopData: Object,
  },
  data() {
    return {
      dateTimePicker: false,
      requestDate: ddd,
    }
  },
  methods: {
    ...mapActions(['showIsShowDetail', 'addLunch']),
    sokutei: sokutei,
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
    // 日付の形式を変更するメソッド
    // 募集の日付がFireStoreよりタイムスタンプで渡ってくるため
    formatRequestDate(date) {
      return moment(new Date(date.seconds * 1000)).format('YYYY-MM-DD HH:mm') //DateTimePickerに渡しているのと同じ型を使うこと
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
    width: 25%;
  }
  span:last-child {
    width: 75%;
  }
}
</style>
