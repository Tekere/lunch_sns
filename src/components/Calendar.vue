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
  
  </v-app>
</template>

<script>
import moment from "moment";
import { mapActions } from "vuex";
export default {
  data: () => ({
    events: [],
    value: moment().format("yyyy-MM-DD"),
  }),
  computed: {
    title() {
      return moment(this.value).format("yyyy年 M月");
    },
  },
  methods: {
    ...mapActions(["showIsShowDetail"]),
    setToday() {
      this.value = moment().format("yyyy-MM-DD");
    },
    showEvent() {
      // shoEvent({event}) でイベントも取ってこれる
      // alert(`clicked ${event.name}`);
      stopPropagation()
      this.showIsShowDetail();
      
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
