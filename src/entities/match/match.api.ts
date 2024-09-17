import { get } from 'services/api'

import { IMatchExternal } from './match.types'

export const fetchLiveMatches = async (): Promise<{ match: IMatchExternal[] }> => {
  const { data } = await get('/matches/live.json')

  return data.data
}
