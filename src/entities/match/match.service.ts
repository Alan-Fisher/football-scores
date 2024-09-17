import { message } from 'antd'
import { t } from 'i18next'

import { fetchLiveMatches } from 'entities/match'

import { transformMatchesFromExternal } from './match.helpers'

import { MatchStore } from '.'

export class MatchService {
  constructor(private store: MatchStore) { }

  getLiveMatches = async (): Promise<void> => fetchLiveMatches()
    .then(({ match }) => { this.store.setMatches(transformMatchesFromExternal(match)) }) // TODO: add sort?
    .catch(() => { message.error(t('MatchService.fetchError')) })
}

// TODO: add tests
