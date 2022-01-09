<template :key="shopData.id">
  <div class="bl_shopCard_wrapper">
    <div
      class="bl_shopCard btnripple bl_shopCard__type_long"
      :class="{ new: shopData.data.shop.isNew }"
    >
      <figure class="bl_shopCard_img">
        <a :href="shopData.data.shop.urls.pc" target="blank"><img :src="shopData.data.shop.photo.pc.l" alt="" /></a>
      </figure>
      <div class="bl_shopCard_body">
        <p class="bl_shopCard_shopTtl">{{ shopData.data.shop.name }}</p>
        <div v-if="!shopData.data.requestDate">
          <date-time-picker
            :disabled="false"
            :request-date="requestDate"
            @update-request-date="updateRequestDate"
          ></date-time-picker>
          <a
            class="bl_shopCard_btn"
            @click.prevent="recruit(shopData.data.shop)"
            >募集する</a
          >
        </div>
        <div v-else>
          <date-time-picker
            :key="shopData.id"
            :request-date="formatRequestDate(shopData.data.requestDate)"
            :disabled="true"
          ></date-time-picker>
          <a
            v-if="
              isPastRequestDate(shopData.data.requestDate) &&
              isUnParticipated(shopData.data.participants)
            "
            class="bl_shopCard_btn"
            @click.prevent="joinLunch(shopData.id)"
            >参加する</a
          >
          <div class="bl_shopCard_user_container">
            <img
              v-for="participant of shopData.data.participants"
              :key="participant.uid"
              :src="participant.img"
              class="bl_shopCard_user bl_shopCard_user__l"
              alt=""
            />
          </div>
        </div>
        <p class="bl_shopCard_shopCategory bl_shopCard_infoTxt mb10">
          <span>ジャンル:</span><span>{{ shopData.data.shop.genre.name }}</span>
        </p>
        <p class="bl_shopCard_shopOpen bl_shopCard_infoTxt mb10">
          <span>営業時間:</span><span>{{ shopData.data.shop.open }}</span>
        </p>
                <p class="bl_shopCard_shopClose bl_shopCard_infoTxt mb10">
          <span>平均予算:</span><span>{{ shopData.data.shop.budget.average }}</span>
        </p>
        <p class="bl_shopCard_shopClose bl_shopCard_infoTxt">
          <span>定休日:</span><span>{{ shopData.data.shop.close }}</span>
        </p>

        <!--<div class="bl_shopCard_subInfo">
           
          <div v-if="shopData.data.shop.user" class="bl_shopCard_person bl_usr_info">
            <p class="bl_usr_name">たびちゃん</p>
            <img src="@/assets/testuser.svg" alt="" class="bl_usr_img" />
          </div>
        </div>-->
        <div class="bl_shopCard_area">
          <div class="bl_shopCard_shopAddress_wrapper">
            <p class="bl_shopCard_shopAddress bl_shopCard_infoTxt">
              {{ shopData.data.shop.address }}
            </p>
            <div class="bl_shopCard_pin">
              <img src="@/assets/pin.svg" alt="" />
              <p>
                {{ sokutei(shopData.data.shop.lat, shopData.data.shop.lng) }}m
              </p>
            </div>
          </div>
          <div class="bl_shopCard_shopMap">
            <iframe
              :key="shopData.id"
              :src="
                'https://maps.google.co.jp/maps?output=embed&q=' +
                shopData.data.shop.lat +
                ',' +
                shopData.data.shop.lng +
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
                'https://maps.google.co.jp/maps?output=embed&saddr=株式会社レジット&daddr='+shopData.data.shop.address+'&z=15'
              "
              width="269"
              height="280"
              frameborder="0"
              scrolling="no"
            ></iframe> -->
          </div>
        </div>
      </div>
      <span v-if="shopData.data.shop.isNew" class="bl_shopCard_badge">
        <img src="@/assets/heart.svg" alt="" />
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { sokutei,formatRequestDate } from '@/helper.js'
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
