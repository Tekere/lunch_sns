<template>
  <v-app>
    <v-sheet tile color="grey lighten-3" class="d-flex align-center">
      <!-- <v-btn outlined small class="ma-4" @click="setToday">
        今日
      </v-btn> -->
      <v-btn icon @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="60vh">
      <v-calendar
        ref="calendar"
        v-model="value"
        :events="events"
        :event-color="getEventColor"
        locale="ja-jp"
        :day-format="(timestamp) => new Date(timestamp.date).getDate()"
        :month-format="
          (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
        "
        @change="getEvents"
        @click:event="showEvent"
        @click:date="createEvent"
      ></v-calendar>
    </v-sheet>
    <v-dialog v-model="dialog" width="500">
      <v-card class="mx-auto" color="#fff"  max-width="500">
        <v-card-title>
          <v-icon large left>  </v-icon>
          <span class="text-h6 font-weight-bold">権八  12:00</span>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          ヒーハー わしのおごり！！！
        </v-card-text>
        <v-card-text>島岡・もっちゃん </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                src="@/assets/testuser.svg"
              ></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>たびちゃん</v-list-item-title>
            </v-list-item-content>
            <v-row align="center" justify="end">
              <v-icon class="mr-1" color="red"> mdi-heart </v-icon>
              <span class="subheading mr-2">2</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
export default {
  data: () => ({
    events: [],
    dialog:false,
    value: moment().format("yyyy-MM-DD"),
  }),
  computed: {
    title() {
      return moment(this.value).format("yyyy年 M月");
    },
  },
  methods: {
    ...mapActions(["toggleIsShowDetail"]),
    setToday() {
      this.value = moment().format("yyyy-MM-DD");
    },
    showEvent() {
      // shoEvent({event}) でイベントも取ってこれる
      // alert(`clicked ${event.name}`);
      this.dialog = true
      this.toggleIsShowDetail();
    },
    createEvent() {
      console.log("createEvent");
    },

    getEvents() {
      const events = [
        // new Dateからmomentに変更
        {
          name: "権八 たびちゃん",
          start: moment("2021-09-10 12:00:00").toDate(),
          end: moment("2021-09-10 13:00:00").toDate(),
          color: "blue",
          timed: true,
        },
        {
          name: "テスト2",
          start: moment("2021-09-21 12:00:00").toDate(),
          end: moment("2021-09-21 13:00:00").toDate(),
          color: "blue",
          timed: true,
        },
        {
          name: "テスト3",
          start: moment("22021-09-15 12:30:00").toDate(),
          end: moment("2021-09-15 13:30:00").toDate(),
          color: "blue",
          timed: true,
        },
        {
          name: "テスト4",
          start: moment("2021-10-01 13:00:00").toDate(),
          end: moment("2021-10-01 14:00:00").toDate(),
          color: "blue",
          timed: true,
        },
      ];
      this.events = events;
    },
    getEventColor(event) {
      return event.color;
    },
  },
};
</script>

<style lang="scss">
.v-calendar .v-event {
  height: 30px !important;
  line-height: 30px !important;
}
.v-dialog > .v-card > .v-card__title {
  padding-left: 16px !important;
}
</style>
