// export interface Prisoners {
//   total: number
//   items: Item[]
//   page: number
// }

export interface Prisoners {
  weight_min?: number
  complexion: any
  age_range?: string
  images: Image[]
  locations: any
  poster_classification: string
  possible_states: any
  age_min?: number
  eyes_raw?: string
  caution?: string
  suspects: any
  legat_names: any
  aliases?: string[]
  field_offices?: string[]
  ncic?: string
  place_of_birth?: string
  dates_of_birth_used?: string[]
  remarks?: string
  uid: string
  hair_raw?: string
  nationality?: string
  url: string
  title: string
  scars_and_marks?: string
  race_raw?: string
  modified: string
  race?: string
  weight_max?: number
  details?: string
  subjects: string[]
  path: string
  languages?: string[]
  reward_text?: string
  age_max?: number
  publication: string
  status: string
  additional_information: any
  eyes?: string
  hair?: string
  weight?: string
  build: any
  height_max?: number
  reward_max: number
  occupations?: string[]
  description: string
  possible_countries: any
  person_classification: string
  reward_min: number
  files: File[]
  warning_message?: string
  coordinates: any[]
  sex?: string
  height_min?: number
  "@id": string
}

export interface Image {
  thumb: string
  original: string
  caption?: string
  large: string
}

export interface File {
  name: string
  url: string
}
