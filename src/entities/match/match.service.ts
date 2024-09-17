import { message } from 'antd'
import { t } from 'i18next'

import { fetchLiveMatches } from 'entities/match/match.api' // TODO: beautify export

import { transformMatchesFromExternal } from './match.helpers'

import { MatchStore } from '.'

export class MatchService {
  constructor(private store: MatchStore) { }

  getLiveMatches = async (): Promise<void> => fetchLiveMatches()
    .then(({ match }) => { this.store.setMatches(transformMatchesFromExternal(match)) })
    .catch((e) => { message.error(t('MatchService.fetchError')) })
}
