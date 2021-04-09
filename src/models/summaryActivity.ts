import { ActivityType, ResourceState } from '../enums'

import { MetaAthlete, PolylineMap } from '.'

export interface SummaryActivity {
  resource_state: ResourceState
  athlete: MetaAthlete
  name: string
  distance: number
  moving_time: number
  elapsed_time: number
  total_elevation_gain: number
  type: ActivityType
  workout_type: number
  id: number
  external_id: string
  upload_id: number
  start_date: string
  start_date_local: string
  timezone: string
  utc_offset: number
  start_latlng: number[]
  end_latlng: number[]
  location_city: string
  location_state: string
  location_country: string
  start_latitude: number
  start_longitude: number
  achievement_count: number
  kudos_count: number
  comment_count: number
  athlete_count: number
  photo_count: number
  map: PolylineMap
  trainer: boolean
  commute: boolean
  manual: boolean
  private: boolean
  visibility: string
  flagged: boolean
  gear_id: string
  from_accepted_tag: boolean
  upload_id_str: string
  average_speed: number
  max_speed: number
  has_heartrate: boolean
  average_heartrate: number
  max_heartrate: number
  heartrate_opt_out: boolean
  display_hide_heartrate_option: boolean
  elev_high: number
  elev_low: number
  pr_count: number
  total_photo_count: number
  has_kudoed: boolean
}
