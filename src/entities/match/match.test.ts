import { message } from 'antd'
import { t } from 'i18next'

import { fetchLiveMatches } from 'entities/match'

import { transformMatchesFromExternal } from './match.helpers'
import { MatchService } from './match.service'
import { MatchStore } from './match.store'
import { externalMatches, matches } from './match.constants'

jest.mock('entities/match', () => ({
  fetchLiveMatches: jest.fn(),
}))

jest.mock('./match.helpers', () => ({
  transformMatchesFromExternal: jest.fn(),
}))

describe('MatchService', () => {
  let matchService: MatchService
  let mockStore: jest.Mocked<MatchStore>

  beforeEach(() => {
    mockStore = { setMatches: jest.fn() } as unknown as jest.Mocked<MatchStore>
    matchService = new MatchService(mockStore)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should fetch live matches and update the store', async () => {
    (fetchLiveMatches as jest.Mock).mockResolvedValue({ match: externalMatches });
    (transformMatchesFromExternal as jest.Mock).mockReturnValue(matches)

    await matchService.getLiveMatches()

    expect(fetchLiveMatches).toHaveBeenCalled()
    expect(transformMatchesFromExternal).toHaveBeenCalledWith(externalMatches)
    expect(mockStore.setMatches).toHaveBeenCalledWith(matches)
    expect(message.error).not.toHaveBeenCalled()
  })

  test('Should handle errors', async () => {
    (fetchLiveMatches as jest.Mock).mockRejectedValue(new Error('Fetch error'))

    await matchService.getLiveMatches()

    expect(fetchLiveMatches).toHaveBeenCalled()
    expect(message.error).toHaveBeenCalledWith(t('MatchService.fetchError'))
  })
})
