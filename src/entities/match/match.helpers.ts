import { IMatch, IMatchExternal } from './match.types'

export const transformMatchesFromExternal = (
  matches: IMatchExternal[],
): IMatch[] => matches?.map(({ scores, ...match }) => ({
  ...match,
  score: scores.score,
}))
