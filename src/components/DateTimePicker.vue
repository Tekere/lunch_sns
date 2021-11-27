<template>
  <div>
    <Datetime
      v-model="tmpRequestDate"
      :minute-interval="15"
      :format="'YYYY-MM-DD HH:mm'"
      :overlay="true"
      :min-date="start"
      :max-date="end"
      :noClearButton="true"
    ></Datetime>
  </div>
</template>

<script>
import moment from 'moment'
import Datetime from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

export default {
  components: {
    Datetime,
  },
  props: {
    requestDate: String,
  },
  data() {
    return {
      tmpRequestDate:''
    }
  },
  // propsのrequestDateを監視して親DetailShopCardへ検知
  watch:{
    tmpRequestDate:function () {
      this.$emit('update-request-date',this.tmpRequestDate)
    }
  },
  computed: {
    start() {
      // min-date に明日の9時を指定
      const start = moment().hour(9)
      return start.format('YYYY-MM-DDTHH:mm:ss')
    },
    end() {
      // max-date に min-date から12ヶ月後を指定
      const start = moment(this.start)
      const end = start.add(12, 'months').endOf('day')
      return end.format('YYYY-MM-DDTHH:mm:ss')
    },
  },
  created() {
    this.tmpRequestDate = this.requestDate
  },
}
</script>
<style>
/*
* datepicker
*/
.datepicker,
.datetimepicker {
  position: fixed !important;
  top: 37% !important;
  /* right:3px !important; */
  right: 0 !important;
}
.datepicker .datepicker-days {
  text-align: center;
}
.date-time-picker .justify-content-center {
  text-align: center;
}
</style>
