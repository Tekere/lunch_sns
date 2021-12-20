import distance from '@turf/distance'
import { point } from '@turf/helpers'
import moment from 'moment'

export function sokutei(toLat, toLng) {
  const from = point([35.6553392, 139.6949893]) //legit
  const to = point([toLat, toLng]) //shopの経度 緯度

  const options = { units: 'meters' }
  const result = distance(from, to, options)
  return Math.floor(result)
}
export function getShuffledArr(arr) {
  return arr.reduce(
    (newArr, _, i) => {
      var rand = i + Math.floor(Math.random() * (newArr.length - i))
      ;[newArr[rand], newArr[i]] = [newArr[i], newArr[rand]]
      return newArr
    },
    [...arr]
  )
}
// 日付の形式を変更するメソッド
// 募集の日付がFireStoreよりタイムスタンプで渡ってくるため
export function formatRequestDate(date) {
  return moment(new Date(date.seconds * 1000)).format('YYYY-MM-DD HH:mm') //DateTimePickerに渡しているのと同じ型を使うこと
}
