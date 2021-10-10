import distance from '@turf/distance'
import { point } from '@turf/helpers'

export function sokutei(toLat, toLng) {
  const from = point([35.6553392, 139.6949893]) //legit
  const to = point([toLat, toLng]) //shopの経度 緯度

  const options = { units: 'meters' }
  const result = distance(from, to, options)
  return Math.floor(result)
}
