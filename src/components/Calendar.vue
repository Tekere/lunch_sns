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
        @click:event="showEvent"
        @click:date="createEvent"
      ></v-calendar>
    </v-sheet>
  </v-app>
</template>

<script>
import moment from 'moment'
import { mapActions } from 'vuex'
export default {
  props:{
    events:Array
  },
  data: () => ({
    value: moment().format('yyyy-MM-DD'),
  }),
  computed: {
    title() {
      return moment(this.value).format('yyyy年 M月')
    },
  },
  methods: {
    ...mapActions(['showIsShowDetail']),
    setToday() {
      this.value = moment().format('yyyy-MM-DD')
    },
    showEvent(e) {
      // shoEvent({event}) でイベントも取ってこれる
      this.showIsShowDetail(e.event.data)
      event.stopPropagation()  //これでpreventDefaultできる
    },
    createEvent() {
      console.log('createEvent')
    },

    getEvents() {
      const events = [
        // new Dateからmomentに変更
      ]
      this.events = events
    },
    getEventColor(event) {
      return event.color
    },
  },
}
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
