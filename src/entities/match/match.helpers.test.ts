import { transformMatchesFromExternal } from './match.helpers'
import { matches, externalMatches } from './match.constants'

describe('transformMatchesFromExternal', () => {
  it('Should transform external match data to internal match data format', () => {
    expect(transformMatchesFromExternal(externalMatches)).toEqual(matches)
  })
})
